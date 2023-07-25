<script>
export default {
  data() {
    return {
      //상품리스트 
      items: [
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-03.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-07.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-10.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-03.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-07.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-10.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-03.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        },
        {
          link: "",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓111",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: false
        }
      ],
      activeColor: [], // 컬러칩 활성화 인덱스 (배열로 변경)
      activeThumbIndex: [], // 썸네일 인덱스 (배열로 변경)
    }
  },
  methods: {
    toggleActive(item) {
      item.active = !item.active;
    },
    toggleActiveColor(index, itemIndex, item) {
      this.activeColor[itemIndex] = index;
      this.activeThumbIndex[itemIndex] = index;
      console.log("li의 index:", itemIndex, index);
    }
  },
  mounted() {
    // 초기에 첫 번째 썸네일 이미지 및 color-chip 활성화
    this.activeThumbIndex = this.items.map(() => 0);
    this.activeColor = this.items.map((item, index) => (index === index ? 0 : null));
  }
};
</script>

<template>
  <!-- display-prodlist -->
  <section class="display-prodlist">
    <div class="display-prod">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div class="item">
              <div class="thumb">
                <img :src="item.images[activeThumbIndex[index]]" :alt="item.alt" ref="thumb" />
              </div>
              <button class="btn-like" 
                :class="{ active: item.active }" 
                @click="toggleActive(item)"
              >
                좋아요
              </button>
              <div class="color-chip">
                <button type="button"
                  v-for="(color, i) in item.colors"
                  :key="color"
                  :class="{ active: i === activeColor[index] }"
                  @click="toggleActiveColor(i, index, item)"
                >
                  <span :class="'color-' + (color)">{{ color }}</span>
                </button>
              </div>
              <div class="info">
                <a :href="item.link">
                  <span class="brand">{{ item.brand }}</span>
                  <span class="name">{{ item.name }}</span>
                  <span class="price">
                    <span class="discount">{{ item.discount }}</span>
                    <span class="origin">{{ item.price }}</span>
                  </span>
                </a>
              </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-box">
        <a href="javascript:;" class="btn-all">더보기</a>
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
          &.active {
            background: url(@/assets/images/common/action-like-active.svg) no-repeat;
          }
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

    button {
      display: block;
      margin: 0 4px;
      width: 24px;
      height: 24px;
      border: 1px solid #eee;
      border-radius: 50%;

      span {
        display: block;
        margin: 3px;
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

    .color-brown {
      background: #856D63;
    }

    .color-gray {
      background: #aaa;
    }
    .color-black {
      background: #000;
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
