import { HTTP } from "../http-common";

export default {
  namespaced: true,
  state: {
    names: []
  },
  mutations: {
    setNames(state, payload) {
      state.names = payload;
    },
    addName(state, name) {
      state.names.push(name);
    }
  },
  actions: {
    async getNames({ commit }, payload) {
      return new Promise((resolve, reject) =>
        HTTP.get(`names?find=${payload.find}`)
          .then(response => {
            commit("setNames", response.data);
            return resolve();
          })
          .catch(err => reject(err))
      );
    },
    async saveName({ commit }, payload) {
      return [];
    }
  },
  getters: {
    names(state) {
      return state.names;
    }
  }
};
