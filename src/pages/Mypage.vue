<template>
  <section class="mypage">
    <!-- Button to open the popup -->
    <button @click="openPopup">Open Popup</button>

    <!-- Popup -->
    <div v-if="showPopup" class="popup-container">
      <div class="popup" style="font-size:30px;">
        <!-- Popup content -->
        <h2>This is a Popup</h2>
        <p>Hello, this is some content in the popup!</p>

        <!-- Close button -->
        <button @click="closePopup">Close</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Define a reactive variable to control the popup visibility
const showPopup = ref(false);

// Function to open the popup
const openPopup = () => {
  showPopup.value = true;
};

// Function to close the popup
const closePopup = () => {
  showPopup.value = false;
};
</script>

<style scoped>
/* 컴포넌트 스타일 */
.mypage {
  padding:0 20px;
  min-height:400px;
}
/* Popup styles */
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:15;
}

.popup {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.popup h2 {
  margin-bottom: 10px;
}

.popup button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>