<script>
export default {
  name: 'PricingTable',
};
</script>
<template>
  <!-- Pricing Table Section -->
  <div class="pricing__content">
    <div class="pricing__titles">
      <h2 class="inter__subtitle" style="color: black">Our Pricing</h2>
      <h1 class="inter__title" style="color: black">
        A comprehensive and cheap payment amount
      </h1>
    </div>
    <div class="table__filter">
      <a href="/" class="button__filter">Students</a>
      <a href="/" class="button__filter">Newcomers</a>
      <a href="/" class="button__filter">Graduates</a>
      <a href="/" class="button__filter">Partners</a>
    </div>
    <div class="table__wrapper">
      <div class="table__top">
        <div class="table__left">
          <h2 class="table__label">Package</h2>
        </div>
        <div class="table__center">
          <h2 class="table__label">Pricing</h2>
        </div>
        <div class="table__right">
          <h2 class="table__label">Benefits</h2>
        </div>
      </div>
      <!-- Row 1 Start -->
      <div class="table__row">
        <div class="table__left">
          <h1 class="table__package">Basic</h1>
        </div>
        <div class="table__center">
          <h1 class="table__pricing">$50</h1>
        </div>
        <div class="table__right">
          <ul class="table__list">
            <li class="table__li">
              <p class="table__item">
                Targeted for students, newcomers, and graduates.
              </p>
            </li>
            <li class="table__li">
              <p class="table__item">
                Includes preparation and filing of standard tax returns.
              </p>
            </li>
            <li class="table__li">
              <p class="table__item">
                Suitable for individuals with relatively simple financial
                situations.
              </p>
            </li>
            <li>
              <p class="table__item">
                Suitable for individuals with relatively simple financial
                situations.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Row 1 End -->

      <!-- Row 2 Start -->
      <div class="table__row">
        <div class="table__left">
          <h1 class="table__package">Enhanced</h1>
        </div>
        <div class="table__center">
          <h1 class="table__pricing">$80</h1>
        </div>
        <div class="table__right">
          <ul class="table__list">
            <li class="table__li">
              <p class="table__item">
                Targeted for students, newcomers, and graduates.
              </p>
            </li>
            <li class="table__li">
              <p class="table__item">
                Includes preparation and filing of standard tax returns.
              </p>
            </li>
            <li class="table__li">
              <p class="table__item">
                Suitable for individuals with relatively simple financial
                situations.
              </p>
            </li>
            <li>
              <p class="table__item">
                Suitable for individuals with relatively simple financial
                situations.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Row 2 End -->
      <!-- Row 3 Start -->
      <div class="table__row last-row">
        <div class="table__left">
          <h1 class="table__package">Comprehensive</h1>
        </div>
        <div class="table__center">
          <h1 class="table__pricing">$120</h1>
        </div>
        <div class="table__right">
          <ul class="table__list">
            <li class="table__li">
              <p class="table__item">
                Targeted for students, newcomers, and graduates.
              </p>
            </li>
            <li class="table__li">
              <p class="table__item">
                Includes preparation and filing of standard tax returns.
              </p>
            </li>
            <li class="table__li">
              <p class="table__item">
                Suitable for individuals with relatively simple financial
                situations.
              </p>
            </li>
            <li>
              <p class="table__item">
                Suitable for individuals with relatively simple financial
                situations.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Row 3 End-->
    </div>
  </div>
</template>
<style>
.pricing__titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.table__wrapper {
  width: 100%;
}
.table__top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  align-items: start;
}
.table__row {
  border-top: 1px solid #c0c0c0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  align-items: start;
  padding-top: 1rem;
}
.table__label {
  color: #989898;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 145.833% */
  letter-spacing: -0.24px;
}
.table__package {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.24px;
}
.table__pricing {
  color: #000;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.table__item {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
}
.last-item {
  border: none;
  border-bottom: none;
}
.table__li {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #c0c0c0;
}
.last-row {
  border-bottom: 1px solid #c0c0c0;
}
.table__filter {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
}
.button__filter {
  padding: 0.813rem 1.938rem;
  background-color: #f0f0f0;
  border-radius: 100px;
  font-size: 1.125rem;
  text-decoration: none;
  color: black;
}
.button__filter:active {
  background-color: black;
  color: white;
}
</style>
