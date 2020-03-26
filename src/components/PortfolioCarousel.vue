<template>
    <v-container class="portfolio-container">
        <v-slide-group show-arrows class="portfolio-slide-group">
            <v-slide-item v-for="(portfolio, index) in projectDescriptions" :key="index">

                <div class="d-flex">
                    <v-card color="#1A1A1A" elevation="0" tile :class="$vuetify.breakpoint.mdAndUp ? 'pa-12' : 'pa-8'"
                            :width="$vuetify.breakpoint.smAndUp ? portfolioContainerWidth/2 : portfolioContainerWidth - 24">

                        <v-layout fill-height wrap align-content-space-between justify-space-between column>
                            <img :src="require('@/assets/' + portfolio.imagePath)" width="100%"
                                 class="mb-5" v-if="$vuetify.breakpoint.xsOnly" alt="Project img">

                            <div>
                                <h2 class="display-1">{{portfolio.title}}</h2>
                                <p class="text-primary text-uppercase subtitle-2">{{portfolio.subtitle}}</p>
                            </div>

                            <p class="opacity-70 text-justify">{{portfolio.details}}
                            </p>

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

                            <v-btn color="primary" outlined width="250" height="50" rel="noreferrer"
                                   class="mt-5" target="_blank" :href="portfolio.info.link">
                                Screenshots
                            </v-btn>
                        </v-layout>
                    </v-card>

                    <v-card color="#303030" elevation="0" tile class="pa-12 overflow-hidden"
                            :width="portfolioContainerWidth/2 - 24" v-if="$vuetify.breakpoint.smAndUp">

                        <div class="device device-macbook device-spacegray">
                            <div class="device-frame">
                                <img class="device-content" :src="require('@/assets/' + portfolio.imagePath)"
                                     alt="Project img">
                            </div>
                            <div class="device-stripe"></div>
                            <div class="device-header"></div>
                            <div class="device-sensors"></div>
                            <div class="device-btns"></div>
                            <div class="device-power"></div>
                        </div>

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

    .portfolio-slide-group {
        position: relative;
        .v-slide-group__prev, .v-slide-group__next {
            position: absolute;
            top: -70px;
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
