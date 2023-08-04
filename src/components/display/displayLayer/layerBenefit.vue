<template>
  <section class="filter-benefit">
    <div class="list">
      <!-- 버튼들에 selected 클래스를 바인딩하여 토글 기능 구현 -->
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ selected: selectedButtonIndices.has(index) }"
        @click="toggleSelected(index)"
        type="button"
      >
        {{ button }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// 필터 버튼들의 텍스트 배열
const buttons = ['할인', '무료배송', '사은품'];

// 선택된 버튼의 인덱스를 추적하는 set, 첫 번째 버튼 선택 (인덱스 0)
const selectedButtonIndices = ref(new Set([0]));

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
.filter-benefit {
  padding: 12px 20px;
  .list {
    display: flex;
    gap: 8px;

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 8px 10px 9px;
      background-color: #fff;
      border: 1px solid #eee;
      font-size: 14px;
      text-decoration: none;
      white-space: nowrap;
      color: #666;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
      appearance: none;
      &.selected {
        color: #fff;
        border-color: #111;
        background-color: #111;
      }
    }
  }
}
</style>
