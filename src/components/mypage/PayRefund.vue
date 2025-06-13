<script setup>
import { ref, computed } from 'vue';

// 환불 금액 정보 데이터
const refundDetails = ref({
  cancelBefore: {
    productOrderAmount: 30000,
    membershipDiscount: -2500,
    finalShippingCost: 2500,
  },
  cancelAfter: {
    productOrderAmount: 30000,
    membershipDiscount: -2500,
    finalShippingCost: 2500,
  },
  refundAmount: {
    exclusivePoints: 2500,
    integratedPoints: 2500,
    deposit: 2500, // 이미지 상 환불 금액이 예치금으로 표시됨
    creditCard: 2500,
    easyPayment: 2500,
    safeAccount: 2500,
  },
  refundTarget: {
    productOrderAmount: 30000,
    membershipDiscount: -2500,
    finalShippingCost: 2500,
  },
  deductionTarget: {
    claimShippingCost: 2500,
  },
  // 이미지에 있는 카드 정보 및 가상계좌 정보 추가
  creditCardInfo: {
    cardNumber: '1234-****-1234-1234',
    type: '일시불',
    cancelApprovalDate: 'YYYY-MM-DD',
  },
  easyPaymentInfo: {
    bank: '국민은행',
    accountNumber: '**_******_***_**',
    approvalCancelDate: 'YYYY-MM-DD',
  },
  safeAccountInfo: {
    bank: '농협',
    accountNumber: '79004483982261',
    payee: 'G1몰',
    refundDate: 'YYYY-MM-DD', // 이미지에 "환불일시"로 되어 있음
  },
});

// 날짜 정보 (이미지 상단의 YYYY-MM-DD)
const refundDate = ref('YYYY-MM-DD'); // 취소 전/후 날짜
const refundTargetDate = ref('YYYY-MM-DD'); // 환불 대상 날짜

// 숫자를 천 단위 구분 기호로 포맷팅하는 함수
const formatNumberWithCommas = (num) => {
  if (num === undefined || num === null) return '';
  // 음수 부호를 유지하면서 숫자를 포맷팅
  const isNegative = num < 0;
  const absoluteNum = Math.abs(num);
  const formattedNum = absoluteNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return isNegative ? `-${formattedNum}` : formattedNum;
};

// 각 섹션의 총합을 계산하는 computed 속성 추가
const totalCancelBeforeAmount = computed(() => {
  const { productOrderAmount, membershipDiscount, finalShippingCost } = refundDetails.value.cancelBefore;
  return productOrderAmount + membershipDiscount + finalShippingCost;
});

const totalCancelAfterAmount = computed(() => {
  const { productOrderAmount, membershipDiscount, finalShippingCost } = refundDetails.value.cancelAfter;
  return productOrderAmount + membershipDiscount + finalShippingCost;
});

// '환불금액' 섹션의 총합 계산 수정: 이미지 상 환불 금액은 '예치금'과 동일하게 표시됨.
// 만약 '전용포인트'와 '통합포인트'도 합쳐야 한다면 아래 로직을 변경해야 합니다.
const totalRefundAmount = computed(() => {
  // 이미지 상단 '환불금액' 옆의 '3,000원'은 아래 '예치금'과 동일한 값으로 보입니다.
  // 따라서, refundAmount.deposit 값을 반환하도록 수정합니다.
  return refundDetails.value.refundAmount.deposit;
});

const totalRefundTargetAmount = computed(() => {
  const { productOrderAmount, membershipDiscount, finalShippingCost } = refundDetails.value.refundTarget;
  return productOrderAmount + membershipDiscount + finalShippingCost;
});

const totalDeductionTargetAmount = computed(() => {
  const { claimShippingCost } = refundDetails.value.deductionTarget;
  return claimShippingCost;
});
</script>

