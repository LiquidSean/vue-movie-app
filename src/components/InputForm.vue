<template>
    <v-flex xs12>
        <v-card ref="form">
            <v-card-text>
                <v-text-field ref="model.title"
                              v-model="model.title"
                              :rules="[() => !!model.title || 'This field is required']"
                              :error-messages="errorMessages"
                              label="Film Title"
                              placeholder="Godzilla"
                              required></v-text-field>
                <v-text-field ref="model.start"
                              v-model="model.start"
                              :rules="[() => !!model.start || 'This field is required']"
                              :error-messages="errorMessages"
                              label="Start Year"
                              placeholder="1885"
                              required></v-text-field>
                <v-text-field ref="model.end"
                              v-model="model.end"
                              :rules="[() => !!model.end || 'This field is required']"
                              :error-messages="errorMessages"
                              label="End Year"
                              placeholder="1886"
                              required></v-text-field>
                <star-rating v-model="model.rating"
                             :increment="0.5"
                             :star-size="40"
                             :border-width="3"
                             :rounded-corners="true"
                             :fixed-points="2"></star-rating>
                <v-text-field ref="model.numVotes"
                              v-model="model.numVotes"
                              :rules="[() => !!model.numVotes || 'This field is required']"
                              :error-messages="errorMessages"
                              label="Number of Votes"
                              placeholder="25"
                              required></v-text-field>
                <AddCelebrity />
                <v-data-table :headers="fields"
                              :items="items">
                    <template slot="items"
                              slot-scope="props">

                    </template>

                </v-data-table>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
                <v-slide-x-reverse-transition>
                    <v-tooltip v-if="formHasErrors"
                               left>
                        <v-btn slot="activator"
                               icon
                               class="my-0"
                               @click="resetForm">
                            <v-icon>refresh</v-icon>
                        </v-btn>
                        <span>Refresh form</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary"
                       @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>

    </v-flex>
</template>

<script>
import AddCelebrity from "./AddCelebrity.vue";

export default {
  name: "InputForm",
  data: function() {
    return {
      valid: false,
      dialog: false,
      model: {
        title: "",
        start: null,
        end: null,
        rating: null,
        numVotes: null
      },
      items: [],
      fields: [],
      errorMessages: "",
      formHasErrors: false
    };
  },
  components: { AddCelebrity },
  methods: {
    save() {}
  }
};
</script>
