<template>
  <div class="inquiry-register-popup-overlay" @click.self="closePopup">
    <div class="inquiry-register-popup">
      <div class="popup-header">
        <h3 class="popup-title">1:1 문의 등록</h3>
        <button class="close-button" @click="closePopup" aria-label="팝업 닫기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M6 18L18 6" stroke="#111111" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </button>
      </div>

      <div class="popup-content">
        <div class="select-group">
          <div class="select-wrapper">
            <select v-model="selectedInquiryType" class="inquiry-select">
              <option value="" disabled>문의 유형</option>
              <option v-for="type in inquiryTypes" :key="type.value" :value="type.value">
                {{ type.text }}
              </option>
            </select>
            <span class="select-arrow"></span>
          </div>
          <div class="select-wrapper">
            <select v-model="selectedDetailedInquiryType" class="inquiry-select">
              <option value="" disabled>상세 문의 유형</option>
              <option v-for="type in detailedInquiryTypes" :key="type.value" :value="type.value">
                {{ type.text }}
              </option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>

        <button class="btn-product-select">문의상품 선택</button>

        <div class="product-order-info-section" v-if="false"> <div class="order-cancel-date">2022-11-01</div>
          <div class="info-row">
            <span class="label">주문취소번호</span>
            <span class="value">21123117282343</span>
          </div>
          <div class="info-row">
            <span class="label">주문번호</span>
            <span class="value">21123117282343</span>
          </div>

          <div class="product-item">
            <img src="https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png" alt="상품 이미지" class="product-image" />
            <div class="product-details">
              <span class="product-brand">LYNN</span>
              <span class="product-name-full">클래식 크롭 테일러드 자켓</span>
              <span class="product-option">브라운 / 55</span>
            </div>
            <button class="remove-product" aria-label="상품 제거">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="#BBBBBB" stroke-width="2" stroke-linecap="square"/>
              </svg>
            </button>
            <div class="additional-info">[사은품] 브랜드명 사은품1 사은품1 (2개) <span class="sold-out">소진</span></div>
            <div class="additional-info">[사은품] 브랜드명 사은품1 사은품1 (2개)</div>
          </div>
          <button class="btn-product-action">주문취소</button>
        </div>

        <div class="product-order-info-section" v-if="false"> <div class="additional-text">[추가] 멘투멘티셔츠 랭갈-L-1개 (총 2개)</div>
          <div class="product-item">
            <img src="https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/thumb-01.png" alt="상품 이미지" class="product-image" />
            <div class="product-details">
              <span class="product-brand">LYNN</span>
              <span class="product-name-full">클래식 크롭 테일러드 자켓</span>
              <span class="product-option">브라운 / 55</span>
            </div>
            <button class="remove-product" aria-label="상품 제거">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="#BBBBBB" stroke-width="2" stroke-linecap="square"/>
              </svg>
            </button>
          </div>
          <button class="btn-product-action">주문취소</button>
        </div>
        
        <div class="inquiry-text-area">
          <textarea
            v-model="inquiryContent"
            placeholder="문의내용을 입력해 주세요.&#13;&#10;주민등록번호, 휴대폰번호 등의 개인정보는 입력하지 말아 주세요."
            rows="5"
            class="inquiry-content-input"
          ></textarea>
          <p>문의 내용을 입력해 주세요.</p>
        </div>

        <div class="image-upload-section">
          <div class="image-thumbnails">
            <div v-for="(file, index) in uploadedFiles" :key="index" class="thumbnail-wrapper">
              <img :src="file.url" alt="업로드 이미지" class="thumbnail-image" />
              <button class="delete-image" @click="removeImage(index)" aria-label="이미지 삭제">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="#666666"/>
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
                </svg>
              </button>
            </div>
            <label v-if="uploadedFiles.length < maxImages" for="file-upload" class="add-image-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" fill="#111111"/>
                <rect x="9" width="16" height="2" transform="rotate(90 9 0)" fill="#111111"/>
              </svg>
              <input id="file-upload" type="file" multiple @change="handleFileUpload" accept="image/*" style="display: none;" />
            </label>
          </div>
          <p class="upload-info">
            • 사진은 최대 10장까지 등록 가능합니다.
          </p>
          <p class="upload-info">
            • 사진파일 용량은 최대 5M입니다.
          </p>
        </div>

        <div class="reply-notification-section">
          <p class="section-title">답변받을 방법 선택</p>
          <div class="notification-options">
            <label class="checkbox-container">
              <input type="checkbox" v-model="receiveEmail" />
              <span class="checkmark"></span>
              이메일
            </label>
            <input type="email" v-model="emailAddress" :disabled="!receiveEmail" placeholder="이메일 주소" class="notification-input" />
          </div>
          <div class="notification-options">
            <label class="checkbox-container">
              <input type="checkbox" v-model="receiveSms" />
              <span class="checkmark"></span>
              SMS
            </label>
            <input type="text" v-model="phoneNumber" :disabled="!receiveSms" placeholder="연락처-없이" class="notification-input" />
          </div>
        </div>
      </div>

      <div class="popup-footer">
        <button class="btn-register" @click="submitInquiry">등록</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);

