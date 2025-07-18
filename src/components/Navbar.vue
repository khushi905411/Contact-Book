<template>
  <nav class="navbar">
    <h1>📖 Contact Book</h1>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #FF90BB;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 5px solid #FFC1DA;
}
.links a {
  color: white;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
.links a:hover {
  text-decoration: underline;
}
</style>
