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
    </form>
  </div>
</template>

<script>

export default {
}
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
