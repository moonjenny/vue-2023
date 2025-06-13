<script setup>
// 주문사은품
import { ref } from 'vue';

// Swiper 모듈 및 스타일 가져오기
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // Swiper 기본 스타일
// 필요한 경우 추가 모듈(예: Pagination, Navigation) 스타일도 import 합니다.
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// 사은품 데이터 (5개)
const giftPromotions = ref([
  {
    title: '주문사은품증정 행사명 1',
    period: '2022-11-01~2022-11-30',
    items: [
      {
        imgSrc: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'LYNN',
        name: '클래식 사은품 1',
        number: '1개',
        soldOut: true
      },
      {
        imgSrc: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
        brand: 'ZEUS',
        name: '프리미엄 사은품 2',
        number: '1개',
        soldOut: false
      },
      {
        imgSrc: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-03.png',
        brand: 'VENUS',
        name: '럭셔리 사은품 3',
        number: '2개',
        soldOut: false
      },
      {
        imgSrc: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
        brand: 'MARS',
        name: '한정판 사은품 4',
        number: '1개',
        soldOut: false
      },
      {
        imgSrc: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
        brand: 'JUPITER',
        name: '콜라보 사은품 5',
        number: '1개',
        soldOut: false
      },
    ]
  },
  { // 두 번째 사은품 행사 데이터
    title: '연말 특별 사은품 이벤트',
    period: '2023-12-01~2023-12-31',
    items: [
      {
        imgSrc: 'https://dummyimage.com/74x115/eeeeee/000000&text=Gifts image',
        brand: 'ALPHA',
        name: '스페셜 굿즈',
        number: '1개',
        soldOut: false
      },
      {
        imgSrc: 'https://dummyimage.com/74x115/eeeeee/000000&text=Gifts image',
        brand: 'BETA',
        name: '커스텀 키링',
        number: '2개',
        soldOut: false
      },
       {
        imgSrc: 'https://dummyimage.com/74x115/eeeeee/000000&text=Gifts image',
        brand: 'GAMMA',
        name: '시그니처 향수',
        number: '1개',
        soldOut: false
      },
    ]
  }
]);

// Swiper 설정 (필요에 따라 추가)
const swiperOptions = {
  slidesPerView: 'auto', // 한 번에 3개의 슬라이드 표시 (예시)
  spaceBetween: 8, // 슬라이드 간 간격
  // pagination: {
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
};
</script>

<template>
  <div class="my-order-detail-gifts">
    <h3>주문사은품 정보</h3>
    <div v-for="(promotion, promoIndex) in giftPromotions" :key="promoIndex" class="my-order-gifts">
      <h4>{{ promotion.title }}</h4>
      <div class="data">{{ promotion.period }}</div>

      <swiper :slides-per-view="swiperOptions.slidesPerView" :space-between="swiperOptions.spaceBetween" class="mySwiper">
        <swiper-slide v-for="(item, itemIndex) in promotion.items" :key="itemIndex">
          <div class="gift-item-wrapper" :class="{ 'dimmed': item.soldOut }">
            <img :src="item.imgSrc" :alt="item.name">
            <span class="brand">{{ item.brand }}</span>
            <span class="name">{{ item.name }}</span>
            <span class="number">{{ item.number }}</span>
            <span v-if="item.soldOut" class="sold-out-text">소진</span>
          </div>
        </swiper-slide>
      </swiper>

    </div>
    <ul class="my-order-gifts-notice">
      <li>부분 주문취소 및 반품 시 사은품 증정이 취소될 수 있습니다.</li>
      <li>반품 시 지급받은 사은품도 함께 보내주셔야 반품이 진행됩니다.</li>
    </ul>
  </div>
</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.my-order {
  &-gifts {
    margin: 24px 0;
    h4 {
      font-size: 16px;
      font-weight: 500;
      color: #111111;
    }
    .data {
      display: block;
      margin-top: 4px;
      color: #666666;
      font-size: 14px;
    }
    &-notice {
      margin: 24px 0;
      padding: 24px 20px;
      background-color: #F6F6F6;
      li {
        position: relative;
        padding-left: 12px;
        font-size: 13px;
        line-height: 19px;
        color: #666666;
        &:before {
          content:'';
          position: absolute;
          top: 8px;
          left: 4px;
          width: 2px;
          height: 2px;
          border-radius: 2px;
          background-color: #666666;
        }
      }
    }
  }
}

/* Swiper 기본 스타일 (필요에 따라 커스터마이징) */
.mySwiper {
  width: 100%;
  height: auto; /* 내용에 따라 높이 조절 */
  margin-top: 20px; /* 상단 여백 추가 */
  padding-bottom: 24px;
  border-bottom: 1px solid #cccccc;

  .swiper-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    width: 74px;

    .gift-item-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      &.dimmed {
        // 이미지 자체를 어둡게 처리하거나, 오버레이를 씌우는 방식
        img {
          filter: brightness(50%); // 이미지를 50% 어둡게
        }
        
        // 전체 아이템에 대한 오버레이 (텍스트 포함)
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 115px;
          background-color: rgba(255, 255, 255, 0.8); // 반투명 검정 오버레이
          z-index: 1; // 텍스트 위에 오지 않도록
        }

        .sold-out-text {
          position: absolute;
          top: 48px;
          left: 50%;
          transform: translate(-50%, 0);
          color: #666666;
          font-size: 14px;
          font-weight: 500;
          z-index: 2;
        }

        // dimmed 상태일 때 텍스트 색상을 다르게 할 수도 있습니다.
        .brand, .name, .number {
          // color: #aaa; // 텍스트 색상을 연하게
        }
      }
    }

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 8px;
    }

    .brand {
      font-size: 12px;
      color: #999999;
      margin-bottom: 8px;
    }

    .name {
      font-size: 13px;
      color: #111111;
      line-height: 14px;
      // min-height: 28px;
      margin-bottom: 8px;
    }

    .number {
      font-size: 14px;
      color: #666666;
    }
  }
}
</style>