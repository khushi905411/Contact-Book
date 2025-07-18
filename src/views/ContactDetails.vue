<template>
  <div class="details-container" v-if="contact">
    <h2>Contact Details</h2>
    <p><strong>First Name:</strong> {{ contact.firstName }}</p>
    <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Birthday:</strong> {{ contact.birthday }}</p>
    <p><strong>Phone Number:</strong> {{ contact.phone }}</p>
    <p><strong>Address:</strong> {{ contact.address }}</p>

    <router-link :to="{ name: 'EditContact', params: { id: contact.id } }">
      <button>Edit Contact</button>
    </router-link>

    <button @click="deleteContact" class="delete">Delete Contact</button>
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
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    this.contact = contacts.find(c => c.id === id);
  },
  methods: {
    deleteContact() {
      if (confirm("Are you sure you want to delete this contact?")) {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts = contacts.filter(c => c.id !== this.contact.id);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.details-container {
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

p {
  margin: 1rem 0;
  font-size: 1rem;
}

button {
  background-color: #8ACCD5;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem 0.5rem 0 0;
}

button:hover {
  background-color: #6bbbc3;
}

button.delete {
  background-color: #FF90BB;
}

button.delete:hover {
  background-color: #e4709a;
}
</style>
