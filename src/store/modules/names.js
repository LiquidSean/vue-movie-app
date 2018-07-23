import Vue from "vue";
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
        HTTP.get("names").then(response => {
          commit("setNames", response.data);
          return resolve();
        })
      );
    },
    async saveName({ commit }, payload) {
      const self = this;
      return [];
    }
  },
  getters: {
    names(state) {
      return state.names;
    }
  }
};
