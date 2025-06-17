<script setup>
// 쿠폰
import { ref, computed } from 'vue';

const currentTab = ref('owned'); // 'owned' 또는 'download'
const serialCodeInput = ref('');

// 보유 쿠폰 더미 데이터
const ownedCoupons = ref([
  {
    id: 1,
    value: '30%',
    subtext: '할인',
    name: '쿠폰명 전체 표시',
    downloadPeriod: '2023-01-01 ~ 2023-12-31',
    remainingDays: 'N일',
    type: '상품할인쿠폰',
    downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
    status: 'active', // 'active', 'used', 'expired'
  },
  // {
  //   id: 2,
  //   value: '10,000원 할인',
  //   name: '쿠폰명 전체 표시',
  //   downloadPeriod: '2023-01-01 ~ 2023-06-30',
  //   remainingDays: '기간만료', // 예시
  //   type: '상품할인쿠폰',
  //   downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
  //   status: 'expired',
  // },
  // {
  //   id: 3,
  //   value: '무료배송',
  //   name: '쿠폰명 전체 표시',
  //   downloadPeriod: '2023-01-01 ~ 2023-09-30',
  //   remainingDays: 'N일',
  //   type: '배송비쿠폰',
  //   downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
  //   status: 'used',
  // }
]);

// 다운로드 가능한 쿠폰 더미 데이터
const downloadableCoupons = ref([
  {
    id: 101,
    value: '30%',
    subtext: '할인',
    name: '쿠폰명 전체 표시',
    downloadPeriod: 'YYYY-MM-DD ~ YYYY-MM-DD',
    remainingDays: 'N일',
    type: '상품할인쿠폰',
    downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
    status: 'available', // 'available', 'downloaded'
    note: '선착순 쿠폰은 발급여부와 상관없이 소진될 수 있습니다.', // 안내 문구 추가
  },
  {
    id: 102,
    value: '10,000',
    subtext: '원 할인',
    name: '쿠폰명 전체 표시',
    downloadPeriod: 'YYYY-MM-DD ~ YYYY-MM-DD',
    remainingDays: 'N일',
    type: '상품할인쿠폰',
    downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
    status: 'downloaded', // 이미 다운로드된 쿠폰
  },
  {
    id: 103,
    value: '무료배송',
    name: '쿠폰명 전체 표시',
    downloadPeriod: 'YYYY-MM-DD ~ YYYY-MM-DD',
    remainingDays: 'N일',
    type: '배송비쿠폰',
    downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
    status: 'available',
  },
  {
    id: 104,
    value: '무료반품',
    subtext: '',
    name: '쿠폰명 전체 표시 쿠폰명 전체 표시 말줄임 없습니다. 말줄임 없습니다. 말줄임 없습니다.',
    downloadPeriod: 'YYYY-MM-DD ~ YYYY-MM-DD',
    remainingDays: 'N일',
    type: '상품할인쿠폰',
    downloadInfo: '선착순N장 / 계정당 1일 N회 발급',
    status: 'available',
  },
]);

// 시리얼 코드 등록 함수 (실제로는 API 호출 필요)
const registerCoupon = () => {
  if (serialCodeInput.value.trim() === '') {
    alert('시리얼 코드를 입력해주세요.');
    return;
  }
  // 실제 시리얼 코드 유효성 검사 및 등록 로직
  console.log(`시리얼 코드 등록 시도: ${serialCodeInput.value}`);
  alert(`"${serialCodeInput.value}" 코드를 등록했습니다. (더미 기능)`);
  serialCodeInput.value = ''; // 입력창 초기화
  // 등록 성공 시 ownedCoupons 업데이트 로직 필요
};

// 쿠폰 다운로드 함수 (실제로는 API 호출 필요)
const downloadCoupon = (coupon) => {
  if (coupon.status === 'available') {
    // 실제 쿠폰 다운로드 로직
    console.log(`쿠폰 다운로드 시도: ${coupon.name}`);
    coupon.status = 'downloaded'; // 상태 변경 (프론트엔드에서만)
    alert(`"${coupon.name}" 쿠폰을 다운로드했습니다.`);
    // 다운로드된 쿠폰을 ownedCoupons에 추가하는 로직 필요 (백엔드 처리 후)
    ownedCoupons.value.push({
      ...coupon,
      id: ownedCoupons.value.length + 1, // 새 ID 부여
      status: 'active', // 다운로드된 쿠폰은 활성 상태로 시작
    });
  }
};
</script>

