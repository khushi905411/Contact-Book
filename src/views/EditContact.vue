<template>
  <div class="form-container" v-if="contact">
    <h2>Edit Contact</h2>
    <form @submit.prevent="updateContact">
      <label>First Name:</label>
      <input v-model="contact.firstName" required />

      <label>Last Name:</label>
      <input v-model="contact.lastName" required />

      <label>Email:</label>
      <input v-model="contact.email" type="email" required />

      <label>Birthday:</label>
      <input v-model="contact.birthday" type="date" required />

      <label>Phone Number:</label>
      <input v-model="contact.phone" required />

      <label>Address:</label>
      <input v-model="contact.address" required />

      <button type="submit">Update Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(c => c.id === id);
  },
  methods: {
    updateContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const index = contacts.findIndex(c => c.id === this.contact.id);
      if (index !== -1) {
        contacts[index] = this.contact;
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'ContactDetails', params: { id: this.contact.id } });
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: #F8F8E1;
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px #ccc;
}

h2 {
  color: #FF90BB;
  text-align: center;
}

label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 1.5rem;
  background-color: #8ACCD5;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #6bbbc3;
}
</style>
