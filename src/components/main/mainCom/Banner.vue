<script>
export default {
  data() {
    return {      
      items: [
        {
          link: "#none",
          image: "/vue-2023/src/assets/images/main/main-banner.png",
          alt: '신규회원 가입 혜택',
        }
      ]
    };
  },
};
</script>

<template>
  <section class="main-sec main-banner">
    <a 
      v-for="(item, index) in items"
      :key="index"
      :href="item.link">
      <img :src="item.image" :alt="item.alt" />
    </a>
  </section>
</template>

<style lang="scss">
.main-banner {
  margin-bottom: 60px;

  a {
    display: block;
  }

  img {
    width: 100%;
  }
}

</style>
