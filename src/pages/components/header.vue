<template>
    <div class="headerWrap" :class="[isTop?'':'while']" :style="{'top': height}" @mousemove="mouseOnSrc" @mouseleave="mouseLeaSrc">
        <!-- <div class="wapCover"></div> -->
        <div class="navWrap">
            <a class="logoLink" href="/">
                <img class="logo" src='https://i.imgtg.com/2023/04/09/6fubX.png' alt="值得买科技集团官网"/>
            </a>
            <ul class="nav">
                <li class="select" v-for="(ul, index) in ulList" :key="index">
                    <span v-if="wap" @touchstart="wapEvent(index)" :class="[isTop?'':'black']" :data='ul.ul.link'>{{ ul.ul.tit }}</span>
                    <a v-else :href="ul.ul.link"><span :class="[isTop?'':'black']">{{ ul.ul.tit }}</span></a>
                    <ul class="subset">
                        <div class="test">
                            <a v-for="(li,ind) in ul.li" @click="event(index)" :key="ind" :href="li.link" rel="nofollow"><li>{{ li.tit }}</li></a>
                        </div>
                    </ul>
                </li>
            </ul>
            <div class="mobileNav" :class="[isTop?'':'icon_black',navFlag?'navWrapAct':'']" @click="navFlag=!navFlag">
                <div class="mobileNavCover" :class="[navFlag?'navCoverAct':'']">
                    <div class="mobileNavWrap" :class="[navFlag?'navAct':'']">
                        <a :href="ul.ul.link" v-for="(ul, ind) in ulList" :key="ind">{{ ul.ul.tit }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                mark: '',
                wap: false,
                isTop: true,
                navFlag: false,
                height: '0',
                count: '',
                ulList: [
                    { ul: { tit: '剑道', link: '/introduction/' } },
                    { ul: { tit: '空手道', link: '/introduction/' } },
                    { ul: { tit: '课程中心', link: '/introduction/' } },
                    { ul: { tit: '馆长介绍', link: '/introduction/' } }
                ]
                // ulList: [
                //     {
                //         ul: { tit: '场馆介绍', link: '/introduction/' },
                //         // li: [{ tit: '集团简介', link: '/pages/introduction/#synopsis' }, { tit: '董事长寄语', link: '/pages/introduction/#chairman' }, { tit: '发展沿革', link: '/pages/introduction/#development' }, { tit: '管理团队', link: '/pages/introduction/#management' }, { tit: '企业理念', link: '/pages/introduction/#philosophy' }, { tit: '愿景与使命', link: '/pages/introduction/#introduction' }, { tit: '核心价值观', link: '/pages/introduction/#culture' }]
                //         li: [{ tit: '场馆介绍', link: '/introduction/#synopsis' }]
                //     }, {
                //         ul: { tit: '项目介绍', link: '/news/' },
                //         li: [{ tit: '剑道', link: '/news/#news' }, { tit: '空手道', link: '/news/#honey' }]
                //     }, {
                //         ul: { tit: '学员风采', link: '/ecology/' },
                //         li: [{ tit: '消费内容', link: '/ecology/#ecology' }]
                //     }, {
                //         ul: { tit: '武道资料', link: '/personnel/' },
                //         li: [{ tit: '剑道', link: '/news/#news' }, { tit: '空手道', link: '/news/#honey' }]
                //     }, {
                //         ul: { tit: '联系我们', link: '/contact/' },
                //         li: [{ tit: '联系方式', link: '/contact/#contact' }, { tit: '商务合作', link: '/contact/#cooperation' }, { tit: '媒体联系', link: '/contact/#media' }]
                //     }
                // ]
            };
        },
        props: {
            hasBanner: {
                default: true
            }

        },
        methods: {
            event (e) {
                let el = document.querySelectorAll('.test')[e];
                el.style.maxHeight = 0;
                if (this.wap) {
                    this.count = this.mark;
                    this.mark = '';
                } else {
                    setTimeout(() => {
                        el.style = '';
                    }, 500);
                }
            },
            wapEvent (e) {
                if (this.count !== '') {
                    let el = document.querySelectorAll('.test')[this.count];
                    el.style = '';
                }
                if (this.mark === e) {
                    location.href = this.ulList[e].ul.link;
                }
                this.mark = e;
            },
            mouseOnSrc () {
                document.querySelector('.logo').setAttribute('src', 'https://i.imgtg.com/2023/04/09/6fubX.png');
            },
            mouseLeaSrc () {
                if (this.isTop) {
                    document.querySelector('.logo').setAttribute('src', 'https://i.imgtg.com/2023/04/09/6fubX.png');
                }
            }
        },
        mounted () {
            let lt = 0;
            setTimeout(() => {
                if (this.hasBanner) {
                    document.addEventListener('scroll', e => {
                        let st = document.documentElement.scrollTop;
                        if (st > 0) {
                            this.isTop = false;
                            // document.querySelector('.logo').setAttribute('src', require('src/assets/logo_black.png'));
                            if (st > lt) {
                                this.height = '-70px';
                            } else {
                                this.height = '0px';
                            }
                            lt = st;
                        } else {
                            this.height = '0px';
                            this.isTop = true;
                            // document.querySelector('.logo').setAttribute('src', require('src/assets/logo_white.png'));
                        }
                    });
                } else {
                    this.isTop = false;
                    // document.querySelector('.logo').setAttribute('src', require('src/assets/logo_black.png'));
                }
            }, 0);
        },
        created () {
            if (/(iPhone|iOS|Android)/i.test(navigator.userAgent)) {
                this.wap = true;
            }
        }
    };
