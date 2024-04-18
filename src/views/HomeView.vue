<template>
  <!-- Hero Section -->
  <div class="hero">
    <div class="container">
      <div class="inner-hero-wrapper">
        <h1 class="rf_hero_h1">Empower Your Financial Journey</h1>
      <h1 class="rf_hero_h2">Expert Tax Services Tailored to Your Unique Needs.</h1>
      <a href="" class="rf_btn">Our Services</a>
      </div>
    </div>
  </div>

  <!-- This is the A team of seasoned experts section -->
  <div class="section">
    <div class="container">
      <div class="grid-intro-section">
        <img src="../assets/img/team.png" alt="" class="intro-img">
        <div class="intro-inner-wrapper">
          <h1 class="rf_h1">A team of seasoned experts</h1>
          <div class="intro-p-wrapper">
            <h4 class="rf_h3">A modern touch on tax prep</h4>
            <p class="rf_p">At Rovira Tax Studio, we go beyond traditional tax preparation. Our team of seasoned experts is dedicated to maximizing your refunds, minimizing your stress, and providing personalized solutions for individuals and businesses alike.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- This is the Tax preparations for all levels Section -->
  <div class="section">
    <div class="container">
      <h4 class="rf_h3">Tax preparations for all levels</h4>
      <div class="services-table-wrapper">

        <div class="services-table" style="border-top: 1px solid #C0C0C0;">
          <h1>01</h1>
          <h1>Students</h1>
          <img src="../assets/img/arrow.svg" alt="">
          <div class="table-bg"></div>
        </div>

        <div class="services-table">
          <h1>02</h1>
          <h1>Graduates</h1>
          <img src="../assets/img/arrow.svg" alt="">
          <div class="table-bg"></div>
        </div>

        <div class="services-table">
          <h1>03</h1>
          <h1>Newcomers</h1>
          <img src="../assets/img/arrow.svg" alt="">
          <div class="table-bg"></div>
        </div>

        <div class="services-table">
          <h1>04</h1>
          <h1>Businesses</h1>
          <img src="../assets/img/arrow.svg" alt="">
          <div class="table-bg"></div>
        </div>


      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="section black_bg vh-100 rf_center">
    <div class="container">
      <div class="cta-inner-wrapper">
        <h3 class="rf_h3 rf_white">Get to know us</h3>
        <h2 class="rf_h1 rf_white center_txt">Dive deeper into understanding our brand and the shapes we build for others stars is our focus</h2>
        <a href="" class="rf_btn">Our Services</a>
      </div>
    </div>
  </div>

  <!-- Slider Section -->
  <div class="section">
    <div class="container">
      <div class="slider-header-wrapper">
        <h3 class="rf_h3">Discover our Resources</h3>
        <h2 class="rf_h1">Get to know how we can help you achieve your financial goals with our specific set of expertise</h2>
      </div>

    </div>
  </div>
</template>

<script>
import '../assets/css/_global.scss'


export default {
  name: 'HomeView',
  props: {
    msg: String
  }
}

</script>

<style lang="scss">
/* Hero Section */
.hero {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/img/hero.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .inner-hero-wrapper {
    border: 1px solid red;
  }
  /* Introduction Section */
  .grid-intro-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid red;
  }
  .intro-img {
    width: 100%;
    height: 1095px;
    border-radius: 15px;
  }
  .intro-inner-wrapper {
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
  }
    /* Services Section */
    .services-table-wrapper {
      display: flex;
      flex-direction: column;
      border: 1px solid red;
    }
    .services-table {
      width: 100%;
      border-bottom: 1px solid #C0C0C0;
      padding-top: 4rem;
      padding-bottom: 4rem;
      position: relative;
  
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .services-table h1 {
      font-size: 96px;
      font-weight: 400;
      line-height: 35px;
    }
    .services-table img {
      justify-self: end;
    }
    .table-bg {
      position: absolute;
      width: 100%;
      height: 0px;
      background-color: black;
    }
.rf_center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cta-inner-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
}
.slider-header-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid red;
}

</style>
