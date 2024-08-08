<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'contact',
  components: {
    Header,
    Footer,
  },
};
</script>
<template>
  <Header />
  <main>
    <!-- Contact Top Section -->
    <section class="section">
      <div class="container">
        <h1 class="global__heading-h1-large">
          Discover your true potential & finances
        </h1>
      </div>
    </section>
    <!-- Submission form Section -->
    <section class="section">
      <div class="container">
        <div class="grid__columns-2">
          <div class="column-1">
            <img src="../assets/section_img.jpg" alt="" class="section__img" />
          </div>
          <div class="column-2">
            <h1 class="global__heading-h1-small">
              Our team of experts is ready to answer your questions, give you
              more info and help you.
            </h1>
            <form action="" class="form">
              <div class="form__row">
                <label for="" class="form__label">Full Name</label>
                <input
                  type="text"
                  class="form__input"
                  placeholder="Ex. John Doe"
                />
              </div>
              <div class="form__row">
                <label for="" class="form__label">Email</label>
                <input
                  type="text"
                  class="form__input"
                  placeholder="Ex. johndoe@mail.com"
                />
              </div>
              <div class="form__row">
                <label for="" class="form__label">Situation</label>
                <select name="" id="" class="form__dropdown">
                  <option value="">Students</option>
                  <option value="">Newcomers</option>
                  <option value="">Graduates</option>
                  <option value="">Partners</option>
                </select>
              </div>
              <div class="form__row">
                <label for="" class="form__label">Telephone</label>
                <input
                  type="text"
                  class="form__input"
                  placeholder="Ex. (416)-000-000"
                />
              </div>
              <div class="form__row">
                <button class="form__submit">
                  Submit <img src="../assets/arrow.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
<style>
.form__row {
  display: flex;
  flex-direction: column;
  margin-top: 2.188rem;
}
.form__label {
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.2px;
  margin-bottom: 0.5rem;
}
.form__input {
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  background-color: #fff;
  padding: 2.063rem 1.5rem;
  font-size: 1.25rem;
  color: black;
}
.form__dropdown {
  padding: 2.063rem 1.5rem;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  font-size: 1.25rem;
  color: black;
  background-color: #fff;
}
.form__dropdown::placeholder {
  color: black;
}
.form__submit {
  padding: 2.063rem 1.5rem;
  font-size: 1.25rem;
  color: white;
  border-radius: 10px;
  font-weight: 400;
  background-color: black;
  border: 0;
  display: inline-flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  letter-spacing: -0.24px;
}
.form__title {
  color: black;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 59px; /* 122.917% */
  letter-spacing: -0.48px;
  margin-bottom: 3rem;
}
</style>
