<script>
export default {
}
</script>

<template>
  <section class="order-agree">
    <h3>비회원 주문 정보수집 동의</h3>
    <div class="memo">비회원 주문 시 쿠폰 및 적립금 등의 혜택을 받을 수 없습니다. 간단한 과정을 거쳐 회원가입 하시고 회원 혜택을 누리시기 바랍니다.<br>비회원 구매 시 입력하신 비밀번호와 결제완료 후 노출되는 주문번호를 통해서 구매내역을 조회하실 수 있습니다.</div>
    <div class="order-checkbox">
      <input type="checkbox" name="checkAgree0" id="checkAgree0">
      <label for="checkAgree0">비회원 주문 개인정보 수집 및 이용에 동의합니다. (필수)</label>
    </div>
    <a href="" class="link-all">전체보기</a>
    <div class="order-checkbox">
      <input type="checkbox" name="checkAgree1" id="checkAgree1">
      <label for="checkAgree1">만 14세 이상입니다. (필수)</label>
    </div>
  </section>
</template>

<style lang="scss"> 
  .order-agree {
    padding: 60px 0;
    border-bottom: 1px solid #eee;
    h3 {
      padding-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      border-bottom: 1px solid #333;
    }
    .memo {
      padding: 24px 0 12px;
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }
    .order-checkbox {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
      margin-top: 12px;
			input[type='checkbox'] {
				width: 20px;
				height: 20px;
				border: 1px solid #CCCCCC;
				&:checked {
					border-color: #111;
					background-color : #111;
					background-repeat: no-repeat;
					background-position: center center;
					background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L11.5 1.5L4.51 8.5L0 4L1.5 2.5L4.51 5.5L10 0Z' fill='white'/%3E%3C/svg%3E%0A");
				}
			}
			label {
				margin-left: 8px;
				font-size: 14px;
        font-weight: 500;
        cursor: pointer;
			}
		}
    .link-all {
      display: inline-flex;
      margin-top: 4px;
      padding-left: 28px;
      font-size: 13px;
      text-decoration: underline;
      color: #999;
    }
  }
</style>