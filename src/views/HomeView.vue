<template>
  <div class="hero">
    <div class="container">
      <div class="inner-hero-wrapper">
        <h1>Empower Your Financial Journey</h1>
      <h3>Expert Tax Services Tailored to Your Unique Needs.</h3>
      <a href="" class="rf-btn">Our Services</a>
      </div>
    </div>
  </div>

  <!-- This is the A team of seasoned experts section -->
  <div class="section">
    <div class="container">
      <div class="grid-intro-section">
        <img src="../assets/img/team.png" alt="" class="intro-img">
        <div class="intro-inner-wrapper">
          <h1>A team of seasoned experts</h1>
          <div class="intro-p-wrapper">
            <h4>A modern touch on tax prep</h4>
            <p>At Rovira Tax Studio, we go beyond traditional tax preparation. Our team of seasoned experts is dedicated to maximizing your refunds, minimizing your stress, and providing personalized solutions for individuals and businesses alike.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- This is the Tax preparations for all levels Section -->
  <div class="section">
    <div class="container">
      <h4 class="services-table-h">Tax preparations for all levels</h4>
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
  <div class="section">
    <div class="container">
      <div class="rf_dark_cta">
        <h3 class="rf_white_medium_header">Get to know us</h3>
        <h2 class="rf_white_header">Dive deeper into understanding our brand and the shapes we build for others stars is our focus</h2>
        <button class="rf_cta_white">Learn More</button>
      </div>
    </div>
  </div>

  <!-- Slider Section -->
  <div class="section">
    <div class="container">
      <div class="rf_flex_container">
        <h3 class="rf_small_header">Discover our Resources</h3>
        <h2 class="rf_medium_header">Get to know how we can help you achieve your financial goals with our specific set of expertise</h2>
      </div>
      <div class="rf_slider">
        <div class="slider-track">
          <div class="slider-item"><img src="slide1.jpg" alt="Slide 1"></div>
          <div class="slider-item"><img src="slide2.jpg" alt="Slide 2"></div>
          <div class="slider-item"><img src="slide3.jpg" alt="Slide 3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  padding-left: 10vw;
}
.hero h1 {
  color: white;
  font-weight: 400;
  font-size: 120px;
  line-height: 125px;
  letter-spacing: -1.2px;
  width: 60vw;
  margin-bottom: 50px;
}
.hero h3 {
  color: white;
  font-weight: 400;
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  letter-spacing: -0.36px;
  width: 25vw;
  margin-bottom: 80px;
}
.rf-btn {
  padding: 25px 45px;
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 82px;
  letter-spacing: -0.16px;
  border-radius: 1000px;
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
.intro-inner-wrapper h1 {
    font-size: 80px;
    font-weight: 400;
    line-height: 82px;
    color: black;
    letter-spacing: -0.8px;
  }
  .intro-p-wrapper h4 {
    color: black;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
  .intro-p-wrapper p {
    color: #989898;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.24px;
    margin-top: 17px;
  }

  /* Services Section */
  .services-table-wrapper {
    display: flex;
    flex-direction: column;
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
  .services-table-h {
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: -0.24px;
    margin-bottom: 2rem;
  }
</style>
