<script setup>
  import { ref } from 'vue';
  
  const qnaList = ref([
    {
      status: '답변완료',
      category: '상품재고',
      user: '홍*동',
      title: '상품 총 기장 알려주세요',
      private: false, // 답변 공개
      question: {
        text: '크롭기장이라고 적혀있는데 S사이즈 총기장이 70cm로 되어있어서 문의드립니다. 총기장이 70cm가 맞나요? 그럼 xs사이즈 총기장은 어떻게 되나요?',
        image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/news-01.png',
        showButtons: true
      },
      answer: {
        status: '답변',
        category: '고객센터',
        text: '안녕하세요, 고객님. 문의주신 상품의 총 기장은 100cm 입니다. 감사합니다.'
      },
      isOpen: false // Toggle state
    },
    {
      status: '문의접수',
      category: '상품재고',
      user: '홍*동',
      title: '재입고 언제 되나요',
      private: false, // 답변 공개
      question: {
        text: '크롭기장이라고 적혀있는데 S사이즈 총기장이 70cm로 되어있어서 문의드립니다. 총기장이 70cm가 맞나요? 그럼 xs사이즈 총기장은 어떻게 되나요?',
        image: '',
        showButtons: false
      },
      answer: null,
      isOpen: false // Toggle state
    },
    {
      status: '답변완료',
      category: '상품재고',
      user: '홍*동',
      title: '비공개 문의글 입니다.',
      private: true, // 답변 비공개
      question: {
        text: '비공개 문의글 입니다.',
        image: '',
        showButtons: false
      },
      answer: null,
      isOpen: false // Toggle state
    },
    {
      status: '답변완료',
      category: '상품재고',
      user: '홍*동',
      title: '비공개 문의글 입니다.',
      private: true, // 답변 비공개
      question: {
        text: '비공개 문의글 입니다.',
        image: '',
        showButtons: false
      },
      answer: null,
      isOpen: false // Toggle state
    }
  ]);
  
  const toggleItem = (index) => {
    if (!qnaList.value[index].private) {
      qnaList.value[index].isOpen = !qnaList.value[index].isOpen;
    }
  };
</script>

<template>
  <section class="tab-qna">
    <button type="button" class="button-qna">문의하기</button>

    <ul class="qna-list">
      <li v-for="(item, index) in qnaList" :key="index">
        <div class="toggle-title" @click="toggleItem(index)">
          <div class="state">
            <span class="state-status">{{ item.status }}</span>
            <span class="state-category">{{ item.category }}</span>
            <span class="state-user">{{ item.user }}</span>
          </div>
          <div class="title" :class="{ 'open': item.isOpen, 'private': item.private }">{{ item.title }}</div>
        </div>
        <div class="toggle-contents" v-if="item.isOpen">
          <!-- 질문 -->
          <div class="asking">
            <div class="text">{{ item.question.text }}</div>
            <div class="image" v-if="item.question.image">
              <img :src="item.question.image" alt="">
            </div>
            <div class="buttons" v-if="item.question.showButtons">
              <button type="button" class="button-modify">수정</button>
              <button type="button" class="button-delete">삭제</button>
            </div>
          </div>
          <!-- 답변 -->
          <div class="reply" v-if="item.answer">
            <div class="state">
              <span class="state-status">{{ item.answer.status }}</span>
              <span class="state-category">{{ item.answer.category }}</span>
            </div>
            <div class="answer">{{ item.answer.text }}</div>
          </div>
        </div>
      </li>
    </ul>

    <button type="button" class="button-qna-more">더보기</button>
  </section>
</template>

<style lang="scss"> 
  .tab {
    &-qna {
      padding: 40px 20px;
      .button-qna {
        display: block;
        width: 100%;
        height: 48px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background-color: #111;
      }
    }
  }
  .qna-list {
    margin: 24px 0 40px;
    border-top: 1px solid #333;
    li {
      border-bottom: 1px solid #eee;
      .toggle-title {
        .state {
          display: flex;
          gap: 20px;
          padding: 24px 0 0;
          span {
            font-size: 14px;
          }
          &-category,
          &-user {
            color: #666;
          }
        }
        .title {
          position: relative;
          padding: 14px 0 22px;
          font-size: 14px;
          line-height: 24px;
          &::after {
            content:'';
            position: absolute;
            right: 0;
            top: 14px;
            width: 24px;
            height: 24px;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 9L12 16L5 9' stroke='%23111111' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E%0A");
          }
          &.open {
            font-weight: 600;
            &::after {
              transform: rotate(180deg);
            }
          }
          &.private {
            padding-left: 32px;
            &::before {
              content:'';
              position: absolute;
              top: 14px;
              left: 0;
              width: 24px;
              height: 24px;
              background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 10L19 10V21H5V10Z' stroke='black' stroke-width='2'/%3E%3Ccircle cx='12' cy='15' r='2' fill='black'/%3E%3Cpath d='M8 11V7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V11' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
            }
            &::after {
              opacity: 0;
            }
          }
        }
      }
      .toggle-contents {
        .text {
          margin-bottom: 16px;
          font-size: 14px;
          color: #666;
          line-height: 20px;
        }
        .image {
          margin-bottom: 16px;
          img {
            width: 100%;
          }
        }
        .buttons {
          display: flex;
          justify-content: flex-end;
          gap: 4px;
          margin-top: 24px;
          button {
            padding: 8px 12px;
            height: 32px;
            text-align: center;
            font-size: 13px;
            color: #666;
            border: 1px solid #666;
          }
        }
        .reply {
          margin-top: 24px;
          padding: 24px 20px;
          background-color: #F7F7F7;
          .state {
            display: flex;
            gap: 20px;
            padding-bottom: 16px;
            span {
              font-size: 14px;
            }
            &-category,
            &-user {
              color: #666;
            }
          }
          .answer {
            padding-left: 18px;
            font-size: 14px;
            line-height: 20px;
            color: #666;
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='10' fill='black'/%3E%3Crect y='10' width='2' height='10' transform='rotate(-90 0 10)' fill='black'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: 0 2px;
          }
        }
      }
    }
  }
  .button-qna-more {
    display: block;
    width: 100%;
    height: 48px;
    text-align: center;
    font-size: 14px;
    color: #111;
    border: 1px solid #111;
  }

</style>