<script>
export default {
  data() {
    return {
      //상품리스트 
      items: [
        {
          link: "#none1",
          image: "/src/assets/images/main/thumb-01.png",
					alt: '클래식 크롭 테일러드 자켓',
					name: '클래식 크롭 테일러드 자켓',
					price: "219,000원"
        },
        {
          link: "#none",
          image: "/src/assets/images/main/thumb-02.png",
          alt: '클래식 크롭 테일러드 자켓',
					name: '클래식 크롭 테일러드 자켓',
					price: "219,000원"
        },
        {
          link: "#none",
          image: "/src/assets/images/main/thumb-01.png",
          alt: '클래식 크롭 테일러드 자켓',
					name: '클래식 크롭 테일러드 자켓',
					price: "219,000원"
        },
        {
          link: "#none",
          image: "/src/assets/images/main/thumb-02.png",
          alt: '클래식 크롭 테일러드 자켓',
					name: '클래식 크롭 테일러드 자켓',
					price: "219,000원"
        }
      ],
    };
  }
};
</script>

<template>
  <div class="main-prod-type3">
		<ul>
			<li v-for="(item, index) in items" :key="index">
				<div class="item">
					<div class="thumb">
						<img :src="item.image" :alt="item.alt" />
					</div>
					<div class="info">
						<a :href="item.link">
							<span class="name">{{ item.name }}</span>
							<span class="price">
								<span class="discount">{{ item.price }}</span>
							</span>
						</a>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.main-prod-type3 {
  margin-bottom: 48px;

  ul {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;
    padding-left: 20px;
    padding-right: 12px;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;

    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */

    &::-webkit-scrollbar {
      display: none;

      /* Chrome, Safari, Opera*/
    }

    li {
      width: calc(33.33% - 8px);
      display: inline-block;
      margin-right: 8px;
    }
  }

  .item .thumb img {
    width: 100%;
  }

  .color-chip {
    padding-top: 12px;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;

    a {
      display: block;
      margin-right: 8px;
      width: 24px;
      height: 24px;
      border: 1px solid #eee;
      border-radius: 50%;

      span {
        display: block;
        margin: 4px;
        width: 16px;
        height: 16px;
        font-size: 0;
        color: #fff;
        border-radius: 50%;
      }

      &.active {
        border-color: #111;
      }
    }

    .color-1 {
      background: #856D63;
    }

    .color-2 {
      background: #aaa;
    }
  }

  .info {
    padding-top: 12px;
    white-space: initial;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .brand {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
      color: #333;
      font-weight: 500;
    }

    .name {
      display: block;
      font-size: 13px;
      color: #111;
    }

    .price {
      display: block;
      padding-top: 12px;

      .origin {
        display: block;
        font-size: 12px;
        color: #999;
        text-decoration-line: line-through;
      }

      .discount {
        font-size: 14px;
        font-weight: 700;
        color: #111;
      }

      .percent {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 700;
        color: #111;
      }
    }
  }
}
</style>
