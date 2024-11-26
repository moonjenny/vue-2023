<script>
import { reactive } from 'vue';
import prodType1 from '../display/displayCom/prodType01.vue';

export default {
  setup() {
    const state = reactive({
      imageSrc: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/main-banner-02.png",
      imageAlt: "배너 설명",
      brandName: "LINE STUDIO ONE",
      brandLike: true, // 좋아요
      brandText: "브랜드 한 줄 설명이 보여집니다. 브랜드 한 줄 설명이 보여집니다.",
      brandBtnGo: "브랜드 홈 바로가기"
    });

    const toggleBrandLike = () => {
      state.brandLike = !state.brandLike;
    };

    return {
      state,
      toggleBrandLike
    };
  },
  components: {
    prodType1
  }
};
</script>

<template>
  <section class="detail-brand">
    <div class="brand-image">
      <img :src="state.imageSrc" :alt="state.imageAlt">
    </div>
    <div class="brand-info">
      <span class="name">{{ state.brandName }}</span>
      <button type="button" class="btn-like" :class="{ 'active': state.brandLike }" @click="toggleBrandLike"> 좋아요 </button>
      <span class="explanation">{{ state.brandText }}</span>
      <button type="button" class="btn-go">{{ state.brandBtnGo }}</button>
    </div>
  </section>
  <section class="detail-recom">
    <!-- 추천상품 상품 리스트 -->
    <prodType1 />
  </section>
</template>

<style lang="scss">
.detail-brand {
  position: relative;
  margin: 12px 0 0;
  .brand-image {
    img {
      width: 100%;
    }
  }
  .brand-info {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 60px;
    span {
      display: block;
      color: #fff;
      &.name {
        display: inline-flex;
        font-size: 24px;
        line-height: 24px;
        font-weight: 500;
      }
      &.explanation {
        margin-top: 16px;
        font-size: 14px;
        line-height: 22px;
      }
    }
    .btn-like {
      margin-left: 12px;
      display: inline-flex;
      width: 24px;
      height: 24px;
      font-size: 0;
      color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.283 6.76851L12 7.50599L12.717 6.76851C12.7593 6.72497 12.8063 6.67529 12.8581 6.62062C13.4993 5.94316 14.8652 4.5 17 4.5C18.2999 4.5 19.2781 5.2489 19.9799 6.30386C20.6991 7.38503 21 8.6096 21 9.15714C21 11.5874 19.7259 13.5287 17.8059 15.3802C16.8465 16.3053 15.758 17.1773 14.6322 18.0619C14.5092 18.1585 14.3856 18.2554 14.2618 18.3525C13.5031 18.9474 12.732 19.5519 12.0024 20.171C11.3622 19.6202 10.6885 19.0696 10.0183 18.5218C9.80634 18.3486 9.59478 18.1757 9.38474 18.0032C8.26204 17.081 7.1692 16.1587 6.20584 15.1988C4.25851 13.2584 3 11.3184 3 9.15714C3 8.6096 3.30091 7.38503 4.02011 6.30386C4.72187 5.2489 5.70014 4.5 7 4.5C9.12243 4.5 10.5228 5.97081 11.1582 6.63826C11.2037 6.68608 11.2453 6.72977 11.283 6.76851Z' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
      &.active {
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.283 6.76851L12 7.50599L12.717 6.76851C12.7593 6.72497 12.8063 6.67529 12.8581 6.62062C13.4993 5.94316 14.8652 4.5 17 4.5C18.2999 4.5 19.2781 5.2489 19.9799 6.30386C20.6991 7.38503 21 8.6096 21 9.15714C21 11.5874 19.7259 13.5287 17.8059 15.3802C16.8465 16.3053 15.758 17.1773 14.6322 18.0619C14.5092 18.1585 14.3856 18.2554 14.2618 18.3525C13.5031 18.9474 12.732 19.5519 12.0024 20.171C11.3622 19.6202 10.6885 19.0696 10.0183 18.5218C9.80634 18.3486 9.59478 18.1757 9.38474 18.0032C8.26204 17.081 7.1692 16.1587 6.20584 15.1988C4.25851 13.2584 3 11.3184 3 9.15714C3 8.6096 3.30091 7.38503 4.02011 6.30386C4.72187 5.2489 5.70014 4.5 7 4.5C9.12243 4.5 10.5228 5.97081 11.1582 6.63826C11.2037 6.68608 11.2453 6.72977 11.283 6.76851Z' fill='white' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
      }
    }
    .btn-go {
      position: relative;
      display: block;
      margin-top: 24px;
      padding: 0 24px;
      width: 100%;
      height: 48px;
      color: #fff;
      font-size: 14px;
      text-align: left;
      border: 1px solid #fff;
      background-color: transparent;
      backdrop-filter: blur(1px);
      &::after {
        content: '';
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        width: 18px;
        height: 9px;
        background-image: url("data:image/svg+xml,%3Csvg width='19' height='11' viewBox='0 0 19 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='5' width='18' height='1' fill='white'/%3E%3Cpath d='M14 1L18 5.5L14 10' stroke='white' stroke-linecap='square'/%3E%3C/svg%3E%0A");
      }
    }
  }
	+ .detail-recom {
		padding-top: 20px;
	}
}
</style>
