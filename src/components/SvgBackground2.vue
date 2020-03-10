<template>
    <svg class="svg-container2" :width="innerScreenWidth" :height="innerScreenHeight" preserveAspectRatio="none">
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#303030;stop-opacity:1" />
            <stop offset="40%" style="stop-color:#232323;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#080808;stop-opacity:1" />
        </linearGradient>
        <path stroke-width="3" fill="url(#gradient2)"
              :d="'M ' + innerScreenWidth + ' 0' +
                          ' V 0'+ ' ' + innerScreenHeight + ', ' +
                          ' H ' + getPercentOf(50, innerScreenWidth) + ' ' + innerScreenHeight + ', ' +
                           ' C ' + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) + ', '
                            + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(20, innerScreenHeight) + ', ' +
                            getPercentOf(100, innerScreenWidth) + ' ' + getPercentOf(0, innerScreenHeight)"/>

        <path :stroke="$vuetify.theme.defaults.dark.primary" :stroke-width="fillSvg ? 0.4 : 0.05" fill="none"
              :d="'M ' + innerScreenWidth + ' 0' +
                          ' V 0'+ ' ' + innerScreenHeight + ', ' +
                          ' H ' + innerScreenWidth + ' ' + innerScreenHeight + ', ' +
                           ' C ' + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) + ', '
                            + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(20, innerScreenHeight) + ', ' +
                            getPercentOf(100, innerScreenWidth) + ' ' + getPercentOf(0, innerScreenHeight)"/>

        <path stroke-width="3" fill="url(#gradient2)"
              :d="'M 0 ' + getPercentOf(50, innerScreenHeight) +
               ' V ' + getPercentOf(50, innerScreenHeight) + ' ' + innerScreenHeight + ', ' +
                          ' H 0 ' + getPercentOf(20, innerScreenHeight) + ', ' +
                           ' C ' + getPercentOf(20, innerScreenWidth) + ' ' + getPercentOf(100, innerScreenHeight) + ', '
                            + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(30, innerScreenHeight) + ', ' +
                            getPercentOf(0, innerScreenWidth) + ' ' + getPercentOf(40, innerScreenHeight)"/>
    </svg>
</template>

<style lang="scss" scoped>
    .svg-container2 {
        position: absolute;
        vector-effect:non-scaling-stroke;
        background: linear-gradient(to bottom, #080808 16%, #232323 65%, #303030 84%);
    }
</style>

<script>
export default {
  props: {
    innerScreenWidth: {
      type: Number,
      default: 0
    },
    innerScreenHeight: {
      type: Number,
      default: 0
    },
    fillSvg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getPercentOf(percent, value) {
      return (parseFloat(percent) * parseFloat(value)) / 100
    }
  }
}
</script>
