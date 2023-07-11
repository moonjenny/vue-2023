<script>
export default {
  mounted() {
    const sectionElement = document.querySelector('.like');
    if (sectionElement && sectionElement.classList.contains('like')) {
      this.hasLike = true;
    }
  }
}
</script>

<template>
  <section class="like" :class="{ 'like': hasLike }">
    <!-- 페이지 내용 -->
    <h1>Like</h1>
    <p>This is a new page.</p>
  </section>
</template>


<style scoped>
/* 컴포넌트 스타일 */
</style>