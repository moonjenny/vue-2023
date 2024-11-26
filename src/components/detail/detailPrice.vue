<script>
  export default {
    data() {
      return {
        review: {
          width: "width:50%", // 리뷰에 대한 너비 설정 (CSS 스타일)
          number: "2.5", // 리뷰 점수
        },
        flags: [
          { type: 'black', text: 'HOT' },
          { type: 'black', text: 'NEW' },
          { type: 'black', text: '무료배송' },
          { type: 'black', text: '사은품' },
          { type: 'white', text: 'flag white' },
          { type: 'red', text: 'flag red' },
          { type: 'blue', text: 'flag blue 길어지면 다음단락으로' },
        ],
        description: '한 줄 설명이 보여집니다. 한 줄 설명이 보여집니다. 한 줄 설명이 보여집니다. 한 줄 설명이 보여집니다.'
      };
    },
    methods: {
      scrollToSection(id) {
        const element = document.getElementById(id);
        const header = document.querySelector('.header');
        const detailTab = document.querySelector('.detail-tab');
        const headerHeight = header ? header.offsetHeight : 0;
        const tabHeight = detailTab ? detailTab.offsetHeight : 0;
        
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight - tabHeight;
          window.scrollTo({
            top: offsetPosition,
            // behavior: 'smooth'
          });
        }
      }
    }
  };
</script>

<template>
  <section class="detail-flags">
    <span v-for="flag in flags" :class="'flag-' + flag.type">{{ flag.text }}</span>
  </section>
  <section class="detail-description">
    {{ description }}
  </section>
  <section class="detail-price">
    <i>할인가</i><span class="discount">197,100<em>원</em></span>
    <i>정상가</i><span class="original">219,000원</span>
    <i>할인율</i><span class="percentage">10%</span>
  </section>
  <section class="detail-reivew">
    <span class="star">
      <span class="star-icon">
        <em :style="review.width"></em>
      </span>
      <span class="star-num">{{ review.number }}</span>
    </span>
    <a href="javascript:void(0)" @click="scrollToSection('review')">리뷰 10</a>
  </section>
</template>

<style lang="scss">
  .detail{
    &-flags {
      margin: 16px 0;
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      span {
        display: flex;
        align-items: center;
        padding: 4px;
        font-size: 11px;
        line-height: 10px;
      }
      .flag{
        &-black {
          color: #fff;
          border: 1px solid #000;
          background-color: #000;
        }
        &-white {
          color: #000;
          border: 1px solid #000;
          background-color: #fff;
        }
        &-red {
          color: #fff;
          border: 1px solid #FF2A00;
          background-color: #FF2A00;
        }
        &-blue {
          color: #fff;
          border: 1px solid #0000BF;
          background-color: #0000BF;
        }
      }
    }
    &-description {
      margin: 16px 20px;
      font-size: 13px;
      font-size: 13px;
      line-height: 19px;
      color: #999999;
    }
    &-price {
      display: flex;
      align-items: center;
      margin: 16px 20px 12px;
      i {
        font-size: 0;
        color: #fff;
      }
      span {
        display: inline-flex;
        align-items: center;
      }
      .discount {
        margin-right: 12px;
        font-size: 24px;
        color: #111;
        font-weight: 700;
        em {
          font-size: 16px;
          font-weight: 500;
        }
      }
      .original {
        margin-right: 16px;
        color: #999;
        font-size: 16px;
        text-decoration: line-through;
      }
      .percentage {
        font-size: 24px;
        font-weight: 700;
      }
    }
    &-reivew {
      margin: 16px 20px 24px;
      display: flex;
      align-items: center;
      .star {
        display: flex;
        align-items: center;
        .star-icon {
          display: block;
          width: 93px;
          height: 16px;
          background: url(@/assets/images/common/star-gray.svg) no-repeat;
          em {
            display: block;
            width: 93px;
            height: 16px;
            background: url(@/assets/images/common/star-black.svg) no-repeat;
          }
        }
        .star-num {
          margin-left: 12px;
          font-size: 13px;
          color: #111;
          font-weight: 500;
        }
      }
      a {
        position: relative;
        margin-left: 12px;
        padding-left: 12px;
        padding-right: 12px;
        border-left: 1px solid #CCCCCC;
        font-size: 13px;
        &::after {
          content:'';
          position: absolute;
          right: 0;
          top: 50%;
          width: 7px;
          height: 12px;
          transform: translateY(-50%);
          background-image: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6L1 10.5' stroke='%23111111' stroke-linecap='square'/%3E%3C/svg%3E%0A");
        }
      }
    }
  }

</style>