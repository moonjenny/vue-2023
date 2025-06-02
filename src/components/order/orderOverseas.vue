<script setup>
import { ref } from 'vue';

// 개인통관 고유부호 관련 데이터 정의
const overseasData = ref({
  placeholder: '개인통관 고유부호',
  explanation: '상품을 받는 분의 명의로 통관이 진행되므로 <strong>고객 님</strong>의 정보를 입력해주세요.',
  agreements: [
    {
      id: 'checkOverseas0',
      label: '해외직배송 상품의 수입신고를 위한 개인통관고유부호 수집에 동의합니다.',
      checked: false, // 초기 동의 상태
      link: 'javascript:;', // '전체보기' 링크
    },
    {
      id: 'checkOverseas1',
      label: '해외직배송 상품의 수입신고를 위한 개인통관고유부호의 판매자 제공에 동의합니다.',
      checked: false, // 초기 동의 상태
      link: 'javascript:;', // '전체보기' 링크
    },
  ],
  infoMessages: [
    '개인통관 고유부호 정보수정이 필요할 경우 마이페이지>개인정보>개인통관고유부호 관리에서 수정하실 수 있습니다.',
    '해외배송상품은 통상 5~15일 정도의 배송기간이 소요됩니다.',
    '취소/반품/교환에 항공배송료 등이 발생할 수 있습니다.',
    '해외직배송 상품은 관세청 통관을 위해 \'수령인\'의 개인통관고유부호를 판매자에게 제공합니다.',
    '주문완료 후, 개인통관고유부호는 수정할 수 없으므로 입력이 올바르게 되었는지 확인해 주시기 바랍니다.',
    '개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급받으실 수 있습니다. ',
  ],
});
</script>

<template>
  <section class="order-overseas">
    <h3>해외직배송 개인통관 고유부호</h3>

    <div class="overseas-input">
      <input type="number" :placeholder="overseasData.placeholder">
    </div>
    <div class="overseas-explanation">
      <span v-html="overseasData.explanation"></span>
    </div>

    <template v-for="agreement in overseasData.agreements" :key="agreement.id">
      <div class="overseas-checkbox">
        <input type="checkbox" :id="agreement.id" v-model="agreement.checked">
        <label :for="agreement.id">{{ agreement.label }}</label>
      </div>
      <a :href="agreement.link" class="link-all" v-if="agreement.link">전체보기</a>
      </template>

    <div class="overseas-info">
      <ul>
        <li v-for="(message, index) in overseasData.infoMessages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"> 
  .order-overseas {
    margin: 60px 0 0;
    padding: 0 0 24px;
    border-bottom: 1px solid #EEEEEE;
    h3 {
      padding-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      border-bottom: 1px solid #333;
    }
    .overseas {
      &-input {
        input {
          display: block;
          margin:24px 0 12px;
          padding: 16px 12px;
          width: 100%;
          border: 1px solid #cccccc;
          font-size: 14px;
          color: #999999;
        }
      }
      &-explanation {
        margin:12px 0;
        font-size: 14px;
        line-height: 20px;
        color: #666666;
      }
      &-checkbox {
        display: flex;
        flex-wrap: wrap;
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
          flex: 1;
          margin-left: 8px;
          font-size: 14px;
          line-height: 18px;
          color: #666666;
          cursor: pointer;
        }
      }
      &-info {
        margin: 24px 0 0;
        ul {
          padding: 24px 20px;
          background-color: #F6F6F6;
          li {
            position: relative;
            padding-left: 12px;
            font-size: 13px;
            line-height: 19px;
            color: #666666;
            + li {
              margin-top: 4px;
            }
            &::after {
              content: '';
              position: absolute;
              top: 8px;
              left: 4px;
              width: 2px;
              height: 2px;
              border-radius: 2px;
              background-color: #666666;
            }
          }
        }
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