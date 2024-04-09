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
      <div class="grid_2_column">
        <div class="col_1">
          <!-- Fixed typo in 'src' attribute -->
          <img src="../assets/img/luxury.png">
        </div>
        <div class="col_2">
          <!-- Added missing closing quotation mark -->
          <div class="row_1">
            <h2 class="rf_medium_header">A team of seasoned experts</h2>
          </div>
          <div class="row_2">
            <h3 class="rf_small_header">A modern touch on tax prep</h3>
            <p class="rf_grey_paragraph">At Rovira Tax Studio, we go beyond traditional tax preparation. Our team of seasoned experts is dedicated to maximizing your refunds, minimizing your stress, and providing personalized solutions for individuals and businesses alike.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- This is the Tax preparations for all levels Section -->
  <div class="section">
    <div class="container">
      <div class="table_rows">
        <h2 class="rf_medium_header">Tax preparations for all levels</h2>
        <div class="rf_rows">
          <div class="rf_flex-container">
            <h1 class="rf_header_table_row">1</h1>
            <h1 class="rf_header_table_row">Students</h1>
            <img src="" alt="Student Image">
          </div>
        </div>

        <div class="rf_rows">
          <div class="rf_flex-container">
            <h1 class="rf_header_table_row">2</h1>
            <h1 class="rf_header_table_row">Graduates</h1>
            <img src="" alt="Graduate Image">
          </div>
        </div>

        <div class="rf_rows">
          <div class="rf_flex-container">
            <h1 class="rf_header_table_row">3</h1>
            <h1 class="rf_header_table_row">Newcomers</h1>
            <img src="" alt="Newcomers Image">
          </div>
        </div>

        <div class="rf_rows">
          <div class="rf_flex-container">
            <h1 class="rf_header_table_row">4</h1>
            <h1 class="rf_header_table_row">Businesses</h1>
            <img src="" alt="Businesses Image">
          </div>
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

<style>
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
</style>
