<script setup>
import { ref, computed, onMounted } from 'vue';

/* -------------------------------
   1. 더미 브랜드 데이터 (API 대체)
-------------------------------- */
const allBrands = ref([
  { id: 'apc', name: 'A.P.C.', nameKo: '아페쎄', isLiked: true, registeredAt: '2026-04-20', tags: ['단독'] },
  { id: 'agolde', name: 'AGOLDE', nameKo: '에이골디', isLiked: true, registeredAt: '2026-05-12', tags: ['단독'] },
  { id: 'aloyoga', name: 'ALO YOGA', nameKo: '알로 요가', isLiked: false, registeredAt: '2026-04-20', tags: ['태그명'] },
  { id: 'amiparis', name: 'AMI PARIS', nameKo: '아미 파리스', isLiked: false, registeredAt: '2026-04-20', tags: [] },
  { id: 'anitabilardi', name: 'ANITA BILARDI', nameKo: '아니타 빌라디', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'autry', name: 'AUTRY', nameKo: '오트리', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'balenciaga', name: 'BALENCIAGA', nameKo: '발렌시아가', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'baobaobisseymiyake', name: 'BAOBAO ISSEY MIYAKE', nameKo: '바오바오 이세이 미야케', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'barena', name: 'BARENA', nameKo: '바레나', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'bogner', name: 'BOGNER', nameKo: '보그너', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'burberry', name: 'BURBERRY', nameKo: '버버리', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'byfar', name: 'BY FAR', nameKo: '바이파', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'camper', name: 'CAMPER', nameKo: '캠퍼', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'chloe', name: 'CHLOE', nameKo: '끌로에', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'nike', name: 'NIKE', nameKo: '나이키', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'adidas', name: 'ADIDAS', nameKo: '아디다스', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'zara', name: 'ZARA', nameKo: '자라', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'cos', name: 'COS', nameKo: '코스', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'gucci', name: 'GUCCI', nameKo: '구찌', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'chanel', name: 'CHANEL', nameKo: '샤넬', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'prada', name: 'PRADA', nameKo: '프라다', isLiked: false, registeredAt: '2025-04-20', tags: [] },
  { id: 'louisvuitton', name: 'LOUIS VUITTON', nameKo: '루이비통', isLiked: false, registeredAt: '2025-04-20', tags: [] },
]);

/* -------------------------------
   2. 로그인 상태 / 탭 상태 / 검색어
-------------------------------- */
const isLoggedIn = ref(true); 
const activeTab = ref('A-Z');       // 현재 탭 (MY, A-Z, ㄱ-ㅎ)
const selectedAlpha = ref('ALL');   // 선택된 알파벳/초성
const searchTerm = ref('');         // 검색어 입력값

/* -------------------------------
   3. 알파벳 / 한글 초성 배열
-------------------------------- */
const alphabets = ref(['ALL', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))]);
const koreanConsonants = ref(['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']);
const container = ref(null); // ✅ DOM 참조용 ref 추가

/* -------------------------------
   4. 좋아요 토글 기능
-------------------------------- */
const toggleLike = (brandId) => {
  const brand = allBrands.value.find(b => b.id === brandId);
  if (brand) brand.isLiked = !brand.isLiked;
};

/* -------------------------------
   5. 필터링된 브랜드 목록
   (검색어, 탭, 알파벳/초성 조건 적용)
-------------------------------- */
const filteredBrands = computed(() => {
  let brands = [...allBrands.value];

  // 검색어 필터
  if (searchTerm.value) {
    const query = searchTerm.value.toLowerCase();
    brands = brands.filter(b =>
      b.name.toLowerCase().includes(query) || b.nameKo.toLowerCase().includes(query)
    );
  }

  // 탭별 필터
  if (activeTab.value === 'MY') {
    return brands.filter(b => b.isLiked);
  } else if (activeTab.value === 'A-Z' && selectedAlpha.value !== 'ALL') {
    brands = brands.filter(b => b.name.startsWith(selectedAlpha.value));
  } else if (activeTab.value === 'ㄱ-ㅎ' && selectedAlpha.value !== 'ALL') {
    brands = brands.filter(b => {
      const firstChar = b.nameKo.charCodeAt(0);
      if (firstChar >= 0xAC00 && firstChar <= 0xD7A3) {
        const unicodeOffset = firstChar - 0xAC00;
        const jong = unicodeOffset % 28;
        const jung = ((unicodeOffset - jong) / 28) % 21;
        const cho = (((unicodeOffset - jong) / 28) - jung) / 21;
        const choConsonant = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'][cho];
        return choConsonant === selectedAlpha.value;
      }
      return false;
    });
  }

  return brands.sort((a, b) => a.name.localeCompare(b.name));
});

