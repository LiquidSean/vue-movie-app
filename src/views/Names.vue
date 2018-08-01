<template>
    <v-container v-if="loading"
                 fluid>
                 <v-layout justify-center align-center>
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
                        <v-toolbar-title>Celebrities</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <DataTable :items="filteredNames"
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
import gridFields from "../utils/constants/names.js";

export default {
  name: "Names",
  data: function() {
    return {
      type: "names",
      fields: gridFields,
      items: [
        {
          nconst: "poop"
        }
      ],
      loading: true
    };
  },
  props: ['searchTerm', 'ids'],
  computed: {
    names() {
      return this.$store.getters["names/names"];
    },
    filteredNames() {
      if (!this.ids) {
        return this.names;
      }
      const idArray = this.ids.split(',');
      return this.names.filter((name) => idArray.includes(name.nconst));
    }
  },
  components: { DataTable },
  created() {
    this.$store.dispatch("names/getNames", { find: this.searchTerm }).then(() => {
      this.loading = false;
    });
  }
};
</script>
