<script>
export default {
  props: ['shippingGroups'],
  computed: {
    totalNum() {
      const groups = this.shippingGroups || [];
      let total = 0;
      groups.forEach(group => {
        total += group.items.filter(item => !item.soldout && !item.priceUpdate).length;
      });
      return total;
    },
    // 정상판매금액
    totalPrice() {
      const groups = this.shippingGroups || [];
      let total = 0;
      groups.forEach(group => {
        group.items.forEach(item => {
          if (!item.soldout && !item.priceUpdate) {
            // 기본 상품 가격 합산
            total += item.originalPrice * item.quantity;

            // 추가 항목 가격 합산
            if (item.addItems) {
              item.addItems.forEach(addItem => {
                if (!addItem.addItemSold && !addItem.addItemStop) {
                  total += addItem.addItemPrice * addItem.addItemQuantity;
                }
              });
            }
          }
        });
      });
      return total;
    },
    // 최종 할인금액
    totalDisPrice() {
      const groups = this.shippingGroups || [];
      let disTotal = 0;
      groups.forEach(group => {
        group.items.forEach(item => {
          if (!item.soldout && !item.priceUpdate) {
            disTotal += (item.originalPrice - item.currentPrice) * item.quantity;
          }
        });
      });
      return disTotal;
    },
    // 최종 배송비
    totalDelivery() {
      const groups = this.shippingGroups || [];
      let deliTotal = 0;
      groups.forEach(group => {
        group.items.forEach(item => {
          if (!item.soldout && !item.priceUpdate && typeof item.deliveryFee === 'number') {
            // quantity가 3 이상이면 배송비 0으로 설정
            deliTotal += (item.quantity >= 3) ? 0 : item.deliveryFee * item.quantity;
          }
        });
      });
      return deliTotal;
    },
    // 결제예정금액
    totalPayment() {
      return this.totalPrice - this.totalDisPrice + this.totalDelivery;
    }
  },
  methods: {
    formatNumber(number) {
      return number.toLocaleString();
    }
  }
}
</script>

<template>
  <section class="cart-price">
    <div class="price-number">총 {{ totalNum }}개 합계</div>
    <ul class="price-summary">
      <li>
        <span>정상판매금액</span>
        <span>{{ formatNumber(totalPrice) }}원</span>
      </li>
      <li>
        <span>할인금액</span>
        <span v-if="totalDisPrice !== 0">{{ formatNumber(-totalDisPrice) }}원</span>
        <span v-else>{{ formatNumber(totalDisPrice) }}원</span>
      </li>
      <li>
        <span>배송비</span>
        <span>{{ formatNumber(totalDelivery) }}원</span>
      </li>
    </ul>
    <ul class="price-total">
      <li>
        <span>결제예정금액</span>
        <strong>{{ formatNumber(totalPayment) }}원</strong>
      </li>
    </ul>
    <router-link
      :to="'/vue-2023/order/'"
      class="button-cart"
    >주문하기</router-link>
  </section>
</template>


<style lang="scss"> 
  .cart-price {
    margin-top: 60px;
    .price-number {
      margin-bottom: 24px;
      font-size: 18px;
      line-height: 30px;
      color: #111;
    }
    .price-summary {
      padding-bottom: 24px;
      border-bottom: 1px solid #333;
      li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        + li {
          margin-top: 20px;
        }
        span {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    .price-total {
      padding: 16px 0 24px;
      li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 18px;
          line-height: 30px;
        }
        strong {
          font-size: 24px;
          line-height: 30px;
          font-weight: 700;
        }
      }
    }
    .button-cart {
      display: block;
      margin: 16px 0;
      padding: 12px;
      width: 100%;
      text-align: center;
      font-size: 18px;
      line-height: 30px;
      color: #fff;
      border:1px solid #111;
      background-color: #111;
    }
  }
</style>