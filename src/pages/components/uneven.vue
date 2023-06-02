<template>
    <div class="wrap">
        <div id="development"></div>
        <div class="top">
            <div class="item" v-for='(item,index) in datas' :key='index'>
                <div class="textarea">
                    <div class="title">
                        <span>{{ item.title }}</span>
                    </div>
                    <p class="description">{{ item.description }}</p>
                </div>
                <img :src="item.image">
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
            datas: {
                type: Array,
                default: () => [{
                    title: '业务概览',
                    description: '基于全新的发展战略，值得买科技主营业务分为三大板块：消费内容、营销服务和消费数据。',
                    image: 'https://img.zhidemai.com/202012/28/5fe9a36bc63ce4582.png'
                }]
            },
            category: {
                default: 10
            },
            title: {
                type: String
            }
        },
        created () {
            // if (/(iPhone|iOS|Android)/i.test(navigator.userAgent)) { this.isPc = false; }
        },
        mounted () {
        },
        methods: {
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
        margin-bottom: 50px;
        width: 100%;
    }
    .wrap h2{
        font-size: 30px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        color: #333;
    }
    .item{
        position: relative;
        margin-top: 100px;
        width: 1180px;
        // width: 100%;
        // max-width: 1180px;
        height: 430px;
        display: flex;
        flex: 0 0 50%;
        justify-content: space-between;
        flex-direction: row-reverse;
        overflow: hidden;
        >div,.textarea{
            padding: 100px 254px 100px 60px;
            width: 634px;
            background-image: linear-gradient(to right, #f6f7f4 76%, rgba(246, 247, 244, 0) 98%);
            box-sizing: border-box;
        }
        >img{
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: -1;
            height: 100%;
            transition: transform .4s;
        }
        // &:hover img{
        //     transform: scale(1.1);
        // }
        .textarea{
            min-height: 430px;
            cursor: default;
            .title{
                position: relative;
                font-size: 30px;
                font-weight: 600;
                line-height: 1.5;
                letter-spacing: 1px;
                color: #333333;
                &::after{
                    position: absolute;
                    bottom: -16px;
                    left: 0;
                    content: '';
                    width: 30px;
                    height: 4px;
                    background-color: #e02020;
                }
            }
            .description{
                margin-top: 30px;
                width: 320px;
                font-size: 16px;
                line-height: 1.88;
                letter-spacing: 1px;
                text-align: justify;
                color: #666666;
            }
        }
    }
    .item:nth-child(odd){
        flex-direction: row;
        &>div{
            background-image: linear-gradient(to right, #f6f7f4 76%, rgba(246, 247, 244, 0) 98%);
        }
    }
    .item:nth-child(even){
        &>div{
            display: flex;
            flex-flow: column;
            padding: 100px 60px 100px 254px;
            background-image: linear-gradient(to left, #f4fafc 76%, rgba(244, 250, 252, 0) 98%);
            // .title::after{left:auto;right: 0;}
        }
        >img{
            left: 0;
            right: auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .wrap{
            padding: 34px 20px 20px;
        }
        .top .item{
            margin: 20px auto 0;
            padding: 0;
            width: 700px;
            height: 700px;
            flex-direction: row;
            .textarea{
                padding: 30px 20px 50px;
                box-sizing: border-box;
                width: 100%;
                height: 230px;
                background-image: linear-gradient(to bottom, #f7f7f7 76%, rgba(247, 247, 247, 0) 98%);
                p{
                    width: auto;
                }
            }
            img{
                top: 20%;
                left: 0;
                width: 700px;
                height: auto;
            }
            &:nth-child(odd) > div{
                align-items: flex-start;
                .title:after{
                    left: 0;
                }
            }
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
        .top {margin-top: rem(10px);}
        .top .item{
            position: relative;
            margin: rem(20px) auto 0;
            padding: 0;
            height: rem(360px);
            min-height: auto;
            width: rem(335px);
            overflow: hidden;
            box-sizing: border-box;
            flex-direction: column;
            >div{
                width: 100%;
            }
            .textarea{
                padding: rem(30px) rem(20px) rem(50px);
                box-sizing: border-box;
                width: 100%;
                height: rem(260px);
                min-height: 0;
                background-image: linear-gradient(to bottom, #f7f7f7 76%, rgba(247, 247, 247, 0) 98%);
                .title{
                    font-size: rem(16px);
                    &::after{
                        bottom: rem(-10px);
                    }
                }
                .description{
                    margin-top: rem(20px);
                    width: auto;
                    font-size: rem(14px);
                    line-height: 1.57;
                }
            }
            & > img{
                position: absolute;
                left: 0;
                bottom: 0;
                width: rem(335px);
                height: rem(206px);
                object-fit: cover;
                object-position: center;
            }
            &:nth-child(odd) > div{
                align-items: flex-start;
                .title:after{
                    left: 0;
                }
            }
        }
        .item:nth-child(even){
            flex-direction: column;
        }
        .item:nth-child(odd) > img {
            left: auto;
            right: 0;
        }
    }
</style>
