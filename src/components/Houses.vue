<template>
  <div class="houses">
    <ul>
      <div class="house-details" v-for="house in filteredHouses" :key="house.id">
        <div class="image-container">
          <img :src="house.image" alt="House image">
        </div>
        <div class="text-container">
          <h2>Street: {{ house.location.street }}</h2>
          <p>Price: {{ house.price }} euros</p>
          <p>City: {{ house.location.city }}</p>
          <p>postal code: {{ house.location.zip }}</p>
          <p>Size: {{ house.size }} mts2</p>
          <p>number of bathrooms: {{ house.rooms.bathrooms }}</p>
          <p>number of bedrooms: {{ house.rooms.bedrooms }}</p>
          <button v-if="house.madeByMe" @click="deleteHouse(house.id)" tag="button">Delete</button>
          <router-link v-if="house.madeByMe" :to="`/housedetails/${house.id}`" tag="button">Edit</router-link>
          <router-link :to="`/housedetails/${house.id}`">View Details</router-link>

        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Houses",
  props: {
    filteredHouses: {
      type: Array,
      required: true
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  methods: {
    deleteHouse(houseId) {
      this.$store.dispatch("deleteHouse", houseId);
    },

    editHouse(houseId) {
      this.$store.dispatch("editHouse", houseId);
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
