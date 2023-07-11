<template>
  <div class="my-footer">
    <ul>
        <li><a href="/vue-2023/notice">공지사항</a></li>
        <li><a href="/vue-2023/store">매장안내</a></li>
        <li><a href="javascript:;">로그아웃</a></li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss">
/* 컴포넌트 스타일 */

/* my-footer */

.my-footer {
  position: sticky;
  bottom: 0;
  margin: 0 -20px;
  background: #F6F6F6;

  ul {
    padding: 0 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li a {
    position: relative;
    display: block;
    padding: 18px 20px;
    font-size: 13px;
    line-height: 14px;
    color: #111;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 14px;
      background: #ccc;
    }
  }
}

</style>