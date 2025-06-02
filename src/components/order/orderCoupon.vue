<script setup>
import { ref } from 'vue';

// 쿠폰 데이터를 정의합니다.
const coupons = ref([
  {
    type: '상품할인쿠폰',
    value: 0,
    unit: '원',
    inputType: 'number',
    availableCount: 0,
  },
  {
    type: '주문할인쿠폰',
    value: -3000,
    unit: '원',
    inputType: 'number',
    availableCount: 0,
  },
  {
    type: '무료배송쿠폰',
    value: -2500,
    unit: '원',
    inputType: 'number',
    availableCount: 0,
  },
  {
    type: '사은품증정쿠폰',
    value: '선택한 쿠폰 3',
    unit: '장',
    inputType: 'text',
    availableCount: 0,
  },
]);

// 쿠폰 정보 메시지를 정의합니다.
const couponInfoMessages = ref([
  '추가구성품은 쿠폰할인에서 제외됩니다.',
]);
</script>

<template>
  <section class="order-coupon">
    <h3>할인 및 혜택</h3>

    <div class="coupon-box" v-for="(coupon, index) in coupons" :key="index">
      <h4 class="coupon-title">{{ coupon.type }}</h4>
      <div class="coupon-input">
        <div>
          <input :type="coupon.inputType" :value="coupon.value">
          <span>{{ coupon.unit }}</span>
        </div>
        <button type="button">쿠폰 조회/적용</button>
      </div>
      <span class="coupon-available">(사용가능한 쿠폰 <strong>{{ coupon.availableCount }}</strong>장)</span>
    </div>
    
    <div class="coupon-info">
      <ul>
        <li v-for="(message, index) in couponInfoMessages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"> 
  .order-coupon {
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

    .coupon {
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
        margin: 24px 0 0;
        ul {
          padding: 24px 20px;
          background-color: #F6F6F6;
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
              top: 8px;
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
  }
</style>