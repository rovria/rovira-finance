<template>
  <div class="hamburger-menu" @click="toggleMenu">
    <div class="line" :class="{ 'line-top-open': isOpen, 'line-top-closed': !isOpen }" />
    <div class="line" :class="{ 'line-bottom-open': isOpen, 'line-bottom-closed': !isOpen }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.hamburger-menu {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 40px;
  height: 40px; /* Adjusted height to fit the lines properly */
  position: relative;
}

.line {
  width: 40px;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
}

.line-top-closed {
  top: 10px; /* Adjust to position the top line */
}

.line-bottom-closed {
  top: 20px; /* Adjust to position the bottom line */
}

.line-top-open {
  transform: rotate(45deg);
  top: 50%;
  margin-top: -2px; /* Half of the line height */
}

.line-bottom-open {
  transform: rotate(-45deg);
  top: 50%;
  margin-top: -2px; /* Half of the line height */
}
</style>
