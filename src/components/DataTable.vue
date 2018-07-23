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
            :search="search"
          >
            <template
              slot="items"
              slot-scope="props">
              <td v-for="value in props.item">{{value}}</td>
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
