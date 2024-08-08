<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Intro from '../components/Intro.vue';
import PricingTable from '../components/PricingTable.vue';
import Faq from '../components/Faq.vue';

export default {
  name: 'Services',
  components: {
    Header,
    Footer,
    Intro,
    PricingTable,
    Faq,
  },
};
</script>
<template>
  <Header theme="dark" />
  <main>
    <!-- Hero Section Start -->
    <section class="section">
      <div class="container">
        <div class="hero__container">
          <div class="hero__content">
            <h1
              class="global__heading-h1-large"
              style="margin-bottom: 2rem; width: 1068px"
            >
              Elevate Your Financial Experience
            </h1>
            <h1
              class="hero__heading-h1-small"
              style="width: 524px; line-height: 44px"
            >
              Elevate your financial experience with our comprehensive services
            </h1>
          </div>
          <a href="/" class="button button__primary"
            >Contact Us <img src="../assets/arrow.svg" alt=""
          /></a>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->
    <!-- Image Inter Section Start -->
    <section class="section">
      <div class="container">
        <div class="inter__content">
          <img src="../assets/services.jpg" alt="" />
        </div>
      </div>
    </section>
    <!-- Image Inter Section End -->
    <section class="section">
      <div class="container">
        <PricingTable />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Intro
          title="The Benefits for students "
          subtitle="A modern touch on tax prep"
          content="At Rovira Tax Studio, we go beyond traditional tax preparation. Our team of seasoned experts is dedicated to maximizing your refunds, minimizing your stress, and providing personalized solutions for individuals and businesses alike."
        />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Faq />
      </div>
    </section>
  </main>
  <Footer />
</template>
<style>
.hero__content {
  display: flex;
  flex-direction: column;
  justify-self: start;
  align-self: start;
}
.hero__container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: end;
  justify-items: end;
  align-items: end;
}
.inter__content {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}
.inter__content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
