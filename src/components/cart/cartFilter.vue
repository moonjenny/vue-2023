<script>
export default {
  props: ['shippingGroups', 'cartChecked'],
}
</script>

<template>
  <section class="cart-filter">
    <div class="cart-filter-box">
      <div class="cart-filter-checkbox">
        <input type="checkbox" name="checkAll" id="checkAll">
        <label for="checkAll">전체선택</label>
      </div>
      <div class="cart-filter-buttons">
        <button type="button">선택삭제</button>
        <button type="button">주문불가 삭제</button>
        <button type="button" class="reset">초기화</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss"> 
  .cart-filter {
		margin: 24px 0 16px;
		&-box {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
		}
		&-checkbox {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
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
				color: #666;
			}
		}
		&-buttons {
			text-align: right;
			button {
				margin-left: 8px;
				padding: 8px 12px;
				line-height:14px;
				color: #666;
				border: 1px solid #666;
				&.reset {
					width: 40px;
					font-size:0;
					color: #fff;
					background-repeat: no-repeat;
					background-position: center center;
					background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z' fill='%23666666'/%3E%3C/svg%3E%0A");
				}
			}
		}
  }
</style>