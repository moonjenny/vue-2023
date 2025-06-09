<script>
//마이페이지 메인
export default {
  data() {
    return {
      // 사용자 기본 정보
      myName: "홍길동",
      memberGrade: "브론즈",

      // 마이페이지 요약 정보
      currentPoints: "500,000",
      totalCoupons: 3,
      wishlistItemCount: 0,

      // 라우터 링크 경로
      benefitGuideLink: "/vue-2023/popup-member-benefit",
      pointsLink: "/vue-2023/mypage/point/",
      totalCouponLink: "/vue-2023/mypage/coupon/",
      onlineCouponLink: "/vue-2023/mypage/coupon/",
      wishlistLink: "/vue-2023/like/",

      shoppingInfoLinks: {
        orderDelivery: "/vue-2023/my1",
        returnsExchanges: "/vue-2023/my2",
        offlineOrderDelivery: "/vue-2023/my3",
        previousOrders: "/vue-2023/my4",
      },
      benefitInfoLinks: {
        points: "/vue-2023/my11",
        coupons: "/vue-2023/my12",
        depositsRefunds: "/vue-2023/my13",
      },
      activityInfoLinks: {
        productReviews: "/vue-2023/my21",
        wishlist: "/vue-2023/my22",
        restockAlerts: "/vue-2023/my23",
      },
      inquiryInfoLinks: { // 문의정보 링크
        directInquiry: "/vue-2023/my41",
        askProduct: "/vue-2023/my42",
      },
      memberInfoLinks: {
        editProfile: "/vue-2023/my31",
        changePassword: "/vue-2023/my32",
        manageShipping: "/vue-2023/my33",
        withdrawAccount: "/vue-2023/my34",
      },
    };
  },
};
</script>

<template>
  <section class="mypage">
    <div class="my-title">안녕하세요, {{ myName }}님</div>
    <div class="my-benefit">
      <strong>{{ memberGrade }}</strong>
      <router-link :to="benefitGuideLink">등급별 혜택안내</router-link>
    </div>

    <div class="my-summary">
      <ul>
        <li>
          <router-link :to="pointsLink" class="item">
            <span class="tit">보유 포인트</span>
            <strong>{{ currentPoints }}P</strong>
          </router-link>
        </li>
        <li>
          <router-link :to="totalCouponLink" class="item">
            <span class="tit">쿠폰</span>
            <strong>{{ totalCoupons }}개</strong>
          </router-link>
        </li>
        <li>
          <router-link :to="wishlistLink" class="item">
            <span class="tit">관심상품</span>
            <strong>{{ wishlistItemCount }}개</strong>
          </router-link>
        </li>
      </ul>
    </div>

    <nav class="my-aside">
      <dl>
        <dt>나의 쇼핑정보</dt>
        <dd>
          <router-link :to="shoppingInfoLinks.orderDelivery">주문배송조회</router-link>
          <router-link :to="shoppingInfoLinks.returnsExchanges">반품/교환조회</router-link>
          <router-link :to="shoppingInfoLinks.offlineOrderDelivery">오프라인 주문배송조회</router-link>
          <router-link :to="shoppingInfoLinks.previousOrders">이전 주문 조회</router-link>
        </dd>
      </dl>
      <dl>
        <dt>혜택정보</dt>
        <dd>
          <router-link :to="benefitInfoLinks.points">적립금</router-link>
          <router-link :to="benefitInfoLinks.coupons">쿠폰</router-link>
          <router-link :to="benefitInfoLinks.depositsRefunds">예치금/환불계좌</router-link>
        </dd>
      </dl>
      <dl>
        <dt>활동정보</dt>
        <dd>
          <router-link :to="activityInfoLinks.productReviews">상품리뷰</router-link>
          <router-link :to="activityInfoLinks.wishlist">관심상품</router-link>
          <router-link :to="activityInfoLinks.restockAlerts">재입고알림</router-link>
        </dd>
      </dl>
      <dl>
        <dt>문의정보</dt>
        <dd>
          <router-link :to="inquiryInfoLinks.directInquiry">1:1문의</router-link>
          <router-link :to="inquiryInfoLinks.askProduct">상품문의</router-link>
        </dd>
      </dl>
      <dl>
        <dt>회원정보</dt>
        <dd>
          <router-link :to="memberInfoLinks.editProfile">회원정보 수정</router-link>
          <router-link :to="memberInfoLinks.changePassword">비밀번호변경</router-link>
          <router-link :to="memberInfoLinks.manageShipping">배송지관리</router-link>
          <router-link :to="memberInfoLinks.withdrawAccount">회원탈퇴</router-link>
        </dd>
      </dl>
    </nav>

    <div class="btn-logout">
      <button type="button" class="">로그아웃</button>
    </div>
  </section>
</template>

<style lang="scss">
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
        font-weight: 600;
      }
      dd {
        a {
          margin: 8px 0 0;
          display:block;
          font-size:14px;
          line-height:21px;
          color:#111111;
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