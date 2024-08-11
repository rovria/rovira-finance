<script>
import Intro from '../components/Intro.vue';
import Inter from '../components/Inter.vue';
import NavBar from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ServiceTable from '../components/ServiceTable.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    Inter,
    NavBar,
    Footer,
    ServiceTable,
  },
};
</script>
<template>
  <NavBar />
  <main>
    <!-- Hero Section Start -->
    <section class="hero__section" id="section1">
      <div class="container">
        <div class="hero__container">
          <div class="hero__column">
            <h1 class="global__heading-h1-large global__heading-white">
              Empower Your Financial Journey
            </h1>
            <h1
              class="global__heading-h1-small global__heading-white"
              style="width: 516px; margin-top: 3.75rem"
            >
              Expert Tax Services Tailored to Your Unique Needs.
            </h1>
            <div class="hero__button__container" style="gap: 2rem">
              <a href="/" class="button button__hero">Our Services</a>
              <a href="/" class="button button__hero__ghost">Contact Us</a>
            </div>
          </div>
          <div class="hero__column"></div>
        </div>
      </div>
      <img src="../assets/hero.jpg" alt="" class="hero__bg-img" />
    </section>
    <!-- Hero Section End -->

    <!-- Intro Section Start -->
    <section class="section">
      <div class="container">
        <Intro
          title="A team of seasoned
experts"
          subtitle="A modern touch on tax prep"
          content="At Rovira Tax Studio, we go beyond traditional tax preparation. Our team of seasoned experts is dedicated to maximizing your refunds, minimizing your stress, and providing personalized solutions for individuals and businesses alike."
        />
      </div>
    </section>
    <!-- Intro Section End -->

    <section class="section">
      <div class="container">
        <ServiceTable />
      </div>
    </section>

    <Inter
      label="Get to know us"
      title="Dive deeper into understanding our brand and the shapes we build for others stars is our focus
"
    />
    <!-- Socials Section Start -->
    <section class="section">
      <div class="container">
        <div class="grid__columns-2">
          <h2 class="global__heading-h2-small">Discover Our Resources</h2>
          <h1 class="global__heading-h1-medium">
            Get to know how we can help you achieve your financial goals with
            our specific set of expertise
          </h1>
        </div>
      </div>
    </section>
    <!-- Socials Section End -->
  </main>
  <Footer />
</template>
<style>
/* Hero section */
.hero__section {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 14.5rem;
  padding-bottom: 13.75rem;
}
.hero__bg-img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.hero__container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: 1.938rem;
}
.hero__title-space {
  margin-bottom: 0.2rem;
}
.hero__button__container {
  margin-top: 3.125rem;
  display: flex;
  flex-direction: row;
}
.global__heading-h2__margin {
  margin-bottom: 2rem;
}
/* Socials Section */
</style>
