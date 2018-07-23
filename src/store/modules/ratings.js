import Vue from "vue";
import { HTTP } from "../http-common";

export default {
  namespaced: true,
  state: {
    ratings: []
  },
  mutations: {
    setRatings(state, payload) {
      state.ratings = payload;
    },
    addTitles(state, rating) {
      state.ratings.push(rating);
    }
  },
  actions: {
    async getRatings({ commit }, payload) {
      return new Promise((resolve, reject) =>
        HTTP.get("ratings").then(response => {
          commit("setRatings", response.data);
          return resolve();
        })
      );
    },
    async saveRating({ commit }, payload) {
      const self = this;
      return [];
    }
  },
  getters: {
    ratings(state) {
      return state.ratings;
    }
  }
};
