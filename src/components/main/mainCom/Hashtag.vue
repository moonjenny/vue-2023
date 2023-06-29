<script>
export default {
  data() {
    return {
      hashtags: [
        {
          link: "#none1",
          text: '#모피', 
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/hashtag-01.png'
        },
        {
          link: "#none",
          text: '#데님',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/hashtag-02.png'
        },
        {
          link: "#none",
          text: '#모피2',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/hashtag-01.png'
        },
        {
          link: "#none",
          text: '#데님2',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/hashtag-02.png'
        },
        {
          link: "#none",
          text: '#모피3',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/hashtag-01.png'
        },
        {
          link: "#none",
          text: '#데님3',
          image: 'https://raw.githubusercontent.com/moonjenny/vue-2023/main/src/assets/images/main/hashtag-02.png'
        },
      ],
    };
  },
};
</script>

<template>
  <section class="main-sec main-hashtag">
    <ul>
      <li v-for="(hashtag, index) in hashtags" :key="index">
        <a :href="hashtag.link">
          <span>{{ hashtag.text }}</span>
          <img :src="hashtag.image" :alt="hashtag.text" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.main-hashtag {
  margin: 60px 0;
  ul {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 16px;
    font-size: 0;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;

    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */
    &::-webkit-scrollbar {
      display: none;
      /* Chrome, Safari, Opera*/
    }

    li {
      display: inline-block;
      width: calc(34% - 8px);
      margin-right: 8px;

      a {
        position: relative;
        display: block;
        text-align: center;
      }

      img {
        width: 100%;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 16px;
        font-size: 14px;
        color: #fff;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.32);
      }
    }
  }
}

</style>
