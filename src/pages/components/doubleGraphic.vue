<template>
    <div class="wrap">
        <div class="milieu">
            <div class="item" v-for="(item,ind) in datas" :key="ind" @click="linkTo(item.link)" :class="[item.link?'pointer':'']">
                <img :src="item.image_big">
                <div :class="['textarea',item.contents?'longModel':'']">
                    <p class="tit">{{item.title}}</p>
                    <p v-if="item.contents" class="subtitle">{{item.contents}}</p>
                    <p class="description">{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        directives: {
        },
        data () {
            return {
                isPc: true
            };
        },
        computed: {
        },
        props: {
            datas: {},
            category: {
                default: 10
            },
            title: {
                type: String
            }
        },
        created () {
            if (/(iPhone|iOS|Android)/i.test(navigator.userAgent)) { this.isPc = false; }
        },
        mounted () {
        },
        methods: {
            linkTo (e) {
                if (e) {
                    window.open(e);
                }
            }
            // tagRule: function (val) {
            //     console.log(val);
            //     let arr = val.replace(/、/g, '<br>');
            //     return arr;
            // }
        }
    };
</script>

<style scoped lang="scss">
    @font-face {
        font-family: 'D-DIN';  //重命名字体名
        src: url('~src/assets/D-DIN-Bold.ttf');  //引入字体
    }
    @function rem($px){
        $rem:37.5px;
        @return ($px/$rem)*1rem;
    }
    .header{
        position: relative;
    }
    .header .swiper-navigation{
        height: 12px;
        width: 60px;
    }
    .wrap{
        margin: 50px 0;
        width: 100%;
    }
    .milieu{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .pointer{
            cursor: pointer;
            div.textarea{
                cursor: pointer;
            }
        }
        .item{
            margin-bottom: 20px;
            width: 580px;
            overflow: hidden;
            &:nth-last-child(2), &:last-child{
                margin-bottom: 0;
            }
            img{
                width: 580px;
                height: 290px;
                vertical-align: bottom;
                transition: all .4s;
                object-fit: cover;
                object-position: top;
            }
            div.longModel {
                height: 240px;
            }
            .textarea{
                position: relative;
                z-index: 1;
                padding: 30px 50px;
                height: 186px;
                box-sizing: border-box;
                background-color: #f7f7f7;
                cursor: default;
                .tit{
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 1.5;
                    letter-spacing: 1px;
                    color: #333333;
                }
                .subtitle{
                    height: 20px;
                    margin: 10px 0 14px;
                    font-family: PingFang SC;
                    font-size: 20px;
                    line-height: 1;
                    letter-spacing: 1px;
                    text-align: justify;
                    color: #333333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .description{
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    min-height: 60px;
                    font-size: 16px;
                    line-height: 1.88;
                    letter-spacing: 1px;
                    text-align: justify;
                    color: #333;
                }
            }
            &:hover{
                img{
                    transition: all .4s;
                    transform: scale(1.1);
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .wrap{
            padding: 34px 20px 20px;
        }
    }
    @media (max-width: 750px) {
        #management{padding-top: rem(20px);}
        .wrap{
            margin-top: 0;
            padding: rem(20px);
            width: rem(375px);
            background-position: top right;
            background-size: rem(375px) rem(150px);
            background-repeat: no-repeat;
        }
        .header{
            padding-bottom:rem(20px);
            width: 100%;
            box-sizing: border-box;
            h2{
                font-size: rem(24px);
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.25;
                letter-spacing: normal;
                color: #fff;
            }
            p{display: none;}
            .swiper-navigation{display: none;}
        }
    }
</style>
