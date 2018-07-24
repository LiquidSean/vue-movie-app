<template>
  <v-app>
    <v-navigation-drawer persistent
                         :mini-variant="miniVariant"
                         :clipped="clipped"
                         v-model="drawer"
                         hide-overlay
                         mobile-break-point
                         :temporary="temporary"
                         fixed
                         app>
      <v-list>
        <v-list-tile value="true"
                     v-for="(item, i) in items"
                     :key="i"
                     :to="item.link">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app
               dark
               color="primary"
               :clipped-left="clipped">
      <v-btn icon
             @click.stop="toggleDrawer">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
      <v-btn relative
             absolute
             bottom
             dark
             fab
             top
             right
             color="pink"
             to="/new">
        <v-tooltip bottom>
          <v-icon slot="activator">add</v-icon>
          <span>Add a new title</span>
        </v-tooltip>
      </v-btn>
    </v-content>
    <v-footer color=""
              :fixed="fixed"
              app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
function isMobile() {
  return window.innerWidth < 993;
}

export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "home",
          title: "Home",
          link: "/"
        },
        {
          icon: "local_movies",
          title: "Titles",
          link: "/titles"
        },
        {
          icon: "people",
          title: "Celebrities",
          link: "/names"
        },
        {
          icon: "star",
          title: "Ratings",
          link: "/ratings"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Movies DB",
      temporary: isMobile()
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    toggleDrawer() {
      let mobile = isMobile();

      if (mobile) {
        this.drawer = !this.drawer;
        this.miniVariant = false;
      } else {
        this.drawer = true;
        this.miniVariant = !this.miniVariant;
      }
    },
    onResize() {
      const mobile = isMobile();

      if (mobile) {
        if (this.drawer && this.miniVariant) {
          this.drawer = false;
        }
        this.miniVariant = false;
      } else {
        if (!this.drawer) {
          this.miniVariant = true;
        }
        this.drawer = true;
      }
      this.temporary = mobile;
    }
  }
};
</script>
