import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/CommonMain.vue';
import Category from './../pages/Category.vue'; // 카테고리 레이어
import Display from './../pages/Display.vue'; //리스트
import About from './../pages/About.vue';
import Cart from './../pages/Cart.vue';
import Order from './../pages/Order.vue';
import Like from './../pages/Like.vue';
import Notice from './../pages/Notice.vue';
import Store from './../pages/Store.vue';
import Login from './../pages/Login.vue';
// 상품상세
import Detail from './../pages/Detail.vue';
// 마이페이지
import Mypage from './../pages/Mypage.vue'; // 메인
import Point from './../pages/mypage/Point.vue'; // 포인트
import OrderDelivery from './../pages/mypage/OrderDelivery.vue'; // 주문배송조회
import OrderDetail from './../pages/mypage/OrderDetail.vue'; // 주문배송조회
import DirectInquiry from './../pages/mypage/DirectInquiry.vue'; // 1:1문의
import Faq from './../pages/mypage/Faq.vue'; // 자주묻는 질문

const routes = [
  { 
    path: '/vue-2023/', 
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  { 
    path: '/vue-2023/category/', 
    component: Category,
    meta: {
      title: '카테고리'
    }
  },
  { 
    path: '/vue-2023/display/', 
    component: Display,
    meta: {
      title: '리스트'
    }
  },
  { 
    path: '/vue-2023/about/', 
    component: About,
    meta: {
      title: 'About'
    }
  },
  { 
    path: '/vue-2023/cart/', 
    component: Cart,
    meta: {
      title: '장바구니'
    }
  },
  { 
    path: '/vue-2023/order/', 
    component: Order,
    meta: {
      title: '주문서 작성'
    }
  },
  { 
    path: '/vue-2023/like/', 
    component: Like,
    meta: {
      title: '관심상품'
    }
  },
  { 
    path: '/vue-2023/mypage/', 
    component: Mypage,
    meta: {
      title: '마이페이지'
    }
  },
  { 
    path: '/vue-2023/mypage/point/', 
    component: Point,
    meta: {
      title: '마이페이지 | 포인트'
    }
  },
  { 
    path: '/vue-2023/mypage/orderdelivery/', 
    component: OrderDelivery,
    meta: {
      title: '마이페이지 | 주문배송조회'
    }
  },
  { 
    path: '/vue-2023/mypage/orderdetail/', 
    component: OrderDetail,
    meta: {
      title: '마이페이지 | 주문배송상세'
    }
  },
  { 
    path: '/vue-2023/mypage/directinquiry/', 
    component: DirectInquiry,
    meta: {
      title: '마이페이지 | 1:1문의'
    }
  },
  { 
    path: '/vue-2023/mypage/faq/', 
    component: Faq,
    meta: {
      title: '마이페이지 | 자주묻는 질문'
    }
  },
  { 
    path: '/vue-2023/notice/', 
    component: Notice,
    meta: {
      title: '공지사항'
    }
  },
  { 
    path: '/vue-2023/store/', 
    component: Store,
    meta: {
      title: '매장안내'
    }
  },
  { 
    path: '/vue-2023/login/', 
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  { 
    path: '/vue-2023/detail/', 
    component: Detail,
    meta: {
      title: '상품상세'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //스크롤 탑 추가
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

router.afterEach((to, from) => {
  const title = to.meta.title || packageJson.name
  if(title) document.title = title
})

export default router;