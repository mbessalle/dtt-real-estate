<template>
   <form @submit.prevent="searchHouses">
    <label for="searchQuery">Search houses:</label>
    <input type="text" id="searchQuery" v-model="searchQuery" placeholder="Enter keywords...">
    <button type="submit">Search</button>
    <button type="button" @click="clearSearch">Clear</button>
    <p v-if="searchQuery && filteredHouses.length === 0">No results found for: {{ searchQuery }}</p>
    <p v-else-if="searchQuery">Search results for: {{ searchQuery }} ({{ filteredHouses.length }} results found)</p>
    <p v-else>Showing all houses ({{ houses.length }} results found)</p>
  </form>
  <houses :filteredHouses="filteredHouses"/>
</template>

<script>
// @ is an alias to /src


import { mapState } from "vuex";
import { mapGetters } from "vuex";
import Houses from "@/components/Houses.vue";

export default {
  name: "HousesView",
  components: {
    Houses
  },
  computed: { 
    ...mapState(["houses"]),
    filteredHouses() {
      return this.searchQuery === ''
        ? this.houses
        : this.houses.filter(house => house.location.city.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  data() {
    return {
      searchQuery: "",
      filteredHouses: []
    };
  },
  created() {
    this.$store.dispatch("fetchHouses").then(() => {
      this.filteredHouses = this.houses;
    });
  },
  methods: {
    searchHouses() {
      this.filteredHouses = this.searchQuery === ''
        ? this.houses
        : this.houses.filter(house => house.location.city.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    clearSearch() {
      this.searchQuery = "";
      this.filteredHouses = this.houses;
    }
  }
};
</script>
