<template>
  <div class="login-top">
    <div class="member-name">{{ name }}님</div>
    <div class="member-util">
      <router-link
        v-for="(util, index) in utils"
        :key="index"
        :to="util.route"
        :class="['btn', 'btn-' + util.className]"
        @click="closeLayer"
      >
        {{ util.name }}
      </router-link>
      <button type="button" class="btn-close" @click="closeLayer">레이어 닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name : '회원명',
      utils : [
        // { name: '검색', className: 'search', route: '/vue-2023/search/' },
        { name: '좋아요', className: 'like', route: '/vue-2023/like/' },
        { name: '장바구니', className: 'cart', route: '/vue-2023/cart/' },
      ],
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-wrap").classList.remove("active");

      // body에서 .active 클래스 제거
			document.body.classList.remove("active");

			window.scrollTo({
        top: 0,
      });
    }
  }
}
</script>

<style lang="scss">
/* 컴포넌트 스타일 */
.login-top {
  position: sticky;
  top: 0;
  padding: 26px 0 14px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .member-name {
    font-size: 18px;
    color: #111;
    font-weight: 500;
  }

  .member-util {
    button {
      width: 36px;
      height: 36px;
      font-size: 0;
      color: #fff;
    }
    a {
      display: inline-block;
      width: 36px;
      height: 36px;
      font-size: 0;
      color: #fff;
      vertical-align: top;
    }

    .btn-search {
      background: url(/src/assets/images/common/btn-search.svg) center center no-repeat;
    }

    .btn-like {
      background: url(/src/assets/images/common/btn-like.svg) center center no-repeat;
    }

    .btn-cart {
      background: url(/src/assets/images/common/btn-cart.svg) center center no-repeat;
    }

    .btn-close {
      margin-left: 10px;
      background: url(/src/assets/images/common/btn-close.svg) center center no-repeat;
    }
  }
}
</style>