import "@babel/polyfill";
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import StarRating from "vue-star-rating";

Vue.config.productionTip = false;

library.add(faSpinner);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("star-rating", StarRating);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
