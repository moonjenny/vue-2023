<script>
export default {
  data() {
    return {
      title : '판매랭킹',
      keywords: [
        { 
          route: '/vue-2023/display/',
          image: 'https://image.bylynn.shop/files/products/EGBLMH9800/LV2/11-MAIN-20230515180603.jpg',
          brand: 'KENNETH LADY',
          name: '백 슬릿넥 블라우스',
        },
        { 
          route: '/vue-2023/display/',
          image: 'https://image.bylynn.shop/files/products/EGBLMH9800/OL2/31-MAIN-20230515180603.png',
          brand: 'KENNETH LADY',
          name: '백 슬릿넥 블라우스',
        },
        { 
          route: '/vue-2023/display/',
          image: 'https://image.bylynn.shop/files/products/EGBLMH9800/WH2/31-MAIN-20230515180603.png',
          brand: 'KENNETH LADY',
          name: '백 슬릿넥 블라우스',
        },
        { 
          route: '/vue-2023/display/',
          image: 'https://image.bylynn.shop/files/products/EGBLMH9800/WH2/31-MAIN-20230515180603.png',
          brand: 'KENNETH LADY',
          name: '백 슬릿넥 블라우스',
        },
        { 
          route: '/vue-2023/display/',
          image: 'https://image.bylynn.shop/files/products/EGBLMH9800/WH2/31-MAIN-20230515180603.png',
          brand: 'KENNETH LADY',
          name: '백 슬릿넥 블라우스 백 슬릿넥 블라우스 백 슬릿넥 블라우스 두줄 이상 말줄임처리 됩니다. 두줄 이상 말줄임처리 됩니다. 두줄 이상 말줄임처리 됩니다.',
        },
      ],
    }
  },
  methods: {
    closeLayer() {
      // .layer-wrap .close 클래스명 제거
      document.querySelector(".layer-search").classList.remove("active");

      // body에서 .active 클래스 제거
			document.body.classList.remove("active");
    },
  },
}
</script>

<template>
  <div class="search-rank">
    <div class="search-title">{{ title }}</div>
    <ul class="rank-list">
      <li v-for="(keyword, index) in keywords" :key="index">
        <router-link :to="keyword.route" @click="closeLayer">
          <span class="rank">{{ index + 1 }}</span>
          <figure><img :src="keyword.image" :alt="keyword.name" /></figure>
          <span class="rank-information">
            <span class="rank-brand">{{ keyword.brand }}</span>
            <span class="rank-name">{{ keyword.name }}</span>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.search-rank {
  margin:40px 0 0;
  padding:0 20px 40px;
  .search-title {
    font-size:16px;
    font-weight:600;
  }
  .rank-list {
    margin:16px 0 0;
    li {
      a { 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        padding:4px 0;
        .rank {
          flex-shrink: 0;
          width:32px;
          font-size:18px;
          font-weight:700;
          color:#333;
        }
        figure {
          width:50px;
          height:50px;
          img {
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:50%;
          }
        }
        .rank-information {
          flex:1;
          margin:0 0 0 10px;
          span {
            display:block;
            font-size:14px;
            &.rank-brand {
              font-weight:600;
            }
            &.rank-name {
              margin:4px 0 0;
              display: block;
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
        }
      }
    }
  }
}
</style>