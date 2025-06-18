<script setup>
// 적립금
import { ref, watch, onMounted, computed } from 'vue'; // computed 임포트 추가
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

// 더미 적립금 내역 데이터 (실제 데이터는 API 호출로 받아와야 합니다)
// 현재 날짜(2025년 6월 18일)를 기준으로 날짜 데이터 조정
const mileageHistory = ref([
  { id: 1, date: '20250615', description: '상품 구매 적립', amount: 3000, type: '적립', detail: '주문 (주문번호)' },
  { id: 2, date: '20250610', description: '자동혜택 (자동혜택지급명)', amount: -3000, type: '적립취소', detail: '자동혜택 (자동혜택지급명)' },
  { id: 3, date: '20250605', description: '수동혜택 (수동혜택지급명)', amount: -10000, type: '사용', detail: '수동혜택 (수동혜택지급명)' },
  { id: 4, date: '20250528', description: '쿠폰 (쿠폰명)', amount: 10000, type: '사용취소', detail: '쿠폰 (쿠폰명)' },
  { id: 5, date: '20250520', description: '유효기간 종료 소멸', amount: -10000, type: '소멸', detail: '유효기간 종료 소멸' },
  { id: 6, date: '20250515', description: '차감사유', amount: -10000, type: '차감', detail: '차감사유' },
  { id: 7, date: '20250430', description: '상품 구매 적립', amount: 1500, type: '적립', detail: '상품 구매 적립' },
  { id: 8, date: '20250425', description: '이벤트 참여 적립', amount: 2000, type: '적립', detail: '이벤트 참여 적립' },
  { id: 9, date: '20250320', description: '기타 적립', amount: 500, type: '적립', detail: '관리자 수동 적립' },
  { id: 10, date: '20250310', description: '적립금 사용', amount: -2000, type: '사용', detail: '온라인 결제' },
  { id: 11, date: '20250228', description: '유효기간 종료 소멸', amount: -5000, type: '소멸', detail: '정책에 따른 소멸' },
  { id: 12, date: '20250215', description: '환불 적립금', amount: 1000, type: '적립', detail: '환불 (주문번호)' },
]);

// 현재 보여줄 적립금 내역의 개수
const displayLimit = ref(5);

// 모든 필터링 조건이 적용된 전체 적립금 내역을 저장하는 내부 변수
const filteredMileageHistory = ref([]);

// 실제 템플릿에 표시될 적립금 내역 (페이지네이션 적용)
const paginatedMileageHistory = computed(() => {
  return filteredMileageHistory.value.slice(0, displayLimit.value);
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
  filterMileage(); // 필터링 함수 호출
};

// 적립금 내역 필터링 및 조회 함수
const filterMileage = () => {
  let filtered = mileageHistory.value;

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
    filtered = filtered.filter(item => item.type === selectedType.value);
  }

  // 3. 검색어 필터링
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(item => item.description.toLowerCase().includes(query) || item.detail.toLowerCase().includes(query));
  }

  filteredMileageHistory.value = filtered; // 필터링된 전체 결과를 저장
};

// '더보기' 버튼 클릭 시 호출될 함수
const loadMore = () => {
  displayLimit.value += 5; // 5개씩 증가
};

// selectedDateRange, selectedType, searchQuery 변경 감지하여 필터링 다시 실행
watch([selectedDateRange, selectedType, searchQuery], () => {
  displayLimit.value = 5; // 필터 변경 시 페이지네이션 초기화
  filterMileage();
});

// 컴포넌트 마운트 시 초기 기간 설정 및 필터링 실행
onMounted(() => {
  selectPeriod('3개월');
});

</script>

