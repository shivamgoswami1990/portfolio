<template>
  <div id="app">
    <v-app>
      <v-content>
        <h1>This is my portfolio</h1>
      </v-content>
    </v-app>
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script>
export default {
  metaInfo: {
    title: 'Shivam Goswami',
    titleTemplate: 'Frontend Developer Canberra → VueJS → AngularJS → Ruby on Rails → Python → %s',
    meta: [
      { name: 'name', content: 'Freelance frontend development in Canberra, Australia' },
      { name: 'description', content: 'Specializing in languages such as VueJS, AngularJS, EmberJS, Ruby, Python' }
    ]
  },
  data() {
    return {
    }
  }
}
</script>
