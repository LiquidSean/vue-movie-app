import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Names from "./views/Names.vue";
import Titles from "./views/Titles.vue";
import Ratings from "./views/Ratings.vue";
import New from "./views/New.vue";
import Find from "./views/Find.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/titles",
      name: "titles",
      component: Titles
    },
    {
      path: "/ratings",
      name: "ratings",
      component: Ratings
    },
    {
      path: "/names",
      name: "names",
      component: Names
    },
    {
      path: "/new",
      name: "new",
      component: New
    },
    {
      path: "/find",
      name: "find",
      component: Find
    }
  ]
});
