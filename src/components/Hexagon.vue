<template>
    <div class="hexagon"><span></span></div>
</template>

<style lang="scss" scoped>
    .hexagon {
        position: relative;
        width: 50px;
        height: 28.87px;
        background-color: #232323;
        margin: 14.43px 0;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }

    .hexagon:before,
    .hexagon:after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 35.36px;
        height: 35.36px;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
        transform: scaleY(0.5774) rotate(-45deg);
        background: linear-gradient(90deg, #303030 15%, #232323 65%, #080808 100%);
        left: 7.3223px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }

    .hexagon:before {
        top: -17.6777px;
    }

    .hexagon:after {
        bottom: -17.6777px;
    }

    /*cover up extra shadows*/
    .hexagon span {
        display: block;
        position: absolute;
        top:0px;
        left: 0;
        width:50px;
        height:28.8675px;
        z-index: 2;
        background: linear-gradient(90deg, #303030 15%, #232323 65%, #080808 100%);
    }
</style>