/* -------------------------------
   6. NEW 태그 자동 추가
   (등록일 기준 30일 이내)
-------------------------------- */
const now = new Date();
const filteredBrandsWithTags = computed(() => {
  return filteredBrands.value.map(b => {
    const tags = [...b.tags];
    const registeredDate = new Date(b.registeredAt);
    const diffDays = (now - registeredDate) / (1000 * 60 * 60 * 24);
    if (diffDays <= 30) tags.push('NEW');
    return { ...b, tags };
  });
});

/* -------------------------------
   7. 그룹화된 브랜드 목록
   (A-Z, ㄱ-ㅎ 탭에서 사용)
-------------------------------- */
const groupedBrands = computed(() => {
  const groups = {};
  const currentBrands = filteredBrandsWithTags.value; // ✅ NEW 태그 반영된 목록 사용

  if (!searchTerm.value) {
    if (activeTab.value === 'A-Z') {
      alphabets.value.slice(1).forEach(alpha => {
        const brandsInGroup = currentBrands.filter(b => b.name.startsWith(alpha));
        if (brandsInGroup.length > 0) groups[alpha] = brandsInGroup;
      });
    } else if (activeTab.value === 'ㄱ-ㅎ') {
      koreanConsonants.value.forEach(consonant => {
        const brandsInGroup = currentBrands.filter(b => {
          const firstChar = b.nameKo.charCodeAt(0);
          if (firstChar >= 0xAC00 && firstChar <= 0xD7A3) {
            const unicodeOffset = firstChar - 0xAC00;
            const jong = unicodeOffset % 28;
            const jung = ((unicodeOffset - jong) / 28) % 21;
            const cho = (((unicodeOffset - jong) / 28) - jung) / 21;
            const choConsonant = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'][cho];
            return choConsonant === consonant;
          }
          return false;
        });
        if (brandsInGroup.length > 0) groups[consonant] = brandsInGroup;
      });
    }
  }
  return groups;
});

/* -------------------------------
   8. 탭 변경 / 알파벳 선택
-------------------------------- */
const changeTab = (tab) => {
  activeTab.value = tab;
  selectedAlpha.value = 'ALL';
  searchTerm.value = '';
};

/* -------------------------------
   10. 알파벳 선택 시 중앙 이동
-------------------------------- */
const selectAlpha = (alpha, event) => {
  selectedAlpha.value = alpha;

  const button = event.currentTarget;
  const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
  const containerCenter = container.value.clientWidth / 2;

  const targetScrollLeft = buttonCenter - containerCenter;

  container.value.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth",
  });
}

/* -------------------------------
   11. 컴포넌트 마운트 시 초기 설정
-------------------------------- */
onMounted(() => {
  allBrands.value.find(b => b.id === 'apc').isLiked = true;
  allBrands.value.find(b => b.id === 'agolde').isLiked = true;
});

</script>

