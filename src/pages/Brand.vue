<script setup>
import { ref, computed, onMounted } from 'vue';

// 더미 브랜드 데이터 (실제로는 API에서 가져옵니다)
const allBrands = ref([
  { id: 'apc', name: 'A.P.C.', nameKo: '아페쎄', isNew: false, isLiked: false },
  { id: 'agolde', name: 'AGOLDE', nameKo: '에이골디', isNew: false, isLiked: false },
  { id: 'aloyoga', name: 'ALO YOGA', nameKo: '알로 요가', isNew: false, isLiked: false },
  { id: 'amiparis', name: 'AMI PARIS', nameKo: '아미 파리스', isNew: false, isLiked: false },
  { id: 'anitabilardi', name: 'ANITA BILARDI', nameKo: '아니타 빌라디', isNew: false, isLiked: false },
  { id: 'autry', name: 'AUTRY', nameKo: '오트리', isNew: false, isLiked: false },
  { id: 'balenciaga', name: 'BALENCIAGA', nameKo: '발렌시아가', isNew: false, isLiked: false },
  { id: 'baobaobisseymiyake', name: 'BAOBAO ISSEY MIYAKE', nameKo: '바오바오 이세이 미야케', isNew: false, isLiked: false },
  { id: 'barena', name: 'BARENA', nameKo: '바레나', isNew: false, isLiked: false },
  { id: 'bogner', name: 'BOGNER', nameKo: '보그너', isNew: false, isLiked: false },
  { id: 'burberry', name: 'BURBERRY', nameKo: '버버리', isNew: false, isLiked: false },
  { id: 'byfar', name: 'BY FAR', nameKo: '바이파', isNew: false, isLiked: false },
  { id: 'camper', name: 'CAMPER', nameKo: '캠퍼', isNew: false, isLiked: false },
  { id: 'chloe', name: 'CHLOE', nameKo: '끌로에', isNew: false, isLiked: false },
  { id: 'nike', name: 'NIKE', nameKo: '나이키', isNew: true, isLiked: false },
  { id: 'adidas', name: 'ADIDAS', nameKo: '아디다스', isNew: true, isLiked: false },
  { id: 'zara', name: 'ZARA', nameKo: '자라', isNew: false, isLiked: false },
  { id: 'cos', name: 'COS', nameKo: '코스', isNew: false, isLiked: false },
  { id: 'gucci', name: 'GUCCI', nameKo: '구찌', isNew: false, isLiked: false },
  { id: 'chanel', name: 'CHANEL', nameKo: '샤넬', isNew: false, isLiked: false },
  { id: 'prada', name: 'PRADA', nameKo: '프라다', isNew: false, isLiked: false },
  { id: 'louisvuitton', name: 'LOUIS VUITTON', nameKo: '루이비통', isNew: false, isLiked: false },
]);

// 사용자 로그인 상태 (더미) - 로그인 여부에 따라 'MY' 탭 메시지 변경
const isLoggedIn = ref(true); 

// 현재 활성화된 탭 ('MY', 'A-Z', 'ㄱ-ㅎ')
const activeTab = ref('A-Z');

// 현재 선택된 알파벳/초성 필터 ('ALL', 'A', 'B', 'ㄱ', ...)
const selectedAlpha = ref('ALL');

// 검색어 입력 필드
const searchTerm = ref('');

