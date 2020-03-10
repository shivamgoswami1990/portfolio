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
            <v-content class="pt-0 content">
                <svg-background1 :inner-screen-width="innerScreenWidth"
                                :inner-screen-height="innerScreenHeight" :fill-svg="fillSvg"/>
                <!-- Hero section with image as a background -->
                    <v-container :style="{ height: innerScreenHeight + 'px'}">
                        <v-layout wrap fill-height class="hero-section svg-v-line-section">
                            <div class="svg-v-line-container">
                                <svg class="v-line" preserveAspectRatio="none">
                                    <line :stroke="$vuetify.theme.defaults.dark.primary" stroke-width="2"
                                          fill="none" x1="0" y1="0" x2="0" y2="100%"/>
                                </svg>

                                <div class="scroll-downs" @click="fillSvg = !fillSvg">
                                    <div class="mousey">
                                        <div class="scroller"></div>
                                    </div>
                                </div>
                            </div>

                            <v-layout wrap fill-height class="layer-container">
                                <!-- Background layer -->
                                <div class="background-layer">
                                    <v-layout fill-height wrap align-end justify-center row>
                                        <div class="title-container">
                                            <Cube :fill-svg="fillSvg" v-if="$vuetify.breakpoint.lgAndUp"/>
                                            <div class="title-wrapper" v-if="$vuetify.breakpoint.smAndUp">
                                                <p class="text-accent display-1">Front-end</p>
                                                <p class="text-accent">Developer</p>
                                            </div>
                                        </div>
                                    </v-layout>
                                </div>
                                <!-- Background layer -->

                                <!-- Foreground layer -->
                                <div class="foreground-layer">
                                    <v-layout fill-height wrap justify-center align-center class="pl-5 banner-container">
                                        <div class="cube-container">
                                            <Cube :fill-svg="fillSvg"/>
                                        </div>
                                        <v-responsive>
                                            <h3 v-html="'< h1 >'" class="mb-5 text-accent opacity font-italic"/>
                                            <h1 class="display-3 ml-5 font-weight-medium">
                                                Hi <br>
                                                I'm Shiv
                                            </h1>
                                            <h3 v-html="'< h1 />'" class="mt-5 text-accent opacity font-italic"/>

                                            <a class="text-primary font-weight-bold pt-5">View projects</a>
                                        </v-responsive>

                                        <v-responsive class="menu-container" v-if="$vuetify.breakpoint.smAndUp">
                                            <div class="cube-container">
                                                <Cube :fill-svg="fillSvg" v-if="$vuetify.breakpoint.mdAndUp"/>
                                            </div>
                                            <ul class="landing-menu">
                                                <li v-for="(item, index) in landingMenu" :key="index">
                                                    <div class="menu-name caption">{{item.name}}</div>
                                                    <div class="menu-extension"/>
                                                    <div class="menu-order caption">{{item.order}}</div>
                                                </li>
                                            </ul>
                                        </v-responsive>
                                    </v-layout>
                                </div>
                                <!-- Foreground layer -->
                            </v-layout>

                        </v-layout>
                    </v-container>
                <!-- Hero section with image as a background -->

                <svg-background2 :inner-screen-width="innerScreenWidth"
                                :inner-screen-height="innerScreenHeight" :fill-svg="fillSvg"/>
                <!-- Hero section with image as a background -->
                <v-container :style="{ height: innerScreenHeight + 'px'}">
                    <v-layout wrap fill-height justify-center align-center class="about-section">

                        <v-responsive>
                            <h1 class="display-3 ml-5 font-weight-medium">
                                About me :
                            </h1>

                            <v-row class="pa-5" no-gutters>
                                <v-col cols="12" md="6">
                                    <v-card color="#1A1A1A" elevation="0" tile class="pa-12" height="335">
                                        <v-layout justify-space-between wrap>
                                            <v-responsive>
                                                <h1 class="display-2 font-weight-medium">10</h1>
                                                <p class="text-primary text-uppercase subtitle-2">Years of experience</p>
                                            </v-responsive>
                                            <v-responsive>
                                                <h1 class="display-2 font-weight-medium">26</h1>
                                                <p class="text-primary text-uppercase subtitle-2">Years old</p>
                                            </v-responsive>
                                        </v-layout>

                                        <v-card-text class="pa-0">
                                            <p class="text-justify">
                                                An enthusiastic, ambitious, self-taught Software Developer
                                                with over three years of industry experience.
                                                I have worked with various companies over this period managing
                                                and working on multiple projects. I've always been a part of agile
                                                team structure and have worked with languages such as Ruby,
                                                Python, AngularJS, VueJS, Wordpress etc.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-card color="#303030" elevation="0" tile class="pa-12 location-card" height="335">
                                        <Cube/>
                                        <v-layout justify-space-between wrap fill-height column class="pl-12">
                                            <div>
                                                <p class="text-uppercase subtitle-2 text-accent mb-0">Where I'm located</p>
                                                <h2 class="text-uppercase">Canberra, Australia</h2>
                                            </div>

                                            <div>
                                                <p class="text-uppercase subtitle-2 text-accent mb-0">Email</p>
                                                <h2>shiv15101990@gmail.com</h2>
                                            </div>

                                            <div>
                                                <p class="text-uppercase subtitle-2 text-accent mb-0">Phone</p>
                                                <h2>+61 416530555</h2>
                                            </div>
                                        </v-layout>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-responsive>

                    </v-layout>
                </v-container>

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
            color: #616161;
        }

        .text-primary {
            color: #F7A300;
        }

        a.text-primary {
            text-decoration: underline;
        }

        .opacity {
            opacity: 0.35;
        }

        .avatar-border {
            border: 1px solid #F7A300;
            color: #F7A300;
        }

        .app-nar-nav-icon-position {
            position: absolute;
            left: -24px;
        }

        .svg-v-line-section {
            position: relative;
            .svg-v-line-container {
                width: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                padding: 50px 0;

                .scroll-downs {
                    position: absolute;
                    bottom: 95px;
                    left: -5px;

                    width : 40px;
                    height: 55px;
                    display: flex;
                    justify-content: center;

                    .mousey {
                        width: 3px;
                        padding: 10px;
                        height: 25px;
                        border: 1px solid #F7A300;
                        border-radius: 25px;
                        opacity: 0.75;
                        box-sizing: content-box;
                        cursor: pointer;

                        .scroller {
                            width: 3px;
                            height: 10px;
                            border-radius: 25%;
                            background-color: #F7A300;
                            animation-name: scroll;
                            animation-duration: 2.2s;
                            animation-timing-function: cubic-bezier(.15,.41,.69,.94);
                            animation-iteration-count: infinite;

                            @keyframes scroll {
                                0% { opacity: 0; }
                                10% { transform: translateY(0); opacity: 1; }
                                100% { transform: translateY(15px); opacity: 0;}
                            }
                        }
                    }
                }

                .v-line {
                    width: 2px;
                    height: 100%;
                    padding: 100px 0;
                }
            }
        }

        .hero-section {
            .layer-container {
                .background-layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 5;

                    .title-container {
                        display: flex;

                        .cube-wrapper {
                            position: relative;
                            top: 40px;
                        }
                    }

                    p {

                        &:first-child {
                            margin-bottom: 0;
                            padding-bottom: 0;
                        }

                        &:last-child {
                            font-size: 120px;
                            line-height: 100px;
                            margin-bottom: 30px;
                        }

                        text-align: right;
                        width: 100%;
                        opacity: 0.35;
                    }
                }

                .foreground-layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    /*border: 1px solid blue;*/
                    z-index: 10;

                    h1 {
                        width: 70%;
                    }

                    .banner-container {
                        position: relative;

                        .cube-container {
                            position: absolute;
                            top: 150px;
                            left: 10%;
                        }

                        .menu-container {
                            position: relative;

                            .cube-container {
                                position: absolute;
                                top: 50px;
                                left: 30%;
                            }

                            .landing-menu {
                                list-style: none;
                                text-align: right;
                                position: relative;
                                z-index: 1;
                                padding-right: 10px;

                                li {
                                    display: flex;
                                    align-items: center;
                                    justify-content: flex-end;
                                    padding: 20px 15px;

                                    &:hover {
                                        cursor: pointer;

                                        .menu-extension {
                                            width: 50px;
                                            border-bottom-color: white;
                                        }

                                        .menu-name, .menu-order {
                                            color: white;
                                            visibility: visible;
                                        }
                                    }
                                }

                                .menu-extension {
                                    border-bottom: 2px solid #F7A300;
                                    width: 30px;
                                    height: 0;
                                    padding-right: 10px;
                                }

                                .menu-name {
                                    padding-right: 20px;
                                    color: #616161;
                                    visibility: hidden;
                                    text-transform: uppercase;
                                }

                                .menu-order {
                                    padding-left: 10px;
                                    color: #F7A300;
                                }
                            }
                        }
                    }
                }
            }
        }

        .about-section {
            .location-card {
                position: relative;

                .cube-wrapper {
                    position: absolute;
                    bottom: -55px;
                    left: -80px;
                }
            }
        }
    }
