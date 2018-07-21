<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 sm6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                            <v-toolbar-title>Search form</v-toolbar-title>
                            <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-tooltip bottom>
                            <v-text-field
                                v-model="msg"
                                solo
                                label="Enter a title, celebrity, or year a movie was released."
                                clearable
                                slot="activator"
                            ></v-text-field>
                            <span>Enter a title, celbrity, or year a movie was released.</span>
                            </v-tooltip>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-on:click="submit" color="primary">Submit</v-btn>
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
      msg: ""
    };
  },
  methods: {
      submit() {

      }
  }
};
</script>
