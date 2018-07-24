import Vue from "vue";
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VForm,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VTextField,
  VSelect,
  VTooltip,
  VDataTable,
  VDivider,
  VDialog,
  VRadioGroup
} from "vuetify";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VForm,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VTextField,
    VSelect,
    VTooltip,
    VDataTable,
    VDivider,
    VDialog,
    VRadioGroup
  },
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});
