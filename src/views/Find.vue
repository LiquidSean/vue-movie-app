<template>
  <v-container fluid>
    <Names :searchTerm="term"/>
    <v-spacer></v-spacer>
    <Titles :searchTerm="term"/>
  </v-container>
</template>

<script>
import Titles from "./Titles.vue";
import Names from "./Names.vue";
import titlesGridFields from "../utils/constants/titles.js";
import namesGridFields from "../utils/constants/names.js";

export default {
  name: "Find",
  props: ["term"],
  components: { Titles, Names },
};
</script>
