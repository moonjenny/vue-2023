

<template>
  <section class="filter-brand">

    <div class="brand-search">
      <!-- 검색 -->
      <div class="brand-search-form">
        <input class="" placeholder="검색어를 입력해 주세요." v-model="searchKeyword" @input="filterBrands">
        <button class="btn-delete" type="button" v-show="searchKeyword.length > 0" @click="clearSearchKeyword"></button>
        <button class="btn-search" type="button" @click="searchBrands">검색하기</button>
      </div>
      <!-- 브랜드 정렬하기 -->
      <div class="brand-sorts">
        <!-- 한글 브랜드 정렬 라디오 버튼 -->
        <span class="radio">
          <input type="radio" id="rdoId-1" name="rdoId" v-model="selectedRadio" value="rdoId-1">
          <label class="" for="rdoId-1">ㄱ-ㅎ</label>
        </span>
        <!-- 영문 브랜드 정렬 라디오 버튼 -->
        <span class="radio">
          <input type="radio" id="rdoId-2" name="rdoId" v-model="selectedRadio" value="rdoId-2">
          <label class="" for="rdoId-2">A-Z</label>
        </span>
      </div>
    </div>

    <div class="brand-list">
      <!-- 한글 브랜드 리스트 -->
      <span v-if="isKoreanSort || !selectedRadio" v-for="(brand, index) in sortedKoreanBrands" :key="`korean-${index}`" class="checkbox" v-show="!brand.hidden">
        <input type="checkbox" :id="`chkId-${index}`" :name="`chkId-${index}`" v-model="brand.checked">
        <label :for="`chkId-${index}`">{{ brand.name }}</label>
      </span>
      <!-- 영문 브랜드 리스트 -->
      <span v-else v-for="(brand, index) in sortedEnglishBrands" :key="`english-${index}`" class="checkbox" v-show="!brand.hidden">
        <input type="checkbox" :id="`chkId-${index}`" :name="`chkId-${index}`" v-model="brand.checked">
        <label :for="`chkId-${index}`">{{ brand.name }}</label>
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// 한글 브랜드 리스트
const koreanBrands = ref([
  { name: '린', checked: false },
  { name: '라인 에디션', checked: false },
  { name: '케네스레이디', checked: false },
  { name: '가가가가가가', checked: false },
  { name: '하하하하', checked: false },
  { name: '가하가하가하', checked: false },
  // 다른 한글 브랜드들을 추가하고 모두 `checked: false`로 설정합니다.
]);

// 영문 브랜드 리스트
const englishBrands = ref([
  { name: 'Chloe', checked: false },
  { name: 'Dear K', checked: false },
  { name: 'PLEATS PLEASE ISSEY MIYAKE', checked: false },
  { name: 'NNNNN', checked: false },
  { name: 'AAAAAA', checked: false },
  { name: 'ZZZZZ', checked: false },
  { name: 'Zaaaaa', checked: false },
  // 다른 영문 브랜드들을 추가하고 모두 `checked: false`로 설정합니다.
]);

// 선택된 정렬 라디오 버튼을 추적합니다. 초기에는 'rdoId-1'로 설정하여 한글 브랜드 리스트를 보여줍니다.
const selectedRadio = ref('rdoId-1');

// 한글 정렬인지 영문 정렬인지 확인하는 계산된 속성
const isKoreanSort = computed(() => selectedRadio.value === 'rdoId-1');

// 한글 브랜드 리스트를 '가나다' 순서로 정렬하여 보여주기
const sortedKoreanBrands = computed(() => {
  return koreanBrands.value.sort((a, b) => a.name.localeCompare(b.name));
});

// 영문 브랜드 리스트를 'a.b,c,d' 순서로 정렬하여 보여주기
const sortedEnglishBrands = computed(() => {
  return englishBrands.value.sort((a, b) => a.name.localeCompare(b.name));
});

// 검색어를 추적하는 ref
const searchKeyword = ref('');

// 검색어에 따라 브랜드 리스트를 필터링하는 함수
const filterBrands = () => {
  // 검색어가 없으면 모든 브랜드를 보여줍니다.
  if (!searchKeyword.value) {
    koreanBrands.value.forEach((brand) => (brand.hidden = false));
    englishBrands.value.forEach((brand) => (brand.hidden = false));
    return;
  }

  // 검색어가 있으면 소문자로 변환한 뒤 브랜드 리스트와 비교하여 필터링합니다.
  const lowerCaseKeyword = searchKeyword.value.toLowerCase();
  koreanBrands.value.forEach((brand) => {
    brand.hidden = !brand.name.toLowerCase().includes(lowerCaseKeyword);
  });
  englishBrands.value.forEach((brand) => {
    brand.hidden = !brand.name.toLowerCase().includes(lowerCaseKeyword);
  });
};

// 검색 버튼 클릭 시 검색어로 브랜드를 필터링합니다.
const searchBrands = () => {
  filterBrands();
};

// 검색어를 지우는 함수
const clearSearchKeyword = () => {
  searchKeyword.value = '';
  filterBrands();
};
</script>

<style lang="scss">
.filter-brand {
  padding: 12px 20px;
  height:100%;
  overflow:hidden;

  .brand-search {
    padding:8px 0 17px;
    border-bottom:1px solid #eee;

    .brand-search-form {
      position:relative;
      input {
        padding:10px 48px 10px 10px;
        width:100%;
        height:40px;
        font-size:14px;
        border:1px solid #ccc;
      }
      .btn-search {
        position:absolute;
        right:0;
        top:0;
        width:40px;
        height:40px;
        font-size:0;
        background: url(/vue-2023/src/assets/images/common/btn-search.svg) center center no-repeat;
      }
      .btn-delete {
        position:absolute;
        right:40px;
        top:50%;
        transform:translateY(-50%);
        width:30px;
        height:30px;
        font-size:0;
        background: url(/vue-2023/src/assets/images/display/btn-close.svg) center center no-repeat;
        background-size:12px auto;
      }
    }

    .brand-sorts {
      display:flex;
      margin:20px 0 0;
      .radio {
        margin-right:24px;

      }
    }
  }


  .brand-list {
    height: calc(100% - 90px);
    overflow:auto;
    padding-top:12px;
    .checkbox {
      margin: 0 0 12px;
    }
  }
}

</style>