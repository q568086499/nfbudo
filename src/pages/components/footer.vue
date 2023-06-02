<template>
    <div class="footerWrap" ontouchstart>
        <!-- <a href="javascript:void(0);"> -->
        <div class="footercontent">
            <div class="top">
                <!-- <ul>
                    <li v-for="(item,ind) in linkData" :key="ind">
                        <a :href="item.link" target="_blank" rel="nofollow">{{ item.title }}</a>
                    </li>
                </ul>
                <div class="qrcodeGroup">
                    <div class="wechat">
                        <i></i>
                        <div :style="{'background-image': `url(${qrCode})`}" class="qrcode"></div>
                    </div>
                    <a :href="weibo" target="_blank">
                        <div class="weibo">
                            <i></i>
                        </div>
                    </a>
                </div> -->
            </div>
            <div class="bottom">
                <div>
                    <p>
                        版权所有 本站内容未经书面许可,禁止一切形式的转载。 © copyright 2010-2021 值得买科技. All rights reserved.<br>
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010602007734" class="govA"><img src="~src/assets/gov.png" class="govImg"/><span>京公网安备 11010602007734号 |</span></a>
                        <a target="_blank" href="https://beian.miit.gov.cn/" class="govA">京ICP备12048526号-8</a> | 违法和不良信息举报电话：4008108106-9 | 违法和不良信息举报邮箱：service@smzdm.com 营业执照 北京市诚信创建企业<br>
                        公司名称：北京值得买科技股份有限公司 地址：北京市丰台科技园区诺德中心二期11号楼38层 座机：010-56640700
                    </p>
                </div>
                <a href="/"><img src="https://i.imgtg.com/2023/04/09/6fubX.png" alt="值得买科技集团官网"></a>
            </div>
        </div>
        <!-- </a> -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                qrCode: 'http://img.zhidemai.com/202008/03/5f27aa3ad42c91722.png',
                weibo: 'https://weibo.com/smzdm',
                linkData: [{ title: '加入我们', link: 'www.baidu.com' }, { title: '隐私政策', link: 'www.baidu.com' }]
            };
        },
        props: [ ],
        created () {
        },
        mounted () {
            document.body.addEventListener('touchstart', function () {});
        },
        methods: {
        }
    };
</script>

<style scoped lang="scss">
    @function rem($px){
        $rem:37.5px;
        @return ($px/$rem)*1rem;
    }
    .footerWrap{
        // margin-top: 100px;
        padding-bottom: 20px;
        width: 100vw;
        min-height: 210px;
        background-color: #333333;
        box-sizing: border-box;
        .footercontent{
            margin:0 auto;
            width: 100%;
            width: 1180px;
            // max-width: 1180px;
            .top{
                display: flex;
                height: 84px;
                color: #fff;
                border-bottom: 1px solid #666;
                justify-content: space-between;
                ul{
                    display: flex;
                    font-size: 14px;
                    line-height: 84px;
                    letter-spacing: 1px;
                    color: #ffffff;
                    li{margin-right: 64px;font-weight: 600;font-family: "Open Sans","PingFang SC","Microsoft YaHei","Helvetica Neue","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,sans-serif!important;}
                }
                .qrcodeGroup{
                    display: flex;
                    width: 70px;
                    justify-content: space-between;
                    align-items: center;
                    div{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 28px;
                        height: 28px;
                        border-radius: 4px;
                        i{
                            width: 100%;
                            height: 100%;
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-color: #333;
                        }
                        &:-webkit-any-link div{
                            display: block;
                        }
                        &:hover div{
                            display: block;
                        }
                        div{
                            position: absolute;
                            display: none;
                            top: -110px;
                            left: -36px;
                            width: 100px;
                            height: 100px;
                            z-index: 3;
                            background-repeat: no-repeat;
                            box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
                            background-size: 100% 100%;
                        }
                    }
                    .wechat i{
                        background-image: url('~src/assets/wechat.png');
                        &:hover{
                            opacity: .8;
                        }
                    }
                    .weibo i{
                        background-image: url('~src/assets/weibo.png');
                        &:hover{
                            opacity: .8;
                        }
                    }
                    // .download{
                    //     width: 96px;
                    //     font-size: 14px;
                    //     font-weight: 600;
                    //     line-height: 28px;
                    //     color: #000000;
                    // }
                }
            }
            .bottom{
                padding-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                line-height: 30px;
                color: #999999;
                img{
                    width: 130px;
                    height: 36px;
                }
                .govA{
                    display:inline-block;
                    text-decoration:none;
                }
                .govImg{
                    width:14px;
                    height:14px;
                    vertical-align:middle;
                    margin:0 3px 2px 0;
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .wrap{
            padding: rem(34px) rem(20px) rem(20px);
            height: rem(320px);
        }
    }
    @media (max-width: 768px) {
        .footerWrap {
            // margin-top: rem(50px);
            padding: 0 rem(20px);
            .content{
                .bottom{
                    img{display: none;}
                    line-height: 1.5;
                    p{
                        margin-bottom: rem(20px);
                    }
                }
                .top {
                    position: relative;
                    display: block;
                    border-bottom:0;
                    height: auto;
                    ul{
                        flex-flow: column;
                        line-height: 55px;
                        li{
                            width: 100%;
                            border-bottom: 1px solid #666;
                        }
                    }
                    .qrcodeGroup{
                        position: absolute;
                        top: rem(12px);
                        right: 0;
                        div{
                            background: none;
                            i{
                                width: rem(18px);
                                height: rem(18px);
                            }
                        }
                        .wechat i{
                            background-image: url('~src/assets/mobileWechat.png');
                        }
                        .weibo i{
                            background-image: url('~src/assets/mobileSina.png');
                        }
                    }
                }
            }
        }
    }
</style>
