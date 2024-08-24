<script>
import Intro from '../components/section/Intro.vue';
import Inter from '../components/section/Inter.vue';
import NavBar from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Hero from '../components/section/Hero.vue'
import ServiceTable from '../components/ServiceTable.vue';

export default {
  name: 'Home',
  components: {
    Intro,
    Inter,
    NavBar,
    Hero,
    Footer,
    ServiceTable,
  },
};
</script>
<template>
  <NavBar />
  <main>
      <Hero />
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
</style>
