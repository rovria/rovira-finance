<script>
import Btn from '../components/Button.vue';

export default {
  name: 'Intro',
  components: {
    Btn,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="section-intro__container">
    <div class="section-intro__column">
      <div class="section-intro__img__container">
        <img
          src="../assets/section_img.jpg"
          alt=""
          class="section-intro__img"
        />
      </div>
    </div>
    <div class="section-intro__column column__padding">
      <div class="section-intro__txt__container">
        <h1 class="global__heading-h1-medium">
          {{ title }}
        </h1>

        <div class="section-intro__txt">
          <h2 class="global__heading-h2-label txt__margin">
            {{ subtitle }}
          </h2>
          <p class="global__p">
            {{ content }}
          </p>
          <Btn
            text="Book Today"
            link="https://example.com"
            buttonType="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.section-intro__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8vw;
  width: 100%;
}
.section-intro__column {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
.section-intro__txt__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.section-intro__img__container {
  width: 100%;
  height: 110vh;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
}
.section-intro__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.column__padding {
  padding: 3rem 0rem;
}
.button__margin {
  margin-top: 3rem;
}
.txt__margin {
  margin-bottom: 1rem;
}
</style>
