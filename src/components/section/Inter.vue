<script>
import Btn from '../Button.vue'

export default {
  name: 'Inter',
  components: {
    Btn,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <!-- Inter Section Start -->
  <section class="section inter-section">
    <div class="container">
      <div class="inter__container">
        <div class="inter__content">
          <h2 class="global__heading-h2-small global__heading__white">
            {{ label }}
          </h2>
          <h1
            class="global__heading-h1-medium global__heading__white"
            style="width: 1272px; margin-bottom: 4rem"
          >
            {{ title }}
          </h1>
          <Btn
            text="Book Today"
            link="https://example.com"
            buttonType="third"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Inter Section End -->
</template>
<style>
.global__heading__white {
  color: white;
  text-align: center;
}
.inter-section {
  background-color: black;
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.inter__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.inter__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
