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
                <svg class="svg-container" :width="innerScreenWidth" :height="innerScreenHeight" preserveAspectRatio="none">
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#303030;stop-opacity:1" />
                        <stop offset="40%" style="stop-color:#535353;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#080808;stop-opacity:0.6" />
                    </linearGradient>
                    <path stroke-width="3" id="line" fill="url(#gradient)"
                          :d="'M ' + innerScreenWidth + ' 0' +
                          ' V 0'+ ' ' + innerScreenHeight + ', ' +
                          ' H 0 0, ' +
                           ' C ' + getPercentOf(30, innerScreenWidth) + ' ' + getPercentOf(90, innerScreenHeight) + ', '
                            + getPercentOf(20, innerScreenWidth) + ' ' + getPercentOf(60, innerScreenHeight) + ', ' +
                            getPercentOf(45, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) +
                           ' C ' + getPercentOf(45, innerScreenWidth) + ' ' + getPercentOf(85, innerScreenHeight) + ', '
                            + getPercentOf(40, innerScreenWidth) + ' ' + getPercentOf(40, innerScreenHeight) + ', ' +
                            getPercentOf(55, innerScreenWidth) + ' ' + getPercentOf(35, innerScreenHeight) +
                           ' C ' + getPercentOf(75, innerScreenWidth) + ' ' + getPercentOf(30, innerScreenHeight) + ', '
                            + getPercentOf(70, innerScreenWidth) + ' ' + getPercentOf(10, innerScreenHeight) + ', ' +
                            getPercentOf(100, innerScreenWidth) + ' ' + getPercentOf(0, innerScreenHeight)"/>
                </svg>
                <!-- Hero section with image as a background -->
                    <v-container :style="{ height: innerScreenHeight + 'px'}">
                        <v-layout wrap fill-height class="hero-section">

                            <!-- Background layer -->
                            <div class="background-layer">
                                <v-layout fill-height wrap align-center justify-end column>
                                    <div>
                                        <Cube/>
                                        <p class="text-accent display-1">Front-end</p>
                                        <p class="text-accent">Developer</p>
                                    </div>
                                </v-layout>
                            </div>
                            <!-- Background layer -->

                            <!-- Foreground layer -->
                            <div class="foreground-layer">
                                <v-layout fill-height wrap justify-center align-center class="pl-5">
                                    <v-responsive>
                                        <h3 v-html="'< h1 >'" class="mb-5 text-accent opacity font-italic"/>
                                        <h1 class="display-3 ml-5 font-weight-medium">
                                            Hi <br>
                                            I'm Shiv <br>
                                            Front-end Developer
                                        </h1>
                                        <h3 v-html="'< h1 />'" class="mt-5 text-accent opacity font-italic"/>

                                        <a class="text-primary font-weight-bold pt-5">View projects</a>
                                    </v-responsive>

                                    <v-responsive class="menu-container">
                                        <div class="cube-container"><Cube/></div>
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
                    </v-container>
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

        .content {
            position: relative;

            .svg-container {
                position: absolute;
                vector-effect:non-scaling-stroke;
            }
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
                    opacity: 0.35;
                }
            }

            .foreground-layer {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 1px solid blue;
                z-index: 10;

                h1 {
                    width: 70%;
                }

                .menu-container {
                    position: relative;
                    .cube-container {
                        position: absolute;
                        top: -80px;
                        right: 40px;
                    }

                    .landing-menu {
                        list-style: none;
                        text-align: right;
                        position: relative;
                        z-index: 1;

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
      {name: 'name', content: 'Freelance frontend development in Canberra, Australia'},
      {name: 'description', content: 'Specializing in languages such as VueJS, AngularJS, EmberJS, Ruby, Python'}
    ]
  },
  mounted() {
    this.innerScreenHeight = this.$vuetify.breakpoint.height
    this.innerScreenWidth = this.$vuetify.breakpoint.width
    this.svgElement = document.getElementById("line")
    // this.svgElementLength = this.svgElement.getTotalLength()
    // this.svgElement.style.strokeDasharray = this.svgElementLength

    // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
    this.svgElement.style.strokeDashoffset = this.svgElementLength
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
      svgElement: null,
      svgElementLength: 0
    }
  },
  methods: {
    getPercentOf(percent, value) {
      return (parseFloat(percent) * parseFloat(value)) / 100
    },
    handleScroll() {
      let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight)

      let draw = this.svgElement.getTotalLength() * scrollpercent

      // Reverse the drawing (when scrolling upwards)
      console.log(this.svgElement.style.strokeDashoffset)
      this.svgElement.style.strokeDashoffset = this.svgElement.getTotalLength() - draw

      //console.log(scrollpercent, this.svgElement, event)
    }
  }
}
</script>
