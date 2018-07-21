<template>
    <v-flex xs12>
        <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-spacer></v-spacer>
          <v-data-table
            :headers="fields"
            :items="items"
          >
            <template
              slot="items"
              slot-scope="props">
              <tr v-for="row in items">
                <td v-for="col in fields">{{row[col.value]}}</td>
              </tr>
            </template>

          </v-data-table>
        </v-flex>
</template>

<script>
export default {
  name: "DataTable",
  data: function() {
      return { 
          search: '',
      }
  },
  props: [
    'fields',
    'items'
  ],
  methods: {
    submit() {}
  }
};
</script>
