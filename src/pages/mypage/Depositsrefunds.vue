<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { format, subMonths, subYears } from 'date-fns';
import { ko } from 'date-fns/locale';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// 날짜 범위 선택을 위한 반응형 변수입니다.
const selectedDateRange = ref(null);

// 기간 조회 버튼의 선택 상태를 관리하는 변수
const selectedPeriod = ref('3개월'); // 초기값 설정

// 검색 유형 (전체, 적립, 사용, 소멸)
const selectedType = ref('전체');

// 검색어 입력
const searchQuery = ref('');

// 보유 예치금
const currentDeposit = ref(10000000); // 10,000,000원

// 환불 계좌 정보 (더미 데이터)
const refundAccount = ref({
  bank: '한국씨티은행', //
  accountNumber: '123-456-7890',
  accountHolder: '한미모',
  isRegistered: true, // 등록 여부
});

// 예치금 내역 더미 데이터
const depositHistory = ref([
  { id: 1, date: '20250615', type: '예치금 적립', amount: 30000, detail: '주문 (주문번호)', classification: '적립' },
  { id: 2, date: '20250610', type: '예치금 사용', amount: -10000, detail: '주문 (주문번호)', classification: '사용' },
  { id: 3, date: '20250601', type: '환불 계좌로 출금', amount: -50000, detail: '출금 (환불계좌)', classification: '출금' },
  { id: 4, date: '20250528', type: '상품 구매 환불', amount: 15000, detail: '환불 (주문번호)', classification: '환불' },
  { id: 5, date: '20250520', type: '예치금 적립', amount: 20000, detail: '이벤트 참여', classification: '적립' },
  { id: 6, date: '20250410', type: '환불 계좌로 출금', amount: -25000, detail: '출금 (환불계좌)', classification: '출금' },
  { id: 7, date: '20250325', type: '상품 구매 환불', amount: 5000, detail: '환불 (주문번호)', classification: '환불' },
  { id: 8, date: '20250301', type: '예치금 사용', amount: -3000, detail: '주문 (주문번호)', classification: '사용' },
  { id: 9, date: '20250210', type: '예치금 적립', amount: 10000, detail: '관리자 수동 적립', classification: '적립' },
  { id: 10, date: '20250101', type: '예치금 사용', amount: -1000, detail: '온라인 결제', classification: '사용' },
]);

// 현재 보여줄 내역의 개수
const displayLimit = ref(5);

// 모든 필터링 조건이 적용된 전체 내역을 저장하는 내부 변수
const filteredDepositHistory = ref([]);

// 실제 템플릿에 표시될 내역 (페이지네이션 적용)
const paginatedDepositHistory = computed(() => {
  return filteredDepositHistory.value.slice(0, displayLimit.value);
});

// 기간 버튼 클릭 시 호출될 함수
const selectPeriod = (period) => {
  selectedPeriod.value = period;
  const endDate = new Date();
  let startDate = new Date();

  switch (period) {
    case '3개월':
      startDate = subMonths(endDate, 3);
      selectedDateRange.value = [startDate, endDate];
      break;
    case '6개월':
      startDate = subMonths(endDate, 6);
      selectedDateRange.value = [startDate, endDate];
      break;
    case '1년':
      startDate = subYears(endDate, 1);
      selectedDateRange.value = [startDate, endDate];
      break;
    case '기간조회':
      selectedDateRange.value = null; // 날짜 범위 초기화 (사용자 직접 선택 모드)
      break;
    default:
      break;
  }
  selectedType.value = '전체';
  searchQuery.value = '';
  displayLimit.value = 5; // 기간 선택 시 페이지네이션 초기화
  filterDepositHistory(); // 필터링 함수 호출
};

// 예치금 내역 필터링 및 조회 함수
const filterDepositHistory = () => {
  let filtered = depositHistory.value;

  // 1. 날짜 범위 필터링
  if (selectedDateRange.value && selectedDateRange.value[0] && selectedDateRange.value[1]) {
    const startDate = selectedDateRange.value[0];
    const endDate = selectedDateRange.value[1];
    filtered = filtered.filter(item => {
      const itemDate = new Date(
        parseInt(item.date.substring(0, 4)),
        parseInt(item.date.substring(4, 6)) - 1,
        parseInt(item.date.substring(6, 8))
      );
      // 날짜 비교 시 시분초를 무시하고 날짜만 비교하도록 조정
      return itemDate >= new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) &&
             itemDate <= new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59);
    });
  }

  // 2. 유형 필터링
  if (selectedType.value !== '전체') {
    filtered = filtered.filter(item => item.classification === selectedType.value);
  }

  // 3. 검색어 필터링
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(item => item.detail.toLowerCase().includes(query) || item.type.toLowerCase().includes(query));
  }

  filteredDepositHistory.value = filtered; // 필터링된 전체 결과를 저장
};

