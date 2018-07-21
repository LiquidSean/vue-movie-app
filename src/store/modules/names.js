import Vue from "vue";
import { HTTP } from "../http-common";

export default {
  namespaced: true,
  state: {
    names: []
  },
  mutations: {
    setNames(state, payload) {
      state.titles = payload;
    },
    addName(state, name) {
      state.names.push(name);
    }
  },
  actions: {
    async getNames({ commit }, payload) {
      return [];
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
