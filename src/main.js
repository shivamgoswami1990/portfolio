import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.prototype.skillsInfo = [
  {
    imagePath: 'fed.png',
    heading: 'Front-end',
    content: 'Experience developing complex and responsive dashboards, landing pages, sales websites.',
    skills: ['HTML', 'CSS/CSS3', 'Bootstrap 3/4', 'Material design', 'VueJS', 'EmberJS', 'AngularJS', 'SASS', 'Stylus']
  },
  {
    imagePath: 'bed.png',
    heading: 'Back-end',
    content: 'Experience developing extensive APIs, DB design and interfacing, authentication, authorisation,' +
      ' horizontal/vertical scaling',
    skills: ['Ruby on Rails', 'Django', 'Flask', 'API design & architecture', 'Server optimisation', 'Nginx', 'Apache']
  },
  {
    imagePath: 'cloud.png',
    heading: 'Cloud',
    content: 'Deploying, maintaining apps using Load balancing, domain forwarding, SSL certs, firewalls',
    skills: ['AWS', 'GCP', 'Bitbucket pipelines', 'Bash', 'Security', 'Cert management']
  },
  {
    imagePath: 'sysdesign.png',
    heading: 'Systems',
    content: 'Requirements elicitation, system architecture, system design, budgeting, marketing and product life-cycles.'
  }
]

Vue.prototype.timelineInfo = [
  { 'date' : 'July 2019 - Present', 'contentHeading': 'ActewAGL Pty Ltd', 'contentSubheading': 'Front-end Developer' ,
    'contentURL': 'actewagl.com.au', 'contentLink': 'http://www.actewagl.com.au',
    'contentTagline': 'Energy services provider in ACT',
    'contentBody': 'Developing in house products using technologies' +
      ' such as HTML, CSS3, SASS, Bootstrap, Material Design, VueJS in an agile environment',
    'imagePath': 'timeline/actew.png'
  },
  { 'date' : 'August 2018 - June 2019', 'contentHeading': 'Cordelta Pty Ltd', 'contentSubheading': 'Front-end Developer' ,
    'contentURL': 'cordelta.com', 'contentLink': 'http://www.cordelta.com',
    'contentTagline': 'A professional services firm in ACT',
    'contentBody': 'Working within the ICT business unit on multiple ACT government projects using technologies' +
      ' such as HTML, CSS3, Bootstrap, Material Design, VueJS, Drupal in an agile environment',
    'imagePath': 'timeline/cordelta.jpg'
  },
  { 'date' : 'Nov 2017 - August 2018', 'contentHeading': 'HitIQ  Pty Ltd', 'contentSubheading': 'Senior Developer' ,
    'contentURL': 'hitiq.com', 'contentLink': 'https://hitiq.com',
    'contentTagline': 'Smart concussion management product based in ACT',
    'contentBody': 'Worked with a big team on in house products using technologies such as Flask, AWS, JS, HTML5,' +
      ' CSS3 etc. in an agile environment including collaborating with teams in Melbourne, Perth on a' +
      ' day to day basis.',
    'imagePath': 'timeline/hitiq.jpg'
  },
  { 'date' : 'Nov 2016-17', 'contentHeading': 'Makers Lane  Pty Ltd', 'contentSubheading': 'Technical Lead' ,
    'contentURL': 'makerslane.com', 'contentLink': 'https://www.makerslane.com.au:2017/',
    'contentTagline': 'Online marketplace for custom made products in ACT',
    'contentBody': 'Lead a team of 6 to help redesign and port existing .NET, JS web-app to Rails' +
      'AngularJS, Bootstrap with database migration for existing user base along with weekly meetings, ' +
      'continuous user experience testing, AWS Cloud deployment/maintenance.',
    'imagePath': 'timeline/makerslane.png'
  },
  { 'date' : 'Jan-Mar 2017', 'contentHeading': 'Australian Medical Council', 'contentSubheading': 'Software Developer' ,
    'contentURL': 'amc.org.au', 'contentLink': 'https://www.amc.org.au/',
    'contentTagline': 'Based in ACT',
    'contentBody': 'Worked with a team of 6 in ICT department helping with continuous maintenance of in house rails' +
      ' 2/3/4 apps, closely working with stakeholders and continuous deployments using AWS, Docker, Vagrant.',
    'imagePath': 'timeline/amc.jpg'
  },
  { 'date' : 'Jan-Nov 2016', 'contentHeading': 'Tylygnt Pty Ltd', 'contentSubheading': 'Graduate Software Developer' ,
    'contentURL': 'linkedin.com', 'contentLink': 'https://www.linkedin.com/search/results/all/?keywords=tylygnt',
    'contentTagline': 'Software development house in ACT',
    'contentBody': 'Worked with a team of 5 on multiple applications involving Django, Rails 4.2, AngularJS 1.5,' +
      ' Bootstrap 3, JQuery in an agile environments with continuous deployments on AWS.',
    'imagePath': 'timeline/tylygnt.png'
  }
]