// 알파벳 배열 (A-Z 탭용 스와이퍼 메뉴)
const alphabets = ref(['ALL', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))]);
// 한글 초성 배열 (ㄱ-ㅎ 탭용)
const koreanConsonants = ref([
  'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]);

// 좋아요 기능 토글 함수
const toggleLike = (brandId) => {
  const brand = allBrands.value.find(b => b.id === brandId);
  if (brand) {
    brand.isLiked = !brand.isLiked;
  }
};

// 필터링된 브랜드 목록 (검색어, 탭, 알파벳/초성 필터 적용)
const filteredBrands = computed(() => {
  let brands = [...allBrands.value]; // 모든 브랜드를 복사하여 시작

  // 1. 검색어 필터링 (항상 적용)
  if (searchTerm.value) {
    const query = searchTerm.value.toLowerCase();
    brands = brands.filter(brand =>
      brand.name.toLowerCase().includes(query) || brand.nameKo.toLowerCase().includes(query)
    );
  }

  // 2. 탭별 필터링
  if (activeTab.value === 'MY') {
    return brands.filter(brand => brand.isLiked); // 좋아요 누른 브랜드만 반환
  } else if (activeTab.value === 'A-Z') {
    if (selectedAlpha.value !== 'ALL') {
      brands = brands.filter(brand => brand.name.startsWith(selectedAlpha.value));
    }
  } else if (activeTab.value === 'ㄱ-ㅎ') {
    if (selectedAlpha.value !== 'ALL') {
      brands = brands.filter(brand => {
        // 한글 초성 필터링 로직
        const firstChar = brand.nameKo.charCodeAt(0);
        if (firstChar >= 0xAC00 && firstChar <= 0xD7A3) { // 한글 유니코드 범위
          const unicodeOffset = (firstChar - 0xAC00);
          const jong = unicodeOffset % 28; // 종성
          const jung = ((unicodeOffset - jong) / 28) % 21; // 중성
          const cho = (((unicodeOffset - jong) / 28) - jung) / 21; // 초성

          const choConsonant = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'][cho];
          return choConsonant === selectedAlpha.value;
        }
        return false;
      });
    }
  }
  return brands.sort((a, b) => a.name.localeCompare(b.name)); // 이름순 정렬 (영문 우선)
});

// 알파벳/초성별로 그룹화된 브랜드 목록 (A-Z, ㄱ-ㅎ 탭에서 사용, 검색어가 없을 때)
const groupedBrands = computed(() => {
  const groups = {};
  const currentBrands = filteredBrands.value; // 현재 필터링된 브랜드 목록을 기반으로 그룹화

  if (!searchTerm.value) { // 검색어가 없을 때만 그룹화 (이미지와 동일)
    if (activeTab.value === 'A-Z') {
      alphabets.value.slice(1).forEach(alpha => { // 'ALL' 제외
        const brandsInGroup = currentBrands.filter(brand => brand.name.startsWith(alpha));
        if (brandsInGroup.length > 0) {
          groups[alpha] = brandsInGroup;
        }
      });
    } else if (activeTab.value === 'ㄱ-ㅎ') {
       koreanConsonants.value.forEach(consonant => {
        const brandsInGroup = currentBrands.filter(brand => {
          const firstChar = brand.nameKo.charCodeAt(0);
          if (firstChar >= 0xAC00 && firstChar <= 0xD7A3) { // 한글 유니코드 범위
            const unicodeOffset = (firstChar - 0xAC00);
            const jong = unicodeOffset % 28;
            const jung = ((unicodeOffset - jong) / 28) % 21;
            const cho = (((unicodeOffset - jong) / 28) - jung) / 21;
            const choConsonant = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'][cho];
            return choConsonant === consonant;
          }
          return false;
        });
        if (brandsInGroup.length > 0) {
          groups[consonant] = brandsInGroup;
        }
      });
    }
  }
  return groups;
});


// 탭 변경 시 호출될 함수
const changeTab = (tab) => {
  activeTab.value = tab;
  selectedAlpha.value = 'ALL'; // 탭 변경 시 알파벳/초성 필터 초기화
  searchTerm.value = ''; // 탭 변경 시 검색어 초기화
};

// 스와이퍼 메뉴 (알파벳/초성) 클릭 시 호출될 함수
const selectAlpha = (alpha) => {
  selectedAlpha.value = alpha;
};

// 컴포넌트 마운트 시 초기 좋아요 상태 설정 (실제 앱에서는 사용자 설정 또는 API 로드)
onMounted(() => {
  // 이미지에 보이는 'A.P.C.'와 'AGOLDE'를 좋아요 상태로 초기 설정
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

    <div class="alphabet-swiper" v-if="activeTab !== 'MY' && !searchTerm">
      <button
        v-for="alpha in (activeTab === 'A-Z' ? alphabets : koreanConsonants)"
        :key="alpha"
        :class="{ active: selectedAlpha === alpha }"
        @click="selectAlpha(alpha)"
      >
        {{ alpha }}
      </button>
    </div>

    <div class="brand-list-container">
      <!-- MY 탭 -->
      <div v-if="activeTab === 'MY'" class="my-brands">
        <div v-if="isLoggedIn && filteredBrands.length > 0">
          <div v-for="brand in filteredBrands" :key="brand.id" class="brand-item">
            <button class="like-button" @click="toggleLike(brand.id)">
              <svg :class="{ liked: brand.isLiked }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 5C19.9816 5 21 6.97251 21 7.88574V8.85742C20.9999 10.869 19.7501 12.8069 17.792 14.7686C16.0265 16.5372 13.9223 18.1103 12 19.6973C10.0777 18.1103 7.97351 16.5372 6.20801 14.7686C4.2499 12.8069 3.00011 10.869 3 8.85742V7.88574L3.01172 7.70312C3.1343 6.73401 4.20443 5 7 5C9.46623 5 10.5785 6.90816 11.293 7.62207L12 8.32812L12.707 7.62207C13.4215 6.90816 14.5338 5 17 5Z" stroke="#111111" stroke-width="2"/>
              </svg>
            </button>
            <div class="brand-info">
							<div class="brand-name">
                {{ brand.name }}
							  <span v-if="brand.isLiked" class="tag liked-tag">단독</span>
              </div>
							<span class="brand-name-ko">{{ brand.nameKo }}</span>
							<span v-if="brand.isNew" class="tag new">NEW</span>
						</div>
          </div>
        </div>
        <div v-else-if="!isLoggedIn" class="no-login-message">
          로그인하고 마이브랜드를 등록해주세요.
        </div>
        <div v-else class="no-brands-message">
          등록된 마이 브랜드가 없습니다.
        </div>
      </div>

      <!-- A-Z, ㄱ-ㅎ 탭 (그룹화된 목록 또는 검색 결과) -->
      <div v-else class="all-brands">
        <div v-if="searchTerm && filteredBrands.length > 0" class="search-results">
          <!-- 검색어가 있을 때는 그룹화하지 않고 필터링된 목록을 평면적으로 표시 -->
          <div v-for="brand in filteredBrands" :key="brand.id" class="brand-item">
            <button class="like-button" @click="toggleLike(brand.id)">
              <svg :class="{ liked: brand.isLiked }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 5C19.9816 5 21 6.97251 21 7.88574V8.85742C20.9999 10.869 19.7501 12.8069 17.792 14.7686C16.0265 16.5372 13.9223 18.1103 12 19.6973C10.0777 18.1103 7.97351 16.5372 6.20801 14.7686C4.2499 12.8069 3.00011 10.869 3 8.85742V7.88574L3.01172 7.70312C3.1343 6.73401 4.20443 5 7 5C9.46623 5 10.5785 6.90816 11.293 7.62207L12 8.32812L12.707 7.62207C13.4215 6.90816 14.5338 5 17 5Z" stroke="#111111" stroke-width="2"/>
              </svg>
            </button>
            <div class="brand-info">
              <div class="brand-name">
                {{ brand.name }}
                <span v-if="brand.isNew" class="tag new">NEW</span>
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
              <div class="brand-info">
                <div class="brand-name">
                  {{ brand.name }}
                  <span v-if="brand.isNew" class="tag new">NEW</span>
                </div>
                <span class="brand-name-ko">{{ brand.nameKo }}</span>
              </div>
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
    -webkit-overflow-scrolling: touch;
    margin: 24px 20px;
    gap: 8px;
    white-space: nowrap;

    // 스크롤바 숨기기 (크롬, 엣지, 사파리)
    &::-webkit-scrollbar {
      display: none;
    }
    // 스크롤바 숨기기 (파이어폭스)
    -ms-overflow-style: none;
    scrollbar-width: none;

    button {
      flex-shrink: 0; /* 버튼이 줄어들지 않도록 */
      width: 48px;
      height: 48px;
      border-radius: 50%;
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
  }

  .brand-list-container {
    margin-top: 24px;
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

    .brand-item {
      display: flex;
			flex-wrap: wrap;
      align-items: flex-start;
      padding: 8px 0;
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
        &.new {
          background-color: #f0f0f0;
          color: #666;
        }
        &.liked-tag { // '단독' 태그와 유사하게 적용
          background-color: #eee;
          color: #333;
          font-size: 11px;
        }
      }
    }
    .no-login-message {
      text-align: center;
      padding: 40px 0;
      color: #111;
      font-size: 14px;
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
