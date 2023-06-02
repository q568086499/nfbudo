<!--
    产品与服务
    交互效果待优化为tranfrom：scale
-->
<template>
    <div class="wrap">
        <div class="section">
            <div class="team">
                <div class="userBox">
                    <div class="item" v-for="(item,index) in datas" :key='index'>
                        <div class="img_big">
                            <img :src="item.image_big">
                        </div>
                        <div class="info">
                            <div>
                                <img v-if="item.image" :src="item.image">
                                <p class="name">{{ item.title }}</p>
                            </div>
                            <p v-if="item.description" class="tag">{{ item.description }}</p>
                            <p class="content">{{ item.contents }}</p>
                        </div>
                    </div>
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
                datas: [],
                isPc: true
            };
        },
        computed: {
        },
        props: {
            category: {
                default: 10
            },
            title: {
                type: String
            }
        },
        created () {
            if (/(iPhone|iOS|Android)/i.test(navigator.userAgent)) { this.isPc = false; }
            this.$api.index.articles({ category: this.category }).then(res => {
                let arr = res.data.list;
                this.datas = arr;
            });
        },
        mounted () {
        },
        methods: {
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
        margin-bottom: 50px;
        width: 100%;
        min-height: 70vh;
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
    .section{
        // width: 100%;
        // max-width: 1180px;
        width: 1180px;
        margin: 0 auto;
    }
    .team{
        display: flex;
        flex-wrap: wrap;
    }
    .userBox {
        margin-top: 30px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .item{
            margin-top: 20px;
            width: 100%;
            height: 265px;
            display: flex;
            background-color: #f7f7f7;
            box-sizing: border-box;
            line-height: 1.5;
            letter-spacing: 1px;
            cursor: default;
            .img_big {
                width: 265px;
                height: 265px;
                img{
                    width: 265px;
                    height: 265px;
                    object-fit: cover;
                    object-position: top;
                }
            }
            .info{
                padding: 50px;
                div{
                    display: flex;
                    img{
                        margin-right: 10px;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                }
            }
            // &:hover{
            //     transition: all .3s ease;
            //     box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.15);
            // }
            .name{
                margin-bottom: 10px;
                font-size: 20px;
                font-weight: 600;
                color: #333;
            }
            .tag{
                font-size: 14px;
                line-height: 1.5;
                letter-spacing: 1px;
                color: #333333;
            }
            .content{
                margin-top: 20px;
                font-size: 14px;
                line-height: 2;
                text-align: justify;
                color: #999999;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
            }
        }
    }
    // @media screen and (min-width: 768px) and (max-width: 1024px) {
    //     .wrap{
    //         padding: 34px 20px 20px;
    //     }
    //     .userBox {
    //         // width: rem(240px);
    //         .item{
    //             margin-top: rem(20px);
    //             flex-flow: row;
    //             width: 100%;
    //             height: auto;
    //             img{
    //                 width: 195px;
    //                 height: 140px;
    //             }
    //         }
    //     }
    // }
    // @media (max-width: 750px) {
    //     #management{padding-top: rem(20px);}
    //     .wrap{
    //         margin-top: 0;
    //         padding: rem(20px);
    //         width: rem(375px);
    //         background-position: top right;
    //         background-size: rem(375px) rem(150px);
    //         background-repeat: no-repeat;
    //     }
    //     .header{
    //         padding-bottom:rem(20px);
    //         width: 100%;
    //         box-sizing: border-box;
    //         h2{
    //             font-size: rem(24px);
    //             font-weight: 600;
    //             font-stretch: normal;
    //             font-style: normal;
    //             line-height: 1.25;
    //             letter-spacing: normal;
    //             color: #fff;
    //         }
    //         p{display: none;}
    //         .swiper-navigation{display: none;}
    //     }
    //     .team{
    //         .userBox{
    //             margin: 0;
    //             width: 100%;
    //             .item{
    //                 margin-top: rem(20px);
    //                 flex-flow: row;
    //                 width: 100%;
    //                 height: auto;
    //                 img{
    //                     width: 195px;
    //                     height: 140px;
    //                     object-fit: cover;
    //                      object-position:top;
    //                 }
    //                 .info{
    //                     padding: rem(16px);
    //                 }
    //                 .name{
    //                     font-size: rem(20px);
    //                     margin-bottom: rem(8px);
    //                 }
    //                 .tag, .content{font-size: rem(14px);}
    //             }
    //         }
    //     }
    // }
</style>
