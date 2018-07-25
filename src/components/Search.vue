<template>
    <v-container fluid>
        <v-layout align-center
                  justify-center>
            <v-flex xs12
                    sm6>
                <v-card class="elevation-12">
                    <v-toolbar dark
                               color="primary">
                        <v-toolbar-title>Search form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-tooltip bottom>
                                <v-text-field v-model="term"
                                              solo
                                              :label="placeholderText"
                                              clearable
                                              slot="activator"></v-text-field>
                                <span>{{placeholderText}}</span>
                            </v-tooltip>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn v-on:click="submit"
                               color="primary">Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "Search",
  data: function() {
    return {
      term: "",
      option: "title"
    };
  },
  computed: {
      placeholderText() {
          if (this.option === "title") {
              return "Enter a title, or year the movie was released.";
          }
          return "Enter a celebrities name";
      }
  },
  methods: {
    submit() {
			this.$router.push({ path: `find?term=${this.term}` })
		}
  }
};
</script>
