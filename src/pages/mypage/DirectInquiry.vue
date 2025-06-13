<script setup>
import { ref, computed, watchEffect, onUnmounted } from 'vue'; // watchEffect와 onUnmounted import 추가
// 1:1 문의하기 레이어
import LayerInquiry from './../../components/common/layer/layerMy/LayerInquiry.vue'

// 팝업 열림/닫힘 상태 관리
const isLayerInquiryOpen = ref(false);

// **body overflow 제어 로직 추가**
watchEffect(() => {
  if (isLayerInquiryOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// 컴포넌트 언마운트 시 body overflow를 초기화 (중요!)
onUnmounted(() => {
  document.body.style.overflow = 'auto';
});

// 문의 상태 셀렉트박스 선택 값
const selectedInquiryStatus = ref('문의 전체');

// 문의 상태 옵션
const inquiryStatusOptions = [
  { text: '문의 전체', value: '문의 전체' },
  { text: '답변대기', value: '답변대기' },
  { text: '답변완료', value: '답변완료' },
  { text: '답변중(데이터없음)', value: '답변중' },
];

// 문의 데이터 (더미 데이터 - isExpanded 속성 추가)
const inquiries = ref([
  {
    id: 1,
    status: '문의접수', // 문의 접수 상태 (고정)
    answerStatus: '답변대기', // 답변 상태를 별도로 관리
    questionDate: '2022-11-01',
    productName: '상품 총 기장 알려주세요',
    orderCancelNumber: '21123117282343',
    orderNumber: '21123117282343',
    products: [
      {
        image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'LYNN',
        name: '하프 코트 에밀리아드 자켓',
        option: '브라운 / 55',
        quantity: 1,
        additionalInfo: [
          '[사은품] 브랜드명 사은품명1 사은품1 (2개)',
          '[사은품] 브랜드명 사은품명2 사은품2 (1개)'
        ],
        isFreebie: false,
      },
    ],
    inquiryContent: '[추가] 여우면티셔츠 랭갈-L-1개 (총 2개)',
    answerContent: null, // 답변 내용이 없음을 의미
    isExpanded: false,
    isSecret: false, // 비공개 문의가 아님
  },
  {
    id: 2,
    status: '문의접수',
    answerStatus: '답변완료', // 답변 상태: 완료
    questionDate: '2022-11-01',
    productName: '상품 총 기장 알려주세요',
    orderCancelNumber: null,
    orderNumber: null,
    products: [
      {
        image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'LYNN',
        name: '하프 코트 에밀리아드 자켓',
        option: '브라운 / 55',
        quantity: 1,
        additionalInfo: [
          '[사은품] 브랜드명 사은품명1 사은품1 (2개)'
        ],
        isFreebie: false,
      },
    ],
    inquiryContent: '크롭기장이라고 적혀있는데 S사이즈 총기장이 70cm로 되어있으면 너무 짧지 않나요? 총기장 70cm가 맞나요? 그럼 XS사이즈 총기장은 어떻게 되나요?',
    answerContent: {
      date: 'YYYY-MM-DD',
      type: '답변완료',
      content: '안녕하세요 고객센터입니다. 문의주신 상품의 총 기장은 70CM가 맞습니다. 감사합니다.',
    },
    isExpanded: false,
    isSecret: false, // 비공개 문의가 아님
  },
  {
    id: 3,
    status: '문의접수',
    answerStatus: '답변대기', // 답변 상태: 답변중
    questionDate: '2022-11-01',
    productName: '상품 총 기장 알려주세요',
    orderCancelNumber: null,
    orderNumber: null,
    products: [],
    inquiryContent: null,
    answerContent: null, // 답변 내용은 아직 없지만, 상태는 '답변중'
    isSecret: true,
    isExpanded: false,
    isSecret: true,
  },
  {
    id: 4,
    status: '문의접수',
    answerStatus: '답변대기', // 답변 상태: 대기
    questionDate: '2022-11-01',
    productName: '상품재고',
    orderCancelNumber: null,
    orderNumber: null,
    products: [],
    inquiryContent: null,
    answerContent: null,
    isSecret: true,
    isExpanded: false,
    isSecret: true,
  },
]);

// 필터링된 문의 목록 (선택된 문의 상태에 따라)
const filteredInquiries = computed(() => {
  if (selectedInquiryStatus.value === '문의 전체') {
    return inquiries.value;
  } else if (selectedInquiryStatus.value === '답변대기') {
    return inquiries.value.filter(inquiry => inquiry.answerStatus === '답변대기');
  } else if (selectedInquiryStatus.value === '답변완료') {
    return inquiries.value.filter(inquiry => inquiry.answerStatus === '답변완료');
  } else if (selectedInquiryStatus.value === '답변중') {
    return inquiries.value.filter(inquiry => inquiry.answerStatus === '답변중');
  }
  return inquiries.value; // 기본값
});

// 모든 문의가 답변이 없는 경우를 위한 computed 속성
const hasNoInquiries = computed(() => filteredInquiries.value.length === 0);

// 특정 문의가 답변 완료되었는지 확인
const isAnswered = (inquiry) => inquiry.answerStatus === '답변완료'; // answerStatus로 판단

// 문의 상세 내용을 토글하는 함수 (비공개 문의는 토글되지 않도록 조건 추가)
const toggleInquiryDetails = (inquiry) => {
  if (!inquiry.isSecret) {
    inquiry.isExpanded = !inquiry.isExpanded;
  }
};

// '문의하기' 버튼 클릭 시 레이어 팝업 열기
const openInquiryLayer = () => {
  isLayerInquiryOpen.value = true;
};

// 레이어 팝업 닫기
const closeInquiryLayer = () => {
  isLayerInquiryOpen.value = false;
};
</script>

<template>
  <section class="direct-inquiry-page">
    <div class="top-controls">
      <span class="inquiry-count">
        {{ filteredInquiries.length }}개 문의
      </span>
      <div class="status-select-wrapper">
        <select v-model="selectedInquiryStatus" class="inquiry-status-select">
          <option v-for="option in inquiryStatusOptions" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span class="select-arrow"></span>
      </div>
    </div>

    <button class="btn-ask-inquiry" @click="openInquiryLayer">문의하기</button>

    <div class="inquiry-content">
      <div v-for="inquiry in filteredInquiries" :key="inquiry.id" class="inquiry-item">
        <div class="inquiry-question-section" :class="{ 'no-click': inquiry.isSecret }" @click="toggleInquiryDetails(inquiry)">
          <div class="inquiry-header-row">
            <span class="inquiry-status">{{ inquiry.status }}</span>
          </div>
          <div class="inquiry-main-info">
            <span class="product-name" :class="{ 'secret-title': inquiry.isSecret }">
              {{ inquiry.isSecret ? '비공개 문의글 입니다.' : inquiry.productName }}
            </span>
            <span class="question-date">{{ inquiry.questionDate }}</span>
          </div>
          <button v-if="!inquiry.isSecret" class="toggle-button" aria-label="문의 상세 열기/닫기">
            <svg :class="{ 'expanded': inquiry.isExpanded }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="#111111" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </button>
        </div>

        <div v-if="inquiry.isExpanded" class="toggle-group">
          <div v-if="inquiry.orderCancelNumber" class="order-info">
            <div class="info-row">
              <span class="label">주문취소번호</span>
              <span class="value">{{ inquiry.orderCancelNumber }}</span>
            </div>
            <div class="info-row">
              <span class="label">주문번호</span>
              <span class="value">{{ inquiry.orderNumber }}</span>
            </div>
          </div>

          <div v-if="inquiry.products.length > 0 && !inquiry.isSecret" class="product-list">
            <div v-for="(product, pIdx) in inquiry.products" :key="pIdx" class="product-item">
              <img :src="product.image" alt="상품 이미지" class="product-image" />
              <div class="product-details">
                <span class="product-brand">{{ product.brand }}</span>
                <span class="product-name-full">{{ product.name }}</span>
                <span class="product-option">{{ product.option }}</span>
                <span class="product-quantity">{{ product.quantity }}개</span>
              </div>
              <template v-if="product.additionalInfo && product.additionalInfo.length > 0">
                <span
                  v-for="(info, infoIdx) in product.additionalInfo"
                  :key="infoIdx"
                  class="additional-info"
                  :class="{ 'freebie': product.isFreebie }"
                >
                  {{ info }}
                </span>
              </template>
            </div>
          </div>

          <div v-if="inquiry.inquiryContent && !inquiry.isSecret" class="inquiry-content-text">
            {{ inquiry.inquiryContent }}
          </div>
          <div v-else-if="inquiry.isSecret" class="secret-inquiry-text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-icon">
            <path d="M19 10V21H5V10H19Z" stroke="black" stroke-width="2"/>
            <circle cx="12" cy="15" r="2" fill="black"/>
            <path d="M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11" stroke="black" stroke-width="2"/>
            </svg>
            <span>비공개 문의입니다.</span>
          </div>

          <div class="button-area">
            <button v-if="inquiry.orderCancelNumber" class="btn-cancel">주문취소</button>
            <button v-else class="btn-cancel">문의취소</button>
          </div>
        </div>

        <div v-if="isAnswered(inquiry)" class="inquiry-answer-section">
          <div class="answer-header-row">
            <span class="answer-type">{{ inquiry.answerContent.type }}</span>
            <span class="answer-date">{{ inquiry.answerContent.date }}</span>
          </div>
          <div class="answer-content-text">{{ inquiry.answerContent.content }}</div>
          <div class="answer-buttons">
            <button class="btn-outline">수정</button>
            <button class="btn-outline">삭제</button>
          </div>
        </div>
      </div>

      <div v-if="hasNoInquiries" class="no-inquiries-message">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="warning-icon">
        <path d="M45.5859 1L55 10.4141V63H9V1H45.5859Z" stroke="#333333" stroke-width="2"/>
        <rect x="29" y="43" width="6" height="6" rx="3" fill="#333333"/>
        <path d="M29.1362 17.9969C29.062 16.3642 30.3657 15 32 15C33.6343 15 34.938 16.3642 34.8638 17.9969L34.0908 35.0021C34.04 36.1199 33.119 37 32 37C30.881 37 29.96 36.1199 29.9092 35.0021L29.1362 17.9969Z" fill="#333333"/>
        </svg>
        <p>등록된 문의가 없습니다.</p>
      </div>

      <button class="btn-more">더보기</button>
    </div>
  </section>

  <!-- 1:1 문의하기 레이어 -->
  <LayerInquiry v-if="isLayerInquiryOpen" @close="closeInquiryLayer" />
</template>

<style lang="scss" scoped>
.direct-inquiry-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 32px 20px;

  .top-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #eee;

    .inquiry-count {
      font-size: 14px;
      color: #111;
      font-weight: 500;
    }

    .status-select-wrapper {
      position: relative;
      display: inline-block;

      .inquiry-status-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 8px 30px 8px 10px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 14px;
        color: #111;
        cursor: pointer;
        min-width: 120px;
        background-image: none;

        &:focus {
          outline: none;
          border-color: #666;
        }
      }

      .select-arrow {
        position: absolute;
        right: 10px; /* SVG 위치 조정 */
        top: 50%;
        transform: translateY(-50%); /* 화살표 회전 제거 */
        width: 9px; /* SVG width */
        height: 5px; /* SVG height */
        background-image: url("data:image/svg+xml,%3Csvg width='9' height='5' viewBox='0 0 9 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0H0L4.5 5L9 0Z' fill='%23111111'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center; /* SVG를 중앙에 배치 */
        pointer-events: none;
        border: none; /* 기존 border 기반 화살표 제거 */
      }
    }
  }

  .btn-ask-inquiry {
    width: 100%;
    padding: 15px;
    background-color: #111;
    color: #fff;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.9;
    }
  }

  .inquiry-content {
    flex-grow: 1;
    padding: 0;
    background-color: transparent;
  }

  .inquiry-item {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 24px 0;
    transition: box-shadow 0.2s ease-in-out;

    &:first-of-type {
      border-top: 1px solid #eee; /* 첫 번째 항목에 상단 보더 추가 */
    }

    .inquiry-question-section {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 30px;
      cursor: pointer;

      .inquiry-header-row {
        display: flex;
        justify-content: space-between; /* 여전히 필요 */
        align-items: center;
        margin-bottom: 10px;
        width: 50px;

        .inquiry-status {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }
      }

      .toggle-button {
        position: absolute;
        top: 0; /* inquiry-question-section의 padding이 생겼으므로 top: 0이 적절 */
        right: 0; /* inquiry-item의 padding-right에 맞춰 정렬 */
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        pointer-events: none;
        z-index: 1;

        svg {
          width: 20px;
          height: 20px;
          display: block;
          transition: transform 0.2s ease-in-out;
          stroke: #999;

          &.expanded {
            transform: rotate(180deg);
          }
        }
      }

      .inquiry-main-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 10px;

        .product-name {
          font-size: 15px;
          color: #333;
          font-weight: 400;
          &.secret-title {
            padding: 2px 24px;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 10V21H5V10H19Z' stroke='black' stroke-width='2'/%3E%3Ccircle cx='12' cy='15' r='2' fill='black'/%3E%3Cpath d='M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-size: 20px auto;
            background-position: 0 0;
          }
        }

        .question-date {
          font-size: 13px;
          color: #777;
        }
      }
    }

    .toggle-group {
      .order-info {
        padding: 20px;
        margin-bottom: 24px;
        border-top: 1px solid #333;
        border-bottom: 1px solid #ccc;
        background-color: #F6F6F6;

        .info-row {
          display: flex;
          font-size: 13px;
          line-height: 18px;
          padding: 4px 0;

          .label {
            color: #111;
            width: 90px;
            flex-shrink: 0;
          }

          .value {
            color: #666;
            flex-grow: 1;
          }
        }
      }

      .product-list {
        margin: 24px 0;

        .product-item {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px solid #f2f2f2;

          &:last-child {
            border-bottom: none;
          }

          .product-image {
            width: 74px;
            height: 115px;
            border-radius: 4px;
            margin-right: 16px;
            margin-bottom: 24px;
            object-fit: cover;
          }

          .product-details {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            font-size: 13px;
            color: #555;
            line-height: 1.4;

            .product-brand {
              font-weight: 500;
              color: #333;
              margin-bottom: 2px;
            }

            .product-name-full {
              color: #555;
              margin-bottom: 2px;
            }

            .product-option {
              color: #777;
              margin-bottom: 2px;
            }

            .product-quantity {
              color: #777;
            }
          }
          .additional-info {
            display: block;
            width: 100%;
            font-size: 13px;
            color: #111;
            margin-top: 8px;

            &.freebie {
              color: #ff2a00;
            }
          }
        }
      }

      .inquiry-content-text {
        font-size: 14px;
        color: #444;
        padding: 24px 0;
        border-top: 1px solid #eee;
      }

      .secret-inquiry-text {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #111;
        padding: 24px 0;
        border-top: 1px solid #eee;

        .lock-icon {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          display: block;
        }
      }

      .button-area {
        display: flex;
        justify-content: flex-start;

        .btn-cancel {
          background-color: #fff;
          color: #FF2A00;
          border: 1px solid #ddd;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            background-color: #f9f9f9;
          }
        }
      }
    }

    .inquiry-answer-section {
      background-color: #F7F7F7;
      padding: 24px 20px;
      margin-top: 15px;

      .answer-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        .answer-type {
          font-size: 14px;
          font-weight: 500;
          color: #111;
        }

        .answer-date {
          font-size: 13px;
          color: #999;
        }
      }

      .answer-content-text {
        padding-left: 18px;
        font-size: 14px;
        color: #555;
        line-height: 20px;
        margin-bottom: 12px;
        white-space: pre-line;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='10' fill='black'/%3E%3Crect y='10' width='2' height='10' transform='rotate(-90 0 10)' fill='black'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-size: 10px auto;
        background-position: 0 0;
      }

      .answer-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;

        .btn-outline {
          background: #fff;
          border: 1px solid #666;
          color: #666;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;

          &:hover {
            background-color: #f9f9f9;
          }
        }
      }
    }
  }

  .no-inquiries-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 20px;
    border-bottom: 1px solid #eee;
    border-radius: 8px;

    .warning-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
    }

    p {
      font-size: 14px;
      color: #111;
    }
  }

  .btn-more {
    width: 100%;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #333;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    cursor: pointer;
    margin-top: 40px;
  }
}
</style>