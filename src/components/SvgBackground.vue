<template>
    <svg class="svg-container" :width="innerScreenWidth" :height="innerScreenHeight" preserveAspectRatio="none">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#303030;stop-opacity:1" />
            <stop offset="40%" style="stop-color:#232323;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#080808;stop-opacity:1" />
        </linearGradient>
        <path stroke-width="3" fill="url(#gradient)"
              :d="'M ' + innerScreenWidth + ' 0' +
                          ' V 0'+ ' ' + innerScreenHeight + ', ' +
                          ' H 0 0, ' +
                           ' C ' + getPercentOf(30, innerScreenWidth) + ' ' + getPercentOf(90, innerScreenHeight) + ', '
                            + getPercentOf(20, innerScreenWidth) + ' ' + getPercentOf(60, innerScreenHeight) + ', ' +
                            getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) +
                           ' C ' + getPercentOf(70, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) + ', '
                            + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(20, innerScreenHeight) + ', ' +
                            getPercentOf(100, innerScreenWidth) + ' ' + getPercentOf(0, innerScreenHeight)"/>

        <path :stroke="$vuetify.theme.defaults.dark.primary" stroke-width="0.05" fill="none"
              :d="'M 0 ' + innerScreenHeight +
                           ' C ' + getPercentOf(30, innerScreenWidth) + ' ' + getPercentOf(90, innerScreenHeight) + ', '
                            + getPercentOf(20, innerScreenWidth) + ' ' + getPercentOf(60, innerScreenHeight) + ', ' +
                            getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) +
                           ' C ' + getPercentOf(70, innerScreenWidth) + ' ' + getPercentOf(55, innerScreenHeight) + ', '
                            + getPercentOf(50, innerScreenWidth) + ' ' + getPercentOf(20, innerScreenHeight) + ', ' +
                            getPercentOf(100, innerScreenWidth) + ' ' + getPercentOf(0, innerScreenHeight)"/>
    </svg>
</template>

<style lang="scss" scoped>
    .svg-container {
        position: absolute;
        vector-effect:non-scaling-stroke;
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
    }
  },
  methods: {
    getPercentOf(percent, value) {
      return (parseFloat(percent) * parseFloat(value)) / 100
    }
  }
}
</script>