</script>

<style scoped lang="scss">
    @function rem($px){
        $rem:37.5px;
        @return ($px/$rem)*1rem;
    }
    .headerWrap{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 20;
        transition: top .5s;
        .hidden{
            cursor: pointer;
        }
        &:hover{
            background: #fff;
            box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
            .navWrap .nav .select span{color: #333;}
        }
    }
    .while{
        background: #fff;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
    }
    .black {
        color: #333!important;
    }
    .wapCover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: rgba(0,255,255, .2);
        z-index: 1;
    }
    .navWrap{
        margin: 0 auto;
        // width: 100%;
        height: 70px;
        // max-width: 1180px;
        width: 1180px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logoLink{
            display: block;
            width: 130px;
            height: 36px;
        }
        .logo{
            display: block;
            width: 130px;
            height: 36px;
            flex:0 0 auto;
            // background-image: url('~src/assets/logo_white.png');
            // background-repeat: no-repeat;
            // background-size: 100% 100%;
        }
        .nav{
            // width: 100%;
            // max-width: 1180px;
            width: 1180px;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            cursor:pointer;
            .test{
                margin: 6px;
                max-height: 0;
                background: #fff;
                box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                transition: all .5s;
            }
            .select{
                padding: 0 24px;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                font-family: "Open Sans","PingFang SC","Microsoft YaHei","Helvetica Neue","Hiragino Sans GB","WenQuanYi Micro Hei",Arial,sans-serif!important;
                font-weight: 600;
                span{color: #fff;}
                span::after{
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    display: none;
                    width: 80px;
                    height: 4px;
                    background: #e62828;
                    transform: translateX(-50%);
                }
                &:hover span::after{
                    display: block;
                }
                &:hover .test{
                    max-height: 500px;
                }
                &:hover .subset{
                    height: auto;
                    padding-top: 10px;
                    // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
                    // li{
                    //     transform: translateY(0%);
                    // }
                }
            }
            .subset{
                position: absolute;
                top: 70px;
                left: 50%;
                display: flex;
                padding-top: 0;
                height: 0;
                width: 240px;
                line-height: 60px;
                text-align: center;
                flex-direction: column;
                transform: translateX(-50%);
                // transition: all .4s;
                overflow: hidden;
                // li{
                //     background: #fff;
                //     transform: translateY(-500%);
                //     transition: all .4s;
                // }
                li:hover{
                    color: #e62828;
                    background: #f7f7f7;
                }
            }
        }
    }
    .mobileNavWrap{
        display: none;
    }
    // @media screen and (min-width: 768px) and (max-width: 1024px) {
    // }
    @media (max-width: 770px) {
        .headerWrap{
            height: rem(50px);
            transition: all 0s;
        }
        div.navWrap div.navWrapAct{ background-image:url('~src/assets/icon_close_black.png')!important;}
        .navWrap div.icon_black{background-image:url('~src/assets/icon_menu_black.png')}
        .navWrap {
            padding: 0 20px;
            height: rem(50px);
            box-sizing: border-box;
            .logo{
                width: 110px;
                height: 30px;
            }
            .nav{display: none;}
            .mobileNav{
                width: 20px;
                height: 20px;
                display: block;
                background-image:url('~src/assets/icon_menu_white.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                div.navCoverAct{
                    display: block;
                }
                .mobileNavCover{
                    display: none;
                    position: fixed;
                    top: rem(50px);
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.7);
                }
            }
            .mobileNavWrap{
                position: fixed;
                top:-500px;
                left: 0;
                width: 100vw;
                display: block;
                background: #fff;
                opacity: 0;
                z-index: 19;
                transition: all 0.4s;
                a{
                    display: block;
                    width: 100vw;
                    line-height: rem(60px);
                    color: #333;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }
        .navWrap div.navAct{top: rem(50px);opacity: 1;}
    }
</style>
