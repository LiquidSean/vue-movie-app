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
            :value="currentName.primaryName"
            label="Name"
            disabled
          ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
          <v-text-field
            :value="currentName.birthYear"
            label="Birth"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentName.deathYear"
            label="Death"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentName.primaryProfession"
            label="Primary Profession"
            disabled
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            :value="currentName.knownForTitles"
            label="Known For"
            disabled
          ></v-text-field>
        </v-flex>
        </v-card-text>
          </v-card>

    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Name',
  computed: {
    names() {
      return this.$store.getters["names/names"];
    },
    currentName() {
        return this.names.find((name) => name.nconst === this.$route.params.id);
    }
  }
}
</script>