<template>
  <div class="refund-info-section">
    <h4>환불금액정보</h4>
    <div class="line-divider"></div>

    <div class="refund-group">
      <div class="date-header">{{ refundDate }}</div>
      <div class="data-title">
        <h5 class="sub-title">취소 전</h5>
        <strong>{{ formatNumberWithCommas(totalCancelBeforeAmount) }}원</strong>
      </div>
      <ul class="info-list">
        <li>
          <span>상품주문금액</span>
          <span>{{ formatNumberWithCommas(refundDetails.cancelBefore.productOrderAmount) }}원</span>
        </li>
        <li>
          <span>회원쿠폰할인금액</span>
          <span>{{ formatNumberWithCommas(refundDetails.cancelBefore.membershipDiscount) }}원</span>
        </li>
        <li>
          <span>최종배송비</span>
          <span>+{{ formatNumberWithCommas(refundDetails.cancelBefore.finalShippingCost) }}원</span>
        </li>
      </ul>
    </div>

    <div class="refund-group">
      <div class="data-title">
        <h5 class="sub-title">취소 후</h5>
        <strong>{{ formatNumberWithCommas(totalCancelAfterAmount) }}원</strong>
      </div>
      <ul class="info-list">
        <li>
          <span>상품주문금액</span>
          <span>{{ formatNumberWithCommas(refundDetails.cancelAfter.productOrderAmount) }}원</span>
        </li>
        <li>
          <span>회원쿠폰할인금액</span>
          <span>{{ formatNumberWithCommas(refundDetails.cancelAfter.membershipDiscount) }}원</span>
        </li>
        <li>
          <span>최종배송비</span>
          <span>+{{ formatNumberWithCommas(refundDetails.cancelAfter.finalShippingCost) }}원</span>
        </li>
      </ul>
    </div>

    <div class="refund-group">
      <div class="data-title">
        <h5 class="sub-title">환불금액</h5>
        <strong>{{ formatNumberWithCommas(totalRefundAmount) }}원</strong>
      </div>
      <ul class="info-list">
        <li>
          <span>전용포인트</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.exclusivePoints) }}원</span>
        </li>
        <li>
          <span>통합포인트</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.integratedPoints) }}원</span>
        </li>
        <li>
          <span>예치금</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.deposit) }}원</span>
        </li>
        <li>
          <span>신용카드</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.creditCard) }}원</span>
        </li>
        <li class="sub-item">
          <span>카드사명 ({{ refundDetails.creditCardInfo.cardNumber }}) / {{ refundDetails.creditCardInfo.type }}</span>
          <span class="right-align-text"></span>
        </li>
        <li class="sub-item">
          <span>승인취소일시 : {{ refundDetails.creditCardInfo.cancelApprovalDate }}</span>
          <span class="right-align-text"></span>
        </li>
        <li>
          <span>간편결제</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.easyPayment) }}원</span>
        </li>
        <li class="sub-item">
          <span>{{ refundDetails.easyPaymentInfo.bank }} {{ refundDetails.easyPaymentInfo.accountNumber }}</span>
          <span class="right-align-text"></span>
        </li>
        <li class="sub-item">
          <span>승인취소일시 : {{ refundDetails.easyPaymentInfo.approvalCancelDate }}</span>
          <span class="right-align-text"></span>
        </li>
        <li>
          <span>환불계좌</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.safeAccount) }}원</span>
        </li>
        <li class="sub-item">
          <span>{{ refundDetails.safeAccountInfo.bank }} {{ refundDetails.safeAccountInfo.accountNumber }} (예금주: {{ refundDetails.safeAccountInfo.payee }})</span>
          <span class="right-align-text"></span>
        </li>
        <li class="sub-item">
          <span>환불일시 : {{ refundDetails.safeAccountInfo.refundDate }}</span>
          <span class="right-align-text"></span>
        </li>
      </ul>
    </div>

    <div class="refund-group">
      <div class="date-header">{{ refundTargetDate }}</div>
      <div class="data-title">
        <h5 class="sub-title">환불대상</h5>
        <strong>{{ formatNumberWithCommas(totalRefundTargetAmount) }}원</strong>
      </div>
      <ul class="info-list">
        <li>
          <span>상품주문금액</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundTarget.productOrderAmount) }}원</span>
        </li>
        <li>
          <span>회원쿠폰할인금액</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundTarget.membershipDiscount) }}원</span>
        </li>
        <li>
          <span>최종배송비</span>
          <span>+{{ formatNumberWithCommas(refundDetails.refundTarget.finalShippingCost) }}원</span>
        </li>
      </ul>
    </div>

    <div class="refund-group">
      <div class="data-title">
        <h5 class="sub-title">차감대상</h5>
        <strong>{{ formatNumberWithCommas(totalDeductionTargetAmount) }}원</strong>
      </div>
      <ul class="info-list">
        <li>
          <span>클레임배송비</span>
          <span>{{ formatNumberWithCommas(refundDetails.deductionTarget.claimShippingCost) }}원</span>
        </li>
      </ul>
    </div>
    
    <div class="refund-group final-refund-deposit">
      <ul class="info-list">
        <li>
          <span class="label">환불금액</span> <span class="amount">{{ formatNumberWithCommas(refundDetails.refundAmount.deposit) }}원</span>
        </li>
        <li class="sub-item">
          <span>예치금</span>
          <span>{{ formatNumberWithCommas(refundDetails.refundAmount.deposit) }}원</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.refund-info-section {
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

  .refund-group {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #cccccc;

    &:last-of-type {
      border-bottom: none;
    }

    .date-header {
      font-size: 14px;
      color: #111111;
      margin-bottom: 24px;
    }

    .data-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .sub-title {
        font-size: 14px;
        font-weight: 500;
        color: #111111;
        margin-bottom: 0;
      }

      strong {
        font-size: 14px;
        font-weight: 500;
        color: #111111;
      }
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
        color: #666666;
        padding-left: 18px;
        line-height: 1.4;
        margin-top: 12px;

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &.sub-item {
          font-size: 14px;
          color: #666666;
          padding-left: 36px;
          margin-top: -5px;

          &:not(:first-child) {
            margin-top: 12px;
          }
        }

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

        .right-align-text {
          text-align: right;
        }
      }
    }
  }

  // 최종 환불금 (예치금) 섹션 스타일 조정
  .final-refund-deposit {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #cccccc;

    .info-list {
      li {
        margin-top: 0;
        padding-left: 0;

        .label {
          font-size: 16px;
          font-weight: 500;
          color: #FF2A00;
        }
        .amount {
          font-size: 16px;
          font-weight: 500;
          color: #FF2A00;
        }

        &.sub-item {
          font-size: 14px;
          color: #666666;
          padding-left: 18px;
          margin-top: 12px;
          span {
            color: #666666;
          }
        }
      }
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