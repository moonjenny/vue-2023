
<template>
  <div class="u_skip" id="u_skip">
    <a href="#container"><span>컨텐츠 바로가기</span></a>
  </div>
</template>


<style lang="scss">
#u_skip {
  position: relative;
  z-index: 999;
  a {
    position: absolute;
    top: -300px;
    left: 50%;
    width: 128px;
    margin-left: -64px;
    padding: 5px 0;
    background: #000;
    opacity: .9;
    font-size: 12px;
    text-align: center;
    color: #fff;
  }
}
</style>

