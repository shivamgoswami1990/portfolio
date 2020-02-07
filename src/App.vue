<template>
  <div id="app">
    <v-app>
      <!-- Top application bar -->
      <v-app-bar app class="pt-3" elevation="0">
        <v-container class="d-flex">

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

        <!-- Hero section with image as a background -->
        <v-img lazy-src="https://dummyimage.com/1280x720/303030/000000.png&text=+"
               :height="innerScreenHeight" :width="innerScreenWidth">
          <v-container :style="{ height: innerScreenHeight + 'px'}">
          <v-layout wrap fill-height class="hero-section">

            <!-- Background layer -->
            <div class="background-layer">
              <v-layout fill-height wrap align-center justify-end column>
                <div>
                  <Cube/>
                  <p class="text-accent display-1">Full Stack</p>
                  <p class="text-accent">Developer</p>
                </div>
              </v-layout>
            </div>
            <!-- Background layer -->

            <!-- Foreground layer -->
            <div class="foreground-layer">
              <v-layout fill-height wrap justify-start align-center>
                <h1 class="display-3 ml-10">
                  Hello, I'm shivam Goswami
                </h1>
              </v-layout>
            </div>
            <!-- Foreground layer -->

          </v-layout>
          </v-container>
        </v-img>
        <!-- Hero section with image as a background -->

      </v-content>
      <!-- Content -->
    </v-app>
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .text-accent {
      color: #191919;
    }

    .avatar-border {
      border: 1px solid #F7A300;
      color: #F7A300;
    }

    .app-nar-nav-icon-position {
      position: absolute;
      left: -24px;
    }

    .hero-section {
      position: relative;
      .background-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid yellow;
        z-index: 5;

        .cube-wrapper {
          position: absolute;
          bottom: -60px;
          left: 20%;
          transform: translateX(-50%);
        }

        p {

          &:first-child {
            margin-bottom: 0;
          }

          &:last-child {
            font-size: 120px;
            line-height: 100px;
            margin-bottom: 30px;
          }
          text-align: right;
          width: 100%;
        }
      }

      .foreground-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid blue;
        z-index: 10;

        h1 {
          width: 40%;
        }
      }
    }
  }
</style>

<script>
import Cube from './components/Cube'
export default {
  components: {
    Cube
  },
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
