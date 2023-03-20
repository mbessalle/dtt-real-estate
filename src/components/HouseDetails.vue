<template>
  <div v-if="house">
    <div v-if="house.madeByMe">
      <form @submit.prevent="updateHouse">
        <label>
          Price:
          <input type="number" v-model.number="house.price" required />
        </label>
        <label>
          Number of bedrooms:
          <input type="number" v-model.number="house.rooms.bedrooms" required />
        </label>
        <label>
          Number of bathrooms:
          <input type="number" v-model.number="house.rooms.bathrooms" required />
        </label>
        <label>
          Size:
          <input type="number" v-model.number="house.size" required />
        </label>
        <label>
          Description:
          <textarea v-model="house.description" required></textarea>
        </label>
        <label>
          Street name:
          <input type="text" v-model="streetName" required />
        </label>
        <label>
          House number:
          <input type="text" v-model="houseNumber" required />
        </label>
        <label>
          numberAddition:
          <input type="text" v-model="house.numberAddition" />
        </label>
        <label>
          zip:
          <input type="text" v-model="house.location.zip" required />
        </label>
        <label>
          City:
          <input type="text" v-model="house.location.city" required />
        </label>
        <label>
          Construction year:
          <input type="number" v-model.number="house.constructionYear" required />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
    <div v-else>
      <div class="house-details">
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
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

  
<script>
import { mapState } from 'vuex';
import Houses from "@/components/Houses.vue";
export default {
  name: "HouseDetails",
  components: {
    Houses
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  async created() {
    try {
      await this.$store.dispatch("fetchHouses");
      this.filteredHouses = this.houses;

    } catch (error) {
      console.log("Error fetching houses:", error);
    }
  },
  computed: {
    ...mapState(["houses"]),
    house() {
      if (this.id) {
        return this.houses.find(house => house.id === Number(this.id));
      }
      return null;
    },

    streetName() {
      if (this.house && this.house.location.street) {
        const streetName = this.house.location.street.split(' ').slice(0, -1).join(' ');
        return streetName;
      }
      return '';
    },
    houseNumber() {
      if (this.house && this.house.location.street) {
        const houseNumber = this.house.location.street.split(' ').slice(-1).join('');
        return houseNumber;
      }
      return '';
    },

  },
  methods: {
    async updateHouse() {
      try {
        await this.$store.dispatch("updateHouse", this.house);
        this.$router.push({ name: "Houses" });
      } catch (error) {
        console.log("Error updating house:", error);
      }
    },
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
  