</style>

<script>
import Cube from './components/Cube'
import SvgBackground1 from './components/SvgBackground1'
import SvgBackground2 from './components/SvgBackground2'

export default {
  components: {
    Cube,
    SvgBackground1,
    SvgBackground2
  },
  metaInfo: {
    title: 'Shivam Goswami',
    titleTemplate: 'Frontend Developer Canberra → VueJS → AngularJS → Ruby on Rails → Python → %s',
    meta: [
      {name: 'name', content: 'Freelance frontend development in Canberra, Australia'},
      {name: 'description', content: 'Specializing in languages such as VueJS, AngularJS, EmberJS, Ruby, Python'}
    ]
  },
  mounted() {
    this.innerScreenHeight = this.$vuetify.breakpoint.height
    this.innerScreenWidth = this.$vuetify.breakpoint.width
    console.log(this.$vuetify)
  },
  data() {
    return {
      innerScreenHeight: 0,
      innerScreenWidth: 0,
      landingMenu: [
        {
          order: '01',
          name: 'About me',
          linkTo: ''
        },
        {
          order: '02',
          name: 'Experience',
          linkTo: ''
        },
        {
          order: '03',
          name: 'Skills',
          linkTo: ''
        },
        {
          order: '04',
          name: 'Portfolio',
          linkTo: ''
        },
        {
          order: '05',
          name: 'Contact',
          linkTo: ''
        }
      ],
      fillSvg: false
    }
  },
  methods: {
  }
}
</script>
