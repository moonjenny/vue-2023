<script setup>
import { ref } from 'vue'
//검색 레이어
import LayerSearch from '../layer/LayerSearch.vue'

const isActive = ref(false)
const isCateActive = ref(false)

const handleGnbUtilClick = (gnbUtil) => {
  if (gnbUtil.name === '검색') {
    isActive.value = true
    document.querySelector('.layer-search').classList.add('active')
    document.body.classList.add('active')
    document.querySelector('.layer-search').scrollTo({
      top: 0
    })
  } else if (gnbUtil.route) {
    window.location.href = gnbUtil.route
  }
}

const closeCategory = () => {
  window.scrollTo({
    top: 0
  })
  isCateActive.value = false
}
</script>
<script>
export default {
  data() {
    return {
      logoText: 'BYLYNN.SHOP',
      gnbUtils: [
        { name: '검색', className: 'search' },
        { name: '장바구니', className: 'cart', route: '/vue-2023/cart/' },
      ],
      isActive: false,
      cateLists: [
        { route: '/vue-2023/', name: '카테고리명 1'},
        { route: '/vue-2023/display/', name: '카테고리명 2'},
        { route: '/vue-2023/display/', name: '카테고리명 3'},
        { route: '/vue-2023/display/', name: '카테고리명 4'},
        { route: '/vue-2023/display/', name: '카테고리명 4'},
      ]
    };
  },
  methods: {
  },
};
</script>

<template>
  <header class="header list">
    <button 
      type="button"
      class="btn-back"
    >
      이전페이지 이동
    </button>
    <div class="header-nav">
      <button 
        type="button"
        class="btn-nav"
        @click="isCateActive = !isCateActive" 
        :class="{ 'active': isCateActive }"
      >
        블라우스 카테고리명
      </button>
    </div>
    <div class="gnb-util">
      <div 
        v-for="(gnbUtil, index) in gnbUtils"
        :key="index"
        :class="['util-' + gnbUtil.className]"
      >
        <button 
          type="button"
          :class="['btn-' + gnbUtil.className]"
          @click="handleGnbUtilClick(gnbUtil)"
        >
          {{ gnbUtil.name }}
        </button>
      </div>
    </div>

    <!-- 카테고리 리스트 -->
    <article class="category-list" v-if="isCateActive">
      <ul>
        <li
          v-for="(cateList, index) in cateLists"
          :key="index"
        >
          <router-link :to="cateList.route" @click="closeCategory; $forceUpdate()">
            {{cateList.name}}
          </router-link>
        </li>
      </ul>
    </article>
  </header>

  
  <!-- 검색 레이어 -->
  <LayerSearch :class="{ 'active': isActive }" />
</template>

<style lang="scss">
.header{
  &.list {
    position: sticky;
    top:0;
    border-bottom:1px solid #eee;
    z-index:10;
    
    .category-list{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      transform: translateY(52px);
      height: calc(100vh - 52px);
      background: rgba(0,0,0,.3);
      z-index:9;
      ul {
        display:flex;
        flex-wrap:wrap;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        background-color:#fff;
        li{
          display: inline-flex;
          align-items: center;
          width: 50%;
          height: 40px;
          margin: 0;
          box-sizing: border-box;
          transition: color .15s ease-in-out,background-color .15s ease-in-out;
          appearance: none;
          a {
            padding:8px 10px 9px;
            font-size:14px;
            color:#111;
            line-height:1.5;
          }
        }
      }
    }
  }
  .btn-back {
    width: 50px;
    height: 50px;
    font-size: 0;
    color: #fff;
    background: url(/src/assets/images/common/btn-back.svg) 20px center no-repeat;
  }
  .header-nav {
    .btn-nav {
      position:relative;
      padding:10px 20px;
      font-size:18px;
      font-weight: 500;
      color:#111;
      font-family: Pretendard;
      &:after {
        content:'';
        position:absolute;
        right:0;
        top:50%;
        margin-top:-5px;
        width:14px;
        height:12px;
        background:url(/src/assets/images/display/icon-nav-arr.svg) 0 center no-repeat;
        background-size: 14px auto;
      }
      &.active {
        &:after {
          transform: rotate(180deg);
        }
      }
    }
  }
}
.gnb-util {
	height:52px;
	padding-right:14px;
	display:flex;
	flex-wrap: wrap;
  align-items: center;
  > div {
    width:32px;
    height:32px;
    margin-left:2px;
  }
}
.util-search button,
.util-cart button {
	width:100%;
	height:100%;
}
.util-search .btn-search {
	font-size:0;
	color:#fff;
	background:url(@/assets/images/common/btn-search.svg) center center no-repeat;
}
.util-cart .btn-cart {
	font-size:0;
	color:#fff;
	background:url(@/assets/images/common/btn-cart.svg) center center no-repeat;
}

</style>