// '더보기' 버튼 클릭 시 호출될 함수
const loadMore = () => {
  displayLimit.value += 5; // 5개씩 증가
};

// selectedDateRange, selectedType, searchQuery 변경 감지하여 필터링 다시 실행
watch([selectedDateRange, selectedType, searchQuery], () => {
  displayLimit.value = 5; // 필터 변경 시 페이지네이션 초기화
  filterDepositHistory();
});

// 컴포넌트 마운트 시 초기 기간 설정 및 필터링 실행
onMounted(() => {
  selectPeriod('3개월'); // 초기 3개월 데이터 표시
});

// 환불 계좌 관련 함수 (실제로는 API 연동 필요)
const registerRefundAccount = () => {
  alert('환불 계좌 등록/변경 팝업 또는 페이지 이동');
  // 실제 로직: 팝업 띄우기, API 호출 등
};

const deleteRefundAccount = () => {
  if (confirm('환불 계좌를 삭제하시겠습니까?')) {
    refundAccount.value.isRegistered = false;
    refundAccount.value.bank = '';
    refundAccount.value.accountNumber = '';
    refundAccount.value.accountHolder = '';
    alert('환불 계좌가 삭제되었습니다.');
    // 실제 로직: API 호출 등
  }
};
</script>

<template>
  <section class="deposit-refund-page">
    <div class="deposit-summary">
      <div class="summary-box">
        <div class="summary-label">보유 예치금</div>
        <button type="button" class="btn-deposit-refund">출금하기</button>
      </div>
      <div class="summary-amount">{{ currentDeposit.toLocaleString() }}<span class="summary-unit">원</span></div>
    </div>

    <div class="refund-account-info">
      <div class="account-box">
        <div class="account-title">환불계좌</div>
        <div class="account-actions">
          <button type="button" class="btn-action" @click="registerRefundAccount">등록/변경</button>
          <button type="button" class="btn-action btn-delete" @click="deleteRefundAccount">삭제</button>
        </div>
      </div>
      <div v-if="refundAccount.isRegistered" class="account-registered">
        <p class="bank-name">{{ refundAccount.bank }} ({{ refundAccount.accountHolder }})</p>
        <p class="account-number">{{ refundAccount.accountNumber }}</p>
      </div>
      <div v-else class="account-unregistered">
        <p>환불계좌를 등록해주세요.</p>
        <button type="button" class="btn-action" @click="registerRefundAccount">등록/변경</button>
      </div>
    </div>

    <div class="deposit-filter">
      <div class="deposit-filter-period">
        <button type="button" :class="{ selected: selectedPeriod === '3개월' }" @click="selectPeriod('3개월')">3개월</button>
        <button type="button" :class="{ selected: selectedPeriod === '6개월' }" @click="selectPeriod('6개월')">6개월</button>
        <button type="button" :class="{ selected: selectedPeriod === '1년' }" @click="selectPeriod('1년')">1년</button>
        <button type="button" :class="{ selected: selectedPeriod === '기간조회' }" @click="selectPeriod('기간조회')">기간조회</button>
      </div>
      <div class="deposit-filter-calendar">
        <Datepicker
          v-model="selectedDateRange"
          range
          placeholder="시작일 ~ 종료일"
          :enable-time-picker="false"
          :format="(date) => format(date[0], 'yy년 MM월 dd일', { locale: ko }) + ' ~ ' + format(date[1], 'yy년 MM월 dd일', { locale: ko })"
          :show-icon="true"
          :locale="ko"
          :disabled="selectedPeriod !== '기간조회'"
          :max-date="new Date()"
        />
      </div>
      <div class="deposit-filter-keyword">
        <select v-model="selectedType">
          <option value="전체">전체</option>
          <option value="적립">적립</option>
          <option value="사용">사용</option>
          <option value="환불">환불</option>
          <option value="출금">출금</option>
        </select>
        <input type="text" placeholder="검색어를 입력해 주세요" v-model="searchQuery" @keyup.enter="filterDepositHistory">
        <button type="button" @click="filterDepositHistory">조회</button>
      </div>
    </div>

    <div class="deposit-list">
      <div v-if="paginatedDepositHistory.length > 0">
        <div v-for="item in paginatedDepositHistory" :key="item.id" class="deposit-item">
          <div class="item-header">
            <div class="item-info">
              <p class="detail">{{ item.detail }}</p>
              <p class="date"><span>발생일</span> {{ format(new Date(parseInt(item.date.substring(0, 4)), parseInt(item.date.substring(4, 6)) - 1, parseInt(item.date.substring(6, 8))), 'yyyy-MM-dd') }}</p>
            </div>
            <div class="item-point">
              <p :class="['amount', { 'positive': item.amount > 0, 'negative': item.amount < 0 }]">
                {{ item.amount > 0 ? '+' : '' }}{{ item.amount.toLocaleString() }}
              </p>
              <p :class="['type', { 'positive-type': item.classification === '적립' || item.classification === '환불', 'negative-type': item.classification === '사용' || item.classification === '출금' }]">
                {{ item.classification }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="no-history-message">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="no-history-icon">
          <path d="M45.5859 1L55 10.4141V63H9V1H45.5859Z" stroke="#333333" stroke-width="2"/>
          <rect x="30" y="45" width="4" height="4" rx="2" fill="#333333"/>
          <path d="M30.0606 18.9991C30.0274 17.905 30.9054 17 32 17C33.0946 17 33.9726 17.905 33.9394 18.9991L33.3737 37.6673C33.3512 38.4098 32.7428 39 32 39C31.2572 39 30.6488 38.4098 30.6263 37.6673L30.0606 18.9991Z" fill="#333333"/>
        </svg>
        <p>기간 내 예치금 내역이 없습니다.</p>
      </div>
    </div>

    <div class="deposit-refund-page-button">
      <button
        type="button"
        class="btn-more"
        v-if="filteredDepositHistory.length > displayLimit"
        @click="loadMore"
      >
        더보기
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.deposit-refund-page {
  padding: 32px 0 60px;
  max-width: 768px; /* 모바일 뷰포트 고려 */
  margin: 0 auto;
  font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;

  .deposit-summary {
    padding: 24px 20px;
    border: 1px solid #111;
    margin: 0 20px 20px;
    .summary-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .summary-label {
      font-size: 12px;
      color: #111;
    }
    .summary-amount {
      margin-top: 12px;
      font-size: 18px;
      font-weight: 500;
      color: #111;
      white-space: nowrap;
    }
    .summary-unit {
      font-size: 14px;
      font-weight: 400;
      color: #111;
      margin-left: 2px;
    }
    .btn-deposit-refund {
      padding: 8px 12px;
      color: #666;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid #666;;
      background-color: #fff;
      cursor: pointer;
    }
  }

  .refund-account-info {
    padding: 24px 20px;
    border: 1px solid #111;
    margin: 0 20px 24px;
    .account-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .account-title {
      font-size: 12px;
      color: #111;
    }

    .account-registered {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 12px;

      p {
        font-size: 14px;
        color: #111;
        &.bank-name {
          font-weight: 500;
          flex-basis: 100%; /* 은행명은 한 줄 차지 */
        }
        &.account-number {
          color: #666;
          flex-grow: 1; /* 계좌번호가 남은 공간 채우기 */
        }
      }
    }
    .account-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap; /* 버튼도 줄바꿈 가능 */
      
      .btn-action {
        padding: 8px 12px;
        font-size: 13px;
        border: 1px solid #666;
        background-color: #fff;
        color: #666;
        cursor: pointer;
        &.btn-delete {
          border-color: #666;
          color: #666;
        }
      }
    }

    .account-unregistered {
      display: flex;
      flex-wrap: wrap; /* 작은 화면에서 줄바꿈 */
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 14px;
        color: #666;
        flex-grow: 1;
        margin-bottom: 10px; /* 모바일에서 p 태그 아래 여백 */
      }
      .btn-action {
        height: 32px;
        padding: 0 12px;
        font-size: 13px;
        border: 1px solid #111;
        background-color: #111;
        color: #fff;
        cursor: pointer;
        min-width: 80px; /* 버튼 최소 너비 */
      }
    }
  }

  .deposit-filter {
    padding: 32px 20px;
    background-color: #F6F6F6;
    margin-bottom: 24px;

    &-period {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;

      button {
        flex: 1; /* 모든 버튼이 동일한 비율로 공간 차지 */
        min-width: 70px; /* 버튼 최소 너비 설정 (너무 작아지지 않게) */
        height: 48px;
        font-size: 14px;
        color: #666666;
        border: 1px solid #EEEEEE;
        background-color: #ffffff;
        cursor: pointer;
        transition: all 0.2s ease;

        &.selected {
          color: #111111;
          border-color: #111111;
          font-weight: 500;
        }
        &:hover:not(.selected) {
          background-color: #f5f5f5;
        }
      }
    }

    &-calendar {
      margin-bottom: 12px;

      .dp__input {
        padding: 12px 38px 12px 38px;
        height: 48px;
        font-size: 14px;
        border-color: #cccccc;
        border-radius: 0;
        background-color: #ffffff;
        &:focus {
          border-color: #111111;
        }
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
      .dp__menu {
        border: 1px solid #ddd;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .dp__cell_offset {
        color: #bbb;
      }
      .dp__range_start, .dp__range_end, .dp__active_date {
        background-color: #111111 !important;
        color: #fff !important;
      }
      .dp__range_between {
        background-color: #f0f0f0 !important;
      }
    }

    &-keyword {
      display: flex;
      flex-wrap: wrap; /* 요소들이 줄바꿈되도록 설정 */
      gap: 8px;

      select {
        flex-shrink: 0;
        width: 74px;
        height: 48px;
        padding: 15px 12px;
        font-size: 14px;
        border: 1px solid #cccccc;
        border-radius: 0;
        background-color: #ffffff;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 16px;
        cursor: pointer;
        &:focus {
          border-color: #111111;
          outline: none;
        }
      }
      input[type='text'] {
        flex-shrink: 1;
        width: calc(100% - 150px);
        padding: 15px;
        font-size: 14px;
        border: 1px solid #cccccc;
        border-radius: 0;
        background-color: #ffffff;
        &:focus {
          border-color: #111111;
          outline: none;
        }
      }
      button {
        flex-shrink: 0; /* 축소되지 않도록 */
        width: 60px; /* 고정 너비 */
        height: 48px;
        padding: 15px;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        background-color: #111111;
        border: none;
        border-radius: 0;
        cursor: pointer;
        transition: background-color 0.2s ease;
        &:hover {
          background-color: #333333;
        }
      }

      // 모바일에서 select와 input이 한 줄에, button이 다음 줄에 오도록 조정
      // @media (max-width: 480px) { /* 더 작은 모바일 화면을 위한 미디어 쿼리 */
      //   select {
      //     width: 100%; /* select를 한 줄에 하나씩 */
      //     margin-bottom: 8px; /* 아래 여백 추가 */
      //   }
      //   input[type='text'] {
      //     width: calc(100% - 68px); /* input과 button이 함께 있을 때의 너비 조정 */
      //     flex-grow: 0; /* 더 이상 남은 공간을 모두 차지하지 않도록 */
      //   }
      //   button {
      //     width: 60px;
      //   }
      //   // 버튼을 input 옆에 배치 (한 줄로)
      //   input[type='text'], button {
      //     flex-shrink: 0;
      //   }
      // }
    }
  }

  .deposit-list {
    border-top: 1px solid #111;
    margin: 0 20px;

    .deposit-item {
      padding: 24px 0;
      border-bottom: 1px solid #ccc;
      .item-header {
        display: flex;
        align-items: flex-start; /* 상단 정렬 */
        justify-content: space-between; /* 양 끝 정렬 */
        gap: 12px;

        .detail {
          font-size: 14px;
          color: #111;
        }
        .date {
          display: flex;
          gap: 8px;
          margin-top: 12px;
          font-size: 14px;
          color: #666666;
          span {
            color: #111;
          }
        }
        .item-point {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }
        .amount {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap; /* 금액 줄바꿈 방지 */
          &.positive {
            color: #FF2A00;
          }
          &.negative {
            color: #999999;
          }
        }
        .type {
          font-size: 14px;
          white-space: nowrap; /* 유형 줄바꿈 방지 */
          &.positive-type {
            color: #FF2A00;
          }
          &.negative-type {
            color: #999;
          }
        }
      }
    }

    .no-history-message {
      text-align: center;
      padding: 60px 0;
      color: #111111;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      .no-history-icon {
        width: 64px;
        height: 64px;
        margin-bottom: 24px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .deposit-refund-page-button {
    margin: 40px 20px 0;
    .btn-more {
      width: 100%;
      height: 48px;
      text-align: center;
      padding: 12px;
      font-size: 14px;
      font-weight: 500;
      color: #111111;
      background-color: #ffffff;
      border: 1px solid #333333;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
  }
}
</style>