<script setup>
// 자주묻는 질문
import { ref, computed, watch } from 'vue';

const searchQuery = ref('');
const selectedCategory1Depth = ref('전체');
const selectedCategory2Depth = ref('전체'); // '전체' 기본값

// FAQ 더미 데이터
const allFaqs = ref([
  {
    id: 1,
    category1Depth: '전체',
    category2Depth: '전체',
    question: 'FAQ 제목이 표시됩니다. FAQ 제목이 표시됩니다.',
    answer: 'FAQ 상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용FAQ상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용',
    date: '2022-11-01',
    isExpanded: false,
  },
  {
    id: 2,
    category1Depth: '회원',
    category2Depth: '회원정보',
    question: '회원가입은 어떻게 하나요?',
    answer: '회원가입은 웹사이트 상단의 "회원가입" 버튼을 통해 진행하실 수 있습니다. 약관 동의 후 본인 인증을 거쳐 가입을 완료해 주세요.',
    date: '2022-10-25',
    isExpanded: false,
  },
  {
    id: 3,
    category1Depth: '주문/결제',
    category2Depth: '결제',
    question: '카드 결제가 안 됩니다.',
    answer: '카드 결제 오류는 카드사 문제, 결제 시스템 오류 등 다양한 원인이 있을 수 있습니다. 이용하시는 카드사에 문의하시거나, 다른 결제 수단을 이용해 주세요.',
    date: '2022-10-20',
    isExpanded: false,
  },
  {
    id: 4,
    category1Depth: '주문/결제',
    category2Depth: '배송',
    question: '배송 조회는 어디서 하나요?',
    answer: '주문하신 상품의 배송 조회는 "마이페이지 > 주문내역"에서 확인하실 수 있습니다.',
    date: '2022-10-18',
    isExpanded: false,
  },
  {
    id: 5,
    category1Depth: '취소/교환/반품',
    category2Depth: '취소',
    question: '주문 취소는 어떻게 하나요?',
    answer: '주문 상태가 "결제 완료" 또는 "상품 준비 중"일 경우 마이페이지에서 직접 취소 가능합니다. "배송 중" 상태부터는 고객센터로 문의해 주세요.',
    date: '2022-10-15',
    isExpanded: false,
  },
  {
    id: 6,
    category1Depth: '상품',
    category2Depth: '상품정보',
    question: '상품 사이즈 문의합니다.',
    answer: '상품 상세 페이지에 기재된 사이즈 표를 참고하시거나, 추가 문의사항은 고객센터로 문의 바랍니다.',
    date: '2022-10-10',
    isExpanded: false,
  },
  {
    id: 7,
    category1Depth: '기타',
    category2Depth: '포인트',
    question: '포인트 사용 방법이 궁금합니다.',
    answer: '포인트는 일정 금액 이상 구매 시 결제 단계에서 현금처럼 사용 가능합니다.',
    date: '2022-10-05',
    isExpanded: false,
  },
]);

// 모든 FAQ에서 중복 없는 1Depth 카테고리 추출
const categories1Depth = computed(() => {
  const all = [...new Set(allFaqs.value.map(faq => faq.category1Depth))];
  // '전체'가 항상 첫 번째 오도록 정렬
  return ['전체', ...all.filter(cat => cat !== '전체').sort()];
});

// 선택된 1Depth 카테고리에 따른 2Depth 카테고리 추출
const categories2Depth = computed(() => {
  if (selectedCategory1Depth.value === '전체') {
    return []; // '전체' 선택 시 2Depth 없음
  }
  const filtered = allFaqs.value.filter(faq => faq.category1Depth === selectedCategory1Depth.value);
  const all = [...new Set(filtered.map(faq => faq.category2Depth))];
  // '전체'가 항상 첫 번째 오도록 정렬 (선택된 1depth에 해당하는 2depth가 '전체'를 포함할 경우)
  return ['전체', ...all.filter(cat => cat !== '전체').sort()];
});

// 필터링된 FAQ 목록
const filteredFaqs = computed(() => {
  let faqs = allFaqs.value;

  // 1Depth 카테고리 필터링
  if (selectedCategory1Depth.value !== '전체') {
    faqs = faqs.filter(faq => faq.category1Depth === selectedCategory1Depth.value);
  }

  // 2Depth 카테고리 필터링
  if (selectedCategory2Depth.value !== '전체' && selectedCategory2Depth.value !== '') {
    faqs = faqs.filter(faq => faq.category2Depth === selectedCategory2Depth.value);
  }

  // 검색어 필터링 (질문 또는 답변 내용에 검색어가 포함된 경우)
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    faqs = faqs.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  }

  return faqs;
});

