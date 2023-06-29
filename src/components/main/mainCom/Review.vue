<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "Best Review",
      
      reviews: [
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-01.png",
          alt: '리뷰',
          width: "width:50%",
          number: "2.5",
          text: "키 167에 평소 44반~55 사이즈 입습니다. 착장했을 때 이 자켓은 사진에는 차마 담겨있지 않은 엄청난 라인을 뽐낼 수 있게 합니다. 그냥 사진으로는 깔끔한 자켓 이정도로 생각했는데 실제 입으면 허리 라인, 어깨라인, 어깨에서 가슴으로 내려오는 라인 등등",
          prodimage: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-thumnail.png",
          prodalt: "상품이미지",
          prodbrand:"LYNN",
          prodname: "클래식 크롭 테일러드 자켓",
          prodprice: "219,000원"
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-01.png",
          alt: '리뷰',
          width: "width:25%",
          number: "1.3",
          text: "착장했을 때 이 자켓은 사진에는 차마 담겨있지 않은 엄청난 라인을 뽐낼 수 있게 합니다.",
          prodimage: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-thumnail.png",
          prodalt: "상품이미지",
          prodbrand:"LYNN",
          prodname: "클래식 크롭 테일러드 자켓",
          prodprice: "219,000원"
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-01.png",
          alt: '리뷰',
          width: "width:50%",
          number: "2.5",
          text: "키 167에 평소 44반~55 사이즈 입습니다. 착장했을 때 이 자켓은 사진에는 차마 담겨있지 않은 엄청난 라인을 뽐낼 수 있게 합니다. 그냥 사진으로는 깔끔한 자켓 이정도로 생각했는데 실제 입으면 허리 라인, 어깨라인, 어깨에서 가슴으로 내려오는 라인 등등",
          prodimage: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/review-thumnail.png",
          prodalt: "상품이미지",
          prodbrand:"LYNN",
          prodname: "클래식 크롭 테일러드 자켓",
          prodprice: "219,000원"
        }
      ]
    };
  },
};
</script>

<template>
  <section class="main-sec main-review">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>
    <div class="review-list">
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <a :href="review.link">
            <img :src="review.image" :alt="review.alt">
            <span class="review-info">
              <span class="star">
                <span class="star-icon">
                  <em :style="review.width"></em>
                </span>
                <span class="star-num">{{ review.number }}</span>
              </span>
              <span class="text">{{ review.text }}</span>
            </span>
            <span class="review-prod">
              <span class="thumb">
                <img :src="review.prodimage" :alt="review.prodalt">
              </span>
              <span class="prod-info">
                <span class="brand">{{ review.prodbrand }}</span>
                <span class="name">{{ review.prodname }}</span>
                <span class="price">{{ review.prodprice }}</span>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.review-list {
  padding: 12px 0 60px;
  ul {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;
    padding-left: 20px;
    padding-right: 12px;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      /* Chrome, Safari, Opera*/
    }
    li {
      display: inline-block;
      width: calc(100% - 8px);
      margin-right: 8px;
      background: #eee;
      a {
        position: relative;
        display: block;
        padding: 32px 24px;
        img {
          width: 100%;
        }
      }
    }
  }
  .review-info {
    .star {
      display: block;
      padding-top: 16px;
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
        font-size: 16px;
        color: #111;
        font-weight: 500;
      }
    }
    .text {
      white-space: initial;
      display: block;
      padding-top: 12px;
      font-size: 14px;
      line-height: 24px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      min-height:76px;
    }
  }
  .review-prod {
    margin-top: 24px;
    padding: 16px;
    background: #fff;
    display: flex;
    align-items: flex-start;
    .thumb {
      width: 71px;
      margin-right: 16px;
    }
    span {
      display: block;
    }
    .brand {
      margin-bottom: 8px;
      font-size: 13px;
      color: #333;
      font-weight: 500;
    }
    .name {
      margin-bottom: 12px;
      font-size: 14px;
      color: #111;
    }
    .price {
      font-size: 16px;
      color: #111;
      font-weight: 700;
    }
  }
}
</style>
