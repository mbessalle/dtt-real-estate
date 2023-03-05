import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    houses: [],
  },
  getters: {

  },
  mutations: {
    setHouses(state, houses) {
      state.houses = houses;
    }
  },
  actions: {
    async fetchHouses({ commit }) {
      const config = {
        method: 'get',
        headers: {
          'X-Api-Key': 'LIhlSFou52fiaEUHVKYXnQT1NC8bdrBM',}
        }
        try {
          const response = await axios.get('https://api.intern.d-tt.nl/api/houses', config);
          commit('setHouses', response.data);
        }
        catch (error) {
          console.log('Error fetching data from the API',error);
        }
    }
  },
  modules: {
  },
});
