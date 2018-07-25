<template>
  <v-container v-if="loading"
               fluid>
    <v-layout justify-center
              align-center>
      <font-awesome-icon spin
                         icon="spinner"
                         size="5x" />
    </v-layout>
  </v-container>
  <v-container v-else
               fluid>
    <v-layout align-center
              justify-center>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar dark
                     color="primary">
            <v-toolbar-title>Titles</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <DataTable :items="titles"
                       :fields="fields"
                       :type="type" />
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DataTable from "../components/DataTable.vue";
import gridFields from "../utils/constants/titles.js";

export default {
  name: "Titles",
  data: function() {
    return {
      loading: true,
      fields: gridFields,
      type: "titles",
    };
  },
  props: ["searchTerm"],
  computed: {
    titles() {
      return this.$store.getters["titles/titles"];
    }
  },
  components: { DataTable },
  created() {
    this.$store
      .dispatch("titles/getTitles", { find: this.searchTerm })
      .then(() => {
        this.loading = false;
      });
  }
};
</script>