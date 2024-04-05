<template>
    <div class="hero">
    <div class="hero-wrapper">
      <h1>Empower Your Financial Journey</h1>
      <h3>Expert Tax Services Tailored to Your Unique Needs.</h3>
    </div>
  </div>

  <!-- <div class="section">
    <div class="container">
      <div class="grid-2-column">
        <div class="intro-img-wrapper">
          <img src="../assets/img/finance.png" alt="">
        </div>
        <div class="intro-txt-wrapper">
          <h1 class="intro-h1">A team of seasoned experts</h1>
          <div class="intro-txt-small-wrapper">
            <h3>A modern touch on tax prep</h3>
            <p>At Rovira Tax Studio, we go beyond traditional tax preparation. Our team of seasoned experts is dedicated to maximizing your refunds, minimizing your stress, and providing personalized solutions for individuals and businesses alike.</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="section">
    <div class="container">
      <h2>Tax preparation for all levels</h2>
    </div>
  </div> -->
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
    display: flex;
    flex-direction: column;
    align-items: left;
    align-content: center;
    background-color: gray;
}
.hero img {
    width: 100%;
    height: auto;
    display: block;
}
.hero-wrapper { 
  width: 60%;
}
.hero-wrapper h1 {
  font-size: 120px;
  font-weight: 400;
  line-height: 125px;
  letter-spacing: -1.2px;
  color: white;
}
.hero-wrapper h3 {
  font-size: 36px;
  font-weight: 400;
  line-height: 49px;
  letter-spacing: -0.36px;
  color: white;
}
</style>
