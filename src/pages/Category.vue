<template>
  <div>
    <button @click="showPopup = true">Show Popup</button>
    <transition name="popup">
      <div v-if="showPopup" class="popup">
        <h3>Popup Title</h3>
        <p>Popup content goes here...</p>
        <button @click="showPopup = false">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const showPopup = ref(false)
    return {
      showPopup,
    }
  },
})
</script>

<style scoped>
/* 컴포넌트 스타일 */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s;
}
.popup-enter-from,
.popup-leave-to {
  transform: translateX(-100%);
}
.popup-enter-to,
.popup-leave-from {
  transform: translateX(0);
}
</style>