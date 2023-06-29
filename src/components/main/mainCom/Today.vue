<!-- 컬러칩 인덱스 안맞음 추후 확인 -->
<script setup>
  //상품리스트
  import prodType1 from '../../display/displayCom/prodType01.vue'
</script>

<script>
export default {
  data() {
    return {
      //타이틀
      pageTitle: "Today's New",
      //해시태그
      tags: ['#DEAR K', '#HUIT DE LYNN', '#KENNETH LADY', '#TAG', '#TAG', '#TAG', '#TAG'],
      activeIndex: 0,
      //버튼
      btnText: "전체보기",
      //상품리스트 
      items: [
        {
          link: "#none1",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png",
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
          link: "#none",
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
        }
      ],
      // 컬러칩 활성화 인덱스
      activeColor: 0,
      //썸네일 인덱스
      activeThumbIndex: 0,
    };
  },
  methods: {
    //해시태그
    selectTag(index) {
      this.activeIndex = index;
    },

    //좋아요 클릭
    toggleActive(item) {
      item.active = !item.active;
    },

    //컬러칩 토글
    toggleActiveColor(index, item) {
      this.activeColor = index === this.activeColor ? null : index;
      this.activeThumbIndex = index;
      this.$refs.thumb.src = item.images[index];
      console.log(index, this.activeThumbIndex);
    },

    //클릭시 스크롤 이동
    scrollToActiveItem() {
      const prodList = this.$refs.prodList;
      const activeItem = prodList.querySelector('.active');
      console.log(activeItem);
      if (activeItem) {
        const offsetLeft = activeItem.offsetLeft;
        prodList.scrollTo({ left: offsetLeft, behavior: 'smooth' });
      }
    }
  }
};
</script>

<template>
  <section class="main-sec main-today">
    <div class="main-title" :title="pageTitle">{{ pageTitle }}</div>
    <div class="main-tags">
      <ul>
        <li 
           v-for="(tag, index) in tags" 
          :key="index" 
          :class="{ active: index === activeIndex }"
        >
          <a href="#none" 
            @click.prevent="selectTag(index); scrollToActiveItem()"
          >
            {{ tag }}
          </a>
        </li>
      </ul>
    </div>
    <prodType1 />
    <div class="btn-box">
      <a href="#none" class="btn-all" :title="btnText">{{ btnText }}</a>
    </div>
  </section>
</template>



<style lang="scss">
.main-tags {
  position: relative;
  padding: 24px 0 20px;

  ul {
    z-index: 100;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 20px;
    font-size: 0;
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
      display: inline-block;
      width: auto;
      margin-right: 8px;

      a {
        display: block;
        padding: 13.5px 24px;
        font-size: 14px;
        font-weight: 700;
        color: #999;
        border: 1px solid #eee;
      }

      &.active a {
        color: #fff;
        border: 1px solid #333;
        background: #333333;
      }
    }
  }
}

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
          background: url(/src/assets/images/common/btn-like.svg) no-repeat;
          &.active {
            background: url(/src/assets/images/common/action-like-active.svg) no-repeat;
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

    a {
      display: block;
      margin-right: 8px;
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
