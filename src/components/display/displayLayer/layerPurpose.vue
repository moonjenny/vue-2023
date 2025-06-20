

<template>
    <section class="filter-brand">
      <div class="brand-list">
        <!-- 한글 브랜드 리스트 -->
        <span v-if="isKoreanSort || !selectedRadio" v-for="(brand, index) in sortedKoreanBrands" :key="`korean-${index}`" class="checkbox" v-show="!brand.hidden">
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
    { name: '클래식룩', checked: false },
    { name: '데이트룩', checked: false },
    { name: '면접프리패스룩', checked: false },
    { name: '골프라운딩룩', checked: true },
    // 다른 한글 브랜드들을 추가하고 모두 `checked: false`로 설정합니다.
  ]);
    
  // 선택된 정렬 라디오 버튼을 추적합니다. 초기에는 'rdoId-1'로 설정하여 한글 브랜드 리스트를 보여줍니다.
  const selectedRadio = ref('rdoId-1');
  
  // 한글 정렬인지 영문 정렬인지 확인하는 계산된 속성
  const isKoreanSort = computed(() => selectedRadio.value === 'rdoId-1');
  
  // 한글 브랜드 리스트를 '가나다' 순서로 정렬하여 보여주기
  const sortedKoreanBrands = computed(() => {
    return koreanBrands.value.sort((a, b) => a.name.localeCompare(b.name));
  });
  
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
          background: url(@/assets/images/common/btn-search.svg) center center no-repeat;
        }
        .btn-delete {
          position:absolute;
          right:40px;
          top:50%;
          transform:translateY(-50%);
          width:30px;
          height:30px;
          font-size:0;
          background: url(@/assets/images/display/btn-close.svg) center center no-repeat;
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