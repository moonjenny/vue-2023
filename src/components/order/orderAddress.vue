<script>
export default {
  data() {
    return {
      tabs: ["상품정보", "최근 배송지", "신규 배송지"],
      selectedTab: 0
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    }
  }
};
</script>

<template>
  <section class="order-address">
    <div class="title">
      <h3>받으시는 분</h3>
      <router-link
        :to="''"
        class="button-address"
      >배송지 목록</router-link>
    </div>

    <ul class="order-address-tab">
      <li v-for="(tab, index) in tabs" :key="index">
        <button type="button" @click="selectTab(index)" :class="{ active: selectedTab === index }">{{ tab }}</button>
      </li>
    </ul>
    <ul class="order-address-con">
      <li v-if="selectedTab === 0">
        <!-- 상품정보 -->
        <div class="order-address-detail">
          <span class="name">홍길동</span>
          <span class="phone">010-1234-5678 / 02-9876-5432</span>
          <span class="address">(12345) 서울특별시 강남구 테헤란로20길 9 동궁빌딩 6층</span>
        </div>
        <div class="order-address-input">
          <div class="order-checkbox">
            <input type="checkbox" name="checkAddress1" id="checkAddress1">
            <label for="checkAddress1">주문하시는 분과 동일</label>
          </div>
          <ul>
            <li><input type="text" name="" id="" placeholder="이름 (필수)"></li>
            <li><input type="text" name="" id="" placeholder="연락처1-없이(필수)"></li>
            <li>
              <div class="address">
                <input type="text" name="" id="" placeholder="우편번호 (필수)" disabled>
                <button type="button" class="btn-address">우편번호</button>
              </div>
            </li>
            <li><input type="text" name="" id="" placeholder="주소" disabled></li>
            <li>
              <select name="" id="">
                <option value="">베송메시지를 선택하세요.</option>
                <option value="">베송메시지1</option>
                <option value="">직접 입력</option>
              </select>
            </li>
            <li><input type="password" name="" id="" placeholder="50자 이내로 입력해 주세요."></li>
          </ul>
          <div class="order-checkbox">
            <input type="checkbox" name="checkAddressBasic" id="checkAddressBasic">
            <label for="checkAddressBasic">기본배송지로 선택</label>
          </div>
        </div>
      </li>
      <li v-if="selectedTab === 1">
        <!-- 최근 배송지 -->
        <div class="order-address-detail">
          <span class="name">홍길동 최근 배송지</span>
          <span class="phone">010-1234-5678 / 02-9876-5432</span>
          <span class="address">(12345) 서울특별시 강남구 테헤란로20길 9 동궁빌딩 6층</span>
        </div>
      </li>
      <li v-if="selectedTab === 2">
        <!-- 신규 배송지 -->
        <div class="order-address-detail">
          <span class="name">홍길동 신규 배송지</span>
          <span class="phone">010-1234-5678 / 02-9876-5432</span>
          <span class="address">(12345) 서울특별시 강남구 테헤란로20길 9 동궁빌딩 6층</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss"> 
  .order-address {
    padding: 60px 0 0;
    .title {
      display: flex;
      padding-bottom: 24px;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
      }
      .button-address {
        padding: 8px 12px;
        font-size: 13px;
        line-height: 14px;
        color: #666;
        border: 1px solid #666;
      }
    }
    &-tab {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      li {
        flex: 1;
        button {
          display: block;
          padding: 20px 0 23px;
          width: 100%;
          text-align: center;
          color: #999;
          border-bottom: 1px solid #eee;
          &.active {
            padding-bottom: 21px;
            color: #111;
            font-weight: 500;
            border-bottom: 3px solid #111;
          }
        }
      }
    }
    &-con {
      padding: 24px 0 0;
      .name {
        display: block;
        font-size: 14px;
        color: #111;
      }
      .phone {
        display: block;
        margin-top: 8px;
        font-size: 14px;
        color: #111;
      }
      .address {
        display: block;
        margin-top: 8px;
        font-size: 14px;
        color: #111;
      }
    }
    &-input {
      margin-top: 24px;
      padding: 24px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      li {
        margin: 12px 0;
        input, select {
          padding: 15px 11px;
          width: 100%;
          border: 1px solid #ccc;
          font-size: 14px;
          line-height: 16px;
          box-sizing: border-box;
          &:disabled {
            border: 1px solid #CCCCCC;
            background: #EEEEEE;
          }
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-repeat: no-repeat;
          background-size: 12px 7px;
          background-position: right 16px center;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L7 7L2 2' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A")
        }
        .address {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          input {
            flex-basis: calc(100% - 98px);
          }
        }
        .btn-address {
          flex-basis: 98px;
          padding: 15px 11px;
          border: 1px solid #111111;
          background: #FFFFFF;
        }
      }
      .order-checkbox {
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
          font-size: 14px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
        }
      }
    }
  }
</style>