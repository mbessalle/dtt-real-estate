<template>
  <div v-if="house" class="house-details">
    <img v-if="house.image" :src="house.image" alt="House image">
    <p v-else>No image available</p>
    <h2>Address: {{ house.location.street }}, {{ house.location.city }}, {{ house.location.country }}</h2>
    <p>Postal code: {{ house.location.zip }}</p>
    <p>Description: {{ house.description }}</p>
    <p>Number of bedrooms: {{ house.rooms.bedrooms }}</p>
    <p>Number of bathrooms: {{ house.rooms.bathrooms }}</p>
    <p>Size: {{ house.size }} mts2</p>
    <p>Construction year: {{ house.constructionYear }}</p>
    <p>Garage: {{ house.hasGarage ? 'Yes' : 'No' }}</p>
  </div>
  <div v-else>
    <p>House not found. Please reload main page</p>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  name: "HouseDetails",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(["houses"]),
    house() {
      if (this.id) {
        return this.houses.find(house => house.id === Number(this.id));
      }
      return null;
    }
  },
};
</script>
  
  
<style scoped>
.house-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

img {
  width: 200px;
  height: 200px;
  align-self: center;
}

.house-details p {
  margin: 0;
}
</style>
  