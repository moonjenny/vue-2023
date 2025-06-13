<script setup>
// 결제상세
import { ref, computed } from 'vue';

const paymentDetails = ref({
  productOrderAmount: 30000,
  membershipDiscount: -3000,
  itemDiscountCoupon: 2500,
  orderDiscountCoupon: 2500,
  finalShippingCost: 3000,
  
  earnedPoints: {
    exclusive: 5000,
    membershipTier: 2500,
    itemAdditional: 2500,
    integrated: 5000,
    integratedMembershipTier: 2500,
    integratedItemAdditional: 2500,
  },
  
  usedPaymentMethods: {
    exclusivePointsUsed: 3000,
    integratedPointsUsed: 3000,
    depositUsed: 3000,
    creditCard: {
      cardNumber: '1234-****-1234-1234',
      type: '일시불',
      approvalDate: 'YYYY-MM-DD',
    },
    easyPayment: {
      amount: 3000,
      bank: '국민은행',
      accountNumber: '**_******_***_**',
    },
    safeAccount: {
      amount: 3000,
      bank: '농협',
      accountNumber: '79004483982261',
      payee: 'G1몰',
      depositDeadline: 'YYYY-MM-DD',
    }
  }
});

const finalPaymentAmount = computed(() => {
  const { productOrderAmount, membershipDiscount, itemDiscountCoupon, orderDiscountCoupon, finalShippingCost } = paymentDetails.value;
  return productOrderAmount + membershipDiscount - itemDiscountCoupon - orderDiscountCoupon + finalShippingCost;
});

