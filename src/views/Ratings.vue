<template>
    <v-container v-if="loading"
                 fluid>
        <font-awesome-icon spin
                           icon="spinner"
                           size="5x" />
    </v-container>
    <v-container v-else
                 fluid>
        <v-layout align-center
                  justify-center>
            <v-flex xs12
                    sm6>
                <v-card class="elevation-12">
                    <v-toolbar dark
                               color="primary">
                        <v-toolbar-title>Ratings</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <DataTable :items='ratings'
                                   :fields='fields' />
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
import gridFields from "../utils/constants/ratings.js";

export default {
  name: "Ratings",
  data: function() {
    return {
      fields: gridFields,
      items: [
        {
          tconst: "poop"
        }
      ],
      loading: true
    };
  },
  computed: {
    ratings() {
      return this.$store.getters["ratings/ratings"];
    }
  },
  components: { DataTable },
  created() {
    this.$store.dispatch("ratings/getRatings", {}).then(() => {
      this.loading = false;
    });
  }
};
</script>
