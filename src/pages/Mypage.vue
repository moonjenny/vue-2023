<template>
  <section class="mypage">
    <div class="my-title">안녕하세요, {{ myName }}님</div>
    <div class="my-benefit">
      <strong>브론즈</strong>
      <router-link to="/vue-2023/popup-member-benefit">등급별 혜택안내</router-link>
    </div>

    <div class="my-summary">
      <ul>
        <li>
          <router-link to="/vue-2023/mypage/point/" class="item">
            <span class="tit">보유 포인트</span>
            <strong>5,000P</strong>
          </router-link>  
        </li>
        <li>
          <router-link to="/vue-2023/mypage/coupon/" class="item">
            <span class="tit">총 보유쿠폰</span>
            <strong>2개</strong>
          </router-link>
        </li>
        <li>
          <router-link to="/vue-2023/mypage/coupon/" class="item">
            <span class="tit">온라인 쿠폰</span>
            <strong>1개</strong>
          </router-link>
        </li>
        <li>
          <router-link to="/vue-2023/like/" class="item">
            <span class="tit">관심상품</span>
            <strong>0개</strong>
          </router-link>
        </li>
      </ul>
    </div>

    <nav class="my-aside">
      <dl>
        <dt>쇼핑정보</dt>
        <dd>
          <router-link to="/vue-2023/my1">주문/배송조회</router-link>
          <router-link to="/vue-2023/my2">반품/교환조회</router-link>
          <router-link to="/vue-2023/my3">오프라인 주문/배송조회</router-link>
          <router-link to="/vue-2023/my4">이전 주문조회</router-link>
        </dd>
      </dl>
      <dl>
        <dt>혜택정보</dt>
        <dd>
          <router-link to="/vue-2023/my11">포인트</router-link>
          <router-link to="/vue-2023/my12">쿠폰</router-link>
          <router-link to="/vue-2023/my13">예치금/환불계좌</router-link>
        </dd>
      </dl>
      <dl>
        <dt>활동정보</dt>
        <dd>
          <router-link to="/vue-2023/my21">상품리뷰</router-link>
          <router-link to="/vue-2023/my22">관심상품</router-link>
          <router-link to="/vue-2023/my23">재입고알림</router-link>
        </dd>
      </dl>
      <dl>
        <dt>회원정보</dt>
        <dd>
          <router-link to="/vue-2023/my31">회원정보 수정</router-link>
          <router-link to="/vue-2023/my32">배송지 관리</router-link>
          <router-link to="/vue-2023/my33">마케팅정보 수신 설정</router-link>
          <router-link to="/vue-2023/my33">회원탈퇴</router-link>
        </dd>
      </dl>
    </nav>

    <div class="btn-logout">
      <button type="button" class="">로그아웃</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //이름
      myName: "홍길동",
    };
  },
};
</script>

<style lang="scss">
/* 컴포넌트 스타일 */
.mypage {
  padding:0 20px;
  .my-title {
    margin:32px 0 0;
    font-size:24px;
  }
  .my-benefit {
    margin:5px 0 0;
    font-size:13px;
    color:#999;
    strong {
      color:#ff2a00;
    }
    a {
      margin-left:10px;
      text-decoration: underline;
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
  .my-aside {
    dl {
      margin:40px 0 0;
      dt {
        margin: 0 0 24px;
        font-size:18px;
      }
      dd {
        a {
          margin: 8px 0 0;
          display:block;
          font-size:14px;
          line-height:21px;
          color:#999;
        }
      }
    }
  }
  .btn-logout {
    padding: 30px 0;
    background-color: #fff;
    button {
      display: block;
      width: 100%;
      padding: 14px 0;
      color: #444;
      font-size: 17px;
      font-weight: 500;
      line-height: 20px;
      border: 1px solid #f0f2f4;
      border-radius: 6px;
      background-color: #f6f8fa;
      text-align: center;
      letter-spacing: -.5px;
    }
  }
}
</style>