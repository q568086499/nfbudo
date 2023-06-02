<template>
    <div class="timeWrap">
        <div id="honey"></div>
        <!-- <div class="header">
            <h2>荣誉奖项</h2>
        </div> -->
        <div class="swiper" v-if="years.length > 0">
            <div class="swiper-nav" :style="{'top':`${yearTop}px`}">
                <div class="swiper-time" :style="{'top':`${yearScrollTop}px`}">
                    <div class="yearBox">
                        <p
                            class="year"
                            v-for="(item, index) in years"
                            :key="index"
                            :class="[floor===index?'yearsAct':'']"
                            @click="changeFloor(index)"
                        >
                            {{ item }}
                        </p>
                    </div>
                </div>
                <i class="line" :style="{'height':`${(years.length - 1) * 80}px`}"></i>
            </div>
            <div style="width:200px"></div>
            <div class="swiper-contnet" :style="{'padding-bottom':`${wrapPadding}px`}">
                <div class="news" v-for="(item, index) in years" :key="index">
                    <h5 class="yearTit">{{ item }}</h5>
                    <a
                        v-for="(val, ind) in news[item]"
                        :href="val.file || val.link || 'javascript:void(0)'"
                        :key="ind"
                        :class="[newsAct===(index*100+ind)?'act':'']"
                        @click="newsAct=(index*100+ind);"
                        :target="[(val.file || val.link)?'_blank':'']"
                        rel="nofollow"
                        v-html="showData(val.title)"
                    >
                    </a>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="noMore">
                <p>很抱歉，没有符合条件的结果</p>
                <p>请修改搜索词</p>
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
                years: [],
                news: {},
                newsData: [],
                isPc: true,
                newsAct: '',
                actImg: '',
                yearTop: 50,
                markArr: [],
                floor: '',
                yearScrollTop: 0,
                wrapPadding: 0,
                keyword: ''
            };
        },
        computed: {
        },
        props: {
            category: {
                default: '24'
            },
            fixHeight: {
                default: 0
            }
        },
        created () {
            if (/(iPhone|iOS|Android)/i.test(navigator.userAgent)) { this.isPc = false; }
            // AWARD
            this.$api.index.articles({ category: this.category, page_num: '999' }).then(res => {
                this.years = res.data.years;
                let map = res.data.yearMap;
                this.news = map;
                this.actImg = res.data.yearMap[res.data.years[0]][0].image;
                this.$nextTick(res => {
                    let arr = document.querySelectorAll('.yearTit');
                    let markArr = [];
                    arr.forEach(res => {
                        markArr.push(res.offsetTop + 450 + Number(this.fixHeight));
                    });
                    let el = document.querySelector('.main');
                    el.addEventListener('scroll', e => {
                        let st = el.scrollTop;
                        let ind = 0;
                        for (let i = 0; i < markArr.length; i++) {
                            if (st > markArr[i + 1]) {
                                ind++;
                            }
                            this.floor = ind;
                            if (arr.length > 5) {
                                this.yearScrollTop = ind * -80;
                            }
                        }
                    });
                });
            });
        },
        mounted () {
            this.wrapPadding = document.body.offsetHeight - 715;
            let el = document.querySelector('.main');
            el.addEventListener('scroll', e => {
                try {
                    let st = el.scrollTop;
                    let timeWrap = document.querySelector('.timeWrap').offsetTop;
                    let fixTop = this.getElementTop(document.querySelectorAll('.yearTit')[0], 'body');
                    if (timeWrap === 0) { timeWrap = 580; }
                    if (st >= timeWrap) {
                        this.yearTop = st - fixTop + 200;
                    } else {
                        this.yearTop = 50;
                    }
                } catch (e) { console.log(e); }
            });
        },
        methods: {
            checkPara (val, para) {
                if (val.indexOf(para) !== -1 && para !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            showData (val) {
                val = val + '';
                if (this.checkPara(val, this.keyword)) {
                    // 如果搜索结果记录包含关键字中的任何一个，那么修改样式
                    return val.replace(this.keyword, "<span style='color:#e62828'>" + this.keyword + '</span>');
                } else {
                    return val; // 不做任何修改
                }
            },
            search (e) {
                this.keyword = e;
                this.$api.index.articles({ category: this.category, page_num: '999', q: e }).then(res => {
                    this.years = res.data.years;
                    let map = res.data.yearMap;
                    this.news = map;
                    this.actImg = res.data.yearMap[res.data.years[0]][0].image;
                    this.$nextTick(res => {
                        let arr = document.querySelectorAll('.yearTit');
                        let markArr = [];
                        arr.forEach(res => {
                            markArr.push(res.offsetTop + 450 + Number(this.fixHeight));
                        });
                        let el = document.querySelector('.main');
                        el.addEventListener('scroll', e => {
                            let st = el.scrollTop;
                            let ind = 0;
                            for (let i = 0; i < markArr.length; i++) {
                                if (st > markArr[i + 1]) {
                                    ind++;
                                }
                                this.floor = ind;
                                if (arr.length > 5) {
                                    this.yearScrollTop = ind * -80;
                                }
                            }
                        });
                    });
                });
            },
            getElementTop (el, targetEl) {
                const parent = el.offsetParent;
                const top = el.offsetTop;
                return parent && parent !== targetEl ? this.getElementTop(parent, targetEl) + top : top;
            },
            changeFloor (e) {
                this.floor = e;
                let fixTop = this.getElementTop(document.querySelectorAll('.yearTit')[0], 'body');
                document.querySelector('.main').scrollTo(0, document.querySelectorAll('.yearTit')[e].offsetTop + fixTop - 100);
                if (this.years.length > 5) {
                    this.yearScrollTop = e * -80;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    #honey{
        height: 0;
        position: relative;
        top: -100px;
    }
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
    .noMore{
        margin:160px auto 0;
        font-family: PingFang SC;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        color: #333333;
        p:last-child{
            margin-top: 20px;
            font-size: 12px;
            color: #666666;
        }
    }
    .timeWrap{
        margin:50px auto;
        width: 1180px;
        // max-width: 1180px;
        // width: 100%;
        min-height: 56vh;
        box-sizing: border-box;
        h2{
            font-family: PingFang SC;
            font-size: 30px;
            font-weight: 600;
            line-height: 1.2;
            color: #333;
        }
    }
    .swiper{
        position: relative;
        display: flex;
        img{
            position: absolute;
            top: 150px;
            right: 0;
            width: 300px;
            height: 300px;
            transform: translateY(-50%);
        }
    }
    .swiper-nav{
        position: absolute;
        top: 50px;
        left: 0;
        width: 200px;
        height: 350px;
        overflow: hidden;
        p{
            margin-bottom: 50px;
            display: inline-block;
            text-align: center;
            font-family: D-DIN;
            font-size: 30px;
            font-weight: bold;
            color: #ccc;
        }
        .swiper-time{
            height: 350px;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 0.5s;
            &>div{
                display: flex;
                flex-flow: column;
            }
            p.yearsAct{
                color: #e62828;
                &::after{
                    background: #e62828;
                }
            }
            .year{
                position: relative;
                padding-left: 20px;
                height: 30px;
                line-height: 30px;
                text-align: left;
                box-sizing: border-box;
                cursor: pointer;
                &::after{
                    position: absolute;
                    content: '';
                    top: 50%;
                    left: 0;
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #ccc;
                    transform: translateY(-50%);
                }
            }
        }
        .line{
            position: absolute;
            top: 15px;
            left: 4px;
            width: 1px;
            height: 100%;
            background: #ccc;
            z-index: -1;
        }
        .disable{
            opacity: .5;
            &:hover{
                transform: scale(1);
            }
        }
    }
    .swiper-contnet{
        margin-top: 50px;
        margin-left: 35px;
        padding-right: 0;
        width: 100%;
        // width: 965px;
        overflow: hidden;
        transition: all .3s;
        box-sizing: border-box;
        .news{
            cursor: pointer;
            flex-flow: column;
            h5{
                margin-bottom: 50px;
                font-family: D-DIN;
                font-size: 30px;
                font-weight: bold;
                color: #cccccc;
            }
            a{
                position: relative;
                margin-bottom: 50px;
                font-size: 20px;
                line-height: 1.5;
                font-weight: 600;
                color: #333;
                span{
                    float: right;
                    font-size: 14px;
                    line-height: 1.5;
                    text-align: right;
                    color: #999999;
                }
                &::after{
                    position: absolute;
                    top: 4px;
                    left: -30px;
                    content: '';
                    margin: 4px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #e62828;
                }
                &:last-child{margin-bottom:100px;}

            }
            a.act{
                color: #e02020;
                &::after{
                    margin: 0;
                    width: 16px;
                    height: 16px;
                    background: url('~src/assets/actItem.gif');
                    background-size: 100%;
                }
            }
            display: flex;
        }
        .year{
            opacity: 0.5;
            font-family: D-DIN;
            font-size: 30px;
            font-weight: bold;
            line-height: 0.67;
            letter-spacing: 1px;
            color: #ffffff;
        }
    }
    // div.contnetAct{
    //     z-index: 5;
    //     max-height: 1000px;
    // }
    // @media screen and (min-width: 768px) and (max-width: 1024px) {
    //     .timeWrap{
    //         padding: 34px 20px 20px;
    //     }
    //     .swiper{
    //         img{
    //             transform: translate(-50%,-50%);
    //         }
    //     }
    //     .swiper-contnet{
    //     }
    // }
    // @media (max-width: 750px) {
    //     #honey{padding-top: 10px;}
    //     .timeWrap{
    //         margin-top: rem(50px);
    //         padding: 0;
    //         width: rem(375px);
    //     }
    //     .header{
    //         display: none;
    //         .line{
    //             position: absolute;
    //             bottom: rem(-34px);
    //             left: 0;
    //             width: 100%;
    //             height: 3px;
    //             background-image: url('~src/assets/mobileLine.png');
    //             background-repeat: no-repeat;
    //             background-size: 100% 100%;
    //             &::after{
    //                 content: '';
    //                 position: absolute;
    //                 left: 10%;
    //                 top: 50%;
    //                 width: rem(10px);
    //                 height: rem(10px);
    //                 border: solid 2px #ffffff;
    //                 background-color: #495972;
    //                 border-radius: 50%;
    //                 transform: translate(-50%,-50%);
    //             }
    //         }
    //     }
    //     .swiper-nav{
    //         margin-top: 0;
    //         .line::after{
    //             left: 14%;
    //             top: 50%;
    //         }
    //     }
    //     .swiper-contnet{
    //         padding: rem(20px);
    //         left: rem(20px);
    //         width: rem(270px);
    //         transform: translate(0,0);
    //         &::after{
    //             display: none;
    //         }
    //         .news {
    //             p{
    //                 margin-bottom: rem(16px);
    //             }
    //         }
    //     }
    // }
</style>
