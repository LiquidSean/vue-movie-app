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
                        <v-toolbar-title>Celebrities</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <DataTable :items='names'
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
import gridFields from "../utils/constants/names.js";

export default {
  name: "Names",
  data: function() {
    return {
      fields: gridFields,
      items: [
        {
          nconst: "poop"
        }
      ],
      loading: true
    };
  },
  computed: {
    names() {
      return this.$store.getters["names/names"];
    }
  },
  components: { DataTable },
  created() {
    this.$store.dispatch("names/getNames", {}).then(() => {
      this.loading = false;
    });
  }
};
</script>
