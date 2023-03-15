const { createStore } = require("vuex");
const axios = require("axios");
const FormData = require("form-data");

module.exports = createStore({
  state: {
    houses: [],
  },
  getters: {
    houses: (state) => state.houses,
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
        const response = await axios.get("/api/houses", config);
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
    async createHouse({ commit })
     {
      try {
        let data = new FormData();
        data.append('price', '20');
        data.append('bedrooms', '1');
        data.append('bathrooms', '1');
        data.append('size', '1');
        data.append('streetName', 'Overtoom');
        data.append('houseNumber', '21');
        data.append('numberAddition', '1');
        data.append('zip', '1181TY');
        data.append('city', 'Amsterdam');
        data.append('constructionYear', '1960');
        data.append('hasGarage', 'false');
        data.append('description', 'Nice house!');

        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://api.intern.d-tt.nl/api/houses",
          headers: {
            "X-Api-Key": "LIhlSFou52fiaEUHVKYXnQT1NC8bdrBM",
            // ...data.getHeaders()  // 
          },
          data: data,
        };

        const response = await axios(config);
        console.log("New house added:", JSON.stringify(response.data));
        commit("addHouse", response.data);
      } catch (error) {
        console.log("Error creating new house", error);
      }
    },
  },

  modules: {},
});
