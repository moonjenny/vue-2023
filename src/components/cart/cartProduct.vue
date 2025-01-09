<script>
export default {
  data() {
    return {
      shippingGroups: [
        {
          label: '바이린 배송상품',
          items: [
            // 일반상품
            {
              brand: 'LYNN',
              name: '클래식 크롭 테일러드 자켓',
              options: '브라운 / 55',
              currentPrice: 197100,
              originalPrice: 219000,
              image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
              gifts: [
                { name: '브랜드명 사은품명-1개', quantity: 2, soldOut: false },
                { name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
              ],
              showGift: false,
              quantity: 1,
              liked: true,
              deliInfo: '배송비 (50,000원 이상 구매 시 무료)',
              deliveryFee: 3000,
              soldout: false,
            },
            // 일반상품 - 품절
            {
              brand: '브랜드',
              name: '품절상품명 품절상품명 품절상품명 품절상품명 품절상품명 품절상품명',
              options: '브라운 / 66',
              currentPrice: 297100,
              originalPrice: 319000,
              image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-02.png',
              gifts: [
                { name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
              ],
              showGift: false,
              quantity: 1,
              liked: false,
              deliInfo: '배송비 (100,000원 이상 구매 시 무료)',
              deliveryFee: '무료배송',
              soldout: true,
            },
          ]
        },
        {
          label: '바이린 배송상품2',
          items: [
            // 옵션 - 일반
            {
              brand: 'LYNN',
              name: '클래식 크롭 테일러드 자켓',
              options: '브라운 / 55',
              currentPrice: 197100,
              originalPrice: 219000,
              image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
              gifts: [
                { name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
              ],
              showGift: false,
              quantity: 1,
              liked: false,
              deliInfo: '배송비 (11월 무료배송 프로모션 : <br>2022.11.01 ~ 2022.11.30)',
              deliveryFee: 3000,
              soldout: false,

              // 추가 옵션
              addItems: [
                { addItemName: '[추가] 추가옵션 일반상품 (총 2개)', addItemPrice: 10000, addItemQuantity: 2, addItemNotice: '* 해당 상품의 판매가능수량은 {0}개 입니다.' },
                { addItemName: '[추가] 추가옵션 품절상품 (총 1개)', addItemPrice: 5000, addItemQuantity: 1, addItemNotice: '* 주문할 수 없습니다.', addItemSold: true },
                { addItemName: '[추가] 추가옵션 판매중지 (총 1개)', addItemPrice: 10000, addItemQuantity: 1, addItemNotice: '* 주문할 수 없습니다.', addItemStop: true }
              ]
            },
            // 옵션 - 일반
            {
              brand: 'LYNN',
              name: '클래식 크롭 테일러드 자켓',
              options: '브라운 / 55',
              currentPrice: 197100,
              originalPrice: 219000,
              image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png',
              gifts: [
                { name: '브랜드명 사은품명-1개', quantity: 2, soldOut: true }
              ],
              showGift: false,
              quantity: 1,
              liked: false,
              deliInfo: '배송비 (수량 1개당)',
              deliveryFee: 3000,
              soldout: false,
            },
          ]
        }
      ]
    };
  },
  methods: {
    toggleLike(groupIndex, index) {
      this.shippingGroups[groupIndex].items[index].liked = !this.shippingGroups[groupIndex].items[index].liked;
    },
    toggleGift(groupIndex, index) {
      this.shippingGroups[groupIndex].items[index].showGift = !this.shippingGroups[groupIndex].items[index].showGift;
    },
    confirmDelete(groupIndex, index) {
      if (confirm('삭제할까요?')) {
        this.deleteItem(groupIndex, index);
      }
    },
    deleteItem(groupIndex, index) {
      this.shippingGroups[groupIndex].items.splice(index, 1);
    },
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
    },
    addTotalPrice(groupIndex, itemIndex, addItem) {
      return addItem.addItemPrice * addItem.addItemQuantity;
    }
  }
}
</script>

<template>
  <section class="cart-product">
    <div class="cart-product-list" v-for="(shippingGroup, groupIndex) in shippingGroups" :key="groupIndex">
      <div class="shipping-type">
        <div class="shipping-checkbox">
          <input type="checkbox" :name="'checkProduct' + groupIndex" :id="'checkProduct' + groupIndex">
          <label :for="'checkProduct' + groupIndex">{{ shippingGroup.label }}</label>
        </div>
        <div class="shipping-links">
          <button type="button" class="button-delivery">지역별 추가배송비</button>
        </div>
      </div>
      <ul class="shipping-item">
        <li v-for="(item, itemIndex) in shippingGroup.items" :key="itemIndex">
          <div class="elements">
            <input type="checkbox" :name="'checkItem' + groupIndex + '-' + itemIndex" :id="'checkItem' + groupIndex + '-' + itemIndex">
            <button type="button" class="button-like" @click="toggleLike(groupIndex, itemIndex)" :class="{ active: item.liked }">
              좋아요
            </button>
            <button type="button" class="button-delete" @click="confirmDelete(groupIndex, itemIndex)">삭제하기</button>
          </div>
          <div class="info">
            <div class="thumb">
              <span class="sold" v-if="item.soldout">품절</span>
              <img :src="item.image" :alt="item.name">
            </div>
            <div class="details">
              <span class="brand">{{ item.brand }}</span>
              <span class="name">{{ item.name }}</span>
              <span class="options">{{ item.options }} <a href="" v-if="!item.soldout">옵션변경</a></span>
              <span v-if="!item.soldout" class="price">
                <strong>{{ formatPrice(item.currentPrice) }}</strong>
                <em>{{ formatPrice(item.originalPrice) }}</em>
                <button type="button" @click="toggleGift(groupIndex, itemIndex)" :class="{ active: item.showGift }">
                  사은품 보기
                </button>
              </span>
            </div>
          </div>
          <ul v-if="item.showGift" class="option-list active">
            <li v-for="(gift, idx) in item.gifts" :key="idx">
              <strong>[사은품]</strong> {{ gift.name }} ({{ gift.quantity }})
              <em v-if="gift.soldOut">* 소진</em>
            </li>
          </ul>
          <div class="count">
            <select v-model="item.quantity" :disabled="item.soldout">
              <option v-for="n in 4" :key="n" :value="n">{{ n }}</option>
            </select>
            <strong v-if="!item.soldout">{{ formatPrice(item.currentPrice) }}</strong>
          </div>
          <div class="count-add" v-for="(addItem, idx) in item.addItems" :key="idx">
            <div class="add-item">
              <span>
                {{ addItem.addItemName }}
                <strong v-if="!addItem.addItemSold && !addItem.addItemStop">{{ formatPrice(addItem.addItemPrice) }}</strong>
                <span class="soldout" v-if="addItem.addItemSold">* 품절</span>
                <span class="stop" v-if="addItem.addItemStop">* 판매중지</span>
              </span>
              <button type="button" class="button-delete">삭제하기</button>
              <span class="add-notice">{{ addItem.addItemNotice }}</span>
            </div>
            <div class="add-select">
              <select v-model="addItem.addItemQuantity" :disabled="item.soldout || addItem.addItemSold || addItem.addItemStop">
                <option v-for="n in 4" :key="n" :value="n">{{ n }}</option>
              </select>
              <strong v-if="!item.soldout && !addItem.addItemSold && !addItem.addItemStop">{{ formatPrice(addTotalPrice(groupIndex, itemIndex, addItem)) }}</strong>
            </div>
          </div>
          <div class="delivery" v-if="!item.soldout">
            <span v-html="item.deliInfo"></span>
            <span>{{ formatPrice(item.deliveryFee) }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"> 
  .cart-product {
    &-list{
      margin-bottom: 60px;
      border-top: 1px solid #333;
    }
    .shipping-type {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 22px 0;
      .shipping-checkbox {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
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
          font-size: 16px;
          color: #111;
        }
			}
      .shipping-links {
        button {
          font-size: 13px;
          line-height:13px;
          color: #999;
          text-decoration: underline;
        }
      }
    }

    .shipping-item {
      border-top: 1px solid #ccc;
      > li {
        padding-top: 24px;
        border-bottom: 1px solid #ccc;
        .elements {
          display: grid;
          grid-template-columns: 4fr 24px 24px;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
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
          .button-like {
            width: 24px;
            height: 24px;
            font-size: 0;
            color: #fff;
            background: url(/vue-2023/src/assets/images/common/btn-like.svg) no-repeat;
            &.active {
              background: url(/vue-2023/src/assets/images/common/action-like-active.svg) no-repeat;
            }
          }
          .button-delete {
            width: 24px;
            height: 24px;
            font-size: 0;
            color: #fff;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='%23111111'/%3E%3C/svg%3E%0A");
          }
        }
        .info {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 24px;
          .thumb {
            position: relative;
            width: 74px;
            margin-right: 16px;
            img {
              width: 100%;
            }
            .sold {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              color: #666;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background-color: rgba(255,255,255, 0.8);
            }
          }
          .details {
            width: calc(100% - 90px);
            span {
              display:block;
              &.brand {
                font-size: 12px;
                color: #333;
              }
              &.name {
                margin-top: 8px;
                font-size: 13px;
                color: #111;
                line-height: 16px;
              }
              &.options {
                margin-top: 12px;
                font-size: 13px;
                color: #666;
                a {
                  margin-left: 10px;
                  color: #999;
                  text-decoration: underline;
                }
              }
              &.price {
                margin-top: 12px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                strong{
                  font-size: 14px;
                  color: #111;
                  font-weight: 700;
                }
                em {
                  margin-left: 10px;
                  font-size: 12px;
                  color: #999;
                  text-decoration: line-through;
                }
                button {
                  margin-left: 8px;
                  width: 20px;
                  height: 20px;
                  font-size:0;
                  background-repeat: no-repeat;
                  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='9.5' fill='white' stroke='%23111111'/%3E%3Cpath d='M14 9L10 13L6 9' stroke='%23111111' stroke-linecap='square'/%3E%3C/svg%3E%0A");
                  &.active {
                    transform: rotate(180deg);
                  }
                }
              }
            }
          }
        }
        .option-list {
          display: none;
          margin-bottom: 24px;
          &.active {
            display: block;
          }
          li {
            font-size: 13px;
            color: #111;
            em {
              font-size: 12px;
              color: #D9320B;
            }
            strong {
              font-weight: 500;
            }
            + li {
              margin-top: 8px;
            }
          }
        }
        .count {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          select {
            padding: 0 16px;
            min-width: 74px;
            height: 48px;
            border: 1px solid #ccc;
            &:disabled {
              color: #999;
              background-color: #eee;
            }
          }
          strong {
            font-size: 16px;
          }
        }
        .count-add {
          padding: 24px 0;
          border-top: 1px solid #eee;
          > div {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          }
          .add-item {
            padding-bottom: 24px;
            span {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 8px;
              font-size: 13px;
              line-height:17px;
              strong {
                font-size: 14px;
                font-weight: 700;
              }
              .soldout,
              .stop {
                font-size: 12px;
                color: #D9320B;
              }
            }
            button {
              font-size: 0;
              color: #fff;
              width: 24px;
              height:24px;
              outline: 0;
              background-repeat: no-repeat;
              background-position: center center;
              background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z' fill='%23111111'/%3E%3C/svg%3E%0A");
            }
            .add-notice {
              margin-top: 8px;
              width: 100%;
              font-size: 12px;
              line-height: 14px;
              color: #D9320B;
            }

          }
          .add-select {
            select {
              padding: 0 16px;
              min-width: 74px;
              height: 48px;
              border: 1px solid #ccc;
              &:disabled {
                color: #999;
                background-color: #eee;
              }
            }
          }
          strong {
            font-size: 16px;
          }
        }
        .delivery {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 24px 0;
          border-top: 1px solid #eee;
          span {
            font-size: 13px;
            line-height:20px;
            &:first-child {
              flex: 2.5;
              color: #666;
            }
            &:last-child {
              flex: 1;
              text-align: right;
              color: #111;
            }
          }
        }
      }
    }
  }
</style>