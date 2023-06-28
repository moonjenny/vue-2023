<template>
  <div class="login-top">
    <div class="member-name">{{ name }}님</div>
    <div class="member-util">
      <button type="button" class="btn-search">검색</button>
      <button type="button" class="btn-like">좋아요</button>
      <button type="button" class="btn-cart">장바구니</button>
      <button type="button" class="btn-close" @click="closeLayer">레이어 닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name : '회원명'
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-wrap").classList.remove("active");

      // body에서 .active 클래스 제거
			document.body.classList.remove("active");

			// window.scrollTo({
      //   top: 0,
      // });
    }
  }
}
</script>

<style lang="scss">
/* 컴포넌트 스타일 */
.login-top {
  position: sticky;
  top: 0;
  padding: 32px 0 20px;
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
      width: 24px;
      height: 24px;
      margin-left: 12px;
      font-size: 0;
      color: #fff;
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
      margin-left: 16px;
      background: url(/src/assets/images/common/btn-close.svg) center center no-repeat;
    }
  }
}
</style>