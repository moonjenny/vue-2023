<template>
  <section class="mypage">

    <div class="ignore-responsive">
    <ul>
        <li>
          <a href="/myPage/point" class="item">
            <span class="tit">보유 포인트</span>
            <strong>5,000P</strong>
          </a>  
        </li>
        <li>
          <a href="/myPage/coupon" class="item">
            <span class="tit">총 보유쿠폰</span>
            <strong>2개</strong>
          </a>
        </li>
        <li>
          <a href="/myPage/coupon?couponType=online" class="item">
            <span class="tit">온라인 쿠폰</span>
            <strong>1개</strong>
          </a>
        </li>
        <li>
          <a href="/myPage/wishList" class="item">
            <span class="tit">관심상품</span>
            <strong>0개</strong>
          </a>
        </li>
      </ul>
    </div>

    <div class="my-summary">
      <ul>
        <li>
          <a href="/myPage/point" class="item">
            <span class="tit">보유 포인트</span>
            <strong>5,000P</strong>
          </a>  
        </li>
        <li>
          <a href="/myPage/coupon" class="item">
            <span class="tit">당월 소멸예정 포인트</span>
            <strong>0P</strong>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
/* 컴포넌트 스타일 */
.mypage {
  padding:0 20px;
  .ignore-responsive {
    margin:24px 0 0;
    overflow-x:auto;
    border: 1px solid #111111;
    margin-top: 24px;
    padding: 24px 32px;
    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 0;
      width: 500px;
      li {
        flex: 0 0 99.9999999996%;
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        a {
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          .tit {
            font-size:12px;
          }
          strong{
            font-size:18px;
            font-weight:500;
          }
        }
      }
    }
  }
  .my-summary {
    border: 1px solid #111111;
    margin-top: 24px;
    padding: 24px 32px;
    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 12px;
      li {
        a {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          .tit {
            font-size:12px;
          }
          strong{
            font-size:18px;
            font-weight:500;
          }
        }
      }
    }
  }
}
</style>