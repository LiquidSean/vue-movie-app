<template>
  <v-container fluid>
    <Names />
    <v-spacer></v-spacer>
    <Titles />
  </v-container>
</template>

<script>
import Titles from "./Titles.vue";
import Names from "./Names.vue";

export default {
  name: "Find",
  data() {
    return {};
  },
  components: { Titles, Names }
};
</script>
