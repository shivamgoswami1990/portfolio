<template>
  <div id="app">
    <v-app>
      <!-- Top application bar -->
      <v-app-bar app class="pt-3">
        <v-container class="d-flex">
        <v-avatar class="avatar-border title">SG</v-avatar>

        <div class="hidden-sm-and-down">
          <div class="d-flex flex-column px-2">
            <strong class="title d-block">Shivam Goswami</strong>
            <span class="d-block overline text-center">Full Stack Developer</span>
          </div>
        </div>

        <v-spacer></v-spacer>

        <v-avatar color="secondary">
          <v-img :src="require('./assets/personal.png')" position="25% 20%" min-width="120"/>
        </v-avatar>

        <v-btn text height="55" class="mx-2 font-weight-bold text-capitalize">
          <v-img :src="require('./assets/linkedin-white.png')" class="mr-1 mb-2" max-width="22"/>
          LinkedIn
        </v-btn>
        </v-container>
      </v-app-bar>
      <!-- Top application bar -->
      <v-content>

      </v-content>
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
  data() {
    return {
    }
  }
}
</script>
