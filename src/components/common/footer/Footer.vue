<script setup>

</script>

<template>
  <footer class="footer" id="footer">
        <div class="footer-name">(주) 린 컴퍼니</div>
        <div class="footer-info">
            <ul>
                <li>대표이사 문경란 | 서울 강남구 영동대로 734</li>
                <li>개인정보보호책임자  이성춘</li>
                <li>사업자등록번호  120-81-84619</li>
                <li>통신판매업신고번호  제2018-서울강남-00940</li>
                <li>이메일 <a href="mailto:info@bylynn.shop">info@bylynn.shop</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="#none">공지사항</a></li>
                <li><a href="#none">고객센터</a></li>
                <li><a href="#none">이용약관</a></li>
                <li><a href="#none">개인정보처리방침</a></li>
                <li><a href="#none">매장안내</a></li>
                <li><a href="#none">멤버십 혜택</a></li>
            </ul>
        </div>
        <div class="footer-sns">
            <ul>
                <li><a href="#none" class="f-google">GOOGLE PLAY</a></li>
                <li><a href="#none" class="f-apple">APPLE STORE</a></li>
                <li><a href="#none" class="f-naver">NAVER</a></li>
                <li><a href="#none" class="f-youtube">YOUTUBE</a></li>
                <li><a href="#none" class="f-instagram">INSTAGRAM</a></li>
                <li><a href="#none" class="f-facebook">FACEBOOK</a></li>
            </ul>
        </div>
        <div class="footer-copy">Copyright ⓒ BYLYNNSHOP all rights reserved.</div>
    </footer>
</template>



<style lang="scss">
.footer {
	padding: 32px 20px 100px;
	background: #F6F6F6;
}
.footer-name {
	font-size: 16px;
	color: #111;
	line-height: 26px;
	font-weight: 500;
}
.footer-info {
	padding-top: 8px;
	font-size: 13px;
	line-height: 16px;
	color: #666;
	li {
		padding: 4px 0;
	}
}
.footer-links {
	padding-top: 24px;
	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		li {
			padding: 4px 0;
			margin-right: 16px;
			line-height: 28px;
			font-size: 14px;
			font-weight: 500;
			color: #111;
			a {
				display: block;
			}
		}
	}
}
.footer-sns {
	padding-top: 16px;
	ul {
		display: flex;
		width: 100%;
	}
	li {
		width: 44px;
		height: 44px;
		a {
			display: block;
			width: 100%;
			height: 100%;
			font-size: 0;
			color: #fff;
		}
		.f-google {
			background: url(@/assets/images/common/f-google.svg) center center no-repeat;
		}
		.f-apple {
			background: url(@/assets/images/common/f-apple.svg) center center no-repeat;
		}
		.f-naver {
			background: url(@/assets/images/common/f-naver.svg) center center no-repeat;
		}
		.f-youtube {
			background: url(@/assets/images/common/f-youtube.svg) center center no-repeat;
		}
		.f-instagram {
			background: url(@/assets/images/common/f-instagram.svg) center center no-repeat;
		}
		.f-facebook {
			background: url(@/assets/images/common/f-facebook.svg) center center no-repeat;
		}
	}
}
.footer-copy {
	padding: 16px 0 0;
	font-size: 12px;
	color: #999;
}

</style>
