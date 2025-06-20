<script setup>
//공통 헤더
import layerBrand from '/src/components/display/displayLayer/layerBrand.vue'
import layerColors from '/src/components/display/displayLayer/layerColors.vue'
import layerSize from '/src/components/display/displayLayer/layerSize.vue'
import layerBenefit from '/src/components/display/displayLayer/layerBenefit.vue'
import layerPrice from '/src/components/display/displayLayer/layerPrice.vue'
import layerPurpose from '/src/components/display/displayLayer/layerPurpose.vue'

// 상태와 관련된 리액티브 변수들을 가져옴
import { ref } from 'vue';

// 필터 버튼들의 텍스트 배열
const buttons = ['브랜드', '색상', '사이즈', '혜택', '가격', '쇼핑의 목적'];

// 선택된 버튼의 인덱스를 관리하기 위한 ref 변수
const activeButtonIndex = ref(0); // 초기값으로 0번째 버튼 선택

// 필터 버튼을 클릭했을 때 호출되는 함수
const selectButton = (index) => {
  activeButtonIndex.value = index; // 선택된 버튼의 인덱스 업데이트
};

// 필터 레이어를 닫을 때 호출되는 함수
const closeLayer = () => {
  // .layer-filter
  document.querySelector('.layer-filter').classList.remove('active');

  // body에서 .active 클래스 제거
  document.body.classList.remove('active');
};

</script>

<template>
  <!-- layer-filter -->
  <section class="layer-filter">
    <div class="filter-top">
      <h3 class="filter-title">필터</h3>
      <button type="button" class="btn-filter" @click="closeLayer">닫기</button>
    </div>
    <div class="filter-contents">
      <div class="filter-box">
        <div class="fliter-buttons">
          <div class="">
            <button
              v-for="(button, index) in buttons"
              :key="index"
              :class="{ selected: activeButtonIndex === index }"
              @click="selectButton(index)"
              type="button"
            >
              {{ button }}
            </button>
          </div>
        </div>
        <div class="filter-lists">
          <!-- 필터 버튼에 따라 해당하는 컨텐츠를 노출할 영역 -->
          <layerBrand v-if="activeButtonIndex === 0" />
          <layerColors v-if="activeButtonIndex === 1" />
          <layerSize v-if="activeButtonIndex === 2" />
          <layerBenefit v-if="activeButtonIndex === 3" />
          <layerPrice v-if="activeButtonIndex === 4" />
          <layerPurpose v-if="activeButtonIndex === 5" />
        </div>
      </div>
    </div>
    <div class="filter-buttons">
      <button type="button" class="btn-white">초기화</button>
      <button type="button" class="btn-black" @click="closeLayer">적용</button>
    </div>
  </section>
  <!-- //layer-filter -->
</template>


<style lang="scss">

/* layer-filter */
.layer-filter {
  position:fixed;
  top:0;
  right:-100%;
  width:100%;
  height:100%;
  z-index:999;
  transition: right 0.5s ease;
  overflow:auto;
  display: flex;
  flex-direction: column;
  background: #fff;

  &.active {
    right:0;
  }
}

.filter-top {
  position: sticky;
  top: 0;
  padding: 16px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #eeeeee;

  .filter-title {
    font-size: 22px;
    color: #111;
    font-weight: 500;
  }

  .btn-filter {
    width: 30px;
    height: 30px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/display/btn-close.svg) center center no-repeat;
  }
}

.filter-buttons {
  position: sticky;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:20px;

  button {
    width: calc(50% - 4px);
    padding: 13px 20px;
    font-size:14px;
    line-height:20px;

    &.btn-white {
      border:1px solid #111;
    }
    &.btn-black {
      color:#fff;
      background-color:#111;
    }
  }
}

.filter-contents {
  flex-grow: 1;
  overflow: auto;
  background-color:#f7f7f7;
  .filter-box {
    display:flex;
    height:100%;
    .fliter-buttons{
      div {
        display:flex;
        flex-direction:column;
        button {
          display: inline-flex;
          align-items: center;
          justify-content: start;
          padding: 20px 24px;
          border-bottom: 1px solid #eeeeee;
          font-size:14px;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          white-space: nowrap;
          &.selected {
            border-bottom: 1px solid #111111;
            background-color: #111;
            color: #fff!important;
          } 
        }
      }
    }
    .filter-lists {
      width:100%;
      height:100%;
      overflow:auto;
      box-sizing: border-box;
      background-color:#fff;
    }

  }
}


</style>
