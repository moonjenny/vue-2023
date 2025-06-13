<script setup>
// 배송정보
import { ref, computed } from 'vue';

// --- 데이터 정의 ---

// '받으시는 분' 관련 데이터
const isRecipientEditing = ref(false); // 받으시는 분 편집 모드 여부
const recipientInfo = ref({
  name: '홍길동',
  phone1: '010-1234-5678',
  phone2: '02-9876-5432',
  zipCode: '12345',
  address: '서울특별시 강남구 테헤란로20길 9',
  addressDetail: '동궁빌딩 6층',
  deliveryMessage: '문 앞에 놓아주세요.',
  customDeliveryMessage: '',
});
const tempRecipientInfo = ref({ ...recipientInfo.value });
const deliveryMessageOptions = ref([
  { value: '문 앞에 놓아주세요.', text: '문 앞에 놓아주세요.' },
  { value: '경비실에 맡겨주세요.', text: '경비실에 맡겨주세요.' },
  { value: '배송 전 연락 부탁드립니다.', text: '배송 전 연락 부탁드립니다.' },
  { value: '직접입력', text: '50자 이내로 입력해 주세요.' },
  { value: '', text: '배송메시지를 선택하세요.' }
]);

// --- '주문하시는 분' 관련 데이터 추가 ---
const isOrdererEditing = ref(false); // 주문하시는 분 편집 모드 여부
const ordererInfo = ref({
  name: '주문자명',
  phone1: '010-1234-5678',
  email: 'abcde@mail.com',
});
const tempOrdererInfo = ref({ ...ordererInfo.value }); // 임시 데이터


// --- 함수 정의 ---

// '받으시는 분' 관련 함수 (이전과 동일)
const toggleRecipientEditMode = () => {
  isRecipientEditing.value = !isRecipientEditing.value;
  if (isRecipientEditing.value) {
    tempRecipientInfo.value = { ...recipientInfo.value };
    if (tempRecipientInfo.value.customDeliveryMessage) {
      tempRecipientInfo.value.deliveryMessage = '직접입력';
    } else if (tempRecipientInfo.value.deliveryMessage && !deliveryMessageOptions.value.some(opt => opt.value === tempRecipientInfo.value.deliveryMessage)) {
      tempRecipientInfo.value.customDeliveryMessage = tempRecipientInfo.value.deliveryMessage;
      tempRecipientInfo.value.deliveryMessage = '직접입력';
    }
  }
};
const confirmRecipientChanges = () => {
  recipientInfo.value = { ...tempRecipientInfo.value };
  if (tempRecipientInfo.value.deliveryMessage === '직접입력') {
    recipientInfo.value.deliveryMessage = tempRecipientInfo.value.customDeliveryMessage;
  }
  isRecipientEditing.value = false;
};
const cancelRecipientChanges = () => {
  isRecipientEditing.value = false;
  tempRecipientInfo.value = { ...recipientInfo.value };
};
const findZipCode = () => {
  alert('우편번호 찾기 팝업이 여기에 연동됩니다.');
};
const showCustomMessageInput = computed(() => {
  return tempRecipientInfo.value.deliveryMessage === '직접입력';
});

// --- '주문하시는 분' 관련 함수 추가 ---
const toggleOrdererEditMode = () => {
  isOrdererEditing.value = !isOrdererEditing.value;
  if (isOrdererEditing.value) {
    // 편집 모드 진입 시, 현재 정보를 임시 데이터로 복사
    tempOrdererInfo.value = { ...ordererInfo.value };
  }
};
const confirmOrdererChanges = () => {
  // 실제 저장 로직 (API 호출 등)
  ordererInfo.value = { ...tempOrdererInfo.value };
  isOrdererEditing.value = false;
};
const cancelOrdererChanges = () => {
  isOrdererEditing.value = false;
  // 임시 데이터를 버리고 원본 데이터 유지
  tempOrdererInfo.value = { ...ordererInfo.value };
};

</script>

