<script>
export default {
  data() {
    return {
      //상품리스트 
      items: [
        {
          link: "/vue-2023/detail/",
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
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓222",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-07.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓33",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-10.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓44",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-01.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-02.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-03.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓555",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓666",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-07.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-09.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓777",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-10.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-08.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-06.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓888",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
          images: [
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-05.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-04.png",
            "https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/temp/thumb-03.png",
          ],
          alt: '클래식 크롭 테일러드 자켓',
          colors: ["black", "brown", "gray"],
          brand: "LYNN",
          name: "클래식 크롭 테일러드 자켓999",
          price: "219,000원",
          discount: "219,000원",
          percent: "10%",
          active: true
        },
        {
          link: "/vue-2023/detail/",
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
          active: true
        }
      ],
      activeColor: [], // 컬러칩 활성화 인덱스 (배열로 변경)
      activeThumbIndex: [], // 썸네일 인덱스 (배열로 변경)
      hasItems: true, // 관심 상품이 있는지 여부를 저장하는 데이터
      hasLike: false, // "like" 클래스를 추가하기 위한 데이터
    }
  },
  methods: {
    toggleActive(item) {
      console.log(item.active);
      // 아이템의 active 상태를 토글
      item.active = !item.active;
      if (item.active === false) {
        window.confirm(`${item.name}을(를) 삭제하시겠습니까?`)
        // active가 false인 경우 해당 아이템을 배열에서 제거
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
          this.items.splice(itemIndex, 1);
        }
      }
    },
    toggleActiveColor(index, itemIndex, item) {
      this.activeColor[itemIndex] = index;
      this.activeThumbIndex[itemIndex] = index;
      console.log("li의 index:", itemIndex, index);
    },
    isActiveItem(item) {
      console.log(item);
      return item && item.active && this.items.includes(item);
    },
    deleteAllItems() {
      if (window.confirm("모든 상품을 삭제하시겠습니까?")) {
        // 모든 상품 삭제
        this.items = [];
        this.hasItems = false; // 관심 상품이 없음을 표시
      }
    },
  },
  mounted() {
    const sectionElement = document.querySelector('.like');
    if (sectionElement && sectionElement.classList.contains('like')) {
      this.hasLike = false;
    }
    // 초기에 첫 번째 썸네일 이미지 및 color-chip 활성화
    this.activeThumbIndex = this.items.map(() => 0);
    this.activeColor = this.items.map((item, index) => (index === index ? 0 : null));
  }
}
</script>

<template>
  <section class="like" :class="{ 'like': hasLike }">
    <article class="like-list">
      <div class="like-notice">관심상품은 최대 100개까지 가능합니다.</div>
      <div class="like-filter">
        <span class="checkbox">
          <input type="checkbox" id="chkId-1" name="chkId">
          <label class="" for="chkId-1">품절제외</label>
        </span>
        <span class="radio">
          <input type="radio" id="rdoId-1" name="rdoId">
          <label class="" for="rdoId-1">라디오박스</label>
        </span>
        <span class="radio">
          <input type="radio" id="rdoId-2" name="rdoId">
          <label class="" for="rdoId-2">라디오박스</label>
        </span>
        <button
          type="button"
          class="btn-like-del"
          @click="deleteAllItems"
        >
          전체삭제
        </button>
      </div>
    </article>
    
    
    <!-- display-prodlist -->
    <article class="display-prodlist">
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
                  <router-link 
                    :to="item.link"
                    @click="goToLink(item.link)"
                  >
                    <span class="brand">{{ item.brand }}</span>
                    <span class="name">{{ item.name }}</span>
                    <span class="price">
                      <span class="discount">{{ item.discount }}</span>
                      <span class="origin">{{ item.price }}</span>
                    </span>
                  </router-link>
                </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 관심 상품이 없는 경우 display-noprod 클래스를 추가하여 메시지를 표시 -->
      <div class="display-noprod" v-if="!hasItems">
        <span>관심으로 선택하신 상품이 없습니다.</span>
      </div>
    </article>
    <!-- //display-prodlist -->
  </section>
</template>


<style lang="scss">
.like-list {
  padding:0 0 16px;
  margin: 0 20px 15px;
  border-bottom:1px solid #ccc;
  .like-notice {
    position:relative;
    margin: 16px 0;
    padding:0 10px;
    color:#666;
    font-size:13px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform:translateY(-50%);
      width: 2px;
      height: 2px;
      background-color: #666;
    }
  }
  .like-filter {
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .btn-like-del {
    padding:8px 12px;
    font-size:13px;
    line-height:14px;
    color:#666;
    border:1px solid #666;
    font-family:Pretendard;
  }
}

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

.display-noprod {
  padding:30px 0 60px;
  border-bottom:1px solid #eee;
  span{
    display:block;
    padding:88px 0 0;
    text-align:center;
    font-size:14px;
    color:#111;
    background: url(/src/assets/images/display/icon-nolist.svg) top center no-repeat;
  }
}

</style>