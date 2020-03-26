<template>
    <div id="app">
        <v-app>
            <!-- Top application bar -->
            <v-app-bar app elevation="0" class="pt-1" height="65" style="z-index: 50">
                <v-container class="d-flex">

                    <v-app-bar-nav-icon class="ml-4" @click="showDrawer = true">
                        <slot>
                            <v-icon color="primary" class="app-nar-nav-icon-position" size="27"
                            v-if="$vuetify.breakpoint.xsOnly">
                                mdi-menu-open
                            </v-icon>
                            <v-avatar class="avatar-border title">SG</v-avatar>
                        </slot>
                    </v-app-bar-nav-icon>

                    <div class="hidden-sm-and-down">
                        <div class="d-flex flex-column pl-5">
                            <strong class="title d-block">Shivam Goswami</strong>
                            <span class="d-block overline text-center">Front-end Developer</span>
                        </div>
                    </div>

                    <v-spacer></v-spacer>

                    <v-avatar color="secondary" class="hidden-sm-and-down">
                        <v-img :src="require('./assets/personal.webp')" position="25% 20%" min-width="120" alt="logo"/>
                    </v-avatar>

                    <v-btn text height="55" class="mx-2 font-weight-bold text-capitalize px-2" target="_blank"
                           href="https://www.linkedin.com/in/shivam-goswami-74958170/" rel="noreferrer">
                        <v-img :src="require('./assets/social/linkedin-white.png')"
                               class="mr-1 mb-2" max-width="22"/>
                        Linkedin
                    </v-btn>

                    <v-btn text height="55" class="mx-2 font-weight-bold text-capitalize px-2" target="_blank"
                           href="https://github.com/shivamgoswami1990" rel="noreferrer">
                        <v-img :src="require('./assets/social/github-white.png')"
                               class="mr-1 mb-2" max-width="22"/>
                        Github
                    </v-btn>
                </v-container>
            </v-app-bar>
            <!-- Top application bar -->

            <nav-drawer :items="landingMenu" v-if="showDrawer" @showDrawer="transitionend" />

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
                                        <div class="title-wrapper">
                                            <p class="text-accent"
                                               :class="$vuetify.breakpoint.smAndUp ? 'display-1': 'headline'">
                                                Front-end
                                            </p>
                                            <p class="text-accent"
                                               :class="$vuetify.breakpoint.smAndUp ? '': 'display-3'">
                                                Developer
                                            </p>
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

                                        <a class="text-primary font-weight-bold pt-5"
                                           @click="$vuetify.goTo('.portfolio-section', options)">
                                            View projects
                                        </a>
                                    </v-responsive>

                                    <v-responsive class="menu-container" v-if="$vuetify.breakpoint.smAndUp">
                                        <div class="cube-container">
                                            <Cube :fill-svg="fillSvg" v-if="$vuetify.breakpoint.mdAndUp"/>
                                        </div>
                                        <ul class="landing-menu">
                                            <li v-for="(item, index) in landingMenu"
                                                :key="index" @click="$vuetify.goTo(item.linkTo, options)">
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

                <!-- About section with image as a background -->
                <div class="about-section padding-mt">
                    <v-img :src="require('@/assets/shapes/oval-1.png')" contain class="bg-image1"
                           width="100%" :height="innerScreenHeight"/>

                    <v-img :src="require('@/assets/shapes/oval-2.png')" contain class="bg-image2"
                           width="100%" :height="innerScreenHeight"/>

                    <v-img :src="require('@/assets/shapes/cube-2.png')" contain class="cube-2"/>

                    <v-layout wrap fill-height justify-center align-center class="foreground-layer">

                        <v-container>
                            <v-responsive>
                                <h1 class="display-3 ml-5 font-weight-medium text-uppercase">
                                    About me
                                </h1>

                                <v-row class="pa-5" no-gutters>
                                    <v-col cols="12" md="6" sm="6">
                                        <v-card :height="$vuetify.breakpoint.lgAndUp ? 350 : ''"
                                                color="#1A1A1A" elevation="0" tile class="pa-12">
                                            <v-layout justify-space-between wrap>
                                                <v-responsive>
                                                    <h1 class="display-2 font-weight-medium">5</h1>
                                                    <p class="text-primary text-uppercase subtitle-2">Years of experience</p>
                                                </v-responsive>
                                                <v-responsive>
                                                    <h1 class="display-2 font-weight-medium">29</h1>
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
                                    <v-col cols="12" md="6" sm="6">
                                        <v-card :height="$vuetify.breakpoint.lgAndUp ? 350 : ''"
                                                color="#303030" elevation="0" tile class="location-card"
                                               :class="$vuetify.breakpoint.mdAndUp ? 'pa-12' : 'pa-6'">
                                            <v-img :src="require('@/assets/shapes/cube-1.png')" contain class="cube-1"/>
                                            <v-layout justify-space-between wrap fill-height column class="pa-6">
                                                <div>
                                                    <p class="text-uppercase subtitle-2 text-accent mb-0">Where I'm located</p>
                                                    <h2>Canberra, Australia</h2>
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

                            <v-responsive class="section-mt">
                                <h1 class="display-3 ml-5 font-weight-medium text-uppercase skills-heading">
                                    Skills
                                </h1>

                                <services-carousel/>
                            </v-responsive>
                        </v-container>

                    </v-layout>
                </div>
                <!-- About section with image as a background -->

                <!-- Timeline section -->
                <div class="timeline-section section-mt">
                    <v-img :src="require('@/assets/shapes/oval-3.png')" contain class="bg-image1"
                           width="100%" :height="innerScreenHeight"/>
                    <v-container :style="{ 'min-height': innerScreenHeight + 'px'}">
                        <v-layout wrap fill-height justify-center align-center class="timeline-layout">

                            <v-img :src="require('@/assets/shapes/cube-2.png')" contain class="cube-1"/>
                            <v-img :src="require('@/assets/shapes/cube-2.png')" contain class="cube-2"/>
                            <v-img :src="require('@/assets/shapes/cube-2.png')" contain class="cube-3"/>
                            <v-img :src="require('@/assets/shapes/cube-1.png')" contain class="cube-4"/>
                            <v-img :src="require('@/assets/shapes/cube-1.png')" contain class="cube-5"/>

                            <v-responsive>
                                <h1 class="display-3 ml-5 font-weight-medium text-uppercase">
                                    Experience
                                </h1>

                                <v-layout wrap fill-height justify-center align-center>
                                    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                                        <v-timeline-item v-for="(timeline, index) in timelineInfo"
                                                         :key="index" class="timeline-item">
                                            <template v-slot:icon>
                                                <v-avatar size="60">
                                                    <v-img :src="require('@/assets/' + timeline.imagePath)" contain/>
                                                </v-avatar>
                                            </template>
                                            <template v-slot:opposite>
                                                <span class="text-uppercase caption px-5">
                                                    {{timeline.date}}
                                                </span>
                                            </template>
                                            <v-card flat tile color="transparent" class="timeline-card"
                                                    :height="$vuetify.breakpoint.smAndDown ? 250 : 200">
                                                <v-card-title>
                                                    <p class="title font-weight-bold"
                                                       :class="$vuetify.breakpoint.smAndDown ?
                                                       '' : (index % 2 === 0) ? 'text-right' : ''">
                                                        {{timeline.contentHeading}}
                                                    </p>
                                                    <p class="text-primary subtitle-2"
                                                       :class="$vuetify.breakpoint.smAndDown ?
                                                       '' : (index % 2 === 0) ? 'text-right' : ''">
                                                        {{timeline.contentSubheading}}
                                                    </p>
                                                </v-card-title>
                                                <v-card-text :class="$vuetify.breakpoint.smAndDown ?
                                                       '' : (index % 2 === 0) ? 'text-right' : ''">
                                                    {{timeline.contentBody}}
                                                </v-card-text>
                                            </v-card>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-layout>
                            </v-responsive>

                        </v-layout>
                    </v-container>
                </div>
                <!-- Timeline section -->

                <!-- Portfolio section -->
                <div class="portfolio-section section-mt">
                    <v-container>
                        <h1 class="display-3 font-weight-medium text-uppercase">Projects</h1>
                    </v-container>

                    <portfolio-carousel/>
                </div>
                <!-- Portfolio section -->

                <!-- Contact form section -->
                <div class="contact-form-section section-mt">
                    <v-container>
                        <h1 class="display-3 font-weight-medium text-uppercase">Lets Talk</h1>
                    </v-container>

                    <contact/>
                </div>
                <!-- Contact form section -->

            </v-content>
            <!-- Content -->

            <v-footer color="secondary">
                <v-container>
                    <p class="text-center mb-0">2020 © Shivam Goswami, All rights reserved.</p>
                </v-container>
            </v-footer>
        </v-app>
    </div>
