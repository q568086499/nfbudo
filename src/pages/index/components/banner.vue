<template>
    <div class="banner">
        <div class="swiper-container swiper" ref="bannerSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiperItem" v-for="(item,index) in bannerData" :key="index" :style="{'background-image': `url(${item.img})`}">
                    <p class="description" v-html="item.title"></p>
                </div>
            </div>
        </div>
        <div v-if="bannerData.length > 1" class="banner_cover">
            <div class="pagination"></div>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/idangerous.swiper.css';
    import Swiper from 'swiper';
    // eslint-disable-next-line
    Swiper.prototype.plugins.progress=function(a){function b(){for(var b=0;b<a.slides.length;b++){var c=a.slides[b];c.progressSlideSize=e?a.h.getWidth(c):a.h.getHeight(c),c.progressSlideOffset="offsetLeft"in c?e?c.offsetLeft:c.offsetTop:e?c.getOffset().left-a.h.getOffset(a.container).left:c.getOffset().top-a.h.getOffset(a.container).top}d=e?a.h.getWidth(a.wrapper)+a.wrapperLeft+a.wrapperRight-a.width:a.h.getHeight(a.wrapper)+a.wrapperTop+a.wrapperBottom-a.height}function c(b){var c,b=b||{x:0,y:0,z:0};c=1==a.params.centeredSlides?e?-b.x+a.width/2:-b.y+a.height/2:e?-b.x:-b.y;for(var f=0;f<a.slides.length;f++){var g=a.slides[f],h=1==a.params.centeredSlides?g.progressSlideSize/2:0,i=(c-g.progressSlideOffset-h)/g.progressSlideSize;g.progress=i}a.progress=e?-b.x/d:-b.y/d,a.params.onProgressChange&&a.fireCallback(a.params.onProgressChange,a)}var d,e="horizontal"==a.params.mode,f={onFirstInit:function(){b(),c({x:a.getWrapperTranslate("x"),y:a.getWrapperTranslate("y")})},onInit:function(){b()},onSetWrapperTransform:function(a){c(a)}};return f};
    export default {
        computed: {
        },
        data () {
            return {
                bannerData: [{ title: '君子如剑,其形正直', img: 'https://i.imgtg.com/2023/04/09/6ffAa.jpg' }, { title: '我而忘我，空手逐道', img: 'https://i.imgtg.com/2023/04/09/6flQS.jpg' }]
            };
        },
        mounted () {
        },
        methods: {
        },
        created () {
            this.$nextTick(() => {
                new Swiper('.swiper-container', {
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false,
                    loop: true,
                    pagination: '.pagination',
                    paginationClickable: true,
                    progress: true,
                    onProgressChange: function (swiper) {
                        for (let i = 0; i < swiper.slides.length; i++) {
                            let slide = swiper.slides[i];
                            let progress = slide.progress;
                            let translate = progress * swiper.width;
                            let opacity = 1 - Math.min(Math.abs(progress), 1);
                            slide.style.opacity = opacity;
                            swiper.setTransform(slide, 'translate3d(' + translate + 'px,0,0)');
                        }
                    },
                    onTouchStart: function (swiper) {
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.setTransition(swiper.slides[i], 0);
                        }
                    },
                    onSetWrapperTransition: function (swiper, speed) {
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.setTransition(swiper.slides[i], speed);
                        }
                    }
                });
            });
        }
    };
</script>
<style scoped lang="scss">
    .banner_cover{
        position: absolute;
        bottom: 60ox;
        left: 50%;
        width: 100%;
        z-index: 1;
        transform: translateY(-50%);
    }
    .description{
        position: relative;
        margin: 0 auto;
        display: inline-block;
        padding: 20px;
        top: 400px;
        left: 50%;
        font-size: 40px;
        transform: translateX(-100%);
        text-shadow: 0 4px 4px rgba(0,0,0,0.08);
        font-weight: 600;
        line-height: 60px;
        font-family: PingFangSC-Light;
        color: #f7f7f7;
        cursor:default;
        background-color: rgba(0,0,0,.2);
        backdrop-filter:blur(20px);
        user-select: none;
    }
    /deep/ {
        .swiper-container{
            height: 100vh;
            width: 100vw;
        }
        .pagination {
            position: absolute;
            z-index: 20;
            bottom: 30px;
            height: 8px;
            text-align: center;
            .swiper-pagination-switch {
                position: relative;
                display: inline-block;
                width: 40px;
                height: 4px;
                background: rgba($color: #fff, $alpha: .2);
                margin: 0 5px;
                overflow: hidden;
                cursor:pointer;
                &::after{
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 40px;
                    height: 4px;
                    content: '';
                    background: #fff;
                }
            }
            .swiper-active-switch::after {
                transition: all 5s ease-out;
                left: 0;
            }
        }
    }
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        scroll-behavior: smooth;
        .banner_icon{
            position: absolute;
            bottom: 20px;
            left: 50%;
            color: #fff;
            transform: translateX(-50%);
            z-index: 5;
            cursor: default;
            div{
                position: relative;
                margin: 0 auto 6px;
                width: 24px;
                height: 24px;
                background: url('~src/assets/icon_down.png') no-repeat;
                background-size: 100% 100%;
                animation:icon_down ease-out 1.3s infinite;
            }
        }
    }
    @keyframes icon_down {
        0%   {top:-2px;}
        50%  {top:2px;}
        100% {top:-2px;}
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
