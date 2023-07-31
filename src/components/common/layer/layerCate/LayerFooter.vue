<template>
  <div class="my-footer">
    <ul>
      <li v-for="(util, index) in utils" :key="index">
        <router-link 
          :to="util.route"
          @click.prevent="handleLinkClick(util)"
        >
          {{ util.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      utils: [
        { name: '공지사항', route: '/vue-2023/notice/' },
        { name: '매장안내', route: '/vue-2023/store/' },
        { name: '로그아웃', route: '/vue-2023/' },
      ],
    }
  },
  methods: {
    handleLinkClick(util) {
      if (util.name === '로그아웃') {
        this.logout();
      } else {
        this.closeLayer();
      }
    },
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector('.layer-wrap').classList.remove('active');
      // body에서 .active 클래스 제거
      document.body.classList.remove('active');
    },
    logout(){
      // 로그아웃 전에 레이어를 닫습니다.
      this.closeLayer();

      setTimeout(() => {
        alert('로그아웃');
      }, 1000); // 1초 후에 로그아웃 메시지를 표시합니다.
    }
  }
}
</script>

<style lang="scss">
/* 컴포넌트 스타일 */

/* my-footer */

.my-footer {
  position: sticky;
  bottom: 0;
  margin: 0 -20px;
  background: #F6F6F6;

  ul {
    padding: 0 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li a {
    position: relative;
    display: block;
    padding: 18px 20px;
    font-size: 13px;
    line-height: 14px;
    color: #111;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 14px;
      background: #ccc;
    }
  }
}

</style>