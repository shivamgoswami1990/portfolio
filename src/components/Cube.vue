<template>
    <div class="cube-wrapper">
        <svg preserveAspectRatio ="none" fill="none" v-if="fillSvg">
            <path fill="none" stroke-width="2" :stroke="$vuetify.theme.defaults.dark.primary"
                  d="M 15,20 L 76, 56" />
            <path fill="none" stroke-width="2" :stroke="$vuetify.theme.defaults.dark.primary"
                  d="M 142,18 L 76, 56" />
            <path fill="none" stroke-width="2" :stroke="$vuetify.theme.defaults.dark.primary"
                  d="M 76,56 L 76, 116" />
        </svg>
        <div class="square"></div>
        <div class="square2"></div>
        <div class="square3"></div>
    </div>
</template>

<style lang="scss">
    .cube-wrapper {
        position: relative;
        width: 160px;
        height: 150px;
        opacity: 0.5;

        svg {
            position: absolute;
            top: 0;
            width: inherit;
            height: inherit;
            z-index: 1;
        }

        .square{
            width:60px;
            height:60px;
            background: linear-gradient(90deg, #424242 5%, #212121 85%, #212121 100%);
            transform: skew(180deg,210deg);
            position: absolute;
            top: 40px;
            left: 16px;
        }

        .square2{
            width:60px;
            height:60px;
            background: linear-gradient(90deg, #424242 5%, #212121 85%, #212121 100%);
            transform: skew(180deg,150deg);
            position: absolute;
            left: 80px;
            top: 40px;
        }

        .square3{
            width:74px;
            height:60px;
            background: linear-gradient(90deg, #424242 5%, #212121 85%, #212121 100%);
            transform: rotate(150deg) translate(-40px, -16px) skew(30deg, 0deg);
            position: absolute;
            left: 0px;
            top: -5px;
        }
    }
</style>

<script>
export default {
  props: {
    fillSvg: {
      type: Boolean,
      default: false
    }
  }
}
</script>
