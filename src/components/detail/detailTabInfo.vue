<script setup>
import { ref } from 'vue';

// Data for product information
const productInfo = ref({
  description: '가볍고 신축성 있는 소재의 플리츠 미니스커트입니다. 플리츠 주름이 연출되어 발랄하고 사랑스러운 무드를 선사하며 입체감 있는 실루엣을 연출할 수 있습니다. 폴리에스터, 폴리우레탄 소재를 사용하여 가볍고 탄탄하게 핏을 잡아주며 사이드 지퍼로 장시간 착용해도 편안합니다. 캐주얼 무드를 더한 플리츠 스커트로 트렌디한 코디를 완성해보세요.',
  disclosure: [
    { label: '상품코드', content: 'JWSKMI0100' },
    { label: '색상', content: 'LIGHT BEIGE, NAVY' },
    { label: '사이즈', content: '55, 66' },
    { label: '상품정보', content: '안감 있음<br>비침 비침없음<br>신축성 약간있음(1~2cm)' },
    { label: '착용계절', content: '봄, 가을' },
    { label: '소재', content: '겉감 폴리에스터 75% 레이온 18% 폴리우레탄 7%<br>심지 폴리에스터 100%<br>안감 폴리에스터 100%<br>배색 폴리에스터 97% 폴리우레탄 3% (상표/장식제외) 100%' },
    { label: '제조사/수입원', content: '(주)린컴퍼니' },
    { label: '제조국', content: '중국' },
    { label: '제조년월', content: '2022년 9월' },
    { label: '취급시 주의사항', content: '1. 반드시 단독 석유계 드라이 크리닝하십시오.<br>2. 저온으로 스팀하십시오.' },
    { label: '품질보증 기준', content: '본 제품을 구입하신 후 품질에 이상이 있을 때에는 소비자분쟁해결기준에 의거하여 소비자피해를 보상해 드립니다.<br>- 원단 불량, 부자재 불량, 봉제 불량, 사이즈 부정확, 부당표시(미표시 및 부실표시) 및 소재구성 부적합으로 인한 세탁사고 : 구입일로부터 1년 이내 분은 무상수리, 교환, 구입가 환불함. 단, 봉제불량은 1년 경과 후에도 무상수선.<br>- 교환/반품은 제품 수령일로부터 7일 이내에만 가능합니다.<br>- 교환은 동일한 제품의 한하여 색상과 사이즈만 가능합니다.<br>소비자 부주의에 의한 제품훼손 및 세탁 잘못으로 인한 변형, 품질보증기간(1년)이 경과된 제품에 대해서는 보상의 책임을 지지 않습니다.' },
    { label: 'A/S 책임자와 전화번호', content: '바이린샵 고객센터 (02-3218-5105)' }
  ]
});

const isOpen = ref(true); // Initial state set to true

const toggleDisclosure = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <section class="tab-info">
    <div class="detail-info-text">
      {{ productInfo.description }}
    </div>
    <div class="detail-info-disclosure">
      <div class="title" :class="{ 'open': isOpen }" @click="toggleDisclosure">상품정보 제공고시</div>
      <div class="list" :class="{ 'active': isOpen }">
        <div class="info-item" v-for="(item, index) in productInfo.disclosure" :key="index">
          <span class="info-label">{{ item.label }}</span>
          <span class="info-content" v-html="item.content"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"> 
  .tab {
    &-info {
      padding: 40px 20px;
      min-height: 1200px;
    }
  }
  .detail-info {
    &-text {
      padding: 40px 24px;
      font-size: 14px;
      line-height: 24px;
      color: #333;
      border-radius: 100px;
      background-color: #F6F6F6;
      &::before {
        content:'';
        display: block;
        width: 100%;
        height: 47px;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_114_3253)'%3E%3Cpath d='M8.19172 8.98811C6.3474 8.98811 4.84215 9.46968 3.38443 10.947C3.86928 5.6001 6.46148 2.7915 13.2494 1.16662L13.2462 0C4.60131 0.991085 0 6.59584 0 13.26C0 19.4458 2.85839 23 7.49455 23C11.5381 23 14.5708 20.5394 14.5708 15.6523C14.5708 11.5513 11.9564 8.98811 8.19172 8.98811Z' fill='%23CCCCCC'/%3E%3Cpath d='M25.6209 8.98811C23.7766 8.98811 22.2713 9.46968 20.8136 10.947C21.2985 5.6001 23.8907 2.7915 30.6786 1.16662L30.6754 0C22.0305 0.991085 17.4292 6.59584 17.4292 13.26C17.4292 19.4458 20.2876 23 24.9238 23C28.9673 23 32 20.5394 32 15.6523C32 11.5513 29.3856 8.98811 25.6209 8.98811Z' fill='%23CCCCCC'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_114_3253'%3E%3Crect width='32' height='23' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position-x: center;
      }
      &::after {
        content:'';
        display: block;
        width: 100%;
        height: 47px;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_114_3249)'%3E%3Cpath d='M23.8083 14.0119C25.6526 14.0119 27.1579 13.5303 28.6156 12.053C28.1307 17.3999 25.5385 20.2085 18.7506 21.8334L18.7538 23C27.3987 22.0089 32 16.4042 32 9.73997C32 3.55423 29.1416 0 24.5055 0C20.4619 0 17.4292 2.46062 17.4292 7.3477C17.4292 11.4487 20.0436 14.0119 23.8083 14.0119Z' fill='%23CCCCCC'/%3E%3Cpath d='M6.37909 14.0119C8.22341 14.0119 9.72866 13.5303 11.1864 12.053C10.7015 17.3999 8.10933 20.2085 1.32145 21.8334L1.32462 23C9.9695 22.0089 14.5708 16.4042 14.5708 9.73997C14.5708 3.55423 11.7124 0 7.07625 0C3.03268 0 0 2.46062 0 7.3477C0 11.4487 2.61438 14.0119 6.37909 14.0119Z' fill='%23CCCCCC'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_114_3249'%3E%3Crect width='32' height='23' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center 100%;
      }
    }
    &-disclosure {
      margin-top: 40px;
      .title {
        position: relative;
        padding-bottom: 24px;
        font-size: 18px;
        line-height: 24px;
        color: #111;
        border-bottom: 1px solid #111;
        &::after {
          content:'';
          position: absolute;
          right: 0;
          top: 0;
          width: 24px;
          height: 24px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 16L12 9L5 16' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
          transform: rotate(180deg);
        }
        &.open{
          &::after {
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 16L12 9L5 16' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
            transform: rotate(0deg);
          }
        }
      }
      .list {
        display: none;
        &.active {
          display: block;
        }
        .info-item {
          display: flex;
          flex-wrap: wrap;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
          .info-label {
            flex: 1;
            padding-right: 12px;
            font-size: 14px;
            line-height: 20px;
            color : #111;
            word-break: keep-all;
          }
          .info-content {
            flex: 2.5;
            font-size: 14px;
            line-height: 20px;
            color : #666;
          }
        }
      }
    }
  }

</style>