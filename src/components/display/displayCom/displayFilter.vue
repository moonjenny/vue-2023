<template>
  <section class="display-filter">
    <ul>
      <li>
        <button type="button" class="btn-sort" :class="{ active: showSortList }" @click="toggleSortList">
          <span>{{ sortButtonText }}</span>
        </button>
        <div class="sort-list" :class="{ active: showSortList }">
          <ul>
            <li v-for="(list, index) in lists" :key="index">
              <button @click="sortList(list)">
                {{ list }}
              </button>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <button type="button" class="btn-filter" @click="openLayer">
          <span>필터</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const showSortList = ref(false);
    const sortButtonText = ref('정렬');
    const lists = ['판매순', '할인율순', '낮은가격순', '높은가격순', '리뷰순'];

    const toggleSortList = () => {
      showSortList.value = !showSortList.value;
    };
    
    const sortList = (list) => {
      sortButtonText.value = list;
      showSortList.value = false;
    };

    const openLayer = () => {
      // .layer-filter
      document.querySelector('.layer-filter').classList.add('active');

      // body에서 .active 클래스 추가
      document.body.classList.add('active');

      // 레이어 항상 top으로 이동하기
      document.querySelector('.layer-filter').scrollTo({
        top: 0,
      });
    };

    const closeLayer = () => {
      // .layer-filter
      document.querySelector('.layer-filter').classList.remove('active');

      // body에서 .active 클래스 제거
      document.body.classList.remove('active');
    };

    return {
      showSortList,
      sortButtonText,
      lists,
      toggleSortList,
      sortList,
      openLayer,
      closeLayer
    };
  }
};
</script>

<style lang="scss">

/* display-filter */

.display-filter {
  position: sticky;
  top: 52px;
  padding: 10px 20px;
  background:#fff;
  z-index:9;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      position: relative;
      width: calc(50% - 4px);
    }
  }

  .btn-sort {
    display: block;
    width: 100%;
    height: 48px;
    padding: 15px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    border: 1px solid #333;

    span {
      padding-right: 17px;
      background: url(/src/assets/images/display/icon-sort.svg) right center no-repeat;
      background-size: 9px auto;
    }
    &.active span {
      background: url(/src/assets/images/display/icon-sort.svg) right center no-repeat;
      background-size: 9px auto;
      transform: rotate(30deg);
    }
  }

  ul li .sort-list {
    display: none;
    position: absolute;
    top: 47px;
    width: 100%;
    border: 1px solid #111;
    border-top: none;
    background: #eee;
    box-sizing: border-box;
    z-index: 9;

    &.active {
      display: block;
    }

    li {
      width: 100%;

      button {
        display: block;
        width:100%;
        padding: 10px 0;
        text-align: center;
        font-size: 13px;
        color: #333;
      }
    }
  }

  .btn-filter {
    display: block;
    width: 100%;
    height: 48px;
    padding: 15px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    border: 1px solid #333;

    span {
      padding-left: 30px;
      background: url(/src/assets/images/display/icon-filter.svg) 0 center no-repeat;
      background-size: 20px auto;
    }
  }
}

</style>
