<template>
  <router-view></router-view>
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
</style>
