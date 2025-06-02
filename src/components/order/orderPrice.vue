<script setup>
import { ref } from 'vue';

// ========================================
// 1. 결제금액 정보 섹션 데이터
// ========================================
const priceInfoTitle = ref('결제금액정보');

// 각 금액 항목 데이터
const priceDetails = ref([
  { label: '상품주문금액', price: '30,000원' },
  { label: '회원쿠폰할인금액', price: '-3,000원' },
  { label: '배송비', price: '+2,500원' },
  { label: '무료배송쿠폰 면제금액', price: '-3,000원' },
  { label: '적립금 사용금액', price: '-3,000원' },
  { label: '예치금 사용금액', price: '-3,000원' },
]);

// 최종 결제 금액
const finalPayment = ref({
  label: '최종 결제금액',
  price: '29,000,500원',
});

// 적립 예정 적립금
const expectedSavings = ref({
  label: '적립예정 적립금',
  price: '3,000원',
});

// ========================================
// 2. 결제 동의 약관 섹션 데이터 및 로직
// ========================================
const agreeAllLabel = ref('전체동의');
const agreementItems = ref([
  { id: 'checkPriceAll1', label: '주문할 상품의 내용,가격,배송정책 등 구매조건을 확인하였으며, 구매진행에 동의합니다. <br>[전자상거래법 제 8조 2항]', required: true, link: '' },
  { id: 'checkPriceAll2', label: 'G1 이용약관에 동의합니다.', required: true, link: 'javascript:;' },
]);
const linkAllText = ref('전체보기'); // '전체보기' 링크 텍스트

// 전체 동의 체크박스 상태
const checkPriceAll0 = ref(false);

// 개별 약관 동의 상태를 Map으로 관리 (동적 ID에 대응)
const agreementStates = ref(new Map());

// 초기화: 모든 필수 약관을 false로 설정
// `agreementItems`가 정의된 후에 실행되어야 합니다.
agreementItems.value.forEach(item => {
  agreementStates.value.set(item.id, false);
});

// '전체동의' 체크박스 변경 시 개별 약관 상태 업데이트
const toggleAllAgreements = () => {
  agreementItems.value.forEach(item => {
    agreementStates.value.set(item.id, checkPriceAll0.value);
  });
};

// 개별 약관 변경 시 '전체동의' 체크박스 상태 업데이트
const updateAllAgreementsCheckbox = () => {
  // 모든 필수 약관이 동의되었는지 확인
  const allRequiredAgreed = agreementItems.value.every(item => agreementStates.value.get(item.id));
  checkPriceAll0.value = allRequiredAgreed;
};

// ========================================
// 3. 주문하기 버튼 데이터
// ========================================
const orderButtonText = ref('주문하기');

// ========================================
// 4. 가격 포맷팅 유틸리티 (선택 사항: 필요시 사용)
// 현재 가격 데이터가 이미 포맷되어 있으므로 직접 사용하지는 않지만,
// 숫자 데이터를 포맷해야 할 경우를 대비하여 예시로 남겨둡니다.
// ========================================
const formatPrice = (value) => {
  if (typeof value !== 'number') {
    // 이미 포맷된 문자열이거나 숫자가 아닌 경우 그대로 반환
    return value;
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
};
</script>

<template>
  <section class="order-price">
    <div class="price-info">
      <div class="price-info-title">{{ priceInfoTitle }}</div>
      <ul class="price-info-list">
        <li v-for="(detail, index) in priceDetails" :key="index">
          <span class="value">{{ detail.label }}</span>
          <span class="price">{{ detail.price }}</span>
        </li>
      </ul>
    </div>
    <div class="price-total">
      <span class="value">{{ finalPayment.label }}</span>
      <span class="price">{{ finalPayment.price }}</span>
    </div>
    <div class="price-savings">
      <span class="value">{{ expectedSavings.label }}</span>
      <span class="price">{{ expectedSavings.price }}</span>
    </div>
    
    <div class="pay-agree">
      <div class="pay-checkbox">
        <input type="checkbox" id="checkPriceAll0" v-model="checkPriceAll0" @change="toggleAllAgreements">
        <label for="checkPriceAll0"><strong>{{ agreeAllLabel }}</strong></label>
      </div>
      <div class="pay-checkbox" v-for="item in agreementItems" :key="item.id">
        <input type="checkbox" :id="item.id" :checked="agreementStates.get(item.id)" @change="() => { agreementStates.set(item.id, !agreementStates.get(item.id)); updateAllAgreementsCheckbox(); }">
        <label :for="item.id"><span v-html="item.label"></span> <span v-if="item.required">(필수)</span></label>
        <a :href="item.link" class="link-all" v-if="item.link">{{ linkAllText }}</a>
      </div>
    </div>
    <div class="pay-button">
      <button type="button">{{ orderButtonText }}</button>
    </div>
  </section>
</template>


<style lang="scss"> 
  .order-price {
    margin-top: 60px;
    .price {
      &-info {
        &-title {
          font-size: 18px;
          line-height: 24px;
          color: #111111;
          font-weight: 500;
        }
        &-list {
          padding: 24px 0;
          border-bottom: 1px solid #111111;
          li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            + li {
              margin: 12px 0 0;
            }
            span {
              font-size: 14px;
              line-height: 20px;
              &.price {
                font-weight: 500;
              }
            }
          }
        }
      }
      &-total {
        padding-top: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .value {
          font-size: 18px;
          font-weight: 500;
        }
        .price {
          font-size: 24px;
          font-weight: 700;
          line-height: 30px;
        }
      }
      &-savings {
        padding-top: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 14px;
        }
        .price {
          font-weight: 500;
        }
      }
    }
    .pay {
      &-agree {
        margin: 40px 0;
        .pay-checkbox {
          display: flex;
          margin-top: 12px;
          input[type='checkbox'] {
            width: 20px;
            height: 20px;
            border: 1px solid #CCCCCC;
            &:checked {
              border-color: #111;
              background-color : #111;
              background-repeat: no-repeat;
              background-position: center center;
              background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L11.5 1.5L4.51 8.5L0 4L1.5 2.5L4.51 5.5L10 0Z' fill='white'/%3E%3C/svg%3E%0A");
            }
          }
          label {
            flex: 1; // flex: 1로 설정하여 체크박스 옆 공간을 채우도록 함
            margin-left: 8px;
            font-size: 14px;
            line-height: 20px;
            color: #666666;
            cursor: pointer;
            strong {
              color: #111111;
              font-size: 16px;
              font-weight: 400;
            }
          }
          .link-all {
            margin-left: 12px;
            font-size: 13px;
            color: #999999;
            text-decoration: underline;
            flex-shrink: 0; // 링크가 줄어들지 않도록
          }
        }
      }
      &-button {
        margin: 24px 0 0;
        button {
          width: 100%;
          height: 48px;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          background-color: #111111;
        }
      }
    }
  }
</style>
