<template>
  <div class="category-all">
    <div class="title">{{ title }}</div>
    <div class="category-list">
      <ul>
        <li v-for="(item, index) in categories" :key="index">
          <span class="category-parent" :class="{ open: isOpen[index] }" @click="toggle(index)">{{ item.oneDepth }}</span>
          <div class="depth1">
            <a v-for="(twoDepth, idx) in item.twoDepths" :key="idx" :href="item.links[idx]">{{ twoDepth }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      title: 'category',
      categories: [
        {
          oneDepth: '의류',
          twoDepths: ['전체','아우터 (클릭)','원피스','블라우스/셔츠','스커트','팬츠','티셔츠','데님','니트',],
          links: ['#link1', '#link2', '#link3', '#link4', '#link5', '#link6', '#link7', '#link8', '#link9'],
        },
        {
          oneDepth: '가방',
          twoDepths: ['전체', '전체', '전체'],
          links: ['#link10', '#link11', '#link12'],
        },
        {
          oneDepth: '신발',
          twoDepths: ['전체', '전체', '전체'],
          links: ['#link13', '#link14', '#link15'],
        },
        {
          oneDepth: '악세서리',
          twoDepths: ['전체', '전체', '전체'],
          links: ['#link16', '#link17', '#link18'],
        },
        {
          oneDepth: '골프/애슬레저',
          twoDepths: ['전체', '전체', '전체'],
          links: ['#link19', '#link20', '#link21'],
        },
      ],
    };
  },
  setup() {
    const isOpen = ref([]);

    const toggle = (index) => {
      isOpen.value[index] = !isOpen.value[index];
    };

    return { isOpen, toggle };
  },
};
</script>

<style lang="scss">
/* 컴포넌트 스타일 */

/* category */

.category-all {
  padding: 40px 0 30px;

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
  
  .category-list li {
    overflow: hidden;
  }
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