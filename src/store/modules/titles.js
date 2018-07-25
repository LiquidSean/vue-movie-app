import { HTTP } from "../http-common";

export default {
  namespaced: true,
  state: {
    titles: []
  },
  mutations: {
    setTitles(state, payload) {
      state.titles = payload;
    },
    addTitles(state, title) {
      state.titles.push(title);
    }
  },
  actions: {
    async getTitles({ commit }, payload) {
      return new Promise((resolve, reject) =>
        HTTP.get(`titles?find=${payload.find}`).then(response => {
          commit("setTitles", response.data);
          return resolve();
        })
      );
    },
    async saveTitle({ commit }, payload) {
      return [];
    }
  },
  getters: {
    titles(state) {
      return state.titles;
    }
  }
};
