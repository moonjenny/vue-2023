<script>
//마이페이지 메인
export default {
  data() {
    return {
      // 사용자 기본 정보
      myName: "홍길동",
      memberGrade: "브론즈",

      // 마이페이지 요약 정보(적립금, 쿠폰, 관심상품)
      currentPoints: "500,000",
      totalCoupons: 3,
      wishlistItemCount: 0,

      // 링크 경로
      benefitGuideLink: "/vue-2023/popup-member-benefit/",  // 등급별 혜택안내
      pointsLink: "/vue-2023/mypage/point/",                // 보유 적립금
      totalCouponLink: "/vue-2023/mypage/coupon/",          // 쿠폰
      wishlistLink: "/vue-2023/like/",                      // 관심상품
      recentOrderLink: "/vue-2023/mypage/recent/",          // 최근 주문내역
      changeAddressLink: "/vue-2023/mypage/changeaddress/", // 배송지 변경
      interestOrderLink: "/vue-2023/mypage/interestorder/", // 관심 상품 더보기

      // 나의 쇼핑정보
      shoppingInfoLinks: {
        orderDelivery: "/vue-2023/mypage/orderdelivery/",      // 주문배송조회
        returnsExchanges: "/vue-2023/mypage/returnexchange/",  // 반품/교환조회
        offlineOrder: "/vue-2023/mypage/offlineorder/",        // 오프라인 주문배송조회
        previousOrders: "/vue-2023/mypage/previousorders/",    // 이전 주문 조회
      },
      // 혜택정보
      benefitInfoLinks: {
        points: "/vue-2023/mypage/points/",                    // 적립금
        coupons: "/vue-2023/mypage/coupons/",                  // 쿠폰
        depositsRefunds: "/vue-2023/mypage/depositsrefunds/",  // 예치금/환불계좌
      },
      // 활동정보
      activityInfoLinks: {
        productReviews: "/vue-2023/mypage/productreviews/",  // 상품리뷰
        wishlist: "/vue-2023/mypage/wishlist/",              // 관심상품
        restockAlerts: "/vue-2023/mypage/restockalerts/",    // 재입고알림
      },
      // 문의정보
      inquiryInfoLinks: {
        directInquiry: "/vue-2023/mypage/directinquiry/",  // 1:1문의
        askProduct: "/vue-2023/mypage/askproduct/",        // 상품문의
      },
      // 회원정보
      memberInfoLinks: {
        editProfile: "/vue-2023/mypage/editprofile/",          // 회원정보 수정
        changePassword: "/vue-2023/mypage/changepassword/",    // 비밀번호 변경
        manageShipping: "/vue-2023/mypage/manageshipping/",    // 배송지 관리
        withdrawAccount: "/vue-2023/mypage/withdrawaccount/",  // 회원탈퇴
      },
    };
  },
};
</script>
<script setup>
  // 관심 상품 리스트
  import prodType1 from './../components/mypage/product/prodInterest.vue';
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
            <span class="tit">보유 적립금</span>
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

    <!-- 최근 주문 내역 -->
    <div class="my-recent-order">
      <div class="my-recent-title">
        <h2>최근 주문내역</h2>
        <router-link :to="recentOrderLink">더보기</router-link>
      </div>

      <!-- 내역 없음 -->
      <div class="my-recent-product-nodata">
        <span>최근 주문내역이 없습니다.</span>
      </div>

      <!-- 내역 있음 -->
      <div class="my-recent-data">
        <dl class="my-recent-data-item">
          <dt>주문일</dt>
          <dd>2022-12-23</dd>
          <dt>주문번호</dt>
          <dd>YYMMDDHHMI0000</dd>
        </dl>
        <router-link :to="changeAddressLink" class="link">배송지 변경</router-link>
      </div>

      <div class="my-recent-product">
        <div class="my-recent-product-item">
          <div class="my-recent-product-thumb">
            <picture><img src="https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png"></picture>
            <div class="my-recent-product-thumb-info">
              <span class="brand">LYNN</span>
              <span class="name">클래식 크롭 테일러드 자켓</span>
              <span class="option">브라운 / 55</span>
            </div>
          </div>
          <div class="my-recent-product-gifts">
            <span class="gifts-item"><strong>[사은품]</strong>브랜드명 사은품명-1개 (2개) <em>* 소진</em></span>
            <span class="gifts-item"><strong>[사은품]</strong>브랜드명 사은품명-1개 (2개)</span>
          </div>
          <div class="my-recent-product-price">
            <span class="quantity">주문수량 2개</span>
            <span class="price">9,000원</span>
          </div>
          <div class="my-recent-product-status">
            <span class="status">주문완료</span>
            <ul class="buttons">
              <li><button type="button" class="active">구매확정</button></li>
              <li><button type="button">배송조회</button></li>
              <li><button type="button">반품신청</button></li>
              <li><button type="button">교환신청</button></li>
            </ul>
          </div>
        </div>
        <div class="my-recent-product-item">
          <div class="my-recent-product-gifts">
            <span class="gifts-item"><strong>[추가]</strong>맨투맨티셔츠 빨강/L-1개 (총 2개)</span>
          </div>
          <div class="my-recent-product-price">
            <span class="quantity">주문수량 1개</span>
            <span class="price">9,000원</span>
          </div>
          <div class="my-recent-product-status">
            <span class="status">주문완료</span>
            <ul class="buttons">
              <li><button type="button">배송조회</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 관심 상품 -->
    <div class="my-interest">
      <div class="my-interest-title">
        <h2>관심상품</h2>
        <router-link :to="interestOrderLink">더보기</router-link>
      </div>

      <!-- 내역 없음 -->
      <div class="my-interest-nodata">
        <span>관심상품이 없습니다.</span>
      </div>

      <prodType1 />

    </div>

    <nav class="my-aside">
      <dl>
        <dt>나의 쇼핑정보</dt>
        <dd>
          <router-link :to="shoppingInfoLinks.orderDelivery">주문배송조회</router-link>
          <router-link :to="shoppingInfoLinks.returnsExchanges">반품/교환조회</router-link>
          <router-link :to="shoppingInfoLinks.offlineOrder">오프라인 주문배송조회</router-link>
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
          <router-link :to="memberInfoLinks.changePassword">비밀번호 변경</router-link>
          <router-link :to="memberInfoLinks.manageShipping">배송지 관리</router-link>
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
  .my-recent {
    // 최근 주문 내역
    &-order {
      margin-top: 60px;
    }
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid #333333;
      h2 {
        font-size:18px;
        line-height: 20px;
        font-weight: 500;
      }
      a {
        font-size: 13px;
        padding-right: 14px;
        background-image: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6L1 10.5' stroke='%23111111' stroke-linecap='square'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: 100% 50%;
      }
    }
    &-data {
      padding: 25px 20px;
      border-bottom: 1px solid #cccccc;
      background-color: #F6F6F6;
      &-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 8px 0;
        dt {
          width: 30%;
          font-size: 13px;
          color: #111111;
          font-weight: 500;
        }
        dd {
          width: 70%;
          font-size: 13px;
          color: #666666;
        }
      }
      .link {
        width: 136px;
        display: block;
        margin-top: 16px;
        padding: 8px 16px;
        text-align: center;
        color: #ffffff;
        line-height: 16px;
        font-size: 13px;
        font-weight: 500;
        background-color: #111111;
      }
    }

    // 최근 주문 상품
    &-product {
      margin-top: 24px;
      &-item {
        margin-bottom: 24px;
      }
      &-thumb {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        picture {
          width: 74px;
          img {
            width: 100%;
            vertical-align: top;
          }
        }
        &-info {
          flex: 1;
          span {
            display: block;
          }
          .brand {
            font-size: 12px;
            color: #999999;
          }
          .name {
            margin-top: 8px;
            font-size: 13px;
            color: #111111;
          }
          .option {
            margin-top: 12px;
            font-size: 13px;
            color: #666666;
          }
        }
      }
      &-gifts {
        margin-top: 24px;
        .gifts-item {
          display: block;
          margin-top: 8px;
          font-size: 13px;
          line-height: 17px;
          color: #111111;
          strong {
            font-weight: 500;
          }
          em {
            margin-left: 4px;
            font-style: normal;
            color: #FF2A00;
          }
        }
      }
      &-price {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .quantity {
          font-size: 13px;
          color: #111111;
        }
        .price {
          font-size: 16px;
          color: #111111;
          font-weight: 700;
        }
      }
      &-status {
        margin-top: 24px;
        padding-bottom: 24px;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        .status {
          padding-top: 7px;
          width: 90px;
          text-align: left;
          font-size: 14px;
          line-height: 18px;
          color: #0000BF;
        }
        ul.buttons {
          flex: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          li {
            flex-basis: calc(50% - 4px);
            button {
              display: block;
              width: 100%;
              padding: 8px;
              text-align: center;
              font-size: 13px;
              line-height: 14px;
              font-weight: 500;
              color: #666666;
              border: 1px solid #666666;
              &.active {
                background-color: #F6F6F6;
                color: #ffffff;
                border-color: #111111;
                background-color: #111111;
              }
            }
          }
        }
      }
      &-nodata {
        padding: 60px 20px;
        text-align: center;
        border-bottom: 1px solid #eeeeee;
        span {
          display: block;
          padding-top: 88px;
          font-size: 14px;
          color: #111111;
          background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.5859 1L55 10.4141V63H9V1H45.5859Z' stroke='%23333333' stroke-width='2'/%3E%3Crect x='29' y='43' width='6' height='6' rx='3' fill='%23333333'/%3E%3Cpath d='M29.1362 17.9969C29.062 16.3642 30.3657 15 32 15C33.6343 15 34.938 16.3642 34.8638 17.9969L34.0908 35.0021C34.04 36.1199 33.119 37 32 37C30.881 37 29.96 36.1199 29.9092 35.0021L29.1362 17.9969Z' fill='%23333333'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-position: 50% 0;
        }
      }
    }
  }

  // 관심 상품
  .my-interest {
    margin-top: 60px;
    padding-bottom: 40px;
    border-bottom: 1px solid #cccccc;
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid #333333;
      h2 {
        font-size:18px;
        line-height: 20px;
        font-weight: 500;
      }
      a {
        font-size: 13px;
        padding-right: 14px;
        background-image: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6L1 10.5' stroke='%23111111' stroke-linecap='square'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: 100% 50%;
      }
    }
    &-item {
      margin-bottom: 24px;
    }
    &-nodata {
      padding: 60px 20px;
      text-align: center;
      border-bottom: 1px solid #eeeeee;
      span {
        display: block;
        padding-top: 88px;
        font-size: 14px;
        color: #111111;
        background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.5859 1L55 10.4141V63H9V1H45.5859Z' stroke='%23333333' stroke-width='2'/%3E%3Crect x='29' y='43' width='6' height='6' rx='3' fill='%23333333'/%3E%3Cpath d='M29.1362 17.9969C29.062 16.3642 30.3657 15 32 15C33.6343 15 34.938 16.3642 34.8638 17.9969L34.0908 35.0021C34.04 36.1199 33.119 37 32 37C30.881 37 29.96 36.1199 29.9092 35.0021L29.1362 17.9969Z' fill='%23333333'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: 50% 0;
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