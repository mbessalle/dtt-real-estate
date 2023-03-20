const { createStore } = require("vuex");
const axios = require("axios");
const FormData = require("form-data");

module.exports = createStore({
  state: {
    houses: [],
  },

  mutations: {
    setHouses(state, houses) {
      state.houses = houses;
    },

    sortByPrice(state, sortOrder) {
      state.houses.sort((a, b) => {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      });
    },

    addHouse(state, house) {
      state.houses.push(house);
    },

    deleteHouse(state, houseId) {
      state.houses = state.houses.filter((house) => house.id !== houseId);
    },
  },
  actions: {
    async fetchHouses({ commit }) {
      const config = {
        method: "get",
        headers: {
          "X-Api-Key": "LIhlSFou52fiaEUHVKYXnQT1NC8bdrBM",
        },
      };
      try {
        const response = await axios.get("https://api.intern.d-tt.nl/api/houses", config);
        commit("setHouses", response.data);
        console.log("Houses fetched from the API", JSON.stringify(response.data));
      } catch (error) {
        console.log("Error fetching data from the API", error);
      }
    },
    filterHouses({ commit, state }, location) {
      const filteredHouses = state.houses.filter((house) => house.location === location);
      commit("setHouses", filteredHouses);
    },
    sortByPrice({ commit }, sortOrder) {
      commit("sortByPrice", sortOrder);
    },
    async createHouse(_, newHouse) {
      try {
        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://api.intern.d-tt.nl/api/houses",
          headers: {
            "X-Api-Key": "LIhlSFou52fiaEUHVKYXnQT1NC8bdrBM",
            // ...data.getHeaders()  //
          },
          data: newHouse,
        };

        const response = await axios(config);
        console.log("New house added:", JSON.stringify(response.data));
        return response.data.id;
      } catch (error) {
        console.log("Error creating new house", error);
        throw error;
      }
    },

    async uploadImage(_, { houseId, image }) {
      try {
        console.log("House ID:", houseId);
        const formData = new FormData();
        formData.append("image", image);
        console.log("Image object:", image);
        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `https://api.intern.d-tt.nl/api/houses/${houseId}/upload`,
          headers: {
            "X-Api-Key": "LIhlSFou52fiaEUHVKYXnQT1NC8bdrBM",
            // ...formData.getHeaders(),
          },
          data: formData,
        };

        await axios(config);
        console.log("Image uploaded:", image.name);
      } catch (error) {
        console.log("Error uploading image", error);
        throw error;
      }
    },

    async deleteHouse({ commit }, houseId) {
      try {
        const config = {
          method: "delete",
          headers: {
            "X-Api-Key": "LIhlSFou52fiaEUHVKYXnQT1NC8bdrBM",
          },
        };
        await axios.delete(`https://api.intern.d-tt.nl/api/houses/${houseId}`, config);
        commit("deleteHouse", houseId);
        console.log("House deleted:", houseId);
      } catch (error) {
        console.log("Error deleting house", error);
      }
    },
  },

  modules: {},
});
