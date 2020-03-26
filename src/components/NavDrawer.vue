<template>
    <v-navigation-drawer v-model="drawer" temporary app color="secondary" @transitionend="closeDrawer"
                         width="100vw" height="100vh" style="z-index: 50">
        <v-icon size="35" style="position: absolute; right: 10px; top: 10px" @click="closeDrawer">
            mdi-close
        </v-icon>
        <v-layout justify-center align-center fill-height column>
            <v-list>
                <v-list-item class="text-center display-2 my-5" v-for="(item, index) in $attrs.items" :key="index"
                             @click="$vuetify.goTo(item.linkTo, options); $emit('showDrawer', false)">
                    {{item.name}}
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      options: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  },
  methods: {
    closeDrawer() {
      this.$emit('showDrawer', false)
    }
  }
}
</script>

