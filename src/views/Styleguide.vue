<script>
import Intro from '../components/Intro.vue';

export default {
  name: 'styleguide',
  components: {
    Intro,
  },
};
</script>
<template>
  <section class="section">
    <div class="container">
      <h1 class="global__heading-h1-large">StyleGuide</h1>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="object__wrapper"></div>
    </div>
  </section>
  <section class="section">
    <div class="container"></div>
  </section>
</template>
<style>
.object__wrapper {
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: 1px solid gray;
}
</style>
