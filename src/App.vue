<template>
  <v-app dark>
    <v-navigation-drawer app class="black">
      <v-layout fill-height wrap column align-center justify-center class="py-5">

        <h2 class="display-3 font-weight-black primary--text mb-2">SG</h2>
        <div class="display-1 mb-2">Shivam Goswami</div>
        <span class="title font-weight-light mb-5">Full-stack Developer</span>

        <v-btn flat dark class="text-capitalize subheading font-weight-light my-5" @click="$vuetify.goTo('#section-2')">
          About me
        </v-btn>

        <v-btn flat dark class="text-capitalize subheading font-weight-light mb-5" @click="$vuetify.goTo('#section-4')">
          Experience
        </v-btn>

        <v-btn flat dark class="text-capitalize subheading font-weight-light mb-5" @click="$vuetify.goTo('#section-5')">
          Skills & Education
        </v-btn>

        <v-btn flat dark class="text-capitalize subheading font-weight-light mb-5" @click="$vuetify.goTo('#section-6')">
          Portfolio
        </v-btn>

        <v-btn flat dark class="text-capitalize subheading font-weight-light mb-5" @click="$vuetify.goTo('#form-section')">
          Contact
        </v-btn>

        <div class="mt-auto">
          <a href="https://www.linkedin.com/in/shivam-goswami-74958170" target="_blank">
            <div class="white pa-1 d-inline-block">
              <v-img :src="linkedInLogo" width="20" height="20"></v-img>
            </div>
          </a>
        </div>

      </v-layout>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid class="pa-0">

        <!-- First section -->
        <div class="section-1" id="section-1">
          <v-img :src="heroImage" aspect-ratio="1" height="100vh" width="100%"></v-img>
          <v-layout fill-height align-end justify-end class="pa-5 content-layout full-width">
            <div class="text-xs-right">
              <div class="text-uppercase" :class="$vuetify.breakpoint.mdAndDown ? 'title' : 'display-1'">
                Shivam Goswami
              </div>
              <h1 class="primary--text text-uppercase" :class="$vuetify.breakpoint.mdAndDown ? 'display-2' : 'display-4'">
                Developer
              </h1>
            </div>
          </v-layout>
        </div>
        <!-- First section -->

        <!-- Second section -->
        <div class="section-2 pa-5" id="section-2">
          <v-img :src="abstract1" class="bg-image" width="613px"></v-img>

          <v-img :src="abstract2" aspect-ratio="1" class="abstract-bg" height="711px" width="778px"></v-img>

          <v-layout class="content-layout pt-5">
            <v-flex xs12 md7>
              <h2 class="display-2 font-weight-bold primary--text mb-4">Who I am.</h2>

              <v-layout fill-height :column="$vuetify.breakpoint.smAndDown" class="pa-5">
                <v-flex xs12 md6 class="text-xs-justify">
                  An enthusiastic, ambitious, self-taught Software Developer with over three years of industry
                  experience. I have worked with various companies over this period managing and working on multiple
                  projects. I've always been a part of agile team structure and have worked with languages such as
                  Ruby, Python, AngularJS, VueJS, Wordpress etc.
                </v-flex>
                <v-flex xs12 md5 offset-md1 :class="$vuetify.breakpoint.smAndDown ? 'mt-5' : ''">
                  <div>
                    <v-layout column>
                      <v-flex md12 class="mb-5">
                        <div class="primary--text font-weight-bold float-left">Location</div>
                        <div class="float-right">Canberra, Australia</div>
                      </v-flex>

                      <v-flex md12 class="mb-5">
                        <div class="primary--text font-weight-bold float-left">Email</div>
                        <div class="float-right">
                          <a href="mailto: shiv15101990@gmail.com" target="_blank">shiv15101990@gmail.com</a>
                        </div>
                      </v-flex>

                      <v-flex md12>
                        <div class="primary--text font-weight-bold float-left">Phone</div>
                        <div class="float-right">
                          <a href="tel: +(61) 416530555" target="_blank">+(61) 416530555</a>
                        </div>
                      </v-flex>
                    </v-layout>
                  </div>

                </v-flex>
              </v-layout>

            </v-flex>

            <v-flex xs12 md5 class="text-xs-right hidden-xs-only">
              <div class="display-1">Full Stack Developer</div>
              <span class="primary--text headline font-weight-light">Shivam Goswami</span>
            </v-flex>
          </v-layout>
        </div>
        <!-- Second section -->

        <!-- Third section -->
        <div class="section-3 pt-5 pr-5 pl-5"  id="section-3">
          <v-layout class="content-layout pt-5">
            <v-flex xs12 md7>
              <h2 class="display-2 font-weight-bold primary--text mb-4">What I can do for you.</h2>

              <v-expansion-panel popout focusable class="pt-5">
                <v-expansion-panel-content v-for="(item,i) in skillsInfo" :key="i" class="transparent">
                  <template v-slot:header>
                    <div>{{item.heading}}</div>
                  </template>
                  <v-card color="primary">
                    <v-card-text class="black--text text-xs-justify">{{item.content}}</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>

            <v-flex xs12 md5 class="hidden-sm-and-down">
              <v-img :src="personalImage" height="450px" width="400px" class="mx-auto my-auto"></v-img>
            </v-flex>
          </v-layout>
        </div>
        <!-- Third section -->

        <!-- Fourth section -->
        <div class="section-4 pl-5 pb-5 pr-5"  id="section-4">
          <h2 class="display-2 font-weight-bold primary--text mb-4">Where I've been</h2>

          <v-timeline class="mt-5 pa-5" :dense="$vuetify.breakpoint.mdAndDown">
            <v-timeline-item v-for="(item,i) in timelineInfo" :key="i" color="primary">
              <template v-slot:opposite>
                <span>{{item.date}}</span>
              </template>
              <v-card class="elevation-2" dark>
                <v-card-title class="headline">
                  <div class="float-left d-inline-block pr-4">
                    <v-img :src="item.image" width="60px" height="60px" contain></v-img>
                  </div>
                  <div class="float-right d-inline-block">
                    <span class="d-block full-width">{{item.contentHeading}}</span>
                    <div class="subheading font-weight-light">({{item.contentSubheading}})</div>
                  </div>
                </v-card-title>
                <v-card-text>
                  {{item.contentBody}}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
        <!-- Fourth section -->

        <!-- Fifth section -->
        <div class="section-5 pa-5" id="section-5">
          <h2 class="display-2 font-weight-bold primary--text mb-4">What I know.</h2>

          <blockquote class="hidden-xs-only">
            <p class="subheading font-weight-light font-italic">
              I have been working with VueJS, Ruby on Rails & Python for over 3 years...
            </p>
            <div class="text-xs-center">
              <v-btn color="primary" light depressed class="black--text font-weight-bold" :href="resume"
                     download="Resume.jpg">
                Download CV
              </v-btn>
            </div>
          </blockquote>

          <v-img :src="abstract2" aspect-ratio="1" class="abstract-bg" height="711px" width="778px"></v-img>

          <v-layout fill-height :column="$vuetify.breakpoint.xsOnly" class="content-layout">
            <v-flex xs12 sm12 md4 :class="$vuetify.breakpoint.smAndDown ? '' : 'pl-5 ml-3'">

              <h3 class="headline font-weight-bold mb-5 pb-5 primary--text">My Education</h3>

              <v-sheet elevation-0 class="transparent mb-5" v-for="(item, i) in educationInfo" :key="i">
                <v-layout row fill-height>
                  <v-sheet color="primary" height="110px" width="1px"></v-sheet>

                  <v-flex class="ml-4">
                    <div class="mb-3">{{item.type}}</div>
                    <div class="text-xs-right">
                      <span class="title primary--text">{{item.degreeName}}</span>
                      <div>{{item.degreeDiscipline}}</div>
                      <div>{{item.degreePeriod}}</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-sheet>

            </v-flex>

            <v-flex xs12 sm12 md4 offset-md2>
              <h3 class="headline font-weight-bold mb-5 primary--text">My Skills</h3>

              <div class="pa-5" v-for="(item, i) in skillTags" :key="i">
                <h4 class="text-uppercase mb-3 primary--text">{{item.title}}</h4>

                <v-chip outline color="white" v-for="(chip,j) in item.skills" :key="j" disabled>
                  {{chip}}
                </v-chip>
              </div>
            </v-flex>
          </v-layout>
        </div>
        <!-- Fifth section -->

        <!-- Sixth section -->
        <div class="section-6 pa-5" id="section-6">
          <h2 class="display-2 font-weight-bold primary--text mb-4">What I've done</h2>

          <v-img :src="abstract3" class="bg-image" width="105%"></v-img>

          <v-card color="transparent" flat class="content-layout">
            <v-window v-model="projectDescriptionWindowCount">
              <v-window-item v-for="(item, i) in projectDescriptions" :key="i">
                <v-sheet color="transparent" flat class="pa-5">
                  <div class="text-xs-center mb-5">
                    <h2 class="primary--text title font-weight-light mb-1">{{item.title}}</h2>
                    <span class="subheading">{{item.subtitle}}</span>
                  </div>

                  <v-layout fill-height wrap>
                    <v-flex md6>
                      <div class="mb-3 max-width-500px">
                        <h2 class="primary--text title font-weight-light mb-4">Project Details</h2>
                        <div class="subheading mb-5 text-xs-justify">
                          {{item.details}}
                        </div>
                        <h2 class="primary--text title font-weight-light">
                          Project Info
                        </h2>

                        <v-list dark class="transparent max-width-300px" :class="$vuetify.breakpoint.smAndDown ? '': 'pa-3'">
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="primary" size="22">event_note</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content class="hidden-sm-and-down">
                              <v-list-tile-title v-text="'Date'"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action-text>
                              {{item.info.dates}}
                            </v-list-tile-action-text>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="primary" size="22">supervised_user_circle</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content class="hidden-sm-and-down">
                              <v-list-tile-title v-text="'Team'"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action-text>
                              {{item.info.team}}
                            </v-list-tile-action-text>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="primary" size="22">keyboard</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content class="hidden-sm-and-down">
                              <v-list-tile-title v-text="'Languages'"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action-text>
                              {{item.info.frameworks}}
                            </v-list-tile-action-text>
                          </v-list-tile>

                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="primary" size="22">link</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content class="hidden-sm-and-down">
                              <v-list-tile-title v-text="'URL'"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action-text>
                              <a :href="item.info.link" target="_blank">{{item.info.linkText}}</a>
                            </v-list-tile-action-text>
                          </v-list-tile>
                        </v-list>
                      </div>
                    </v-flex>

                    <v-flex md6 class="mx-auto my-auto hidden-sm-and-down">
                      <v-img :src="item.imagePath" contain height="inherit"></v-img>
                    </v-flex>
                  </v-layout>
                </v-sheet>
              </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-around">
              <v-item-group v-model="projectDescriptionWindowCount" class="text-xs-center" mandatory>
                <v-item v-for="(item, i) in projectDescriptions" :key="i" class="ma-2">
                  <v-btn slot-scope="{ active, toggle }" :input-value="active" @click="toggle" flat outline dark
                         depressed round small>{{item.year}}</v-btn>
                </v-item>
              </v-item-group>
            </v-card-actions>
          </v-card>
        </div>
        <!-- Sixth section -->

        <!-- Contact form section -->
        <div class="form-section pa-5" id="form-section">
          <h2 class="display-2 font-weight-bold primary--text mb-4">Let's talk.</h2>

          <v-img :src="abstract4" class="bg-image" width="105%"></v-img>

          <v-layout fill-height wrap class="content-layout pa-5">
            <v-flex xs12 md5 class="mb-4 pr-5">
              <h2 class="primary--text title font-weight-light text-uppercase">
                What can I do for you?
              </h2>

              <div class="subheading mb-5 mb-5 text-xs-justify">
                Get in touch if there's an idea, project that you need to have a chat about.
              </div>

              <h2 class="primary--text title font-weight-light text-uppercase mb-3">
                Send me a Message
              </h2>

              <v-form ref="form" v-model="formValid" lazy-validation>
                <v-text-field v-model="name" :rules="nameRules" label="Name" box required dark class="mt-5">
                </v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="Email" box required dark class="mt-2">
                </v-text-field>

                <v-text-field v-model="subject" label="Subject" box dark class="mt-2">
                </v-text-field>

                <v-textarea v-model="message" label="Message" box required dark class="mt-2">
                </v-textarea>

                <v-btn :disabled="!formValid" color="primary" depressed @click="validateForm"
                       class="black--text elevation-0 float-right px-5 mx-0">
                  Submit
                </v-btn>
              </v-form>
            </v-flex>

            <v-flex xs12 md3 offset-md2 class="text-xs-left">
              <h2 class="primary--text title font-weight-light text-uppercase mb-1 hidden-sm-and-down">
                Social Contacts
              </h2>

              <a href="https://www.linkedin.com/in/shivam-goswami-74958170" target="_blank" class="hidden-sm-and-down">
                <div class="white pa-1 d-inline-block">
                  <v-img :src="linkedInLogo" width="20" height="20"></v-img>
                </div>
              </a>

              <v-list two-line class="contact-details-list mt-5 transparent hidden-sm-and-down">
                <v-list-tile avatar class="py-4">
                  <v-list-tile-avatar>
                    <v-icon color="primary" size="35">location_on</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title class="primary--text">Address</v-list-tile-title>
                    <v-list-tile-sub-title>Franklin ACT 2913</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile avatar class="py-4">
                  <v-list-tile-avatar>
                    <v-icon color="primary" size="35">contact_mail</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title class="primary--text">Email</v-list-tile-title>
                    <v-list-tile-sub-title>shiv15101990@gmail.com</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile avatar class="py-4">
                  <v-list-tile-avatar>
                    <v-icon color="primary" size="35">settings_phone</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title class="primary--text">Phone</v-list-tile-title>
                    <v-list-tile-sub-title>(+61) 416530555</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

              </v-list>
            </v-flex>
          </v-layout>

        </div>
        <!-- Contact form section -->

      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="stylus">
  * {
    box-sizing: border-box;
  }

  :root, html, body {
    font-size: 16px;
    font-size: calc(16px + 0.02vw);
    overflow-x: hidden
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .full-width {
    width: 100%;
  }

  .max-width-500px {
    max-width: 500px;
  }

  .max-width-300px {
    max-width: 500px;
  }

  .section-1 {
    position relative;
    .content-layout {
      position: absolute;
      top: 0;
    }
  }


  .section-2 {
    position relative;
    .bg-image {
      position absolute;
      top: 40px;
      left: -40px;
      z-index: 1;
    }

    .abstract-bg {
      position absolute;
      top: 240px;
      right: -250px;
      z-index: 1;
    }

    .content-layout {
      position relative
      z-index 5;
    }
  }


  .section-3 {
    position relative;
    .content-layout {
      position relative
      z-index 5;
    }
  }


  .section-5 {
    position: relative;
    width 100%

    .abstract-bg {
      position: absolute;
      right: 0;
      z-index: 1;
      top: -30px;
    }

    h2 {
      display: inline-block;
      float: left;
      position: relative;
      z-index: 5;
    }

    blockquote {
      max-width: 210px;
      display: inline-block
      float: right
      z-index: 5;
      position: relative;
    }

    .content-layout {
      width: 100%;
      position: relative;
      z-index: 5;
    }
  }


  .section-6 {
    position: relative;
    width: 100%;

    .content-layout {
      position: relative;
      z-index: 5;
    }

    h2 {
      position: relative;
      z-index: 5;
    }

    .bg-image {
      position: absolute;
      top: -10px;
      left: -20px;
      z-index: 1;
      max-height: 90%;
    }
  }


  .form-section {
    position: relative;
    width: 100%;

    .content-layout {
      position: relative;
      z-index: 5;
    }

    h2 {
      position: relative;
      z-index: 5;
    }

    .bg-image {
      position: absolute;
      top: 50px;
      left: -20px;
      z-index: 1;
      max-height: 90%;
    }

    .contact-details-list {
      position: relative;
      left: -10px;
    }
  }
</style>

<script>
import heroImage from './assets/hero.png'
import abstract1 from './assets/abstract1.png'
import abstract2 from './assets/abstract2.png'
import abstract3 from './assets/abstract3.png'
import abstract4 from './assets/abstract4.png'
import projectImage1 from './assets/ecospectral.png'
import projectImage2 from './assets/ml.png'
import projectImage3 from './assets/jk.png'
import projectImage4 from './assets/hq.png'
import linkedInLogo from './assets/linkedin-logo.png'
import personalImage from './assets/personal.png'
import tylygnt from './assets/tylygnt.png'
import makersLane from './assets/makerslane.png'
import amc from './assets/amc.png'
import hitiq from './assets/hitiq.png'
import cordelta from './assets/cordelta.png'
import resume from './assets/Resume.jpg'

export default {
  data () {
    return {
      heroImage: heroImage,
      resume: resume,
      abstract1: abstract1,
      abstract2: abstract2,
      abstract3: abstract3,
      abstract4: abstract4,
      projectImage1: projectImage1,
      projectImage2: projectImage2,
      projectImage3: projectImage3,
      projectImage4: projectImage4,
      linkedInLogo: linkedInLogo,
      personalImage: personalImage,
      tylygnt: tylygnt,
      makersLane: makersLane,
      amc: amc,
      hitiq: hitiq,
      cordelta: cordelta,
      skillsInfo: [
        { 'heading': 'Front-end Development', content: 'I have over 3 years of experience developing complex and' +
                  ' responsive dashboards, landing pages, sales websites. I have a good knowledge about performance' +
                  ' optimisations, mobile/tablet development, API interfacing, deployment etc. Over the course of this' +
                  ' period I have worked with various languages and frameworks such as JavaScript, HTML, CSS,' +
                  ' Bootstrap3/4, Material design specs, AngularJS, EmberJS, VueJS, SASS, Stylus, NPM, Webpack etc.'},
        { 'heading': 'Server-side Development', content: 'With over 3 years of experience in server side languages such' +
                  ' as Ruby on Rails, Python, Flask, Django I have developed extensive APIs, DB design and interfacing,' +
                  ' authentication, authorisation, horizontal/vertical scaling, algorithms, cloud deployments,' +
                  ' maintenance, caching etc. During this time I have designed DB and backend architecture for' +
                  ' various applications using the frameworks mentioned above. '},
        { 'heading': 'Cloud & DevOps', content: 'I have a good knowledge of deploying web apps on cloud platforms such' +
                  ' as AWS using services like RDS, Elasticache, Load balancing, domain forwarding, SSL certs,' +
                  ' firewalls, system scripts along with containerised support for pipelines, Docker, Vagrant, CouchDB,' +
                  ' MongoDB'},
        { 'heading': 'System design', content: 'The majority of the work I have mentioned on this page has been along' +
                  ' the lines of system design as a starting point. This includes requirements elicitation, system' +
                  ' architecture, system design, budgeting, marketing and product lifecycles. I am a big proponent of' +
                  ' working with a agile mindset and maintaining transparency amongst clients, stakeholders and contracters.'}
      ],
      timelineInfo: [
        { 'date' : 'Present', 'contentHeading': 'Cordelta Pty Ltd', 'contentSubheading': 'Front-end Developer' ,
          'contentBody': 'Working within the ICT business unit on multiple ACT government projects using technologies' +
                  ' such as HTML, CSS3, Bootstrap, Material Design, VueJS, Drupal in an agile environment', 'image': cordelta
        },
        { 'date' : 'Nov 2017 - August 2018', 'contentHeading': 'HitIQ  Pty Ltd', 'contentSubheading': 'Senior Developer' ,
          'contentBody': 'Worked with a big team on in house products using technologies such as Flask, AWS, JS, HTML5,' +
                  ' CSS3 etc. in an agile environment including collaborating with teams in Melbourne, Perth on a' +
                  ' day to day basis.',  'image': hitiq
        },
        { 'date' : 'Nov 2016-17', 'contentHeading': 'Makers Lane  Pty Ltd', 'contentSubheading': 'Technical Lead' ,
          'contentBody': 'Lead a team of 6 to help redesign and port existing .NET, JS web-app to Rails' +
                  'AngularJS, Bootstrap with database migration for existing user base along with weekly meetings, ' +
                  'continuous user experience testing, AWS Cloud deployment/maintenance.',  'image': makersLane
        },
        { 'date' : 'Jan-Mar 2017', 'contentHeading': 'Australian Medical Council', 'contentSubheading': 'Software Developer' ,
          'contentBody': 'Worked with a team of 6 in ICT department helping with continuous maintenance of in house rails' +
                  ' 2/3/4 apps, closely working with stakeholders and continuous deployments using AWS, Docker, Vagrant.',  'image': amc
        },
        { 'date' : 'Jan-Nov 2016', 'contentHeading': 'Tylygnt Pty Ltd', 'contentSubheading': 'Graduate Software Developer' ,
          'contentBody': 'Worked with a team of 5 on multiple applications involving Django, Rails 4.2, AngularJS 1.5,' +
                  ' Bootstrap 3, JQuery in an agile environments with continuous deployments on AWS.',  'image': tylygnt
        }
      ],
      educationInfo: [
        { 'type': 'University', 'degreeName': 'Master of Computing', 'degreeDiscipline': 'Software systems',
          'degreePeriod': '2013-2015'},
        { 'type': 'University', 'degreeName': 'Bachelors of Engineering', 'degreeDiscipline': 'Electronics and Telecommunication',
          'degreePeriod': '2019-2013'},
      ],
      skillTags: [
        { 'title': 'Front-end', 'skills': ['HTML', 'CSS/CSS3', 'Bootstrap 3/4', 'Material design', 'VueJS', 'EmberJS', 'AngularJS', 'SASS', 'Stylus']},
        { 'title': 'Back-end', 'skills': ['Ruby on Rails', 'Django', 'Flask', 'API design & architecture', 'Server optimisation', 'Nginx', 'Apache']},
        { 'title': 'Cloud/Dev-ops', 'skills': ['AWS', 'GCP', 'Bitbucket pipelines', 'Bash', 'Security', 'Cert management']}
      ],
      projectDescriptions: [
        { 'title': 'JK Aromatics', 'subtitle': 'Inventory management', 'details': 'JK Aromatics and perfumers is a ' +
                  'chemicals/perfumes manufacturing business with an aim to optimise order lifecycle. The dashboard' +
                  ' consists of features such as user management, live notifications, inventory support,' +
                  ' bespoke order/invoicing process, analytics etc. This was designed, developed and completely' +
                  ' deployed by myself.', 'info': {
          'dates': 'Mar 2017 - present', 'team': '1 member', 'frameworks': 'Rails, VueJS, Material design, Stylus, CSS3, HTML5',
          'link': 'https://jkaromaticsandperfumers.online/',
          'linkText': 'jkaromaticsandperfumers.online'},
        'year': '2019', 'imagePath': projectImage3
        },
        { 'title': 'HitIQ', 'subtitle': 'Landing website', 'details': 'HitIQ is platform for measuring, preventing head' +
                  ' injuries for AFL & Rugby players via use of a smart mouth-guard. During my time there I developed' +
                  ' the sales website from scratch using JS, Bootstrap, HTML. Also I worked on customer facing dashboard' +
                  ' system which directly interfaces with a network of mouth-guards.', 'info': {
          'dates': 'Nov 2017- Aug 2018', 'team': '12 members', 'frameworks': 'Flask, HTML, CSS, Jquery, VueJS, CouchDB',
          'link': 'https://hitiq.com',
          'linkText': 'hitiq.com'},
        'year': '2018', 'imagePath': projectImage4
        },
        { 'title': 'Makerslane', 'subtitle': 'E-commerce dashboard', 'details': 'Makerslane is an e-commerce platform for' +
                  ' bespoke custom made connecting buyers and sellers around Australia. I was in charge of a complete' +
                  ' architecture and system design of an already existing .NET app. Part of the requirements also' +
                  ' involved existing user data migration along with performance optimisations, API design, cloud' +
                  ' deployments, order lifecycle with tracking amongst other things.', 'info': {
          'dates': 'Nov 2016- 2017', 'team': '5 members', 'frameworks': 'Rails, AngularJS, Bootstrap, SASS, Bash',
          'link': 'https://www.makerslane.com.au:2017/',
          'linkText': 'makerslane.com.au'},
        'year': '2017', 'imagePath': projectImage2
        },
        { 'title': 'Ecospectral redesign', 'subtitle': 'Admin dashboard', 'details': 'Ecospectral is a company optimises' +
                  ' energy efficiency of a building through a wireless network of smart lights. A big part of this ' +
                  'solution was to capture all the motion, energy data in a user friendly dashboard to monitor energy' +
                  ' usage, sensor efficiency, lighting patterns, analytics, reports etc.', 'info': {
          'dates': 'Jan - Oct 2016', 'team': '6 members', 'frameworks': 'Django, Java, EmberJS, CSS, HTML',
          'link': 'https://drive.google.com/open?id=0B0qTd90G5-SXZTBMMkNmbUV1TEU',
          'linkText': 'Screenshots'},
        'year': '2016', 'imagePath': projectImage1
        }
      ],
      projectDescriptionWindowCount: 0,
      formValid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 2) || 'Name must have at least 2 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      subject: '',
      message: ''
    }
  },

  methods: {
    validateForm () {
      if (this.$refs.form.validate()) {
        // Submit the form
      }
    }
  }
}
</script>
