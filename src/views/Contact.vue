<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'contact',
  components: {
    Header,
    Footer,
    ContactForm,
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
        <ContactForm />
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