const selectedInquiryType = ref('');
const selectedDetailedInquiryType = ref('');
const inquiryContent = ref('');
const uploadedFiles = ref([]);
const maxImages = 10;
const maxFileSizeMB = 5; // 5MB

const receiveEmail = ref(false);
const emailAddress = ref('');
const receiveSms = ref(false);
const phoneNumber = ref('');

// 임시 데이터 (실제로는 API에서 가져오거나 부모 컴포넌트에서 전달받음)
const inquiryTypes = [
  { text: '상품 문의', value: 'product' },
  { text: '주문/배송 문의', value: 'order' },
  { text: '취소/교환/반품 문의', value: 'cancel_exchange_return' },
  { text: '기타 문의', value: 'etc' },
];

const detailedInquiryTypes = [
  { text: '사이즈/색상', value: 'size_color' },
  { text: '재고 확인', value: 'stock' },
  { text: '세탁/관리', value: 'care' },
  { text: '상품 상세', value: 'details' },
];

const closePopup = () => {
  emit('close');
};

const handleFileUpload = (event) => {
  const files = event.target.files;
  if (!files) return;

  const newFiles = Array.from(files).filter(file => {
    if (uploadedFiles.value.length >= maxImages) {
      alert(`사진은 최대 ${maxImages}장까지 등록 가능합니다.`);
      return false;
    }
    if (file.size > maxFileSizeMB * 1024 * 1024) {
      alert(`각 파일의 용량은 최대 ${maxFileSizeMB}MB를 초과할 수 없습니다.`);
      return false;
    }
    return true;
  });

  newFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedFiles.value.push({
        file: file,
        url: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  });

  // 파일 선택 후 input 값 초기화 (동일 파일 재선택 가능하도록)
  event.target.value = '';
};

const removeImage = (index) => {
  uploadedFiles.value.splice(index, 1);
};

const submitInquiry = () => {
  // 문의 등록 로직
  console.log('문의 유형:', selectedInquiryType.value);
  console.log('상세 문의 유형:', selectedDetailedInquiryType.value);
  console.log('문의 내용:', inquiryContent.value);
  console.log('업로드 파일:', uploadedFiles.value.map(f => f.file.name));
  console.log('이메일 수신:', receiveEmail.value, emailAddress.value);
  console.log('SMS 수신:', receiveSms.value, phoneNumber.value);

  // 여기에 실제 API 호출 로직 등을 추가
  alert('문의가 등록되었습니다.');
  closePopup();
};
</script>