<template>
  <div class="brand-page">
    <div class="search-bar">
      <input type="text" placeholder="브랜드명을 입력해주세요." v-model="searchTerm">
      <button type="button" class="search-icon" @click="filterBrands">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.5918 18.0525C15.0562 19.2717 13.1131 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.1131 19.2717 15.0562 18.0525 16.5918L22 20.5393L20.5393 22L16.5918 18.0525Z" fill="#111111"/>
        </svg>
      </button>
    </div>

    <div class="tabs">
      <button :class="{ active: activeTab === 'MY' }" @click="changeTab('MY')">MY</button>
      <button :class="{ active: activeTab === 'A-Z' }" @click="changeTab('A-Z')">A - Z</button>
      <button :class="{ active: activeTab === 'ㄱ-ㅎ' }" @click="changeTab('ㄱ-ㅎ')">ㄱ - ㅎ</button>
    </div>

    <div class="alphabet-swiper" ref="container" v-if="activeTab !== 'MY' && !searchTerm">
      <button
        v-for="alpha in (activeTab === 'A-Z' ? alphabets : koreanConsonants)"
        :key="alpha"
        :class="{ active: selectedAlpha === alpha }"
        @click="selectAlpha(alpha, $event)"
      >
        {{ alpha }}
      </button>
    </div>

    <div class="brand-list-container">
      <!-- MY 탭 -->
      <div v-if="activeTab === 'MY'" class="my-brands">
        <div v-if="isLoggedIn && filteredBrandsWithTags.length > 0" class="my-brand-list">
          <div v-for="brand in filteredBrandsWithTags" :key="brand.id" class="brand-item">
            <button class="like-button" @click="toggleLike(brand.id)">
              <svg :class="{ liked: brand.isLiked }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 5C19.9816 5 21 6.97251 21 7.88574V8.85742C20.9999 10.869 19.7501 12.8069 17.792 14.7686C16.0265 16.5372 13.9223 18.1103 12 19.6973C10.0777 18.1103 7.97351 16.5372 6.20801 14.7686C4.2499 12.8069 3.00011 10.869 3 8.85742V7.88574L3.01172 7.70312C3.1343 6.73401 4.20443 5 7 5C9.46623 5 10.5785 6.90816 11.293 7.62207L12 8.32812L12.707 7.62207C13.4215 6.90816 14.5338 5 17 5Z" stroke="#111111" stroke-width="2"/>
              </svg>
            </button>
            <a href="" class="brand-info">
							<div class="brand-name">
                {{ brand.name }}
                <span v-for="tag in brand.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
							<span class="brand-name-ko">{{ brand.nameKo }}</span>
						</a>
          </div>
        </div>
        <div v-else-if="!isLoggedIn" class="no-login-message">
          <a href="/vue-2023/login/">로그인</a>하고 마이브랜드를 등록해주세요.
        </div>
        <div v-else class="no-brands-message">
          등록된 마이 브랜드가 없습니다.
        </div>
      </div>

      <!-- A-Z, ㄱ-ㅎ 탭 (그룹화된 목록 또는 검색 결과) -->
      <div v-else class="all-brands">
        <div v-if="searchTerm && filteredBrandsWithTags.length > 0" class="search-results">
          <!-- 검색어가 있을 때는 그룹화하지 않고 필터링된 목록을 평면적으로 표시 -->
          <div v-for="brand in filteredBrandsWithTags" :key="brand.id" class="brand-item">
            <button class="like-button" @click="toggleLike(brand.id)">
              <svg :class="{ liked: brand.isLiked }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 5C19.9816 5 21 6.97251 21 7.88574V8.85742C20.9999 10.869 19.7501 12.8069 17.792 14.7686C16.0265 16.5372 13.9223 18.1103 12 19.6973C10.0777 18.1103 7.97351 16.5372 6.20801 14.7686C4.2499 12.8069 3.00011 10.869 3 8.85742V7.88574L3.01172 7.70312C3.1343 6.73401 4.20443 5 7 5C9.46623 5 10.5785 6.90816 11.293 7.62207L12 8.32812L12.707 7.62207C13.4215 6.90816 14.5338 5 17 5Z" stroke="#111111" stroke-width="2"/>
              </svg>
            </button>
            <div class="brand-info">
              <div class="brand-name">
                {{ brand.name }}
                <span v-for="tag in brand.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <span class="brand-name-ko">{{ brand.nameKo }}</span>
            </div>
          </div>
        </div>
        <div v-else-if="Object.keys(groupedBrands).length > 0">
          <!-- 검색어가 없고, 그룹화된 브랜드가 있을 때 -->
          <div v-for="(brands, initial) in groupedBrands" :key="initial" class="brand-group">
            <div class="initial-header">{{ initial }}</div>
            <div v-for="brand in brands" :key="brand.id" class="brand-item">
              <button class="like-button" @click="toggleLike(brand.id)">
                <svg :class="{ liked: brand.isLiked }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 5C19.9816 5 21 6.97251 21 7.88574V8.85742C20.9999 10.869 19.7501 12.8069 17.792 14.7686C16.0265 16.5372 13.9223 18.1103 12 19.6973C10.0777 18.1103 7.97351 16.5372 6.20801 14.7686C4.2499 12.8069 3.00011 10.869 3 8.85742V7.88574L3.01172 7.70312C3.1343 6.73401 4.20443 5 7 5C9.46623 5 10.5785 6.90816 11.293 7.62207L12 8.32812L12.707 7.62207C13.4215 6.90816 14.5338 5 17 5Z" stroke="#111111" stroke-width="2"/>
                </svg>
              </button>
              <a href="" class="brand-info">
                <div class="brand-name">
                  {{ brand.name }}
                  <span v-for="tag in brand.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
                <span class="brand-name-ko">{{ brand.nameKo }}</span>
              </a>
            </div>
          </div>
        </div>
        <div v-else class="no-brands-message">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.5859 1L55 10.4141V63H9V1H45.5859Z" stroke="#333333" stroke-width="2"/>
            <rect x="30" y="45" width="4" height="4" rx="2" fill="#333333"/>
            <path d="M30.0606 18.9991C30.0274 17.905 30.9054 17 32 17C33.0946 17 33.9726 17.905 33.9394 18.9991L33.3737 37.6673C33.3512 38.4098 32.7428 39 32 39C31.2572 39 30.6488 38.4098 30.6263 37.6673L30.0606 18.9991Z" fill="#333333"/>
          </svg>
          검색 결과 또는 해당 초성의 브랜드가 없습니다.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.brand-page {
  padding: 32px 0 40px;

  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    margin: 0 20px 40px;

    input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 14px;
      color: #111;
      padding: 16px 12px;
      &::placeholder {
        color: #999;
      }
    }

    .search-icon {
      background: none;
      border: none;
      cursor: pointer;
      padding: 12px;
      svg {
        display: block;
      }
    }
  }

  .tabs {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eee;
    margin: 0 20px;

    button {
      flex: 1;
      padding: 20px 0;
      background: none;
      border: none;
      font-size: 16px;
      font-weight: 400;
      color: #999;
      cursor: pointer;
      position: relative;

      &.active {
        color: #111;
        font-weight: 500;
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #111;
        }
      }
    }
  }

  .alphabet-swiper {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    margin: 24px 20px;
    gap: 8px;

    // 스크롤바 숨기기 (크롬, 엣지, 사파리)
    &::-webkit-scrollbar {
      display: none;
    }
    // 스크롤바 숨기기 (파이어폭스)
    -ms-overflow-style: none;
    scrollbar-width: none;

    button {
      flex: 0 0 auto;
      flex-shrink: 0; /* 버튼이 줄어들지 않도록 */
      width: 48px;
      height: 48px;
      background-color: #fff;
      border: 1px solid #eee;
      font-size: 15px;
      font-weight: 500;
      color: #666;
      cursor: pointer;
      transition: all 0.2s ease;

      &.active {
        background-color: #333;
        color: #fff;
        border-color: #333;
      }
      &:hover:not(.active) {
        background-color: #e8e8e8;
      }
    }

    .swiper-slide {
      width: auto;
    }
  }

  .brand-list-container {
    margin-top: 20px;
    padding: 0 20px;

    .brand-group {
      margin-bottom: 32px;
      .initial-header {
        color: #111;
        font-size: 22px;
        font-weight: 600;
        line-height: 35px;
        margin-bottom: 16px;
      }
    }
    .my-brand-list {
      display: flex;
    }

    .brand-item {
      flex-basis: 50%;
      display: flex;
			flex-wrap: wrap;
      align-items: flex-start;
      padding: 12px 0;
			gap: 12px;

      .like-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        flex-shrink: 0;
        svg {
          display: block;
          stroke-width: 1.5;
        }
        .liked {
          fill: #111; /* 좋아요 상태일 때 하트 채우기 */
          stroke: #111; /* 좋아요 상태일 때 테두리 색 */
        }
      }

			.brand-info {
				display:flex;
				flex-direction: column;
				gap: 4px;
			}

      .brand-name {
				display:flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
      }
      .brand-name-ko {
        font-size: 13px;
        color: #666;
        flex-grow: 1; /* 한국어 이름이 남은 공간 차지 */
      }
      .tag {
        font-size: 11px;
        padding: 3px 6px;
        border-radius: 2px;
        background-color: #f0f0f0;
        color: #666;
      }
    }
    .no-login-message {
      text-align: center;
      padding: 26px 0 40px;
      color: #111;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      a {
        text-decoration: underline;
      }
    }
    .no-brands-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding: 60px 0;
      color: #111;
      font-size: 14px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
