<template>
    <v-dialog v-model="dialog"
              width="500">
        <v-btn slot="activator"
               color="primary"
               flat>+ Add Celebrity</v-btn>
        <v-card>
            <v-card-title class="headline grey lighten-2"
                          primary-title>
                Add Celebrity
            </v-card-title>
            <v-card-text>
                <v-text-field ref="celebrity.firstName"
                              v-model="celebrity.firstName"
                              :rules="[() => !!celebrity.firstName || 'This field is required']"
                              :error-messages="errorMessages"
                              label="First Name"
                              placeholder="Bilbo"
                              required></v-text-field>
                <v-text-field ref="celebrity.lastName"
                              v-model="celebrity.lastName"
                              :rules="[() => !!celebrity.lastName || 'This field is required']"
                              :error-messages="errorMessages"
                              label="Last Name"
                              placeholder="Baggins"
                              required></v-text-field>
                <v-text-field ref="celebrity.birthYear"
                              v-model="celebrity.birthYear"
                              :rules="[() => !!celebrity.birthYear || 'This field is required']"
                              :error-messages="errorMessages"
                              label="Birth"
                              placeholder="1886"
                              required></v-text-field>
                <v-text-field ref="celebrity.deathYear"
                              v-model="celebrity.deathYear"
                              :rules="[() => !!celebrity.deathYear || 'This field is required']"
                              :error-messages="errorMessages"
                              label="Death"
                              placeholder="1886"
                              required></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                       @click="add">
                    Add
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "AddCelebrity",
  data() {
    return {
      dialog: false,
      celebrity: {
        firstName: "",
        lastName: "",
        birthYear: "",
        deathYear: "",
        knownFor: ""
      }
    };
  },
  methods: {
      add() {
          this.dialog = false;
      }
  }
};
</script>
