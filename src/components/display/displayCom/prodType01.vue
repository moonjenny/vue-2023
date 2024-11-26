<script>
export default {
  data() {
    return {
      //상품리스트 
      items: [
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-03.png",
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
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png",
          ],
          alt: '클래식 크롭 테일러드',
          colors: ["black", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드",
          price: "239,000원",
          discount: "229,000원",
          percent: "20%",
          active: false
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-03.png",
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
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-03.png",
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
    };
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
  <div class="main-prod-type1">
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
            <router-link 
              :to="item.link"
              @click="goToLink(item.link)"
            >
              <span class="brand">{{ item.brand }}</span>
              <span class="name">{{ item.name }}</span>
              <span class="price">
                <span class="origin">{{ item.price }}</span>
                <span class="discount">{{ item.discount }}</span>
                <span class="percent">{{ item.percent }}</span>
              </span>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.main-prod-type1 {
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

    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */

    &::-webkit-scrollbar {
      display: none;

      /* Chrome, Safari, Opera*/
    }

    li {
      width: calc(50% - 8px);
      display: inline-block;
      margin-right: 8px;
      vertical-align: top;

      .item {
        position: relative;

        .btn-like {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 24px;
          height: 24px;
          font-size: 0;
          color: #fff;
          background: url(@/assets/images/common/btn-like.svg) no-repeat;
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
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;

    button {
      display: block;
      margin-right: 8px;
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
      margin-bottom: 4px;
      font-size: 12px;
      color: #333;
      font-weight: 500;
    }

    .name {
      display: block;
      font-size: 13px;
      color: #111;
    }

    .price {
      display: block;
      padding-top: 12px;

      .origin {
        display: block;
        font-size: 12px;
        color: #999;
        text-decoration-line: line-through;
      }

      .discount {
        font-size: 14px;
        font-weight: 700;
        color: #111;
      }

      .percent {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 700;
        color: #111;
      }
    }
  }
}
</style>