<template>
  <section class="mileage-page">
    <div class="mileage-summary">
      <div class="summary-item">
        <p class="label">보유 적립금</p>
        <p class="count">100,000,000 <span class="unit">원</span></p>
      </div>
      <div class="summary-item">
        <p class="label">당월 소멸예정 적립금</p>
        <p class="count">500 <span class="unit">원</span></p>
      </div>
    </div>
    <div class="mileage-filter">
      <div class="mileage-filter-period">
        <button type="button" :class="{ selected: selectedPeriod === '3개월' }" @click="selectPeriod('3개월')">3개월</button>
        <button type="button" :class="{ selected: selectedPeriod === '6개월' }" @click="selectPeriod('6개월')">6개월</button>
        <button type="button" :class="{ selected: selectedPeriod === '1년' }" @click="selectPeriod('1년')">1년</button>
        <button type="button" :class="{ selected: selectedPeriod === '기간조회' }" @click="selectPeriod('기간조회')">기간조회</button>
      </div>
      <div class="mileage-filter-calendar">
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
      <div class="mileage-filter-keyword">
        <select v-model="selectedType">
          <option value="전체">전체</option>
          <option value="적립">적립</option>
          <option value="사용">사용</option>
          <option value="소멸">소멸</option>
          <option value="적립취소">적립취소</option>
          <option value="사용취소">사용취소</option>
          <option value="차감">차감</option>
        </select>
        <input type="text" placeholder="검색어를 입력해 주세요" v-model="searchQuery" @keyup.enter="filterMileage">
        <button type="button" @click="filterMileage">조회</button>
      </div>
    </div>

    <div class="mileage-list">
      <div v-if="paginatedMileageHistory.length > 0">
        <div v-for="item in paginatedMileageHistory" :key="item.id" class="mileage-item">
          <div class="item-header">
            <p class="detail">
              {{ item.detail }}
              <span class="date"><span>발생일</span> {{ format(new Date(parseInt(item.date.substring(0, 4)), parseInt(item.date.substring(4, 6)) - 1, parseInt(item.date.substring(6, 8))), 'yyyy-MM-dd') }}</span>
            </p>
            <p :class="['amount', { 'positive': item.amount > 0, 'negative': item.amount < 0 }]">
              {{ item.amount > 0 ? '+' : '' }}{{ item.amount.toLocaleString() }}
              <span :class="['type', { 'positive-type': item.type === '적립' || item.type === '사용취소', 'negative-type': item.type === '사용' || item.type === '소멸' || item.type === '차감', 'cancel-type': item.type === '적립취소' }]">
                {{ item.type }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div v-else class="no-history-message">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="no-history-icon">
          <path d="M45.5859 1L55 10.4141V63H9V1H45.5859Z" stroke="#333333" stroke-width="2"/>
          <rect x="30" y="45" width="4" height="4" rx="2" fill="#333333"/>
          <path d="M30.0606 18.9991C30.0274 17.905 30.9054 17 32 17C33.0946 17 33.9726 17.905 33.9394 18.9991L33.3737 37.6673C33.3512 38.4098 32.7428 39 32 39C31.2572 39 30.6488 38.4098 30.6263 37.6673L30.0606 18.9991Z" fill="#333333"/>
        </svg>
        <p>기간 내 적립내역이 없습니다.</p>
      </div>
    </div>

    <div class="mileage-page-button">
      <button
        type="button"
        class="btn-more"
        v-if="filteredMileageHistory.length > displayLimit"
        @click="loadMore"
      >
        더보기
      </button>
    </div>

  </section>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.mileage-page {
  padding: 32px 0 0;

  .mileage-summary {
    display: flex;
    justify-content: center;
    border: 1px solid #111111; /* 이미지와 동일한 테두리 색상 */
    margin: 0 20px 24px; /* 이미지와 유사한 좌우 여백 및 하단 간격 */

    .summary-item {
      flex: 1;
      margin: 24px 0; /* 이미지와 유사한 상하 여백 */
      text-align: center;

      & + .summary-item {
        border-left: 1px solid #eee; /* 구분선 */
      }

      .label {
        font-size: 12px;
        color: #111;
        margin-bottom: 6px;
      }
      .count {
        font-size: 18px;
        font-weight: 500;
        color: #111;
        .unit {
          font-size: 18px;
          font-weight: 400;
          color: #111;
        }
      }
    }
  }

  .mileage-filter {
    padding: 32px 20px;
    background-color: #F6F6F6;
    margin-bottom: 24px;

    &-period {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 12px;

      button {
        flex: 1;
        min-width: 70px;
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

      // @vuepic/vue-datepicker 오버라이드
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
      flex-wrap: wrap;
      gap: 8px;

      select {
        width: 80px;
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
        flex: 1;
        width: calc(100% - 156px); /* 80px(select) + 8px(gap) + 60px(button) + 8px(gap) = 156px */
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
        width: 60px;
        height: 48px;
        padding: 15px;
        font-size: 14px;
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
    }
  }

  /* 적립금 리스트 스타일 */
  .mileage-list {
    border-top: 1px solid #111; /* 상단 구분선 */
    margin: 0 20px; /* 좌우 여백 20px로 통일 */

    .mileage-item {
      padding: 24px 0;
      border-bottom: 1px solid #ccc; /* 항목별 구분선 */

      .item-header {
        display: flex;
        align-items: center;
        gap: 12px;

        .detail {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 14px;
          color: #111;
          flex-grow: 1;
          .date {
            font-size: 14px;
            color: #666;
            span {
              color: #111; /* "발생일" 텍스트 색상 */
            }
          }
        }
        .amount {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
          &.positive {
            color: #FF2A00; /* 적립 금액은 빨간색 */
          }
          &.negative {
            color: #999999; /* 사용/소멸/차감 금액은 회색 */
          }
        }
        .type {
          font-size: 12px;
          color: #999;
          white-space: nowrap;
          &.positive-type {
            color: #FF2A00; /* 적립, 사용취소 (빨간색) */
          }
          &.negative-type {
            color: #999; /* 사용, 소멸, 차감 (회색) */
          }
          &.cancel-type {
            color: #999999; /* 적립취소 (회색) */
          }
        }
      }
    }

    .no-history-message {
      text-align: center;
      padding: 60px 0;
      color: #111111;
      font-size: 14px;
      border-bottom: 1px solid #eee; /* 이미지에 있는 하단 보더 유지 */
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

  .mileage-page-button { /* mileage-page-button으로 변경된 클래스에 대한 스타일 */
    margin: 40px 20px 60px; /* 하단 마진 60px로 복구 */
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
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>