<template>
  <section class="coupon-page">
    <div class="coupon-summary">
      <div class="summary-item">
        <p class="label">보유 쿠폰</p>
        <p class="count">10 <span class="unit">장</span></p>
      </div>
      <div class="summary-item">
        <p class="label">당월 만료예정 쿠폰</p>
        <p class="count">5 <span class="unit">장</span></p>
      </div>
    </div>

    <div class="serial-code-input-section">
      <input type="text" placeholder="시리얼 코드를 입력해주세요." v-model="serialCodeInput" @keyup.enter="registerCoupon" />
      <button class="register-button" @click="registerCoupon">등록</button>
    </div>

    <div class="tab-menu">
      <button :class="{ active: currentTab === 'owned' }" @click="currentTab = 'owned'">
        보유쿠폰
      </button>
      <button :class="{ active: currentTab === 'download' }" @click="currentTab = 'download'">
        쿠폰다운
      </button>
    </div>

    <div v-if="currentTab === 'owned'" class="coupon-list owned-coupons">
      <div v-if="ownedCoupons.length > 0">
        <div v-for="coupon in ownedCoupons" :key="coupon.id" class="coupon-item owned-type">
          <div class="coupon-item-box">
            <div class="coupon-content">
              <p class="coupon-value">{{ coupon.value }}<span>{{ coupon.subtext }}</span></p>
              <p class="coupon-name">{{ coupon.name }}</p>
            </div>
            <button class="use-coupon-button" :disabled="coupon.status === 'used' || coupon.status === 'expired'">
              {{ coupon.status === 'used' ? '사용 완료' : coupon.status === 'expired' ? '기간 만료' : '쿠폰 사용' }}
            </button>
          </div>
          <div class="coupon-details"> <p class="detail-line">
              <span>다운기간 :</span> {{ coupon.downloadPeriod }} ({{ coupon.remainingDays }} 남음)
            </p>
            <p class="detail-line"><span>쿠폰유형 :</span> {{ coupon.type }}</p>
            <p class="detail-line"><span>다운안내 :</span> {{ coupon.downloadInfo }}</p>
          </div>
        </div>
      </div>
      <div v-else class="no-coupons-message">
        <p>보유하신 쿠폰이 없습니다.</p>
      </div>
    </div>

    <div v-if="currentTab === 'download'" class="coupon-list download-coupons">
      <div v-if="downloadableCoupons.length > 0">
        <div v-for="coupon in downloadableCoupons" :key="coupon.id" class="coupon-item download-type">
          <div class="coupon-item-box">
            <div class="coupon-content">
              <p class="coupon-value">{{ coupon.value }}<span>{{ coupon.subtext }}</span></p>
              <p class="coupon-name">{{ coupon.name }}</p>
            </div>
            <button class="download-coupon-button" :disabled="coupon.status === 'downloaded'" @click="downloadCoupon(coupon)">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="12.5" width="12" height="1" transform="rotate(-90 10 12.5)" fill="white" stroke="white"/>
                <rect x="1" y="18.5" width="19" height="1" fill="white" stroke="white"/>
                <path d="M17.5 7L10.5 13.5L3.5 7" stroke="white" stroke-width="2"/>
              </svg>
              {{ coupon.status === 'downloaded' ? '받기완료' : '쿠폰받기' }}
            </button>
          </div>
          <div class="coupon-details"> <p class="detail-line">
              <span>다운기간 :</span> {{ coupon.downloadPeriod }} ({{ coupon.remainingDays }} 남음)
            </p>
            <p class="detail-line"><span>쿠폰유형 :</span> {{ coupon.type }}</p>
            <p class="detail-line"><span>다운안내 :</span> {{ coupon.downloadInfo }}</p>
          </div>
          <p v-if="coupon.note" class="note-text-individual"> {{ coupon.note }}
          </p>
        </div>
      </div>
      <div v-else class="no-coupons-message">
        <p>현재 다운 가능한 쿠폰이 없습니다.</p>
      </div>
    </div>

    <div class="btn-more">
      <button type="button">더보기</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.coupon-page {
  padding: 32px 0 60px;
  max-width: 768px; // 모바일 뷰포트 고려 (조정 가능)
  margin: 0 auto;
  font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;

  .coupon-summary {
    display: flex;
    justify-content: center;
    border: 1px solid #111111;
    margin:0 20px 24px;

    .summary-item {
      flex: 1;
      margin: 24px 0;
      text-align: center;

      & + .summary-item {
        border-left: 1px solid #eee;
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
        }
      }
    }
  }

  .serial-code-input-section {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    padding: 32px 20px;
    background-color: #F6F6F6;
    overflow: hidden;

    input {
      flex-grow: 1;
      border: none;
      padding: 15px 12px;
      font-size: 14px;
      border: 1px solid #ccc;
      &:focus {
        outline: none;
      }
    }

    .register-button {
      background-color: #111;
      color: #fff;
      border: none;
      padding: 8px 20px;
      font-size: 14px;
      font-weight: 500;
      min-width: 74px;
      cursor: pointer;
      white-space: nowrap;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #333;
      }
    }
  }

  .tab-menu {
    display: flex;
    margin: 24px 20px 32px;
    border-bottom: 1px solid #eee;

    button {
      flex: 1;
      padding: 19px 0;
      background-color: #fff;
      border: none;
      border-bottom: 3px solid transparent;
      font-size: 16px;
      color: #999;
      cursor: pointer;
      transition: all 0.2s ease;

      &.active {
        color: #111;
        font-weight: bold;
        border-bottom-color: #111;
      }

      &:hover:not(.active) {
        color: #333;
      }
    }
  }

  .coupon-list {
    margin: 0 20px;
    .note-text-individual {
      margin-top: 12px;
      font-size: 13px;
      color: #FF2A00;
    }

    .coupon-item {
      margin-bottom: 40px;
      align-items: center;
      &-box {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #eee;
        border-radius: 12px;
        overflow: hidden;
      }

      &.owned-type {
        grid-template-columns: 1fr auto; // 가로 공간 분할
        .coupon-content {
          flex: 1;
          padding: 24px;
          margin-right: 15px;
        }
        .coupon-details {
          flex-basis: 100%; // 다음 줄로 이동
          order: 3; // content, button 다음
          margin-top: 10px; // 내용과 간격
        }
        .use-coupon-button {
          flex-shrink: 0;
          width: 74px;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          background-color: #333333;
          border: 1px solid #333333;
          cursor: pointer;
          transition: background-color 0.2s ease;
          &:disabled {
            background-color: #DBDBDB;
            color: #fff;
            border-color: #DBDBDB;
            cursor: default;
          }
        }
      }

      &.download-type {
        grid-template-columns: 1fr auto;
        .coupon-content {
          flex: 1;
          padding: 24px;
        }
        .coupon-details {
          margin-top: 12px;
        }
        .download-coupon-button {
          flex-shrink: 0;
          width: 74px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #333333;
          border: 1px solid #333333;
          font-size: 13px;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s ease;

          svg {
            width: 20px;
            height: 20px;
            stroke: #333;
          }
          &:disabled {
            background-color: #DBDBDB;
            border: 1px solid #DBDBDB;
            cursor: default;
          }
        }
      }

      .coupon-value {
        font-size: 30px;
        font-weight: 600;
        color: #111;
        margin-bottom: 10px;
        span {
          margin-left: 4px;
          font-size: 16px;
          font-weight: 500;
        }
      }
      .coupon-name {
        font-size: 14px;
        color: #111;
      }

      .coupon-details {
        .detail-line {
          position: relative;
          margin-top: 4px;
          padding-left: 12px;
          font-size: 13px;
          line-height: 19px;
          color: #666;
          &:after {
            content:'';
            position: absolute;
            top: 8px;
            left: 4px;
            width: 2px;
            height: 2px;
            background-color: #111;
          }
        }
      }
    }

    .no-coupons-message {
      text-align: center;
      padding: 50px 0;
      color: #777;
      font-size: 15px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
    }
  }

  .btn-more {
    margin: 0 20px;
    button {
      width: 100%;
      padding: 15px;
      font-size: 14px;
      color: #111;
      font-weight: 500;
      border: 1px solid #333;
      background-color: #fff;
    }
  }
}
</style>