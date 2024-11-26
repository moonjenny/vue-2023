<template>
  <section class="filter-colors">
    <div class="list">
      <!-- 버튼들에 selected 클래스를 바인딩하여 토글 기능 구현 -->
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ selected: selectedButtonIndices.has(index) }"
        @click="toggleSelected(index)"
        type="button"
      >
        <span data-id="color-chip" :style="{ backgroundColor: button.color }"></span>
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

// 필터 버튼들의 텍스트 배열과 색상 매칭
const buttons = [
  { text: '버튼1', color: 'rgb(150, 79, 51)' },
  { text: '버튼2', color: 'rgb(255, 236, 204)' },
  { text: '버튼3', color: 'rgb(0, 0, 0)' },
  { text: '버튼4', color: 'rgb(2, 59, 116)' },
  { text: '버튼5', color: 'rgb(234, 2, 118)' },
  { text: '버튼6', color: 'rgb(0, 0, 0)' },
  { text: '버튼7', color: 'rgb(2, 59, 116)' },
  { text: '버튼8', color: 'rgb(234, 2, 118)' },
  { text: '버튼9', color: 'rgb(136, 103, 150)' },
  { text: '버튼10', color: 'rgb(136, 103, 150)' },
];

// 선택된 버튼의 인덱스를 추적하는 set
const selectedButtonIndices = ref(new Set());

// 버튼 클릭 시 selected 클래스를 토글하는 함수
const toggleSelected = (index) => {
  if (selectedButtonIndices.value.has(index)) {
    // 이미 선택된 버튼을 다시 클릭한 경우, 선택 해제
    selectedButtonIndices.value.delete(index);
  } else {
    // 새로운 버튼을 선택한 경우, 해당 버튼의 인덱스 추가
    selectedButtonIndices.value.add(index);
  }
};
</script>
<style lang="scss">
.filter-colors {
  padding: 12px 20px;
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    button {
      width: 38px;
      height: 38px;
      padding: 4px;
      cursor: pointer;
      background-size: cover;
      border: 1px solid #eeeeee;
      border-radius: 50%;
      background-color: #fff;
      span {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #eeeeee;
      }
      &.selected {
        border-color: #111;
        span {
          background-color: #111;
        }
      }
    }
  }
}
</style>