<template>
  <div class="my-order-address">
    <div class="my-order-address-title">
      <h3>받으시는 분</h3>
      <template v-if="!isRecipientEditing">
        <button type="button" @click="toggleRecipientEditMode">변경</button>
      </template>
      <template v-else>
        <button type="button" @click="confirmRecipientChanges">확인</button>
        <button type="button" @click="cancelRecipientChanges">취소</button>
      </template>
    </div>

    <div class="my-order-address-info">
      <ul class="info" v-if="!isRecipientEditing">
        <li>{{ recipientInfo.name }}</li>
        <li>{{ recipientInfo.phone1 }}</li>
        <li v-if="recipientInfo.phone2">{{ recipientInfo.phone2 }}</li>
        <li>{{ recipientInfo.zipCode }} {{ recipientInfo.address }} {{ recipientInfo.addressDetail }}</li>
        <li v-if="recipientInfo.deliveryMessage">{{ recipientInfo.deliveryMessage }}</li>
      </ul>

      <ul class="info" v-else>
        <li><input type="text" placeholder="이름 (필수)" v-model="tempRecipientInfo.name"></li>
        <li><input type="text" placeholder="연락처1-없이 (필수)" v-model="tempRecipientInfo.phone1"></li>
        <li><input type="text" placeholder="연락처2-없이" v-model="tempRecipientInfo.phone2"></li>
        
        <li class="zipcode-row">
          <input type="text" placeholder="우편번호 (필수)" v-model="tempRecipientInfo.zipCode" disabled>
          <button type="button" class="zipcode-button" @click="findZipCode">우편번호</button>
        </li>
        <li><input type="text" placeholder="주소" v-model="tempRecipientInfo.address" disabled></li>
        <li><input type="text" placeholder="주소상세" v-model="tempRecipientInfo.addressDetail"></li>
        
        <li>
          <select v-model="tempRecipientInfo.deliveryMessage">
            <option v-for="option in deliveryMessageOptions" :key="option.value" :value="option.value" :disabled="option.value === ''">{{ option.text }}</option>
          </select>
        </li>
        <li v-if="showCustomMessageInput">
          <input type="text" placeholder="50자 이내로 입력해 주세요." v-model="tempRecipientInfo.customDeliveryMessage" maxlength="50">
        </li>
      </ul>
    </div>
  </div>

  <div class="my-order-address">
    <div class="my-order-address-title">
      <h3>주문하시는 분</h3>
      <template v-if="!isOrdererEditing">
        <button type="button" @click="toggleOrdererEditMode">변경</button>
      </template>
      <template v-else>
        <button type="button" @click="confirmOrdererChanges">확인</button>
        <button type="button" @click="cancelOrdererChanges">취소</button>
      </template>
    </div>

    <div class="my-order-address-info">
      <ul class="info" v-if="!isOrdererEditing">
        <li>{{ ordererInfo.name }}</li>
        <li>{{ ordererInfo.phone1 }}</li>
        <li>{{ ordererInfo.email }}</li>
      </ul>

      <ul class="info" v-else>
        <li><input type="text" placeholder="이름 (필수)" v-model="tempOrdererInfo.name"></li>
        <li><input type="text" placeholder="연락처1-없이 (필수)" v-model="tempOrdererInfo.phone1"></li>
        <li><input type="text" placeholder="수신용 이메일(필수)" v-model="tempOrdererInfo.email"></li>
      </ul>
    </div>
  </div>

</template>

<style lang="scss">
/* 컴포넌트 스타일 */
.my-order {
  &-address {
    margin: 60px 20px;
    &-title {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-bottom: 24px;
      border-bottom: 1px solid #333333;
      h3 {
        flex: 1;
        font-size: 18px;
        font-weight: 500;
      }
      button {
        padding: 8px 12px;
        font-size: 13px;
        font-weight: 500;
        color: #666666;
        border: 1px solid #666666;
      }
    }
    &-info {
      padding: 24px 0;
      border-bottom: 1px solid #eeeeee;
      li {
        font-size: 14px;
        line-height: 18px;
        + li {
          margin-top: 12px;
        }
        input[type='text'],
        select { // select 박스에도 input 스타일 적용
          display: block;
          width: 100%;
          padding: 16px 12px;
          border: 1px solid #cccccc;
          box-sizing: border-box; // padding이 width에 포함되도록
        }
        select {
          // 드롭다운 화살표 커스터마이징 (필요시)
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8L10 13L15 8' stroke='%23333333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 40px; // 화살표 공간 확보
        }

        &.zipcode-row {
          display: flex;
          gap: 8px;
          input {
            flex: 1;
          }
          .zipcode-button {
            padding: 16px 12px; // input과 높이 맞춤
            border: 1px solid #111111;
            background-color: #111111;
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap; // 버튼 텍스트가 줄바꿈되지 않도록
          }
        }
      }
    }
  }
}

</style>