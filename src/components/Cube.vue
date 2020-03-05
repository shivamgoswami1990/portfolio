<template>
    <div class="cube-wrapper">
        <div class="square"></div>
        <div class="square2"></div>
        <div class="square3"></div>
    </div>
</template>

<style lang="scss">
    .cube-wrapper {
        position: relative;
        width: 206px;
        height: 190px;
        margin: 0px auto;
        margin-top:100px;
        opacity: 0.5;

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
