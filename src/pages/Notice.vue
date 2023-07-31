<template>
  <section class="notice">
    
    <!-- 검색 -->
    <article class="search">
      <input type="text" name="sch" id="sch" placeholder="검색어를 입력해 주세요" v-model="searchKeyword">
      <button type="button" @click="search">검색</button>
    </article>

    <!-- 탭메뉴 -->
    <article class="tab">
      <ul>
        <li :class="{ active: currentTab === '전체' }">
          <button type="button" @click="changeTab('전체')">전체</button>
        </li>
        <li :class="{ active: currentTab === '일반공지' }">
          <button type="button" @click="changeTab('일반공지')">일반공지</button>
        </li>
        <li :class="{ active: currentTab === '행사공지' }">
          <button type="button" @click="changeTab('행사공지')">행사공지</button>
        </li>
        <li :class="{ active: currentTab === '당첨자발표' }">
          <button type="button" @click="changeTab('당첨자발표')">당첨자발표</button>
        </li>
      </ul>
    </article>

    <!-- 리스트 -->
    <article class="list">
      <h2 class="title">{{ currentTab }}</h2>
      
      <!-- 검색결과 키워드와 개수 표시 -->
      <div class="result" v-if="filteredItems.length > 0 && searchKeyword">
        <strong class="text-secondary">{{ searchKeyword }}</strong> (으)로 검색결과 <strong class="text-secondary">{{ filteredItems.length }}</strong>개
      </div>

      <ul class="list-items">
        <li v-for="item in filteredItems" :key="item.date" class="item">
          <div class="subject" @click="toggleSubtext(item)">
            <div class="label">{{ item.label }}</div>
            <div class="title">
              <p v-html="highlightKeyword(item.title)"></p>
              <p class="date">{{ item.date }}</p>
            </div>
            <button
              type="button"
              class="btn-more"
              :class="{ active: item.showSubtext }"
            >
              자세히 보기
            </button>
          </div>
          <div class="subtext" v-if="item.showSubtext">
            <p v-html="highlightKeyword(item.subtext)"></p>
            <p>■ 당첨 대상 : {{ item.date }}</p>
            <p>■ 지급 일시 : {{ item.date }} (당첨자 개별 안내 문자 발송)</p>
          </div>
        </li>
      </ul>

      <!-- 검색 결과가 없을 때 -->
      <div class="nolist" v-if="filteredItems.length === 0 && searchKeyword">
        <span>검색 결과가 없습니다.</span>
      </div>

      <div class="nolist" v-if="filteredItems.length === 0 && !searchKeyword">
        <span>등록된 공지가 없습니다.</span>
      </div>

    </article>


  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '일반공지',
          title: '당첨자 발표',
          date: '2023-07-03',
          subtext: '바이린샵을 이용해주시는 고객님들께 감사의 마음을 담아 매월 초 베스트리뷰를 선정하여 포인트를 지급해드립니다. 당첨 대상: 2023년 6월 1일~6월 30일 리뷰 작성자 중 베스트 선정, 지급 일시: 2023년 7월 3일 (당첨자 개별 안내 문자 발송)',
          showSubtext: false
        },
        {
          label: '일반공지',
          title: '일반공지 발표',
          date: '2023-03-03',
          subtext: '바이린샵을 이용해주시는 고객님들께 감사의 마음을 담아 매월 초 베스트리뷰를 선정하여 포인트를 지급해드립니다. 당첨 대상: 2023년 6월 1일~6월 30일 리뷰 작성자 중 베스트 선정, 지급 일시: 2023년 7월 3일 (당첨자 개별 안내 문자 발송)',
          showSubtext: false
        },
        {
          label: '당첨자발표',
          title: '당첨자발표 발표',
          date: '2023-08-03',
          subtext: '당첨자발표 발표당첨자발표 발표당첨자발표 발표당첨자발표 발표당첨자발표 발표당첨자발표 발표당첨자발표 발표당첨자발표 발표',
          showSubtext: false
        },
      ],
      currentTab: "전체",
      searchKeyword: "",
    };
  },
  computed: {
    filteredItems() {
      if (this.currentTab === "전체") {
        return this.items.filter((item) =>
          item.title.includes(this.searchKeyword)
        );
      } else {
        return this.items
          .filter((item) => item.label === this.currentTab)
          .filter((item) => item.title.includes(this.searchKeyword));
      }
    },
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
    toggleSubtext(item) {
      item.showSubtext = !item.showSubtext;
    },
     highlightKeyword(text) {
      if (!this.searchKeyword) return text;
      return text.replace(
        new RegExp(this.searchKeyword, "gi"),
        (match) => `<span class="text-secondary">${match}</span>`
      );
    },
    search() {
      // 검색 버튼 클릭 시 검색 기능 추가
      if (this.searchKeyword) {
        // 검색 키워드가 있는 경우에만 탭을 "전체"로 설정
        this.currentTab = "전체";
      }
    },
  },
};
</script>

<style lang="scss">
.notice {

  .search {
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:8px;
    padding:30px 20px;
    background-color:#f6f6f6;
    input[type="text"]{
      flex: 1 1 auto;
      padding:12px 12px;
      line-height:20px;
      font-size:14px;
      color: var(--111111, #111);
      border: 1px solid var(--cccccc, #CCC);
      background: var(--ffffff, #FFF);
    }
    button {
      display:block;
      width:80px;
      padding:13px 20px;
      line-height:20px;
      font-size:14px;
      font-weight:bold;
      color: var(--ffffff, #fff);
      background-color: var(--111111, #111);
    }
  }

  .tab {
    margin:40px 0;
    padding:0 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: initial;
        flex-shrink: 1;
        flex-grow: 0;
        flex-basis: 33.3%;
        border: 1px solid #eeeeee;
        margin-top: -1px;
        margin-left: -1px;
        button {
          display:block;
          width:100%;
          padding: 10px 10px 11px;
          font-size:16px;
          text-align: center;
          color: #111;
          background-color: #fff;
        }
        &.active {
          border-color:#111;
          z-index:1;
          button {
            color:#fff;
            background:#111;
            font-weight: 600;
          }
        }
      }

    }
  }

  .list {
    margin: 40px 0;
    padding: 0 20px;
    .title {
      font-size:16px;
      font-weight: 600;
    }
    .result {
      margin:15px 0 0;
      font-size:14px;
    }
    .list-items {
      margin:24px 0 0;
      border-top:1px solid #111;
      .item {
        border-bottom:1px solid #eee;
        .subject {
          display:flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          padding:16px 0;
          .label {
            font-size:12px;
            color:#999;
          }
          .title {
            flex: 1 1 auto;
            font-size:14px;
            .date {
              margin:4px 0 0;
              font-size:12px;
              color:#999;
            }
          }
          .btn-more {
            width:30px;
            height:30px;
            font-size:0;
            color:#fff;
            background: url(/src/assets/images/common/icon-arr.svg) center center no-repeat;
            &.active {
              transform: rotate(180deg);
            }
          }
        }
        .subtext {
          padding:16px;
          font-size:14px;
          border-top:1px solid #ccc;
          background-color:#f6f6f6;
          p{
            margin:6px 0;
          }
        }
      }
    }
  }
  
  .nolist {
    padding:60px 0 60px;
    border-bottom:1px solid #eee;
    span{
      display:block;
      padding:88px 0 0;
      text-align:center;
      font-size:14px;
      color:#111;
      background: url(/src/assets/images/display/icon-nolist.svg) top center no-repeat;
    }
  }
  .text-secondary {
    color:#FF2A00;
  }
}

</style>