Vue.prototype.educationInfo = [
  { 'type': 'University', 'degreeName': 'Master of Computing', 'degreeDiscipline': 'Software systems',
    'degreePeriod': '2013-2015', 'universityName': 'Australian National University (ANU)'},
  { 'type': 'University', 'degreeName': 'Bachelors of Engineering', 'degreeDiscipline': 'Electronics and Telecommunication',
    'degreePeriod': '2019-2013', 'universityName': 'Uttar Pradesh Technical University (UPTU)'}
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
  'year': '2019', 'imagePath': 'projects/jk.png'
  },
  { 'title': 'HitIQ', 'subtitle': 'Landing website', 'details': 'HitIQ is platform for measuring, preventing head' +
      ' injuries for AFL & Rugby players via use of a smart mouth-guard. During my time there I developed' +
      ' the sales website from scratch using JS, Bootstrap, HTML. Also I worked on customer facing dashboard' +
      ' system which directly interfaces with a network of mouth-guards.', 'info': {
    'dates': 'Nov 2017- Aug 2018', 'team': '12 members', 'frameworks': 'Flask, HTML, CSS, Jquery, VueJS, CouchDB',
    'link': 'https://hitiq.com',
    'linkText': 'hitiq.com'},
  'year': '2018', 'imagePath': 'projects/hq.png'
  },
  { 'title': 'Makerslane', 'subtitle': 'E-commerce dashboard', 'details': 'Makerslane is an e-commerce platform for' +
      ' bespoke custom made connecting buyers and sellers around Australia. I was in charge of a complete' +
      ' architecture and system design of an already existing .NET app. Part of the requirements also' +
      ' involved existing user data migration along with performance optimisations, API design, cloud' +
      ' deployments, order lifecycle with tracking amongst other things.', 'info': {
    'dates': 'Nov 2016- 2017', 'team': '5 members', 'frameworks': 'Rails, AngularJS, Bootstrap, SASS, Bash',
    'link': 'https://www.makerslane.com.au:2017/',
    'linkText': 'makerslane.com.au'},
  'year': '2017', 'imagePath': 'projects/ml.png'
  },
  { 'title': 'Ecospectral redesign', 'subtitle': 'Admin dashboard', 'details': 'Ecospectral is a company optimises' +
      ' energy efficiency of a building through a wireless network of smart lights. A big part of this ' +
      'solution was to capture all the motion, energy data in a user friendly dashboard to monitor energy' +
      ' usage, sensor efficiency, lighting patterns, analytics, reports etc.', 'info': {
    'dates': 'Jan - Oct 2016', 'team': '6 members', 'frameworks': 'Django, Java, EmberJS, CSS, HTML',
    'link': 'https://drive.google.com/open?id=0B0qTd90G5-SXZTBMMkNmbUV1TEU',
    'linkText': 'Screenshots'},
  'year': '2016', 'imagePath': 'projects/eco.png'
  }
]

// Form validation rules
Vue.prototype.validateFormRules = (value, opType, limit, msg) => {
  if (value !== undefined && value !== null) {
    // Check the operation type e.g. gt, gte, lt, lte or e
    if (opType === 'gt') {
      return value.length > limit || msg
    } if (opType === 'gte') {
      return value.length >= limit || msg
    } if (opType === 'lt') {
      return value.length < limit || msg
    } if (opType === 'lte') {
      return value.length <= limit || msg
    } if (opType === 'e') {
      return value.length === limit || msg
    }
  } else {
    return msg
  }
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
