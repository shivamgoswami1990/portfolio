<template>
    <v-container class="portfolio-container">
        <v-slide-group show-arrows class="skills-slide-group">
            <v-slide-item v-for="(portfolio, index) in projectDescriptions" :key="index">

                <div class="d-flex">
                    <v-card color="#1A1A1A" elevation="0" tile class="pa-12"
                            :width="portfolioContainerWidth/2" height="500">

                        <v-layout fill-height wrap align-content-space-between justify-space-between column>
                            <div>
                                <h2 class="display-1">{{portfolio.title}}</h2>
                                <p class="text-primary text-uppercase subtitle-2">{{portfolio.subtitle}}</p>
                            </div>

                            <p class="opacity-70 text-justify">{{portfolio.details}}</p>

                            <div>
                                <div class="d-flex">
                                    <div>
                                        <p class="text-uppercase subtitle-2 text-accent mb-0">Date</p>
                                        <p class="text-uppercase subtitle-1 mb-0">{{portfolio.info.dates}}</p>
                                    </div>

                                    <div class="ml-10">
                                        <p class="text-uppercase subtitle-2 text-accent mb-0">Team</p>
                                        <p class="text-uppercase subtitle-1 mb-0">{{portfolio.info.team}}</p>
                                    </div>
                                </div>

                                <div class="mt-2">
                                    <p class="text-uppercase subtitle-2 text-accent mb-0">Languages</p>
                                    <p class="text-uppercase subtitle-1 mb-0">
                                        {{portfolio.info.frameworks}}
                                    </p>
                                </div>
                            </div>

                            <v-btn color="primary" outlined width="250" height="50"
                                   class="mt-5" target="_blank" :href="portfolio.info.link">
                                Screenshots
                            </v-btn>
                        </v-layout>
                    </v-card>

                    <v-card color="#303030" elevation="0" tile class="pa-12"
                            :width="portfolioContainerWidth/2 - 24" height="500">
                        Yes
                    </v-card>
                </div>

            </v-slide-item>
        </v-slide-group>
    </v-container>
</template>

<style lang="scss">
    .opacity-70 {
        opacity: 0.7;
    }

    .skills-slide-group {
        position: relative;
        .v-slide-group__prev, .v-slide-group__next {
            position: absolute;
            top: -50px;
            border: 1px solid #303030;
            width: 50px;
            height: 40px;
            i {
                color: #F7A300 !important;
            }
        }

        .v-slide-group__prev {
            right: 70px;
        }

        .v-slide-group__next {
            right: 0;
        }

    }
</style>

<script>
export default {
  data() {
    return {
      window: 0,
      portfolioContainerWidth: 0
    }
  },
  mounted() {
    this.portfolioContainerWidth =
      document.getElementsByClassName('portfolio-container')[0].offsetWidth

  }
}
</script>
