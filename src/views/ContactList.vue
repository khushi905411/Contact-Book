<template>
  <div class="contact-list">
    <h2>📒 Contact List</h2>

    <!-- Search input -->
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search by First or Last Name"
      class="search-input"
    />

    <!-- Contacts cards -->
    <div v-if="filteredContacts.length > 0" class="card-container">
      <div
        v-for="contact in filteredContacts"
        :key="contact.id"
        class="contact-card"
      >
        <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <p><strong>Phone:</strong> {{ contact.phone }}</p>
        <p><strong>Birthday:</strong> {{ formatDate(contact.birthday) }}</p>
        <p><strong>Address:</strong> {{ contact.address }}</p>
        <router-link
          :to="{ name: 'ContactDetails', params: { id: contact.id } }"
          class="details-link"
        >
          View Details
        </router-link>
      </div>
    </div>

    <div v-else>
      <p>No contacts found. Try adding one!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [],
      searchTerm: '',
    };
  },
  computed: {
    filteredContacts() {
      const term = this.searchTerm.trim().toLowerCase();
      if (!term) return this.contacts;

      return this.contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(term) ||
          contact.lastName.toLowerCase().includes(term)
      );
    },
  },
  mounted() {
    this.loadContacts();
  },
  methods: {
    loadContacts() {
      const stored = JSON.parse(localStorage.getItem('contacts')) || [];
      // Sort alphabetically by last name
      this.contacts = stored.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    },
    formatDate(dateStr) {
      if (!dateStr) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString(undefined, options);
    },
  },
  watch: {
    // Reload contacts if route changes (optional, depending on your router usage)
    $route() {
      this.loadContacts();
    },
  },
};
</script>

<style scoped>
.contact-list {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
}

.search-input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.contact-card {
  background-color: #f8f8e1;
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #ff90bb;
  margin-bottom: 0.5rem;
}

p {
  margin: 0.3rem 0;
  color: #333;
}

strong {
  color: #8accd5;
}

.details-link {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  color: #ff90bb;
  font-weight: bold;
}

.details-link:hover {
  text-decoration: underline;
}
</style>