<style lang="scss" scoped>
.inquiry-register-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.inquiry-register-popup {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    border-bottom: 1px solid #eee;

    .popup-title {
      font-size: 18px;
      font-weight: 500;
      color: #111;
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 24px;
        height: 24px;
        stroke: #111;
      }
    }
  }

  .popup-content {
    flex-grow: 1;
    padding: 32px 20px;
    overflow-y: auto; /* Enable scrolling for content */

    .select-group {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;

      .select-wrapper {
        position: relative;
        flex: 1;

        .inquiry-select {
          width: 100%;
          padding: 15px 30px 15px 15px;
          border: 1px solid #ccc;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #fff;
          font-size: 14px;
          color: #333;
          cursor: pointer;

          &:focus {
            outline: none;
            border-color: #666;
          }
        }

        .select-arrow {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%) rotate(0deg);
          width: 10px;
          height: 5px;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L7 7L2 2' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-position: center;
          pointer-events: none;
        }
      }
    }

    .btn-product-select {
      width: 100%;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #333;
      font-size: 14px;
      font-weight: 500;
      color: #111;
      cursor: pointer;
      margin-bottom: 24px;
    }

    .product-order-info-section {
      border-top: 1px solid #ddd;
      padding-top: 20px;
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;

      .order-cancel-date {
        font-size: 13px;
        color: #777;
        margin-bottom: 10px;
      }

      .info-row {
        display: flex;
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 4px;

        .label {
          color: #333;
          width: 90px;
          flex-shrink: 0;
        }
        .value {
          color: #555;
        }
      }

      .additional-text {
        font-size: 14px;
        color: #333;
        margin-bottom: 15px;
      }

      .product-item {
        display: flex;
        align-items: flex-start;
        position: relative;
        padding: 15px 0;
        border-bottom: 1px solid #eee;

        &:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
        }

        .product-image {
          width: 60px;
          height: 90px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .product-details {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          font-size: 13px;
          color: #555;

          .product-brand {
            font-weight: 500;
            color: #333;
            margin-bottom: 2px;
          }
          .product-name-full {
            margin-bottom: 2px;
          }
          .product-option {
            color: #777;
          }
        }

        .remove-product {
          position: absolute;
          top: 15px;
          right: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;

          svg {
            width: 16px;
            height: 16px;
          }
        }

        .additional-info {
          font-size: 12px;
          color: #666;
          margin-top: 5px;
          width: 100%;
          margin-left: calc(60px + 15px); // Image width + margin-right

          .sold-out {
            color: #ff2a00;
            font-weight: 500;
            margin-left: 5px;
          }
        }
      }

      .btn-product-action {
        width: 100%;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        color: #ff2a00;
        cursor: pointer;
        margin-top: 15px;

        &:hover {
          background-color: #f9f9f9;
        }
      }
    }


    .inquiry-text-area {
      margin-bottom: 24px;
      .inquiry-content-input {
        width: 100%;
        padding: 16px 12px;
        border: 1px solid #ccc;
        font-size: 14px;
        line-height: 20px;
        resize: vertical;
        min-height: 160px;
        box-sizing: border-box;

        &::placeholder {
          color: #999;
        }

        &:focus {
          outline: none;
          border-color: #666;
        }
      }
      p {
        margin-top: 12px;
        font-size: 14px;
        line-height: 20px;
        color: #FF2A00;
      }
    }

    .image-upload-section {
      padding-bottom: 24px;
      border-bottom: 1px solid #eee;

      .image-thumbnails {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 12px;

        .thumbnail-wrapper {
          position: relative;
          width: 93px;
          height: 93px;
          border: 1px solid #ccc;
          overflow: hidden;

          .thumbnail-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .delete-image {
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 0;

            svg {
              width: 24px;
              height: 24px;
            }
          }
        }

        .add-image-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 93px;
          height: 93px;
          border: 1px solid #ccc;
          background-color: #fff;
          cursor: pointer;

          svg {
            width: 16px;
            height: 16px;
          }
        }
      }

      .upload-info {
        font-size: 13px;
        color: #666;
        line-height: 19px;
        margin: 4px 0 0;
      }
    }

    .reply-notification-section {
      margin: 24px 0;

      .section-title {
        font-size: 16px;
        line-height: 18px;
        color: #111;
        margin-bottom: 24px;
      }

      .notification-options {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;

        .checkbox-container {
          display: block;
          width: 80px;
          position: relative;
          padding-left: 25px;
          margin-bottom: 0;
          cursor: pointer;
          font-size: 14px;
          line-height: 20px;
          color: #333;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
          }

          &:hover input ~ .checkmark {
            background-color: #ddd;
          }

          input:checked ~ .checkmark {
            background-color: #111;
            border-color: #111;
          }

          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          input:checked ~ .checkmark:after {
            display: block;
          }

          .checkmark:after {
            left: 6px;
            top: 3px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }

        .notification-input {
          flex-grow: 1;
          padding: 16px 12px;
          border: 1px solid #ccc;
          font-size: 14px;
          color: #333;

          &:disabled {
            background-color: #f5f5f5;
            color: #999;
          }
        }
      }
    }
  }

  .popup-footer {
    padding: 20px 20px;
    border-top: 1px solid #eee;
    text-align: center;

    .btn-register {
      width: 100%;
      padding: 16px;
      background-color: #111;
      color: #fff;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>