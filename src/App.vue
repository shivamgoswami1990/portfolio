<template>
  <div id="app">
    <v-app>
      <!-- Top application bar -->
      <v-app-bar app class="pt-3" elevation="0">
        <v-container class="d-flex pa-0">

          <v-app-bar-nav-icon class="ml-4">
            <slot>
              <v-icon color="primary" class="app-nar-nav-icon-position" size="27">
                mdi-menu-open
              </v-icon>
              <v-avatar class="avatar-border title">SG</v-avatar>
            </slot>
          </v-app-bar-nav-icon>

          <div class="hidden-sm-and-down">
            <div class="d-flex flex-column pl-5">
              <strong class="title d-block">Shivam Goswami</strong>
              <span class="d-block overline text-center">Full Stack Developer</span>
            </div>
          </div>

          <v-spacer></v-spacer>

          <v-avatar color="secondary" class="hidden-sm-and-down">
            <v-img :src="require('./assets/personal.png')" position="25% 20%" min-width="120"/>
          </v-avatar>

          <v-btn text height="55" class="mx-2 font-weight-bold text-capitalize px-2">
            <v-img :src="require('./assets/linkedin-white.png')" class="mr-1 mb-2" max-width="22"/>
            Linkedin
          </v-btn>

          <v-btn text height="55" class="mx-2 font-weight-bold text-capitalize px-2">
            <v-img :src="require('./assets/github-white.png')" class="mr-1 mb-2" max-width="22"/>
            Github
          </v-btn>
        </v-container>
      </v-app-bar>
      <!-- Top application bar -->

      <!-- Content -->
      <v-content class="pt-0">
        <v-img lazy-src="https://dummyimage.com/1280x720/303030/000000.png&text=+"
               :height="innerScreenHeight" :width="innerScreenWidth"/>
      </v-content>
      <!-- Content -->
    </v-app>
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .avatar-border {
      border: 1px solid #F7A300;
      color: #F7A300;
    }

    .app-nar-nav-icon-position {
      position: absolute;
      left: -24px;
    }
  }
</style>

<script>
export default {
  metaInfo: {
    title: 'Shivam Goswami',
    titleTemplate: 'Frontend Developer Canberra → VueJS → AngularJS → Ruby on Rails → Python → %s',
    meta: [
      { name: 'name', content: 'Freelance frontend development in Canberra, Australia' },
      { name: 'description', content: 'Specializing in languages such as VueJS, AngularJS, EmberJS, Ruby, Python' }
    ]
  },
  mounted() {
    this.innerScreenHeight = this.$vuetify.breakpoint.height
    this.innerScreenWidth = this.$vuetify.breakpoint.width
  },
  data() {
    return {
      innerScreenHeight: null,
      innerScreenWidth: null
    }
  }
}
</script>
