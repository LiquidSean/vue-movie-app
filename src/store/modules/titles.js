import Vue from "vue";
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
        HTTP.get("titles").then(response => {
          commit("setTitles", response);
          return resolve();
        })
      );
    },
    async saveTitle({ commit }, payload) {
      const self = this;
      return [];
    }
  },
  getters: {
    titles(state) {
      return state.titles;
    }
  }
};
