<script setup>
  
</script>

<template>
  <section class="detail-info">
    <div class="info-box">
        <a href="javascript:;"><span class="brand-name">LINE STUDIO ONE</span></a>
        <span class="product-code">JWSKMI0100</span>
        <span class="product-name">플리츠 미니스커트</span>
    </div>
    <button class="btn-share" type="button">공유하기</button>
  </section>
</template>

<style lang="scss"> 
  .detail-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 20px;
    .brand-name {
      position: relative;
      padding-right: 14px;
      display: block;
      font-size: 16px;
      line-height: 24px;
      color: #333;
      font-weight: 500;
      &::after {
        content:'';
        position: absolute;
        right: 0;
        top: 50%;
        width: 7px;
        height: 12px;
        transform: translateY(-50%);
        background-image: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6L1 10.5' stroke='%23111111' stroke-linecap='square'/%3E%3C/svg%3E%0A");
      }
    }
    .product-code {
      margin-top: 8px;
      display: block;
      font-size: 13px;
      color: #999;
    }
    .product-name {
      margin-top: 8px;
      display: block;
      font-size: 20px;
      line-height: 28px;
      color: #111;
      font-weight: 500;
    }
    .btn-share {
      width: 24px;
      height: 24px;
      font-size: 0;
      color: #fff;
      outline: none;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='12' r='3' stroke='%23111111' stroke-width='2'/%3E%3Ccircle cx='18' cy='6' r='3' stroke='%23111111' stroke-width='2'/%3E%3Ccircle cx='18' cy='18' r='3' stroke='%23111111' stroke-width='2'/%3E%3Crect x='8' y='10' width='8' height='2' transform='rotate(-30 8 10)' fill='%23111111'/%3E%3Crect width='8' height='2' transform='matrix(0.866025 0.5 0.5 -0.866025 8 14.7319)' fill='%23111111'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
    }
  }

</style>