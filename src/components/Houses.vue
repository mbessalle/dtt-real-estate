<template>
  <div class="houses">
    <h3>Houses</h3>
    <ul>
      <div v-for="house in houses" :key="house.id">
      <h2>{{ house.location.street }}</h2>
      <img :src="house.image" alt="House image">
      <p>Price: {{ house.price }}</p>
      <p>City: {{ house.location.city }}</p>
      <p>{{ house.location.country }}</p>
      <p>{{ house.location.postalCode }}</p>
      <p>Size: {{ house.size }}</p>
      <p>{{ house.numBathrooms }}</p>
      <p>{{ house.numBedrooms }}</p>
      <p>{{ house.numFloors }}</p>
      <p>{{ house.numParking }}</p>
      </div>
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

img {
  width: 200px;
  height: 200px;
}

a {
  color: #42b983;
}
</style>
