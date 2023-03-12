<template>
    <div class="house-details">
        <img v-if="house.image" :src="house.image" alt="House image">
        <p v-else>No image available</p>
        <h2>Address: {{ selectedHouse.location.street }}, {{ selectedHouse.location.city }}, {{
            selectedHouse.location.country }}</h2>
        <p>Postal code: {{ selectedHouse.location.zip }}</p>
        <p>Description: {{ selectedHouse.description }}</p>
        <p>Number of bedrooms: {{ selectedHouse.rooms.bedrooms }}</p>
        <p>Number of bathrooms: {{ selectedHouse.rooms.bathrooms }}</p>
        <p>Size: {{ selectedHouse.size }}</p>
        <p>Construction: {{ selectedHouse.construction }}</p>
        <p>Garage: {{ selectedHouse.garage }}</p>
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
        selectedHouse() {
            return this.houses.find(house => house.id === this.id);
        }
    }
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
  