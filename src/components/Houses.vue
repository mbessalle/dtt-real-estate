<template>
  <div class="houses">
    <h3>Houses</h3>
    <ul>
      <div class="house-details" v-for="house in houses" :key="house.id">
        <div class="image-container">
          <img :src="house.image" alt="House image">
        </div>
        <div class="text-container">
          <h2>{{ house.location.street }}</h2>
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

<style scoped>
.house-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

.image-container {
  width: 200px;
  height: 200px;
  flex-shrink: 0;
}

img {
  width: 100%;
  height: 100%;
  align-self: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.house-details p {
  margin: 0;
}

</style>
