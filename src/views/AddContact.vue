<template>
  <div class="form-wrapper">
    <div class="form-container">
      <h2>Add New Contact</h2>
      <form @submit.prevent="submitContact" class="form-grid">
        <div class="form-group">
          <label>First Name:</label>
          <input v-model="firstName" required />
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input v-model="lastName" required />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input v-model="email" type="email" required />
        </div>
        <div class="form-group">
          <label>Birthday:</label>
          <input v-model="birthday" type="date" required />
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input v-model="phone" type="tel" required />
        </div>
        <div class="form-group full-width">
          <label>Address:</label>
          <input v-model="address" required />
        </div>
        <div class="button-container full-width">
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      birthday: '',
      phone: '',
      address: '',
    };
  },
  methods: {
    submitContact() {
      const newContact = {
        id: Date.now(),
        firstName: this.firstName.trim(),
        lastName: this.lastName.trim(),
        email: this.email.trim(),
        birthday: this.birthday,
        phone: this.phone.trim(),
        address: this.address.trim(),
      };

      // Get existing contacts from localStorage or start empty
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      // Add new contact
      contacts.push(newContact);
      // Save back to localStorage
      localStorage.setItem('contacts', JSON.stringify(contacts));

      // Clear form fields
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.birthday = '';
      this.phone = '';
      this.address = '';

      // Navigate back to Home page
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  padding: 2rem;
  display: flex;
  justify-content: center;
}
.form-container {
  background-color: #F8F8E1;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
}
h2 {
  color: #FF90BB;
  text-align: center;
  margin-bottom: 2rem;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
input {
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.full-width {
  grid-column: 1 / -1;
}
.button-container {
  display: flex;
  justify-content: center;
}
button {
  background-color: #8ACCD5;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #6bbbc3;
}
</style>