// '더보기' 버튼 표시 여부 (예시: 처음에는 5개만 보여주고, 더보기를 누르면 추가 로드)
// 실제 구현에서는 페이지네이션 로직이 필요합니다. 여기서는 항상 true로 설정
const showMoreButton = computed(() => filteredFaqs.value.length > 0);

// 1Depth 카테고리 선택 시 2Depth 초기화
const selectCategory1Depth = (category) => {
  selectedCategory1Depth.value = category;
  selectedCategory2Depth.value = '전체'; // 1Depth 변경 시 2Depth 초기화
  searchQuery.value = ''; // 카테고리 선택 시 검색어 초기화
};

// 2Depth 카테고리 선택
const selectCategory2Depth = (category) => {
  selectedCategory2Depth.value = category;
  searchQuery.value = ''; // 카테고리 선택 시 검색어 초기화
};

// 검색 수행 (Enter 키 또는 버튼 클릭)
const performSearch = () => {
  // 검색 시 카테고리 필터를 '전체'로 초기화
  selectedCategory1Depth.value = '전체';
  selectedCategory2Depth.value = '전체';
  // filteredFaqs computed 속성이 searchQuery 값에 따라 자동으로 업데이트됩니다.
};

// 답변 토글
const toggleAnswer = (faq) => {
  faq.isExpanded = !faq.isExpanded;
};

// 검색어가 입력되면 카테고리 선택 초기화
watch(searchQuery, (newQuery) => {
  if (newQuery) {
    selectedCategory1Depth.value = '전체';
    selectedCategory2Depth.value = '전체';
  }
});
</script>

