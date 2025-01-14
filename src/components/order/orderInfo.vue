<script>
export default {
}
</script>

<template>
  <section class="order-info">
    <h3>주문하시는 분</h3>

    <ul class="order-info-list">
      <li>주문결제 및 정확한 배송을 위해 반드시 실명으로 주문해 주셔야 합니다.</li>
      <li>실명이 아닌 경우 변경 버튼을 통해 실명으로 변경하여 주시기 바랍니다.</li>
    </ul>

    <div class="order-info-detail">
      <span>홍길동</span>
      <span>010-1234-5678</span>
      <span>gildong@mail.com</span>
    </div>

    <div class="order-info-input">
      <ul>
        <li><input type="text" name="" id="" placeholder="이름 (필수)"></li>
        <li><input type="text" name="" id="" placeholder="연락처1-없이(필수)"></li>
        <li>
          <div class="email">
            <input type="text" name="" id="" placeholder="수신용 이메일(필수)">
            @
            <input type="text" name="" id="">
          </div>
        </li>
        <li>
          <select name="" id="">
            <option value="">gmail.com</option>
            <option value="">naver.com</option>
            <option value="">daum.net</option>
            <option value="">직접 입력</option>
          </select>
        </li>
        <li><input type="password" name="" id="" placeholder="비밀번호(필수)"></li>
        <li><input type="password" name="" id="" placeholder="비밀번호 확인(필수)"></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"> 
  .order-info {
    padding: 60px 0 0;
    h3 {
      padding-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      border-bottom: 1px solid #333;
    }
    .order-info-list {
      margin: 24px 0;
      padding: 24px 20px;
      background-color: #F6F6F6;
      li {
        position: relative;
        padding-left: 12px;
        color: #666;
        font-size: 13px;
        line-height:19px;
        &::before {
          content:'';
          position: absolute;
          top: 8px;
          left: 5px;
          width:2px;
          height: 2px;
          border-radius: 2px;
          background-color: #111;
        }
      }
    }
    .order-info-detail {
      margin: 24px 0;
      padding-bottom: 24px; 
      border-bottom: 1px solid #ccc;
      span {
        display: block;
        font-size: 14px;
        line-height: 16px;
        + span {
          margin-top: 16px;
        }
      }
    }
    .order-info-input {
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
      li {
        margin: 12px 0;
        input, select {
          padding: 15px 11px;
          width: 100%;
          border: 1px solid #ccc;
          font-size: 14px;
          line-height: 16px;
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
        .email {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }
      }
    }
  }
</style>