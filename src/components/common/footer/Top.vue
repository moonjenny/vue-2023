<script setup>
// 카테고리 레이어
import { ref, onMounted, onUnmounted } from 'vue';

const scrollClass = ref('');
const prevScrollY = ref(window.scrollY);

function scrollToTop() {
  // 페이지의 맨 위로 스크롤 이동
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드러운 스크롤 동작을 위해 'smooth' 옵션 사용
  });
}

function handleScroll() {
  const isScrollDown = window.scrollY > prevScrollY.value;
  prevScrollY.value = window.scrollY;

  if (isScrollDown) {
    scrollClass.value = 'hide';
  } else {
    scrollClass.value = 'show';
  }
  // scrollTop이 50px 이상인 경우 .actionbar-floating에 .show 클래스 추가
  if (window.scrollY >= 50) {
    document.querySelector(".actionbar-floating").classList.add("show");
  } else {
    document.querySelector(".actionbar-floating").classList.remove("show");
  }
}

// onMounted와 onUnmounted를 사용하여 라이프사이클을 정의
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>

    <div class="actionbar-floating">
      <!-- <button type="button">
        <span class="float-item">최근 본 상품</span>
        <img src="https://sui.ssgcdn.com/cmpt/banner/202211/2022111617073094621939279193_822.png" alt="아우터">
      </button>
      <button type="button">
        <span class="float-chat">1:1채팅하기</span>
      </button> -->
      <button type="button">
        <span class="float-top" @click="scrollToTop">상단으로 이동</span>
      </button>
    </div>

</template>

<style lang="scss">
body.active {
  overflow: hidden;
}
.actionbar-floating {
  position: fixed;
  bottom: 0;
  right: 12px;
  width: 40px;
  z-index: 3;
  transition: transform .3s ease;
  transform: translateY(110%);
  &.show{
    transform: translateY(-65px);
  }
  button {
    width: 40px;
    height: 40px;
    margin-top: 8px;
    border: 1px solid #eee;
    border-radius: 50%;
    background: #fff;
    span {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 0;
      color: #fff;
    }
    span.float-item {
      width: 0;
      height: 0;
    }
    .float-chat {
      background: url(@/assets/images/common/action-chat.svg) center center no-repeat;
    }
    .float-top {
      background: url(@/assets/images/common/action-top.svg) center center no-repeat;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// SVG 애니메이션을 정의하는 CSS
@keyframes actionView {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}

// 애니메이션을 추가할 때 사용할 클래스
.animate {
  animation: actionView 1s ease;
}
</style>
