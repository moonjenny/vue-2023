<template>
  <div class="layer-category">
    <div class="title">{{ title }}</div>
    <div class="category-link">
      <ul>
        <li v-for="(category, index) in categories" :key="index" @click="closeLayer">
          <router-link :to="category.route">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'all',
      categories: [
        { name: "의류", route: "/vue-2023/display/" },
        { name: "가방", route: "/vue-2023/display/" },
        { name: "악세사리", route: "/vue-2023/display/" },
        { name: "골프/에슬레저", route: "/vue-2023/display/" },
      ],
      isActive: false
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-wrap").classList.remove("active");

      // body에서 .active 클래스 제거
			document.body.classList.remove("active");

    }
  }
}
</script>

<style lang="scss">
/* 컴포넌트 스타일 */

/* category */

.layer-category {
  padding-top: 40px;

  .title {
    font-size: 24px;
    color: #111;
    font-weight: 500;
    text-transform: uppercase;
  }

  .category-link {
    padding: 24px 0 8px;

    li {
      margin-bottom: 12px;

      a {
        display: block;
        padding: 16px;
        font-size: 14px;
        color: #111;
        border: 1px solid #ccc;
        background: url(/src/assets/images/common/layer-arr.svg) right 16px center no-repeat;
      }
    }
  }
}
.category-list li {
  overflow: hidden;
}

.category-parent {
  display: block;
  padding: 24px 0;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid #eee;
  background: url(/src/assets/images/common/layer-cate-arr.svg) right center no-repeat;

  &.open {
    border-bottom-color: #333;
    background: url(/src/assets/images/common/layer-cate-arr-up.svg) right center no-repeat;
  }
}

.category-list li {
  .depth1 {
    max-height: 0;
    -webkit-transition: max-height 0.2s cubic-bezier(0, 1, 0, 1);
    transition: max-height 0.2s cubic-bezier(0, 1, 0, 1);
  }

  .open + .depth1 {
    display: block;
    max-height: 2000px;
    -webkit-transition: max-height 1s ease-in-out;
    transition: max-height 1s ease-in-out;
  }

  .depth1 {
    a {
      display: block;
      padding: 8px 0;
      font-size: 16px;
      line-height: 19px;
      border-bottom: none;
      background: none;
    }

    > a {
      &:first-child {
        padding-top: 14px;
      }

      &:last-child {
        padding-bottom: 14px;
      }
    }
  }

  .depth2 {
    max-height: 0;
    padding: 0 20px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    > a {
      &:first-child {
        padding-top: 8px;
      }

      &:last-child {
        padding-bottom: 16px;
      }
    }

    a {
      font-size: 14px;
      color: #333;
    }
  }
}


</style>