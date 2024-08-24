<script>
export default {
    name: 'Hero',
}
</script>
<template>
  <div class="hero" id="activate">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__column">
          <h1 class="global__heading-h1-large global__heading-white">Empower Your Financial Journey</h1>
          <h1 class="global__heading-h1-small global__heading-white">Expert Tax Services Tailored to Your Unique Needs.</h1>

          <div class="hero__button-wrapper">
            <a href="#" class="button__hero">Our Services</a>
            <a href="#" class="button__hero__ghost">Contact Us</a>
          </div>
        </div>
        <div class="hero__column">
        </div>
      </div>
    </div>
    <img src="../../assets/hero.jpg" alt="" class="hero__bg">
  </div>
</template>
<style>
.hero {
  width: 100%;
  height: 100vh;
  position: relative;
}
.hero__bg {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.hero__wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 8vw;
  padding-top: 14.813rem;
}
.hero__button-wrapper {
  margin-top: 2.875rem;
  display: flex;
  flex-direction: row;
}


/* 2xl */
@media (max-width: 1536px) {
}

/* xl */
@media (max-width: 1280px) {
}

/* lg */
@media (max-width: 1024px) {
}

/* md */
@media (max-width: 768px) {
}

/* sm */
@media (max-width: 640px) {
}

/* xs */
@media (max-width: 475px) {
}

</style>