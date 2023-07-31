<template>
  <section class="login">
    <div class="login_form">
      <div class="login_box">
        <div class="input_item" id="input_item_id">
          <div class="input_inner">
            <span class="icon_id" id="icon_id"></span>
            <input type="text" id="id" name="id" placeholder="아이디" class="input_text" v-model="user_id">
          </div>
        </div>
        <div class="input_item" id="input_item_pw">
          <div class="input_inner">
            <span class="icon_pw" id="icon_pw"></span>
            <input type="password" id="pw" name="pw" placeholder="비밀번호" class="input_password" v-model="user_pw">
          </div>
        </div>
      </div>
    </div>
		
    <button type="button" id="upper_login_btn" class="btn_check" @click="fnLogin">
      <span class="text" id="upper_login_span">로그인</span>
    </button>
  </section>
</template>

<script>
import { ref } from 'vue'; // Import ref function from Vue Composition API
import { mapActions, mapGetters } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter(); // Get the router instance

    const user_id = ref(''); // Use ref function here
    const user_pw = ref(''); // Use ref function here

    const { login } = mapActions(['login']);
    const { getErrorState } = mapGetters(['getErrorState']);

    async function fnLogin() {
      if (user_id.value === '') {
        alert('ID를 입력하세요.');
        return;
      }

      if (user_pw.value === '') {
        alert('비밀번호를 입력하세요.');
        return;
      }

      try {
        const loginResult = await login({ user_id: user_id.value, user_pw: user_pw.value });

        if (loginResult) {
          alert('로그인 결과: ' + loginResult);
          router.push('/vue-2023/mypage/'); // Use router instance to navigate to /vue-2023/mypage/ on successful login
        }
      } catch (err) {
        if (err.message.indexOf('Network Error') > -1) {
          alert('서버에 접속할 수 없습니다. 상태를 확인해주세요.');
        } else {
          alert('로그인 정보를 확인할 수 없습니다.');
          router.push('/vue-2023/mypage/');
        }
      }
    }

    return {
      user_id,
      user_pw,
      fnLogin,
      getErrorState,
    };
  },
};
</script>

<style lang="scss">
.login {
  padding: 40px 20px;

  .input_box,
  .login_box {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #e6e6ea;
    background-color: #fff;
    box-sizing: border-box;
    .input_inner {
      display: block;
      height: 100%;
      padding: 15px 25px;
    }
  }
  .input_item + .input_item {
    border-top: 1px solid #f5f5f5;
  }
  .input_password,
  .input_text {
    position: relative;
    display: block;
    width: 100%;
    height: 22px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.53px;
    color: #303038;
    z-index: 5;
  }

  .btn_check,
  .btn_white {
    display: block;
    width: 100%;
    margin-top: 14px;
    padding: 14px 0 13px;
    border-radius: 6px;
    border: solid 1px rgba(0, 0, 0, 0.05);
    background-color: #111111;
    box-sizing: border-box;
    &.off {
      border: solid 1px rgba(0, 0, 0, 0.05);
      background-color: #e6e6ea;
    }
    .text {
      font-size: 18px;
      line-height: 25px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
