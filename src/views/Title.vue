<template>
<v-container fluid grid-list-xl>
  <v-layout align-center
            justify-center
             row wrap>
              <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">Details</div>
        </v-card-title>
        <v-card-text>
            <v-flex xs12 sm6>
          <v-text-field
            :value="currentTitle.primaryTitle"
            label="Title"
            disabled
          ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
          <v-text-field
            :value="currentTitle.titleType"
            label="Type"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentTitle.startYear"
            label="Release Year"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentTitle.runtimeMinutes"
            label="Runtime (minutes)"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentTitle.genres"
            label="Genres"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentTitle.numVotes"
            label="Number of Votes"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <star-rating       v-model="rating"
                             :increment="0.1"
                             :max-rating="10"
                             :star-size="40"
                             :border-width="3"
                             :rounded-corners="true"
                             :fixed-points="2"></star-rating>
        </v-flex>
        </v-card-text>
          </v-card>
          <v-spacer></v-spacer>
    <Names />
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import Names from "./Names.vue";

export default {
  name: 'Title',
  components: { Names },
  computed: {
    titles() {
      return this.$store.getters["titles/titles"];
    },
    currentTitle() {
        return this.titles.find((title) => title.tconst === this.$route.params.id);
    },
    rating() {
      return this.currentTitle ? parseFloat(this.currentTitle.averageRating) : 0;
    }
  }
}
</script>
