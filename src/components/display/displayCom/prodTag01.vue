
<script>
export default {
  name: 'Tags',
  data() {
    return {
      //태그
      //tags: ['#DEAR K', '#HUIT DE LYNN', '#KENNETH LADY', '#TAG', '#TAG', '#TAG', '#TAG'],
      activeIndex: 0,
    };
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectTag(index) {
      this.activeIndex = index;
      this.$nextTick(this.scrollToActiveItem);
    },
    scrollToActiveItem() {
      const prodList = this.$refs.prodList;
      if (prodList) {
        this.$nextTick(() => {
          const activeItem = prodList.querySelector('.active');
          if (activeItem) {
            const containerWidth = prodList.offsetWidth;
            const activeItemWidth = activeItem.offsetWidth;
            const activeItemLeft = activeItem.offsetLeft;
            const offsetLeft = activeItemLeft - (containerWidth - activeItemWidth) / 2;
            prodList.scrollTo({ left: offsetLeft, behavior: 'smooth' });
          }
        });
      }
    },
  },
};
</script>

<template>
  <div class="main-tags">
    <ul ref="prodList">
      <li v-for="(tag, index) in tags" :key="index" :class="{ active: index === activeIndex }">
        <a href="javascript:;" @click.prevent="selectTag(index)">{{ tag }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.main-tags {
  position: relative;
  padding: 24px 0 20px;

  ul {
    z-index: 100;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 20px;
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
      width: auto;
      margin-right: 8px;

      a {
        display: block;
        padding: 13.5px 24px;
        font-size: 14px;
        font-weight: 700;
        color: #999;
        border: 1px solid #eee;
      }

      &.active a {
        color: #fff;
        border: 1px solid #333;
        background: #333333;
      }
    }
  }
}

</style>
