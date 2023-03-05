<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" exact-active-class="active">Houses</router-link> |
      <router-link to="/about" exact-active-class="active">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-container {
  max-width: 160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: left;
  height: 64px;
  padding: 0 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a4a8ad;
}

nav .active {
  font-weight: bold;
  color: #090909;
}
</style>

