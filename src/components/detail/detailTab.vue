<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import detailTabInfo from '../detail/detailTabInfo.vue';
  import detailTabReview from '../detail/detailTabReview.vue';
  import detailTabQna from '../detail/detailTabQna.vue';
  import detailTabBuy from '../detail/detailTabBuy.vue';
  
  // 현재 활성화된 탭을 정의합니다.
  const activeTab = ref(0);
  
  // 탭과 탭 콘텐츠를 정의합니다.
  const tabs = [
    { title: '상품설명', component: detailTabInfo, id: 'description' },
    { title: '리뷰(999)', component: detailTabReview, id: 'review' },
    { title: '문의(999)', component: detailTabQna, id: 'inquiry' },
    { title: '구매정보', component: detailTabBuy, id: 'purchase' }
  ];
  
  // 스크롤 위치 계산 로직을 함수로 분리하여 재사용합니다.
  const calculateOffsetPosition = (element) => {
    const header = document.querySelector('.header');
    const tab = document.querySelector('.detail-tab');
    const headerHeight = header ? header.offsetHeight - 1 : 0;
    const tabHeight = tab ? tab.offsetHeight : 0;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    return elementPosition - headerHeight - tabHeight;
  };
  
  // 활성화된 탭을 설정하고 앵커로 이동하는 함수입니다.
  const setActiveTab = (index) => {
    activeTab.value = index;
    const element = document.getElementById(tabs[index].id);
    if (element) {
      const offsetPosition = calculateOffsetPosition(element);
      window.scrollTo(0, offsetPosition + 1);
    }
  };
  
  // 스크롤 이벤트를 감지하여 활성화된 탭을 변경하는 함수입니다.
  const onScroll = () => {
    tabs.forEach((tab, index) => {
      const element = document.getElementById(tab.id);
      if (element) {
        const offsetPosition = calculateOffsetPosition(element);
        if (window.scrollY >= offsetPosition) {
          activeTab.value = index;
        }
      }
    });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
    });
  });
  </script>
  
  <template>
    <section class="detail-tab">
      <div class="tabs">
        <!-- 탭 헤더 -->
        <div class="tab-headers">
          <button type="button"
            v-for="(tab, index) in tabs" 
            :key="index" 
            :class="{ active: index === activeTab }"
            @click="() => setActiveTab(index)"
            class="tab-header"
          >
            {{ tab.title }}
          </button>
        </div>
      </div>
    </section>
  
    <!-- 각 섹션에 대한 콘텐츠 -->
    <section v-for="tab in tabs" :id="tab.id" :key="tab.id">
      <component :is="tab.component"></component>
    </section>
  </template>
  
  <style lang="scss"> 
    .detail {
      &-tab {
        position: sticky;
        top: 52px;
        background-color: #fff;
        z-index: 10;
        .tabs {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }
        .tab-headers {
          display: flex;
          cursor: pointer;
          border-bottom: 1px solid #eee;
        }
        .tab-header {
          flex: 1;
          padding: 20px 0;
          text-align: center;
          font-size: 16px;
          color: #999;
          line-height: 20px;
          position: relative;
        }
        .tab-header.active {
          font-weight: 500;
          color: #000;
          &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #000; 
          }
        }
      }
    }
  
    .tab-content {
      padding: 40px 20px;
    }
  </style>
  