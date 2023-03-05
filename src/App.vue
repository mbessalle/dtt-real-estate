<template>
  <nav>
    <router-link to="/" exact-active-class="active">Houses</router-link> |
    <router-link to="/about" exact-active-class="active">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #cdcfd2;
}

nav .active {
  font-weight: bold;
  color: #090909;
}

</style>
