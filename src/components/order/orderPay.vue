<script setup>
import { ref } from 'vue';

// ========================================
// 1. 섹션 및 공통 UI 텍스트 데이터
// ========================================
const sectionTitle = ref('결제정보');
const cardBenefitLinkText = ref('카드혜택');
const rememberPaymentLabel = ref('지금 선택한 결제수단을 다음에도 사용');
const linkAllText = ref('전체보기'); // 공통 '전체보기' 링크 텍스트

// ========================================
// 2. 결제수단 탭 데이터 및 로직
// ========================================
const paymentMethods = ref([
  '신용카드',
  '안심가상계좌',
  '간편결제',
  'PAYCO',
  '카카오페이',
  '네이버페이',
]);
const selectedPaymentMethod = ref(paymentMethods.value[0]); // 초기 선택된 결제수단

// 결제수단 버튼 클릭 핸들러
const selectPaymentMethod = (method) => {
  selectedPaymentMethod.value = method;
};

// '다음에도 사용' 체크박스 상태
const rememberPayment = ref(false);

// ========================================
// 3. 입금 은행 (가상계좌) 섹션 데이터
// ========================================
const depositBankTitle = ref('입금은행');
const bankOptions = ref([
  { text: '은행을 선택해 주세요.', value: '', disabled: true }, // Placeholder
  { text: '은행명1', value: 'bank1' },
  { text: '은행명2', value: 'bank2' },
  { text: '은행명3', value: 'bank3' },
  { text: '새마을금고', value: 'saemaul' },
  { text: '신한은행', value: 'shinhan' },
  { text: '우리은행', value: 'woori' },
]);
const selectedBank = ref(''); // 선택된 은행 (초기값 없음)
const depositDeadlinePrefix = ref('입금기한 : ');
const depositDeadlineDate = ref('2022-11-30'); // 실제 날짜 데이터

// ========================================
// 4. 결제 정보 메시지 (하단 공통 안내)
// ========================================
const payInfoMessages = ref([
  '주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.',
  '네이버페이는 네이버ID로 별도 앱 설치 없이 신용카드 또는 은행계좌 정보를 등록하여 네이버페이 비밀번호로 결제할 수 있는 간편결제 서비스입니다.',
  '결제 가능한 신용카드 : 신한, 삼성, 현대, BC, 국민, 하나, 롯데, NH농협, 씨티, 카카오뱅크',
  '결제 가능한 은행 : NH농협, 국민, 신한, 우리, 기업, SC제일, 부산, 경남, 수협, 우체국, 미래에셋대우, 광주, 대구, 전북, 새마을금고, 제주은행, 신협, 하나은행, 케이뱅크, 카카오뱅크, 삼성증권, KDB산업은행, 씨티은행, SBI은행, 유안타증권, 유진투자증권',
  '네이버페이 카드 간편결제는 네이버페이에서 제공하는 카드사 별 무이자, 청구할인 혜택을 받을 수 있습니다.',
]);

// ========================================
// 5. 포인트/예치금 결제 시 안내 메시지
// ========================================
const noDataMessage = ref('포인트/예치금으로만 결제됩니다.');

// ========================================
// 6. 현금영수증 신청 섹션 데이터 및 로직
// ========================================
const cashReceiptLabel = ref('현금영수증 신청');
const cashReceiptTypePersonal = ref('개인소득공제용');
const cashReceiptTypeBusiness = ref('사업자증빙용');
const inputPhoneLabel = ref('휴대폰번호');
const inputPhonePlaceholder = ref('휴대폰번호 -없이 입력');
const inputBusinessNumLabel = ref('사업자등록번호');
const inputBusinessNumPlaceholder = ref('사업자등록번호 -없이 입력');

// 현금영수증 신청 체크박스 상태
const isCashReceiptChecked = ref(false);
// 선택된 현금영수증 유형 ('personal' 또는 'business' 또는 null)
const selectedCashReceiptType = ref(null);
// 입력 필드 데이터 바인딩
const phoneNumber = ref('');
const businessNumber = ref('');

// ========================================
// 7. 결제 동의 약관 섹션 데이터 및 로직
// ========================================
const agreeAllLabel = ref('전체동의');
const agreementItems = ref([
  { id: 'checkAgreeAll1', label: '전자금융거래 이용약관', required: true, link: '' },
  { id: 'checkAgreeAll2', label: '개인정보 수집 및 이용 동의', required: true, link: '' },
  { id: 'checkAgreeAll3', label: '개인정보 제3자 제공 동의', required: true, link: '' },
]);

