<script setup>
  //상품상세 구매툴
  import { ref } from 'vue';

  const isLiked = ref(false);

  function toggleLike() {
    isLiked.value = !isLiked.value;
  }
</script>

<template>
  <section class="buy-tool">
    <ul>
      <li class="buy-like">
        <a href="javascript:;" :class="{ active: isLiked }" @click="toggleLike">
          <span>좋아요</span>
        </a>
      </li>
      <li class="buy-cart">
        <a href="/vue-2023/cart/"><span>장바구니</span></a>
      </li>
      <li class="buy-now">
        <a href="javascript:;"><span>바로구매</span></a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.buy-tool {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-top: 1px solid #eee;
  background-color: #fff;
  z-index: 99;
  ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4px;
    li {
      flex: 2.5;
      a {
        display: block;
        padding: 11px;
        line-height: 20px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
      }

    }
    .buy-like {
      flex: 1;
      a {
        height: 44px;
        background-image: url(/src/assets/images/common/btn-like.svg);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        &.active {
          background-image: url(@/assets/images/common/action-like-active.svg);
        }
        span {
          font-size: 0;
          color: #fff;
        }
      }
    }
    .buy-cart {
      a {
        border: 1px solid #111;
      }

    }
    .buy-now {
      a {
        color: #fff;
        border: 1px solid #111;
        background-color: #111;
      }

    }
  }

}

</style>