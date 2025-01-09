<script>
export default {
  methods: {
    formatNumber(number) {
      return number.toLocaleString();
    }
  }
}
</script>

<template>
  <section class="cart-price">
    <div class="price-number">총 {0}개 합계</div>
    <ul class="price-summary">
      <li>
        <span>정상판매금액</span>
        <span>{{ formatNumber(300000) }}원</span>
      </li>
      <li>
        <span>할인금액</span>
        <span>{{ formatNumber(-3000) }}원</span>
      </li>
      <li>
        <span>배송비</span>
        <span>{{ formatNumber(3000) }}원</span>
      </li>
    </ul>
    <ul class="price-total">
      <li>
        <span>결제예정금액</span>
        <strong>{{ formatNumber(290500) }}원</strong>
      </li>
    </ul>
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
  }
</style>