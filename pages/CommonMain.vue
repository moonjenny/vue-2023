<script setup>
  //메인
  import MainHome from '@/components/main/MainHome.vue'
  import MainClothes from '@/components/main/MainClothes.vue'
  import MainBags from '@/components/main/MainBags.vue'
  import MainShoes from '@/components/main/MainShoes.vue'
  import MainAccessories from '@/components/main/MainAccessories.vue'
  import MainSports from '@/components/main/MainSports.vue'
  import MainBest from '@/components/main/MainBest.vue'
  import MainBrands from '@/components/main/MainBrands.vue'
  import MainEvents from '@/components/main/MainEvents.vue'
</script>

<template>
  <nav class="nav">
      <ul ref="navItems">
        <li
          v-for="(navitem, index) in navitems"
          :key="navitem.title"
          :class="{ active: activeIndex === index }"
          @click="handleClick(index)"
        >
          <span>{{ navitem.title }}</span>
        </li>
    	</ul>
  </nav>
  <div class="container">
    <component :is="containerContent" ref="componentContent" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    navitems: [
        { title: '홈', component: MainHome },
        { title: '의류', component: MainClothes },
        { title: '가방', component: MainBags },
        { title: '신발', component: MainShoes },
        { title: '악세사리', component: MainAccessories },
        { title: '골프/애슬레저', component: MainSports },
        { title: '베스트', component: MainBest },
        { title: '브랜드', component: MainBrands },
        { title: '이벤트', component: MainEvents },
    ],
    activeIndex: 0,
    containerContent: MainHome,
    };
  },
  mounted() {
    // 첫 번째 li 요소에 active 클래스 추가
    this.$nextTick(() => {
      this.$refs.navItems.querySelector('li:first-child').classList.add('active');
    });
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
      this.containerContent = this.navitems[index].component;

      // Get the clicked list item
      const clickedNavItem = this.$refs.navItems.children[index];

      // Get the container width and center position
      const containerWidth = this.$refs.navItems.clientWidth;
      const containerCenter = containerWidth / 2;

      // Get the left position of the clicked list item relative to the container
      const clickedNavItemLeft = clickedNavItem.offsetLeft;

      // Calculate the scroll position to center the clicked item
      const scrollPosition = clickedNavItemLeft - containerCenter + clickedNavItem.clientWidth / 2;

      // Smoothly scroll to the calculated position
      this.$refs.navItems.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      // 상단 이동
      window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      });
    },
  },
  };
</script>

<style lang="scss">
  .nav {
  position: sticky;
  top: 0;
  height: 49px;
  background: #fff;
  z-index: 999;
  -ms-overflow-style: none;
  scrollbar-width: none;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    z-index: 100;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 10px;
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
      a, span {
        position: relative;
        display: block;
        font-size: 16px;
        font-weight: 500;
        height: auto;
        line-height: 24px;
        color: #999;
        padding: 13px 12px;
        cursor: pointer;
        white-space: nowrap;
      }
    }
    li.active {
      a, span {
        color: #111;
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 12px;
          width: calc(100% - 24px);
          height: 4px;
          background: #111;
        }
      }
    }
  }
  }
.main-sec {
  &:first-child {
    margin-top: 30px;
  }
  &.main-banner-big:first-child, &.main-banner:first-child {
    margin-top: 0;
  }
}
</style>
