<template>
  <div class="my-point">
    <div class="point-total">
      <a href="#none">
        <strong>{{ numberWithCommas(point) }}</strong>
        <span>보유 적립금</span>
      </a>
    </div>
    <div class="point-total">
      <a href="#none">
          <strong>{{ numberWithCommas(expoint) }}</strong>
          <span>당월 소멸예정 적립금</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      point : 10000000,
      expoint : 1000
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toLocaleString();
    },
  },
}
</script>

<style lang="scss">
/* 컴포넌트 스타일 */

/* my-point */

.layer-login .my-point {
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .point-total {
    width: calc(50% - 4px);
    text-align: center;
    border: 1px solid #eee;
    box-sizing: border-box;

    a {
      display: block;
      padding: 16px;
    }
  }

  strong {
    font-size: 16px;
    color: #111;
    font-weight: 500;
  }

  span {
    display: block;
    padding-top: 8px;
    font-size: 12px;
    color: #666;
  }
}

</style>