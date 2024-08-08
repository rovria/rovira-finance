<script>
export default {
  name: 'ServiceTable',
};
</script>
<template>
  <!-- Table Section Start -->
  <div class="service-table_wrapper">
    <h2 class="global__heading-h2-small global__heading-h2__margin">
      Tax preparations for all levels
    </h2>
    <div class="service-table">
      <div class="table__row">
        <h1 class="table__nm">01</h1>
        <h1 class="table__title">Students</h1>
        <div class="table__icon-wrapper">
          <img src="../assets/arrow_black.svg" alt="" class="table__icon" />
        </div>
        <div class="table__bg"></div>
      </div>

      <div class="table__row">
        <h1 class="table__nm">02</h1>
        <h1 class="table__title">Newcomers</h1>
        <div class="table__icon-wrapper">
          <img src="../assets/arrow_black.svg" alt="" class="table__icon" />
        </div>
        <div class="table__bg"></div>
      </div>

      <div class="table__row">
        <h1 class="table__nm">03</h1>
        <h1 class="table__title">Graduates</h1>
        <div class="table__icon-wrapper">
          <img src="../assets/arrow_black.svg" alt="" class="table__icon" />
        </div>
        <div class="table__bg"></div>
      </div>

      <div class="table__row table__row-last">
        <h1 class="table__nm">04</h1>
        <h1 class="table__title">Partners</h1>
        <div class="table__icon-wrapper">
          <img src="../assets/arrow_black.svg" alt="" class="table__icon" />
        </div>
        <div class="table__bg"></div>
      </div>
    </div>
  </div>
  <!-- Table Section End -->
</template>
<style>
/* Table Section */
.service-table {
  width: 100%;
}
.table__row {
  padding: 3.5rem 2rem;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 2fr 1fr;
  border-top: 1px solid #c0c0c0;
  justify-content: end;
}
.table__row-last {
  border-bottom: 1px solid #c0c0c0;
}
.table__nm {
  color: black;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 36.458% */
  align-self: center;
}
.table__title {
  color: black;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 70px; /* 72.917% */
  align-self: center;
}
.table__icon {
  width: 30px;
  justify-items: end;
}
.table__icon-wrapper {
  align-self: center;
  justify-items: end;
  justify-self: end;
}
.table__bg {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: black;
}
</style>
