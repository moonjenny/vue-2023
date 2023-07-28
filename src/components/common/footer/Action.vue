<script setup>
// 카테고리 레이어
import { ref, onMounted, onUnmounted } from 'vue';
import LayerCate from '../layer/LayerCategory.vue'

//const hasLike = ref(false); // hasLike를 reactive 변수로 정의

const navs = [
  {
    id: 2,
    link: '/vue-2023/like/',
    iconClass: 'f-like',
    title: '좋아요'
  },
  {
    id: 3,
    link: '/vue-2023/',
    iconClass: 'f-home',
    title: '홈'
  },
  {
    id: 4,
    link: '/vue-2023/mypage/',
    iconClass: 'f-my',
    title: '마이페이지'
  }
];

const isActive = ref(false);
const scrollClass = ref('');
const prevScrollY = ref(window.scrollY);

// 최상단 이동
function goToLink(link) {  
  window.scrollTo({
    top: 0,
  });
}

function openLayer() {
  // .layer-wrap .close 클래스명 제거
  document.querySelector(".layer-wrap").classList.add("active");

  // body에서 .active 클래스 제거
  document.body.classList.add("active");

  //레이어 항상 top으로 이동하기
  document.querySelector(".layer-login").scrollTo({
    top: 0,
  });
}

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
  <section class="actionbar" :class="scrollClass">
    <ul class="actionbar-nav">
      <li class="nav-item">
        <button type="button" @click="openLayer"><span class="f-cate">카테고리 열기</span></button>
      </li>
      <li 
        v-for="nav in navs" 
        :key="nav.id" 
        class="nav-item"
      >
        <router-link 
          :to="nav.link"
          @click="goToLink(nav.link)"
        >
          <span 
            :class="[nav.iconClass, { 'active': activeLink === nav.link }]"
          >
            {{ nav.title }}
          </span>
        </router-link>
      </li>

      <li>
        <button type="button">
          <span class="f-view">더보기
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle class="action-view1" cx="4.5" cy="12" r="2" fill="black"/>
              <circle class="action-view2" cx="12.5" cy="12" r="2" fill="black"/>
              <circle class="action-view3" cx="20.5" cy="12" r="2" fill="black"/>
            </svg>
          </span>
        </button>
      </li>
    </ul>
    <div class="actionbar-floating">
      <!-- <button type="button">
        <span class="float-item">최근 본 상품</span>
        <img src="https://sui.ssgcdn.com/cmpt/banner/202211/2022111617073094621939279193_822.png" alt="아우터">
      </button> -->
      <button type="button">
        <span class="float-chat">1:1채팅하기</span>
      </button>
      <button type="button">
        <span class="float-top" @click="scrollToTop">상단으로 이동</span>
      </button>
    </div>
  </section>

  <!-- 카테고리 레이어 -->
  <LayerCate :class="{ 'active': isActive }" />
</template>

<style lang="scss">
body.active {
  overflow: hidden;
}
.actionbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 57px;
  border-top: 1px solid #eee;
  background: #fff;
  z-index: 10;
  transition: transform .3s ease;
  &.show {
    transform:translateY(0);
  }
  &.hide {
    transform:translateY(100%);
  }
  
}
.actionbar-nav {
  position:relative;
  height: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color:#fff;
  z-index:5;
  li {
    width: 20%;
    height: 100%;
    button,
    a {
      display:block;
      width: 100%;
      height: 100%;
      span {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0;
        color: #fff;
      }
      .f-cate {
        background: url(@/assets/images/common/action-cate.svg) center center no-repeat;
      }
      .f-like {
        background: url(@/assets/images/common/action-like.svg) center center no-repeat;
      }
      .f-home {
        background: url(@/assets/images/common/action-home.svg) center center no-repeat;
      }
      .f-my {
        background: url(@/assets/images/common/action-my.svg) center center no-repeat;
      }
      .f-view {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    .router-link-active {
      .f-like {
        background: url(@/assets/images/common/action-like-active.svg) center center no-repeat;
      }
      .f-home {
        background: url(@/assets/images/common/action-home-active.svg) center center no-repeat;
      }
      .f-my {
        background: url(@/assets/images/common/action-my-active.svg) center center no-repeat;
        background-size: 25px auto;
        /*
        animation-name: actionMy;
        animation-duration: 2s;
        animation-iteration-count: 2;
        animation-timing-function: ease; */
      }
      .f-view {
        .action-view1 {
          animation-name: actionView-1;
          animation-duration: 2s;
          animation-iteration-count: 2;
          animation-timing-function: ease;
        }
        .action-view2 {
          animation-name: actionView-2;
          animation-duration: 2s;
          animation-iteration-count: 2;
          animation-timing-function: ease;
        }
        .action-view3 {
          animation-name: actionView-3;
          animation-duration: 2s;
          animation-iteration-count: 2;
          animation-timing-function: ease;
        }
      }
    }
  }
}
.actionbar-floating {
  position: fixed;
  bottom: 70px;
  right: 12px;
  width: 40px;
  z-index: 3;
  transition: transform .3s ease;
  transform: translateY(110%);
  &.show{
    transform: translateY(0);
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

</style>
