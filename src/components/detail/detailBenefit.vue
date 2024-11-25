<script>
  export default {
    data() {
      return {
        benefits: [
          { title: '적립금', text: '전용포인트 2% / 통합포인트 3%' },
          { title: '추가적립금', text: '전용포인트 500P / 통합포인트 1000P' },
          { title: '배송비', text: '2,500원 (30,000원 이상 무료)', delivery: '지역별 추가배송비' },
          { title: '안내', text: '상품설명 및 구매정보를 정확하게 확인하신 후 신중한 주문 당부 드립니다.' }
        ]
      };
    },
  };
</script>

<template>
  <section class="detail-benefit">
    <ul class="benefit-list">
      <li v-for="benefit in benefits">
        <span class="title">{{ benefit.title }}</span>
        <span class="text">
          {{ benefit.text }}
          <!-- delivery 데이터가 있을 경우에만 span 태그를 렌더링합니다 -->
          <span v-if="benefit.delivery" class="delivery">
            <span>{{ benefit.delivery }}</span>
          </span>
        </span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss"> 
  .detail {
    &-benefit {
      padding: 24px 20px 12px;
      border-top: 1px solid #eee;
      .benefit-list {
        li {
          display: flex;
          margin-bottom: 12px;
          span{
            font-size: 13px;
            line-height: 19px;
            &.title {
              flex: 1;
              min-width: 82px;
              font-weight: 500;
            }
            &.text {
              flex: 3;
              color: #666;
              .delivery {
                display: block;
                margin-top: 8px;
                span {
                  color: #999;
                  border-bottom: 1px solid #999;
                }
              }
            }
          }
        }
      }
    }
  }

</style>