<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="form.firstName" required />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="form.lastName" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Telephone Number:</label>
        <input type="tel" id="phone" v-model="form.phone" required />
      </div>
      <div class="form-group">
        <label for="services">Services:</label>
        <select id="services" v-model="form.services" required>
          <option value="" disabled>Select a service</option>
          <option value="graduates">Graduates</option>
          <option value="newcomers">Newcomers</option>
          <option value="students">Students</option>
          <option value="partners">Partners</option>
        </select>
      </div>
      <button type="submit">Send</button>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        services: '',
      },
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const token = await grecaptcha.execute(
          '6LffQCMqAAAAAHAbberCqITumz16Ca46lUx3XPlG',
          {
            action: 'submit',
          }
        );

        const hubSpotEndpoint =
          'https://api.hsforms.com/submissions/v3/integration/submit/47029090/59220e7c-da8b-4672-b73b-d6eba568d1b8';

        const response = await axios.post(hubSpotEndpoint, {
          fields: [
            { name: 'firstname', value: this.form.firstName },
            { name: 'lastname', value: this.form.lastName },
            { name: 'email', value: this.form.email },
            { name: 'phone', value: this.form.phone },
            { name: 'services', value: this.form.services },
          ],
          'g-recaptcha-response': token,
        });

        if (response.status === 200) {
          this.successMessage = 'Your message has been sent successfully!';
          this.form.firstName = '';
          this.form.lastName = '';
          this.form.email = '';
          this.form.phone = '';
          this.form.services = '';
        }
      } catch (error) {
        this.errorMessage =
          'There was an error sending your message. Please try again later.';
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 15px;
}
</style>
