<script setup>
import { ref } from 'vue';

// 주문 증정 프로모션 데이터를 정의합니다.
const promotionData = ref({
  name: '자동지급형 사은품 증정 프로모션',
  date: '(2020-11-01~2022-11-30)',
  items: [
    {
      image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
      brand: 'LYNN',
      name: '클래식 크롭 테일러드 자켓 클래식 크롭 테일러드 자켓 클래식 크롭 테일러드 자켓 클래식 크롭 테일러드 자켓',
      options: '브라운 / 55',
      soldout: false, // 품절 아님
    },
    {
      image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
      brand: 'LYNN',
      name: '클래식 크롭 테일러드 자켓',
      options: '브라운 / 55',
      soldout: true, // 품절
    },
    {
      image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
      brand: 'LYNN',
      name: '클래식 크롭 테일러드 자켓',
      options: '브라운 / 55',
      soldout: false, // 품절 아님
    },
  ],
});
</script>

<template>
  <section class="order-promotion">
    <h3>주문 증정 프로모션</h3>
    <div class="promotion-name">{{ promotionData.name }}</div>
    <span class="promotion-data">{{ promotionData.date }}</span>

    <ul class="promotion-list">
      <li v-for="(item, index) in promotionData.items" :key="index" :class="{ 'soldout': item.soldout }">
        <span class="soldout" v-if="item.soldout"><b>품절</b></span>
        <div class="thumb"><img :src="item.image" :alt="item.name"></div>
        <div class="info">
          <span class="brand">{{ item.brand }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="options">{{ item.options }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  .order-promotion {
    margin: 60px 0 0;
    h3 {
      padding-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      border-bottom: 1px solid #333;
    }
    .promotion {
      &-name {
        padding:24px 0 0;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: #111111;
      }
      &-data {
        display: block;
        padding-top:2px;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #666666;
      }
      &-list {
        li {
          position: relative;
          margin:24px 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          .thumb {
            width: 74px;
            img {
              width: 100%;
              vertical-align: top;
            }
          }
          .info {
            flex: 1;
            .brand {
              display: block;
              font-size:12px;
              color: #333333;
            }
            .name {
              display: block;
              margin: 8px 0 0;
              font-size:13px;
              color: #111111;
            }
            .options {
              display: block;
              margin: 12px 0 0;
              font-size:13px;
              color: #666666;
            }
          }
          .soldout {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255,255,255,0.7);
            b {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 74px; /* 썸네일 너비와 동일하게 설정 */
              height: 100%;
              font-size: 14px;
              color: #666666;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
</style>