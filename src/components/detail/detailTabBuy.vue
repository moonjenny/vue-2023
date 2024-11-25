<script setup>
import { ref } from 'vue';

const buyList = ref([
  {
    title: '배송안내',
    contents: [
      '입금완료일부터 2~4일 소요됩니다.(토/일/공휴일 제외)',
      '50,000원 이상 결제 시 무료배송 / 50,000원 미만 결제 시 2,500원 / 제주도/도서산간 지역은 추가 운임비가 부과됩니다.'
    ],
    isOpen: true // 초기 상태
  },
  {
    title: '반품/교환 안내',
    contents: [
      {
        subtitle: '반품기간',
        detail: '상품수령 후 7일 이내'
      },
      {
        subtitle: '반품/교환 절차',
        detail: '- 배송완료 7일 이내에 mypage > 나의 쇼핑정보 > 주문/배송내역에서 반품신청버튼을 클릭 시 가능합니다.<br>- 매장 출고 시 브랜드 별로 따로 발송되나, 교환/반품 시 한 박스로 합포장 부탁드립니다.<br>- 개별 포장 시 원활한 반품처리가 어려우며, 추가로 발생되는 배송비에 대해서는 구매자 귀책으로 처리됩니다.<br>- 개별 반품, 테이프 돌림 포장은 각각 따로 처리되어 배송비가 이중으로 청구될 수 있습니다.<br>- 교환 접수 후 반송한 제품이 결품 발생 할 수 있으며, 품절 될 경우 교환 철회 후 반품 및 환불로 처리됩니다.'
      },
      {
        subtitle: '반품배송비',
        detail: '상품불량 및 오배송으로 인한 반품배송비는 무료입니다.<br>구매자 사유로 반품하는 경우, 반품배송비가 부과됩니다.'
      },
      {
        subtitle: '반품/교환 불가사유',
        detail: '다음의 경우에는 반품/교환이 불가합니다.<br>- 반품/교환 가능기간을 초과한 경우<br>- 제품의 사용 또는 일부 소비한 경우 (상품에 부착된 텍을 제거하는 경우, 착용한 것으로 간주)<br>- 상품 및 구성품이 분실되었거나 고객에게 책임이 있는 사유로 파손, 오염, 훼손된 경우<br>- 고객에게 책임이 있는 사유로 반품 수거가 지연될 경우에는 반품이 제한될 수 있음'
      },
      {
        subtitle: '환불',
        detail: '환불은 반송제품 확인 후 진행 됩니다.'
      }
    ],
    isOpen: true // 초기 상태
  },
  {
    title: '품질보증안내',
    contents: [
      '본 제품을 구입하신 후 품질에 이상이 있을 때에는 소비자분쟁해결기준에 의거하여 소비자피해를 보상해 드립니다.<br>- 원단 불량, 부자재 불량, 봉제 불량, 사이즈 부정확, 부당표시(미표시 및 부실표시) 및 소재구성 부적합으로 인한 세탁사고 정상 상품은 구입일로부터 1년 이내 분은 무상수리, 교환, 구입가 환불함. 단, 봉제불량은 1년 경과 후에도 무상수선.(이월 매장 및 온라인 구매 상품 제외)<br>- 교환/반품은 제품 수령일로부터 7일 이내에만 가능합니다.<br>- 교환은 동일한 제품의 한하여 색상과 사이즈만 가능합니다.',
      '소비자 부주의에 의한 제품훼손 및 세탁 잘못으로 인한 변형, 품질보증기간(1년)이 경과된 제품에 대해서는 보상의 책임을 지지 않습니다.',
      '세탁방법 및 취급 시 주의사항<br>- 본 제품은 반드시 드라이 크리닝 하십시오. 세탁 시 이염, 변색, 탈색될 수 있으니 유의하시기 바랍니다.<br>- 단추나 악세서리는 세탁 시 손상 될 수 있으므로 은박지로 싸거나 분리하여 주십시오.<br>- 특성 상 마찰에 의해 올 뜯김 등 원단 손상이 발생 할 수 있으니 취급 시 주의하시기 바랍니다.',
      '위 내용은 상품정보제공 고시에 따라 작성되었습니다.<br>A/S 책임자 : 바이린샵 고객센터 (02-3218-5105)'
    ],
    isOpen: true // 초기 상태
  }
]);

const toggleSection = (index) => {
  buyList.value[index].isOpen = !buyList.value[index].isOpen;
};
</script>

<template>
  <section class="tab-buy">
    <div v-for="(item, index) in buyList" :key="index" class="buy-toggle">
      <div class="buy-title" :class="{ 'open': item.isOpen }" @click="toggleSection(index)">{{ item.title }}</div>
      <div class="buy-contents" v-if="item.isOpen">
        <ul>
          <li v-for="(content, contentIndex) in item.contents" :key="contentIndex">
            <span v-if="content.subtitle">{{ content.subtitle }}</span>
            <span v-html="content.detail || content"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tab {
  &-buy {
    padding: 40px 20px;
    .buy-toggle {
      margin-bottom: 48px;
      .buy-title {
        position: relative;
        padding-bottom: 24px;
        font-size: 18px;
        line-height: 24px;
        border-bottom: 1px solid #111;
        cursor: pointer;
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 24px;
          height: 24px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 9L12 16L5 9' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
        }
        &.open {
          &::after {
            transform: rotate(180deg);
          }
        }
      }
      .buy-contents {
        ul {
          padding: 8px 0;
          li {
            padding: 16px 0;
            font-size: 14px;
            line-height: 20px;
            color: #666;
            border-bottom: 1px solid #eee;
            display: flex;
            flex-wrap: wrap;
            span {
              color: #666;
              &:first-child {
                flex: 0.5;
                padding-right: 16px;
                color: #333;
              }
              &:last-child {
                flex: 2.5;
                color: #666;
              }
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
