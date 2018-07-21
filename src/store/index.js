import Vue from "vue";
import Vuex from "vuex";
import names from "./modules/names";
import titles from "./modules/titles";
import ratings from "./modules/ratings";
import shared from "./modules/shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    shared,
    names,
    titles,
    ratings
  }
});
