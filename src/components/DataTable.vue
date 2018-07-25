<template>
  <v-flex>
    <v-text-field v-model="search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details></v-text-field>
    <v-spacer></v-spacer>
    <v-data-table :headers="fields"
                  :items="items"
                  :search="search">
      <template slot="items"
                slot-scope="props">
        <td v-for="value in props.item">{{value}}</td>
        <td v-show="type !== 'ratings'"
            class="justify-center layout px-0">
          <v-icon small
                  class="mr-2"
                  @click="viewItem(props.item)">
            edit
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-alert :value="true"
                 color="error"
                 icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
export default {
  name: "DataTable",
  data: function() {
    return {
      search: null
    };
  },
  props: ["fields", "items", "type"],
  methods: {
    viewItem(item) {
      if (item) {
        const id = item[Object.keys(item)[0]];
        switch (this.type) {
          case "titles":
            this.$router.push({ name: `title`, params: { id: id } });
            break;
          case "names":
            this.$router.push({ name: `name`, params: { id: id } });
            break;
          default:
            break;
        }
      }
    }
  }
};
</script>