// 전체 동의 체크박스 상태
const checkAgreeAll0 = ref(false);

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
    agreementStates.value.set(item.id, checkAgreeAll0.value);
  });
};

// 개별 약관 변경 시 '전체동의' 체크박스 상태 업데이트
const updateAllAgreementsCheckbox = () => {
  // 모든 필수 약관이 동의되었는지 확인
  const allRequiredAgreed = agreementItems.value.every(item => agreementStates.value.get(item.id));
  checkAgreeAll0.value = allRequiredAgreed;
};
</script>

<template>
  <section class="order-pay">
    <div class="title">
      <h3>{{ sectionTitle }}</h3>
      <router-link :to="''" class="button-address">
        {{ cardBenefitLinkText }}
      </router-link>
    </div>

    <div class="pay-checkbox">
      <input type="checkbox" id="checkPay0" v-model="rememberPayment">
      <label for="checkPay0">{{ rememberPaymentLabel }}</label>
    </div>

    <div class="pay-tab">
      <button
        type="button"
        v-for="method in paymentMethods"
        :key="method"
        :class="{ 'selected': selectedPaymentMethod === method }"
        @click="selectPaymentMethod(method)"
      >
        {{ method }}
      </button>
    </div>

    <div class="pay-bank">
      <div class="deposit-bank">{{ depositBankTitle }}</div>
      <div class="custom-select-wrapper">
        <select class="custom-select" v-model="selectedBank">
          <option
            v-for="option in bankOptions"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <span class="notice">{{ depositDeadlinePrefix }} {{ depositDeadlineDate }}</span>
    </div>

    <div class="pay-nodata">
      <span>{{ noDataMessage }}</span>
    </div>

    <div class="pay-cash">
      <div class="pay-checkbox">
        <input type="checkbox" id="checkReceipt" v-model="isCashReceiptChecked">
        <label for="checkReceipt">{{ cashReceiptLabel }}</label>
      </div>
      
      <div class="pay-radio-wrap" v-if="isCashReceiptChecked">
        <div class="pay-radio">
          <input type="radio" name="radioReceipt" id="radioPersonal" value="personal" v-model="selectedCashReceiptType">
          <label for="radioPersonal">{{ cashReceiptTypePersonal }}</label>
        </div>
        <div class="pay-radio">
          <input type="radio" name="radioReceipt" id="radioBusiness" value="business" v-model="selectedCashReceiptType">
          <label for="radioBusiness">{{ cashReceiptTypeBusiness }}</label>
        </div>
      </div>
      
      <div class="pay-input" v-if="isCashReceiptChecked && selectedCashReceiptType">
        <template v-if="selectedCashReceiptType === 'personal'">
          <label for="inputPhone">{{ inputPhoneLabel }}</label>
          <input type="number" :placeholder="inputPhonePlaceholder" id="inputPhone" v-model="phoneNumber">
        </template>
        <template v-else-if="selectedCashReceiptType === 'business'">
          <label for="inputBusinessNum">{{ inputBusinessNumLabel }}</label>
          <input type="number" :placeholder="inputBusinessNumPlaceholder" id="inputBusinessNum" v-model="businessNumber">
        </template>
      </div>
    </div>

    <div class="pay-agree">
      <div class="pay-checkbox">
        <input type="checkbox" id="checkAgreeAll0" v-model="checkAgreeAll0" @change="toggleAllAgreements">
        <label for="checkAgreeAll0"><strong>{{ agreeAllLabel }}</strong></label>
      </div>
      <div class="pay-checkbox" v-for="item in agreementItems" :key="item.id">
        <input type="checkbox" :id="item.id" :checked="agreementStates.get(item.id)" @change="() => { agreementStates.set(item.id, !agreementStates.get(item.id)); updateAllAgreementsCheckbox(); }">
        <label :for="item.id">{{ item.label }} <span v-if="item.required">(필수)</span></label>
        <a :href="item.link" class="link-all" v-if="item.link">{{ linkAllText }}</a>
      </div>
    </div>

    <div class="pay-info">
      <ul>
        <li v-for="(message, index) in payInfoMessages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  .order-pay {
    padding: 60px 0 24px;
    border-bottom: 1px solid #eeeeee;
    .title {
      display: flex;
      padding-bottom: 20px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #333333;
      h3 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
      }
      .button-address {
        padding: 8px 12px;
        font-size: 13px;
        line-height: 14px;
        color: #666;
        border: 1px solid #666;
      }
    }
    .pay {
      &-checkbox {
        display: flex;
        flex-wrap: wrap;
        margin-top: 24px;
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
          flex: 1;
          margin-left: 8px;
          font-size: 14px;
          line-height: 20px;
          color: #666666;
          cursor: pointer;
        }
      }
      &-tab {
        margin: 24px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        button {
          width: calc(50% - 5px);
          height: 56px;
          border: 1px solid #EEEEEE;
          font-size: 18px;
          color: #666666;

          &.selected {
            color: #ffffff;
            border-color: #111111;
            background-color: #111111;
            font-weight: 500;
          }
        }
      }
      &-bank {
        margin: 24px 0 0;
        .deposit-bank {
          margin: 0 0 12px;
          font-size: 14px;
          color: #111111;
          font-weight: 500;
        }
        .custom-select-wrapper {
          position: relative;
          width: 100%;
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
            width: 14px;
            height: 9px;
            background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L7 7L2 2' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            pointer-events: none;
          }
        }
        .custom-select {
          display: block;
          width: 100%;
          padding: 16px;
          border: 1px solid #cccccc;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #fff;
          font-size: 14px;
          color: #999999;

          option {
            color: #111111;
          }

          &::-ms-expand {
            display: none;
          }
        }
        .notice {
          position: relative;
          display: block;
          margin-top: 8px;
          padding-left: 12px;
          font-size: 13px;
          line-height: 19px;
          color: #666666;
          &::before {
            content:'';
            position: absolute;
            top: 8px;
            left: 4px;
            width: 2px;
            height: 2px;
            border-radius: 2px;
            background-color: #666666;
          }
        }
      }
      &-nodata {
        padding: 64px 0;
        margin: 24px 0;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        text-align: center;
        span {
          font-size: 16px;
          line-height: 20px;
          color: #111111;
        }
      }
      &-cash {
        margin-top: 24px;
        .pay-checkbox {
          margin-top: 0;
        }
        .pay-radio-wrap {
          display: flex;
          flex-wrap: wrap;
          margin-top: 24px;
          div {
            flex: 1;
            display: flex;
            align-items: center;
          }
        }
        .pay-radio {
          input {
            position: relative;
            width: 20px;
            height: 20px;
            border: 1px solid #CCCCCC;
            border-radius: 18px;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            cursor: pointer;

            &:checked {
              border-color: #111111;
              &::after {
                content:'';
                position: absolute;
                top: 3px;
                left: 3px;
                width: 12px;
                height: 12px;
                border-radius: 10px;
                background-color: #111111;
              }
            }
          }
          label {
            display: inline-block;
            padding-left: 8px;
            font-size: 14px;
            line-height: 20px;
            color: #666666;
            cursor: pointer;
          }
        }
        .pay-input {
          margin-top: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #cccccc;
          label {
            display:block;
            margin: 24px 0 12px;
            font-size:14px;
            font-weight: 500;
            color: #111111;
          }
          input[type="number"] {
            display: block;
            padding: 16px 12px;
            width: 100%;
            border: 1px solid #cccccc;
          }
        }
      }
      &-agree {
        margin: 32px 0 24px;
        .pay-checkbox {
          display: flex;
          align-items: center;
          margin-top: 12px;
          label {
            flex: initial;
            font-size: 14px;
            line-height: 20px;
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
          }
        }
      }

      &-info {
        margin: 24px 0 0;
        ul {
          padding: 24px 20px;
          background-color: #F6F6F6;
          li {
            position: relative;
            padding-left: 12px;
            font-size: 13px;
            line-height: 19px;
            color: #666666;
            + li {
              margin-top: 4px;
            }
            &::after {
              content: '';
              position: absolute;
              top: 8px;
              left: 4px;
              width: 2px;
              height: 2px;
              border-radius: 2px;
              background-color: #666666;
            }
          }
        }
      }
    }
  }
</style>
