<script>
export default {
  data() {
    return {
      logoText: 'BYLYNN.SHOP',
    };
  },
};
</script>

<template>
  <header class="header" id="header">
    <h1>
      <a href="/vue-2023/">
        <span class="logo">{{ logoText }}</span>
      </a>
    </h1>
    <div class="gnb-util">
      <div class="util-search">
        <button type="button" class="btn-search">검색</button>
      </div>
      <div class="util-cart">
        <button type="button" class="btn-cart">장바구니</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header{
	position: relative;
	width:100%;
	height:52px;
	display:flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	h1 {
    width:198px;
    height:100%;
    a {
      height:100%;
      padding:0 20px;
      display:flex;
      align-items:center;
      .logo {
        font-size:0;
        color:#fff;
        display:block;
        width:100%;
        height:100%;
        background:url(@/assets/images/common/logo.svg) 0 center no-repeat;
      }
    }
  }
}
.gnb-util {
	height:52px;
	padding-right:14px;
	display:flex;
	flex-wrap: wrap;
  align-items: center;
  > div {
    width:32px;
    height:32px;
    margin-left:12px;
  }
}
.util-search button,
.util-cart button {
	width:100%;
	height:100%;
}
.util-search .btn-search {
	font-size:0;
	color:#fff;
	background:url(@/assets/images/common/btn-search.svg) center center no-repeat;
}
.util-cart .btn-cart {
	font-size:0;
	color:#fff;
	background:url(@/assets/images/common/btn-cart.svg) center center no-repeat;
}
</style>
