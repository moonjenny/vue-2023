<script>
export default {
  data() {
    return {
      lists: [
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-01.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-02.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-03.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-07.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        },
        {
          link: "#none",
          image: "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-10.png",
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000",
          discount: "219,000원",
          percent: "10%",
        }
      ],
    }
  }
}
</script>

<template>
  <!-- display-prodlist -->
  <section class="display-prodlist">
    <div class="display-prod">
      <ul>
          <li v-for="(list, index) in lists" :key="index">
            <div class="item">
                <div class="thumb">
                  <img :src="list.image" :alt="list.alt">
                </div>
                <a :href="list.link" class="btn-like">좋아요</a>
                <div class="color-chip">
                    <a href="#none" class="active"><span class="color-1">브라운</span></a>
                    <a href="#none"><span class="color-2">그레이</span></a>
                </div>
                <div class="info">
                    <a href="#none">
                        <span class="brand">{{ list.brand }}</span>
                        <span class="name">{{ list.name }}</span>
                        <span class="price">
                            <span class="discount">{{ list.discount }}원</span>
                            <span class="origin">{{ list.price }}원</span>
                        </span>
                    </a>
                </div>
            </div>
          </li>
      </ul>
    </div>
    <div class="btn-box">
        <a href="#none" class="btn-all">더보기</a>
    </div>
  </section>
  <!-- //display-prodlist -->
</template>

<style lang="scss">

/* display-prod */

.display-prod {
  ul {
    padding: 14px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: calc(50% - 4px);
      padding-bottom: 48px;

      .item {
        position: relative;
        text-align: center;

        .btn-like {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 24px;
          height: 24px;
          font-size: 0;
          color: #fff;
          background: url(/src/assets/images/common/btn-like.svg) no-repeat;
        }
      }
    }
  }

  .item .thumb img {
    width: 100%;
  }

  .color-chip {
    padding-top: 12px;
    text-align: center;
    display: flex;
    justify-content: center;

    a {
      display: block;
      margin: 0 4px;
      width: 24px;
      height: 24px;
      border: 1px solid #eee;
      border-radius: 50%;

      span {
        display: block;
        margin: 4px;
        width: 16px;
        height: 16px;
        font-size: 0;
        color: #fff;
        border-radius: 50%;
      }

      &.active {
        border-color: #111;
      }
    }

    .color-1 {
      background: #856D63;
    }

    .color-2 {
      background: #aaa;
    }
  }

  .info {
    padding-top: 12px;
    white-space: initial;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .brand {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      color: #333;
      font-weight: 500;
    }

    .name {
      display: block;
      font-size: 14px;
      color: #111;
    }

    .price {
      padding-top: 12px;
      display: flex;
      align-items: center;
      justify-content: center;

      .origin {
        margin-left: 10px;
        font-size: 12px;
        color: #999;
        text-decoration-line: line-through;
      }

      .discount {
        font-size: 14px;
        font-weight: 700;
        color: #111;
      }
    }
  }
}

.display-prodlist .btn-box {
  .btn-all {
    display: block;
    padding: 15px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #111;
    border: 1px solid #111;
  }
}


</style>
