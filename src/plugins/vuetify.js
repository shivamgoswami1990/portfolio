import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import './main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#ffaa00',
    secondary: '#CFD8DC'
  },
  customProperties: true,
  iconfont: 'md',
})