const formatNumberWithCommas = (num) => {
  if (num === undefined || num === null) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 각 섹션의 서브 아이템 토글 상태를 관리
// 초기값을 true로 변경하여 기본적으로 열린 상태로 표시
const isMembershipDiscountExpanded = ref(true); 

// 적립금 부분을 위해 ref를 두 개로 분리합니다.
// 초기값을 true로 변경하여 기본적으로 열린 상태로 표시
const isExclusivePointsExpanded = ref(true); // 전용포인트 토글 상태
const isIntegratedPointsExpanded = ref(true); // 통합포인트 토글 상태

// 토글 버튼 클릭 핸들러
const toggleSubItems = (section) => {
  if (section === 'membershipDiscount') {
    isMembershipDiscountExpanded.value = !isMembershipDiscountExpanded.value;
  } else if (section === 'exclusivePoints') { // 전용포인트 토글 로직
    isExclusivePointsExpanded.value = !isExclusivePointsExpanded.value;
  } else if (section === 'integratedPoints') { // 통합포인트 토글 로직
    isIntegratedPointsExpanded.value = !isIntegratedPointsExpanded.value;
  }
};
</script>

<template>
  <div class="payment-details-section">
    <h4>결제상세</h4>
    <div class="line-divider"></div>

    <div class="payment-info-group">
      <h5 class="sub-title">결제금액정보</h5>
      <ul class="info-list">
        <li>
          <span>상품주문금액</span>
          <span>{{ formatNumberWithCommas(paymentDetails.productOrderAmount) }}원</span>
        </li>
        <li>
          <span>회원쿠폰할인금액 
            <button class="detail-toggle-btn" 
                    :class="{ 'is-active': isMembershipDiscountExpanded }" 
                    @click="toggleSubItems('membershipDiscount')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.5" fill="white" stroke="#111111"/>
              <path d="M14 9L10 13L6 9" stroke="#111111" stroke-linecap="square"/>
              </svg>
            </button>
          </span>
          <span>{{ formatNumberWithCommas(paymentDetails.membershipDiscount) }}원</span>
        </li>
        <li class="sub-item" v-show="isMembershipDiscountExpanded">
          <span>상품할인쿠폰</span>
          <span>-{{ formatNumberWithCommas(paymentDetails.itemDiscountCoupon) }}원</span>
        </li>
        <li class="sub-item" v-show="isMembershipDiscountExpanded">
          <span>주문할인쿠폰</span>
          <span>-{{ formatNumberWithCommas(paymentDetails.orderDiscountCoupon) }}원</span>
        </li>
        <li>
          <span>최종배송비</span>
          <span>{{ formatNumberWithCommas(paymentDetails.finalShippingCost) }}원</span>
        </li>
      </ul>
    </div>

    <div class="final-payment-amount">
      <span class="label">최종 결제 금액</span>
      <span class="amount">{{ formatNumberWithCommas(finalPaymentAmount) }}원</span>
    </div>

    <div class="payment-info-group">
      <h5 class="sub-title">적립금</h5>
      <ul class="info-list">
        <li>
          <span>전용포인트
            <button class="detail-toggle-btn" 
                    :class="{ 'is-active': isExclusivePointsExpanded }" 
                    @click="toggleSubItems('exclusivePoints')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.5" fill="white" stroke="#111111"/>
              <path d="M14 9L10 13L6 9" stroke="#111111" stroke-linecap="square"/>
              </svg>
            </button>
          </span>
          <span>{{ formatNumberWithCommas(paymentDetails.earnedPoints.exclusive) }}원</span>
        </li>
        <li class="sub-item" v-show="isExclusivePointsExpanded">
          <span>회원등급별 적립</span>
          <span>{{ formatNumberWithCommas(paymentDetails.earnedPoints.membershipTier) }}원</span>
        </li>
        <li class="sub-item" v-show="isExclusivePointsExpanded">
          <span>상품별 추가적립</span>
          <span>{{ formatNumberWithCommas(paymentDetails.earnedPoints.itemAdditional) }}원</span>
        </li>
        <li>
          <span>통합포인트
            <button class="detail-toggle-btn" 
                    :class="{ 'is-active': isIntegratedPointsExpanded }" 
                    @click="toggleSubItems('integratedPoints')">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.5" fill="white" stroke="#111111"/>
              <path d="M14 9L10 13L6 9" stroke="#111111" stroke-linecap="square"/>
              </svg>
            </button>
          </span>
          <span>{{ formatNumberWithCommas(paymentDetails.earnedPoints.integrated) }}원</span>
        </li>
        <li class="sub-item" v-show="isIntegratedPointsExpanded">
          <span>회원등급별 적립</span>
          <span>{{ formatNumberWithCommas(paymentDetails.earnedPoints.integratedMembershipTier) }}원</span>
        </li>
        <li class="sub-item" v-show="isIntegratedPointsExpanded">
          <span>상품별 추가적립</span>
          <span>{{ formatNumberWithCommas(paymentDetails.earnedPoints.integratedItemAdditional) }}원</span>
        </li>
      </ul>
    </div>

    <div class="payment-info-group">
      <h5 class="sub-title">결제수단정보</h5>
      <ul class="info-list">
        <li>
          <span>전용포인트 사용금액</span>
          <span>{{ formatNumberWithCommas(paymentDetails.usedPaymentMethods.exclusivePointsUsed) }}원</span>
        </li>
        <li>
          <span>통합포인트 사용금액</span>
          <span>{{ formatNumberWithCommas(paymentDetails.usedPaymentMethods.integratedPointsUsed) }}원</span>
        </li>
        <li>
          <span>예치금 사용금액</span>
          <span>{{ formatNumberWithCommas(paymentDetails.usedPaymentMethods.depositUsed) }}원</span>
        </li>
        <li>
          <span>신용카드</span>
          <span class="right-align-text"></span>
        </li>
        <li class="sub-item">
          <span>카드사명 ({{ paymentDetails.usedPaymentMethods.creditCard.cardNumber }}) / {{ paymentDetails.usedPaymentMethods.creditCard.type }}</span>
          <span class="right-align-text"></span>
        </li>
        <li class="sub-item">
          <span>승인일시 : {{ paymentDetails.usedPaymentMethods.creditCard.approvalDate }}</span>
          <span class="right-align-text"></span>
        </li>
        <li>
          <span>간편결제</span>
          <span>{{ formatNumberWithCommas(paymentDetails.usedPaymentMethods.easyPayment.amount) }}원</span>
        </li>
        <li class="sub-item">
          <span>{{ paymentDetails.usedPaymentMethods.easyPayment.bank }} {{ paymentDetails.usedPaymentMethods.easyPayment.accountNumber }}</span>
          <span class="right-align-text"></span>
        </li>
        <li>
          <span>안심가상계좌</span>
          <span>{{ formatNumberWithCommas(paymentDetails.usedPaymentMethods.safeAccount.amount) }}원</span>
        </li>
        <li class="sub-item">
          <span>{{ paymentDetails.usedPaymentMethods.safeAccount.bank }} {{ paymentDetails.usedPaymentMethods.safeAccount.accountNumber }} (예금주: {{ paymentDetails.usedPaymentMethods.safeAccount.payee }})</span>
          <span class="right-align-text"></span>
        </li>
        <li class="sub-item">
          <span>입금기한: {{ paymentDetails.usedPaymentMethods.safeAccount.depositDeadline }}</span>
          <span class="right-align-text"></span>
        </li>
      </ul>
    </div>

    <div class="payment-buttons">
      <button type="button" class="btn-text-outline btn-dark-filled">입금은행 변경</button>
      <button type="button" class="btn-text-outline btn-dark-filled">결제수단 변경</button>
      <button type="button" class="btn-text-outline">현금영수증 조회</button>
      <button type="button" class="btn-text-outline">신용카드 전표</button>
    </div>
  </div>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.payment-details-section {
  margin: 60px 20px;
  h4 {
    font-size: 18px;
    font-weight: 500;
    color: #111111;
    padding-bottom: 24px;
  }

  .line-divider {
    height: 1px;
    background-color: #333333;
    margin-bottom: 24px;
  }

  .payment-info-group {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #cccccc;
    .sub-title {
      font-size: 14px;
      font-weight: 500;
      color: #111111;
      margin-bottom: 24px;
    }
    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #111111;
        line-height: 1.4;
        margin-top: 12px;

        &:last-child {
          margin-bottom: 0;
        }

        &.sub-item {
          font-size: 14px;
          color: #666666;
          padding-left: 18px;
          margin-top: -5px;
          margin-top: 12px;
        }

        .detail-toggle-btn {
          background: none;
          border: none;
          padding: 0;
          margin-left: 4px;
          cursor: pointer;
          vertical-align: middle;

          svg { 
            width: 20px;
            height: 20px;
            transition: transform 0.2s ease-in-out;
          }
        }

        // 토글 버튼이 활성화(열린) 상태일 때 화살표 회전
        .detail-toggle-btn.is-active svg {
            transform: rotate(180deg);
        }

        .right-align-text {
          text-align: right;
        }
      }
      .sub-item[style*="display: none;"] {
        display: none !important;
      }
      .sub-item[style*="display: block;"] {
        display: flex !important;
      }
    }
  }

  .final-payment-amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 24px;

    .label {
      font-size: 16px;
      font-weight: 500;
      color: #111111;
    }
    .amount {
      font-size: 24px;
      font-weight: 700;
      color: #111111;
    }
  }

  .payment-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #eeeeee;

    .btn-text-outline {
      padding: 8px 16px;
      line-height: 14px;
      font-size: 13px;
      font-weight: 500;
      color: #666666;
      border: 1px solid #666666;
      background-color: #ffffff;
      cursor: pointer;
      flex-grow: 1;
      min-width: calc(50% - 4px);
      box-sizing: border-box;

      @media (min-width: 768px) {
        min-width: unset;
        flex-grow: 0;
        width: auto;
      }
    }

    .btn-dark-filled {
      background-color: #111111;
      color: #ffffff;
      border-color: #111111;
    }
  }
}
</style>