</template>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        p, .v-card__text {
            font-size: 16px;
        }

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

        .section-mt, .padding-mt {
            margin-top: 80px;
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
            position: relative;

            .bg-image1 {
                position: absolute;
                .v-image__image.v-image__image--contain {
                    background-position: right !important;
                }
            }

            .bg-image2 {
                position: absolute;
                top: 70%;
                .v-image__image.v-image__image--contain {
                    background-position: left !important;
                }
            }

            .cube-2 {
                position: absolute;
                top: 50%;
                left: 30%;
            }

            .foreground-layer {
                .services-section {
                    position: relative;
                    .cube-2 {
                        position: absolute;
                        top: -10px;
                        left: 260px;
                    }
                }

                .location-card {
                    position: relative;
                    .cube-1 {
                        position: absolute;
                        top: -40px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            }
        }

        .timeline-section {
            position: relative;

            .timeline-layout {
                position: relative;

                .cube-1 {
                    position: absolute;
                    top: -40px;
                    left: 50%;
                    transform: translateX(-70%);
                }

                .cube-2 {
                    position: absolute;
                    top: 40%;
                    left: 30%;
                    transform: translateX(-70%);
                }

                .cube-3 {
                    position: absolute;
                    top: 75%;
                    left: 5%;
                }

                .cube-4 {
                    position: absolute;
                    top: 37%;
                    left: 85%;
                    transform: translateX(-70%);
                }

                .cube-5 {
                    position: absolute;
                    top: 65%;
                    left: 75%;
                    transform: translateX(-70%);
                }
            }

            .bg-image1 {
                position: absolute;
                top: 30%;
                .v-image__image.v-image__image--contain {
                    background-position: right !important;
                }
            }

            .v-timeline {
                &:before {
                    background: #F7A300;
                    width: 1px;
                }

                .v-timeline-item__divider {
                    position: relative;
                    &:before {
                        content: "";
                        position: absolute;
                        border-radius: 50%;
                        width: 90px;
                        height: 90px;
                        background: #232323;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        opacity: 0.2;
                        background-image: radial-gradient(circle, white, black);
                    }
                    .v-timeline-item__dot {
                        .v-avatar {

                        }
                    }
                }
            }

            .timeline-card {
                padding: 0;
                .v-card__title {
                    border-bottom: 1px solid #F7A300;
                    padding: 15px 0;
                    height: 50%;
                    p {
                        width: 100%;
                        margin: 0;
                        padding: 0;
                    }
                }

                .v-card__text {
                    padding: 15px 0;
                    height: 50%;
                }
            }
        }
    }
</style>

<script>
import Cube from './components/Cube'
import SvgBackground1 from './components/SvgBackground1'
import ServicesCarousel from './components/ServicesCarousel'
import PortfolioCarousel from './components/PortfolioCarousel'
import Contact from './components/Contact'
import NavDrawer from './components/NavDrawer'

export default {
  components: {
    Cube,
    SvgBackground1,
    ServicesCarousel,
    PortfolioCarousel,
    Contact,
    NavDrawer
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
  },
  data() {
    return {
      showDrawer: false,
      innerScreenHeight: 0,
      innerScreenWidth: 0,
      landingMenu: [
        {
          order: '01',
          name: 'About me',
          linkTo: '.about-section'
        },
        {
          order: '02',
          name: 'Skills',
          linkTo: '.skills-heading'
        },
        {
          order: '03',
          name: 'Experience',
          linkTo: '.timeline-section'
        },
        {
          order: '04',
          name: 'Projects',
          linkTo: '.portfolio-section'
        },
        {
          order: '05',
          name: 'Contact',
          linkTo: '.contact-form-section'
        }
      ],
      skillSlide: null,
      fillSvg: false,
      options: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  },
  methods: {
    transitionend() {
      this.showDrawer = false
    }
  }
}
</script>
