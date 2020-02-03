import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Import all assets
import headerAvatar from './assets/personal.png'
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
import hitiq from './assets/hitiq.jpg'
import cordelta from './assets/cordelta.png'
import actew from './assets/actew.png'
import resume from './assets/Resume.jpg'
import anu from './assets/anu.png'
import phone from './assets/phone.svg'
import email from './assets/email.svg'
import linkedin from './assets/linkedin.svg'

Vue.prototype.headerAvatar = headerAvatar
Vue.prototype.heroImage = heroImage
Vue.prototype.abstract1 = abstract1
Vue.prototype.abstract2 = abstract2
Vue.prototype.abstract3 = abstract3
Vue.prototype.abstract4 = abstract4
Vue.prototype.projectImage1 = projectImage1
Vue.prototype.projectImage2 = projectImage2
Vue.prototype.projectImage3 = projectImage3
Vue.prototype.projectImage4 = projectImage4
Vue.prototype.linkedInLogo = linkedInLogo
Vue.prototype.personalImage = personalImage
Vue.prototype.tylygnt = tylygnt
Vue.prototype.makersLane = makersLane
Vue.prototype.amc = amc
Vue.prototype.hitiq = hitiq
Vue.prototype.cordelta = cordelta
Vue.prototype.actew = actew
Vue.prototype.resume = resume
Vue.prototype.anu = anu
Vue.prototype.phone = phone
Vue.prototype.email = email
Vue.prototype.linkedin = linkedin

Vue.prototype.skillsInfo = [
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
]

Vue.prototype.timelineInfo = [
  { 'date' : 'July 2019 - Present', 'contentHeading': 'ActewAGL Pty Ltd', 'contentSubheading': 'Front-end Developer' ,
    'contentURL': 'actewagl.com.au', 'contentLink': 'http://www.actewagl.com.au',
    'contentTagline': 'Energy services provider in ACT',
    'contentBody': 'Developing in house products using technologies' +
      ' such as HTML, CSS3, SASS, Bootstrap, Material Design, VueJS in an agile environment', 'image': actew
  },
  { 'date' : 'August 2018 - June 2019', 'contentHeading': 'Cordelta Pty Ltd', 'contentSubheading': 'Front-end Developer' ,
    'contentURL': 'cordelta.com', 'contentLink': 'http://www.cordelta.com',
    'contentTagline': 'A professional services firm in ACT',
    'contentBody': 'Working within the ICT business unit on multiple ACT government projects using technologies' +
      ' such as HTML, CSS3, Bootstrap, Material Design, VueJS, Drupal in an agile environment', 'image': cordelta
  },
  { 'date' : 'Nov 2017 - August 2018', 'contentHeading': 'HitIQ  Pty Ltd', 'contentSubheading': 'Senior Developer' ,
    'contentURL': 'hitiq.com', 'contentLink': 'https://hitiq.com',
    'contentTagline': 'Smart concussion management product based in ACT',
    'contentBody': 'Worked with a big team on in house products using technologies such as Flask, AWS, JS, HTML5,' +
      ' CSS3 etc. in an agile environment including collaborating with teams in Melbourne, Perth on a' +
      ' day to day basis.',  'image': hitiq
  },
  { 'date' : 'Nov 2016-17', 'contentHeading': 'Makers Lane  Pty Ltd', 'contentSubheading': 'Technical Lead' ,
    'contentURL': 'makerslane.com', 'contentLink': 'https://www.makerslane.com.au:2017/',
    'contentTagline': 'Online marketplace for custom made products in ACT',
    'contentBody': 'Lead a team of 6 to help redesign and port existing .NET, JS web-app to Rails' +
      'AngularJS, Bootstrap with database migration for existing user base along with weekly meetings, ' +
      'continuous user experience testing, AWS Cloud deployment/maintenance.',  'image': makersLane
  },
  { 'date' : 'Jan-Mar 2017', 'contentHeading': 'Australian Medical Council', 'contentSubheading': 'Software Developer' ,
    'contentURL': 'amc.org.au', 'contentLink': 'https://www.amc.org.au/',
    'contentTagline': 'Based in ACT',
    'contentBody': 'Worked with a team of 6 in ICT department helping with continuous maintenance of in house rails' +
      ' 2/3/4 apps, closely working with stakeholders and continuous deployments using AWS, Docker, Vagrant.',  'image': amc
  },
  { 'date' : 'Jan-Nov 2016', 'contentHeading': 'Tylygnt Pty Ltd', 'contentSubheading': 'Graduate Software Developer' ,
    'contentURL': 'linkedin.com', 'contentLink': 'https://www.linkedin.com/search/results/all/?keywords=tylygnt',
    'contentTagline': 'Software development house in ACT',
    'contentBody': 'Worked with a team of 5 on multiple applications involving Django, Rails 4.2, AngularJS 1.5,' +
      ' Bootstrap 3, JQuery in an agile environments with continuous deployments on AWS.',  'image': tylygnt
  }
]

Vue.prototype.educationInfo = [
  { 'type': 'University', 'degreeName': 'Master of Computing', 'degreeDiscipline': 'Software systems',
    'degreePeriod': '2013-2015', 'universityName': 'Australian National University (ANU)', 'image': anu},
  { 'type': 'University', 'degreeName': 'Bachelors of Engineering', 'degreeDiscipline': 'Electronics and Telecommunication',
    'degreePeriod': '2019-2013', 'universityName': 'Uttar Pradesh Technical University (UPTU)', 'image': ''}
]

Vue.prototype.skillTags = [
  { 'title': 'Front-end', 'skills': ['HTML', 'CSS/CSS3', 'Bootstrap 3/4', 'Material design', 'VueJS', 'EmberJS', 'AngularJS', 'SASS', 'Stylus']},
  { 'title': 'Back-end', 'skills': ['Ruby on Rails', 'Django', 'Flask', 'API design & architecture', 'Server optimisation', 'Nginx', 'Apache']},
  { 'title': 'Cloud/Dev-ops', 'skills': ['AWS', 'GCP', 'Bitbucket pipelines', 'Bash', 'Security', 'Cert management']}
]

Vue.prototype.projectDescriptions = [
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
]

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
