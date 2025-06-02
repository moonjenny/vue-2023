<script setup>
import { ref } from 'vue';

// 적립금/예치금 데이터를 정의합니다.
const points = ref([
  {
    type: '적립금',
    value: 0,
    unit: '원',
    inputType: 'number',
    availablePoint: 10000,
    holdingPoint: 3000,
    info: ['1,000원 이상부터 10원 단위로 사용 가능합니다.'],
  },
  {
    type: '예치금',
    value: -3000,
    unit: '원',
    inputType: 'number',
    deposit: 3000,
    // 예치금에는 별도의 info 메시지가 없다고 가정합니다.
    info: [],
  },
]);
</script>

<template>
  <section class="order-point">
    <h3>적립금/예치금</h3>

    <div class="point-box" v-for="(point, index) in points" :key="index">
      <h4 class="point-title">{{ point.type }}</h4>
      <div class="point-input">
        <div>
          <input :type="point.inputType" :value="point.value">
          <span>{{ point.unit }}</span>
        </div>
        <button type="button">전체사용</button>
      </div>

      <span class="point-available" v-if="point.type === '적립금'">
        (사용가능한 적립금 : <strong>{{ point.availablePoint }}</strong>원 / 보유 적립금 : <strong>{{ point.holdingPoint }}</strong>원)
      </span>
      <span class="point-available" v-else-if="point.type === '예치금'">
        (보유 예치금 : <strong>{{ point.deposit }}</strong>원)
      </span>

      <ul class="point-info" v-if="point.info && point.info.length > 0">
        <li v-for="(infoMessage, infoIndex) in point.info" :key="infoIndex">{{ infoMessage }}</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"> 
  .order-point {
    margin: 60px 0 0;
    padding: 0 0 24px;
    border-bottom: 1px solid #EEEEEE;
    h3 {
      padding-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      border-bottom: 1px solid #333;
    }

    .point {
      &-box {
      }
      &-title {
        margin: 24px 0 12px;
        font-size: 14px;
        color: #111111;
        font-weight: 500;
      }
      &-input {
        display: flex;
        gap: 8px;
        div {
          position: relative;
          flex: 1;
          input {
            width: 100%;
            height: 48px;
            padding: 16px 30px 16px 16px;
            border: 1px solid #cccccc;
            text-align: right;
          }
          span {
            position:absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
          }
        }
        button {
          width: 120px;
          height: 48px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #111111;
        }
      }
      &-available {
        display: block;
        margin:12px 0 0;
        font-size: 14px;
        color: #666666;
        strong {
          font-weight: 400;
          color: #111111;
        }
      }
      &-info {
        margin: 12px 0 0;
        li {
          position: relative;
          padding-left: 12px;
          font-size: 13px;
          line-height: 19px;
          color: #666666;
          + li {
            margin-top: 4px;
          }
          &::after {
            content: '';
            position: absolute;
            top: 9px;
            left: 4px;
            width: 2px;
            height: 2px;
            border-radius: 2px;
            background-color: #666666;
          }
        }
      }
    }
  }
</style>