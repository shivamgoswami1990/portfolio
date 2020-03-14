<template>
    <v-card tile flat elevation="0" color="transparent">

        <v-slide-group multiple show-arrows class="skills-slide-group">
            <v-slide-item v-for="(skill, index) in skillsInfo" :key="index" class="ma-4">

                <v-hover v-slot:default="{ hover }">
                    <v-card tile flat elevation="0" color="#1A1A1A" class="pa-12" width="350" height="330">

                        <v-scale-transition v-if="hover" hide-on-leave>
                            <v-layout wrap fill-height align-center justify-center>
                                <v-responsive>
                                    <p class="text-uppercase text-primary text-center">{{skill.heading}}</p>
                                    <p class="text-center font-weight-bold">
                                        <b v-for="(item, index) in skill.skills" :key="index"
                                              class="subtitle-1 d-inline">
                                            {{item}}
                                            <span v-if="index !== skill.skills.length - 1"
                                                    class="text-accent px-2">/</span>
                                        </b>
                                    </p>
                                </v-responsive>
                            </v-layout>
                        </v-scale-transition>

                        <v-icon color="primary" size="35" class="mb-4" v-if="!hover">{{'mdi-' + skill.icon}}</v-icon>
                        <h2 v-if="!hover" class="headline">{{skill.heading}}</h2>
                        <v-card-text class="pa-0" v-if="!hover">
                            <p class="mt-6 text-justify">{{skill.content}}</p>
                        </v-card-text>
                    </v-card>
                </v-hover>

            </v-slide-item>
        </v-slide-group>
    </v-card>
</template>

<style lang="scss">
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
      window: 0
    }
  }
}
</script>
