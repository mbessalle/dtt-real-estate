<template>
  <div class="houses">
    <h3>Houses</h3>
    <ul>
      <li v-for="house in houses" :key="house.id">
        {{ house.location  }} - {{ house.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Houses",
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
