<template>
  <div class="houses">
    <h3>Houses</h3>
    <houses />
  </div>
</template>

<script>
// @ is an alias to /src


import { mapState } from "vuex";
import Houses from "@/components/Houses.vue";

export default {
  name: "HousesView",
  components: {
    Houses
  },
  computed: {
    ...mapState(["houses"])
  },
  created() {
    this.$store.dispatch("fetchHouses");
  }
};
</script>