<template>
  <div class="faq-page">
    <div class="search-faq-section">
      <div class="search-input-wrapper">
        <input type="text" placeholder="찾으시는 질문을 입력해 주세요." v-model="searchQuery" @keyup.enter="performSearch" />
        <button class="search-button" @click="performSearch" aria-label="검색">
          검색
        </button>
      </div>
    </div>

    <div class="category-filters">
      <div class="category-1depth">
        <button
          v-for="cat1 in categories1Depth"
          :key="cat1"
          :class="{ active: selectedCategory1Depth === cat1 }"
          @click="selectCategory1Depth(cat1)"
        >
          {{ cat1 }}
        </button>
      </div>
      <div v-if="categories2Depth.length > 0" class="category-2depth">
        <button
          v-for="cat2 in categories2Depth"
          :key="cat2"
          :class="{ active: selectedCategory2Depth === cat2 }"
          @click="selectCategory2Depth(cat2)"
        >
          {{ cat2 }}
        </button>
      </div>
    </div>

    <div class="search-results-info" v-if="searchQuery && filteredFaqs.length > 0">
      <p class="search-query-text"><span class="count">'{{ searchQuery }}'</span>로 검색결과 <span class="count">{{ filteredFaqs.length }}</span>개</p>
    </div>

    <div class="faq-list">
      <div v-for="faq in filteredFaqs" :key="faq.id" class="faq-item">
        <div class="faq-question" @click="toggleAnswer(faq)">
          <div class="question-text">
            <span class="faq-tag">Q</span>
            <span class="faq-title">
              {{ faq.question }}
              <span class="faq-category-path" v-if="!faq.isExpanded">
                {{ faq.category1Depth }} &gt; {{ faq.category2Depth }}
              </span>
            </span>
          </div>
          <button class="toggle-button" aria-label="답변 보기/숨기기">
            <svg :class="{ 'expanded': faq.isExpanded }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="#111111" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </button>
        </div>
        <div v-if="faq.isExpanded" class="faq-answer">
          <div class="answer-text">
            <span class="faq-tag answer-tag">A</span>
            <span class="faq-answer-title">
              {{ faq.answer }}
              <p class="answer-meta">{{ faq.date }} 분류 {{ faq.category1Depth }} &gt; 분류 {{ faq.category2Depth }}</p>
            </span>
          </div>
        </div>
      </div>

      <div v-if="filteredFaqs.length === 0" class="no-results-message">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="warning-icon">
          <path d="M45.5859 1L55 10.4141V63H9V1H45.5859Z" stroke="#333333" stroke-width="2"/>
          <rect x="30" y="45" width="4" height="4" rx="2" fill="#333333"/>
          <path d="M30.0606 18.9991C30.0274 17.905 30.9054 17 32 17C33.0946 17 33.9726 17.905 33.9394 18.9991L33.3737 37.6673C33.3512 38.4098 32.7428 39 32 39C31.2572 39 30.6488 38.4098 30.6263 37.6673L30.0606 18.9991Z" fill="#333333"/>
        </svg>
        <p>등록된 자주 묻는 질문이 없습니다.</p>
        <p v-if="searchQuery"><em>{{ searchQuery }}</em>(으)로 자주 묻는 질문이 없습니다.</p>
      </div>
    </div>

    <div class="btn-box">
      <button class="btn-more" v-if="showMoreButton">더보기</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq-page {

  .search-faq-section {
    padding: 32px 20px;
    margin-bottom: 24px;
    background-color: #F6F6F6;

    .search-input-wrapper {
      display: flex;
      gap: 8px;
      overflow: hidden;

      input {
        flex-grow: 1;
        border: none;
        padding: 16px 12px;
        font-size: 14px;
        border: 1px solid #ccc;
        &:focus {
          outline: none;
        }
      }

      .search-button {
        width: 74px;
        background-color: #111;
        color: #fff;
        border: none;
        padding: 15px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap; /* "검색" 텍스트 줄바꿈 방지 */
        transition: background-color 0.2s ease;

        &:hover {
          background-color: #333;
        }
      }
    }
  }

  .category-filters {
    margin: 24px 20px;

    .category-1depth {
      display: flex;
      flex-wrap: wrap; // 버튼이 많아지면 줄바꿈

      button {
        position: relative;
        width: 50%;
        padding: 19px;
        color: #999;
        font-size: 16px;
        cursor: pointer;

        &:after {
          content:'';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #eee;
        }
        &.active {
          color: #000;
          font-weight: 500;
          &:after {
            height: 3px;
            background-color: #000;
          }
        }

        &:hover:not(.active):after {
          height: 3px;
          background-color: #000;
        }
      }
    }
    .category-2depth {
      margin-top: 15px;
      margin-bottom: 0;
      display: flex;
      flex-wrap: wrap; // 버튼이 많아지면 줄바꿈
      gap: 8px;
      button {
        padding: 12px 24px;
        font-size: 14px;
        color: #111;
        border: 1px solid #eee;
        &.active {
          color: #fff;
          font-weight: 500;
          background-color: #333;
          border-color: #333;
        }
      }
    }
  }

  .search-results-info {
    margin: 24px 20px;
    .search-query-text {
      font-size: 14px;
      color: #111;
      .count {
        font-weight: 500;
        color: #FF2A00;
      }
    }
  }

  .faq-list {
    margin: 24px 20px;
    .faq-item {
      border-bottom: 1px solid #ccc;
      padding: 24px 0;

      &:first-of-type {
        border-top: 1px solid #111;
      }

      .faq-question {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px;
        cursor: pointer;
        position: relative;
        padding-right: 38px;

        .question-text {
          flex-grow: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 14px;
          color: #111;
          font-weight: 500;
          line-height: 20px;

          .faq-tag {
            display: inline-block;
            font-size: 14px;
            color: #111;
          }
          .faq-title {
            flex: 1;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 12px;
            .faq-category-path {
              font-size: 14px;
              color: #666;
              white-space: nowrap;
              line-height: 20px;
            }
          }
        }

        .toggle-button {
          position: absolute;
          right: 0;
          top: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          pointer-events: none; // 클릭 영역은 faq-question이 담당

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
      }

      .faq-answer {
        margin-top: 24px;
        margin-bottom: -24px;
        padding: 24px 14px;
        border-top: 1px solid #ccc;
        background-color: #f6f6f6;

        .answer-text {
          font-size: 14px;
          color: #666;
          line-height: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;

          .faq-tag.answer-tag {
            color: #FF2A00;
            font-weight: 500;
          }
          .faq-answer-title {
            flex: 1;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 4px;
            .answer-meta {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }

    .no-results-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 60px 20px;
      border-bottom: 1px solid #eee;
      margin-top: 20px;

      .warning-icon {
        width: 64px;
        height: 64px;
        margin-bottom: 24px;
      }

      p {
        font-size: 14px;
        color: #111;
        margin-bottom: 4px;
        em {
          color: #FF2A00;
        }
      }
    }
  }

  .btn-box {
    margin: 40px 20px;
    .btn-more {
      width: 100%;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #333;
      font-size: 14px;
      font-weight: 500;
      color: #111;
      cursor: pointer;
    }
  }
}
</style>