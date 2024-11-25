<script>
export default {
  data() {
    return {      
      gift: {
        comment: "20,000원 이상 구매 시 사은품을 증정합니다.",
        prodimage: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-thumnail.png",
        prodalt: "상품이미지",
        prodbrand: "LYNN",
        prodname: "사은품명 사은품명 사은품명 사은품명 사은품명 사은품명 사은품명 사은품명 사은품명 "
      }
    };
  },
};
  
</script>

<template>
  <section class="detail-gift">
    <div class="comment">{{ gift.comment }}</div>
    <span class="prod">
      <span class="thumb">
        <img :src="gift.prodimage" :alt="gift.prodalt">
      </span>
      <span class="info">
        <span class="brand">{{ gift.prodbrand }}</span>
        <span class="name">{{ gift.prodname }}</span>
        <button type="button" class="go-detail">상세보기</button>
      </span>
    </span>
  </section>
</template>

<style lang="scss"> 
  .detail {
    &-gift {
      padding: 24px 20px;
      border-top: 1px solid #eeeeee;
      background-color: #f6f6f6;
      .comment {
        font-size: 14px;
      }
      .prod {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        margin-top: 12px;
        .thumb {
          flex-basis: 74px;
          margin-right: 8px;
          img {
            width: 100%;
          }
        }
        .info {
          flex-basis: calc(100% - 82px);
          .brand {
            display: block;
            margin-bottom: 8px;
            font-size: 13px;
            color: #333;
          }
          .name {
            font-size: 14px;
            color: #111;
            line-height: 17px;
            font-weight: 500;
          }
          .go-detail {
            position: absolute;
            bottom: 0;
            right: 0;
            font-size: 13px;
            color: #999;
            text-decoration: underline;

          }
        }
      }
    }
  }

</style>