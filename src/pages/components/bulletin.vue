<template>
    <div class="wrap" :style="{'background': hasBGC===true?'#f7f7f7':'#fff'}">
        <div id="bulletin"></div>
        <h2>{{ title }}</h2>
        <!-- category==='announcement'?'':'mp', -->
        <div class="content" :class="[isMin?'isMin':'']">
            <div v-for="(item,ind) in bulletinData" :key='ind' class="bulletinItem" @click="linkTo(item.file || item.link)">
                <!-- <a :href="" target="_blank"> -->
                <h4>{{ item.title }}</h4>
                <p>{{ item.created_at }}</p>
                <!-- </a> -->
            </div>
            <div v-if="hasMore" class="getMore" @click="getMore">
                查看更多<i></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
                bulletinData: [],
                hasMore: false,
                title: '',
                page: 1
            };
        },
        computed: {
        },
        props: {
            category: {
                default: 3
            },
            hasBGC: {
                default: true
            },
            isMin: {
                default: false
            }
        },
        created () {
            if (this.category === 3) {
                this.$api.index.investment({ size: '10', page: this.page }).then(res => {
                    this.bulletinData = res.data;
                    this.hasMore = res.hasMore;
                    this.title = '定期报告';
                });
            } else if (this.category === 8) {
                this.$api.index.articles({ category: this.category, size: '10', page: this.page }).then(res => {
                    this.bulletinData = res.data.list;
                    this.hasMore = res.data.hasMore;
                    this.title = '公司治理';
                });
            } else if (this.category === 'laster') {
                this.$api.index.latestAnnouncement({ size: '10', page: this.page }).then(res => {
                    this.bulletinData = res.data;
                    this.hasMore = res.hasMore;
                    this.title = '最新公告';
                });
            } else {
                this.$api.index.announcement({ size: '10', page: this.page }).then(res => {
                    this.bulletinData = res.data;
                    this.hasMore = res.hasMore;
                    this.title = '调研活动';
                });
            }
        },
        mounted () {
        },
        methods: {
            linkTo (e) {
                if (e) {
                    window.open(e);
                }
            },
            getMore () {
                this.page = this.page + 1;
                if (this.category === 3) {
                    this.$api.index.investment({ size: '10', page: this.page }).then(res => {
                        this.bulletinData = this.bulletinData.concat(res.data);
                        this.hasMore = res.hasMore;
                    });
                } else if (this.category === 8) {
                    this.$api.index.articles({ category: this.category, size: '10', page: this.page }).then(res => {
                        this.bulletinData = this.bulletinData.concat(res.data.list);
                        this.hasMore = res.data.hasMore;
                    });
                } else if (this.category === 'laster') {
                    this.$api.index.latestAnnouncement({ size: '10', page: this.page }).then(res => {
                        this.bulletinData = res.data;
                        this.hasMore = res.hasMore;
                    });
                } else {
                    this.$api.index.announcement({ size: '10', page: this.page }).then(res => {
                        this.bulletinData = this.bulletinData.concat(res.data);
                        this.hasMore = res.hasMore;
                    });
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    #bulletin{
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
    .wrap{
        margin-top: 100px;
        width: 100%;
        background: #f7f7f7;
        box-sizing: border-box;
        border: 1px solid transparent;
        h2{
            margin: 0 auto;
            // max-width: 1180px;
            width: 1180px;
            margin-bottom: 50px;
            font-size: 30px;
            font-weight: 600;
            line-height: 1.2;
            color: #333333;
        }
        .mp{
            padding: 50px 0 0;
        }
        .content{
            margin: 0 auto;
            width: 100%;
            // max-width: 1180px;
            width: 1180px;
            position: relative;
            transition: all .4s;
            box-sizing: border-box;
            .bulletinItem{
                position: relative;
                cursor: pointer;
                &::after{
                    opacity: 0;
                    position: absolute;
                    top:8px;
                    right: 0;
                    width: 44px;
                    height: 44px;
                    background-image: url('~src/assets/default.png');
                    background-size: 100% 100%;
                    border-radius: 50%;
                    content: '';
                }
                &:hover{
                    &::after{opacity: 1;}
                }
                h4{
                    max-width: 1100px;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 1.5;
                    letter-spacing: 1px;
                    color: #333333;
                    white-space:nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p{
                    margin-top: 8px;
                    margin-bottom: 60px;
                    font-size: 14px;
                    line-height: 1.57;
                    letter-spacing: 1px;
                    color: #999999;
                }
                &:hover{
                    h4{color:#999;}
                }
            }
            .getMore{
                margin: 50px auto 100px;
                width: 120px;
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 1px;
                color: #333333;
                cursor: pointer;
                vertical-align: middle;
                i{
                    margin-left: 8px;
                    display: inline-block;
                    width: 13px;
                    height: 12px;
                    background-image: url('~src/assets/getMore.png');
                    background-size: 100% 100%;
                }
            }
        }
        .isMin{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .bulletinItem{
                flex-flow: column;
                flex-shrink: 1;
                width: 575px;
                height: 162px;
                margin-bottom: 30px;
                padding: 30px 20px;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
                background-color: #ffffff;
                position: relative;
                cursor: pointer;
                box-sizing: border-box;
                transition: box-shadow 0.4s;
                display: flex;
                justify-content: space-between;
                &:hover{
                    &::after{
                        width: 30px;
                        height: 30px;
                        top: auto;
                        left: auto;
                        right: 20px;
                        bottom: 26px;
                        opacity: 1;
                    }
                }
                h4{
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 1.5;
                    letter-spacing: 1px;
                    color: #333333;
                    display: -webkit-box;
                    overflow: hidden;
                    white-space: normal;
                    text-overflow: ellipsis;
                    word-wrap: break-word;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical
                }
                p{
                    margin: 0;
                    font-size: 16px;
                    line-height: 1.57;
                    letter-spacing: 1px;
                    color: #999999;
                    span{
                        margin-right: 40px;
                    }
                }
                &:hover{
                    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.08);
                }
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .wrap{
            // padding: 34px 20px 20px;
        }
    }
    @media (max-width: 750px) {
        .wrap{
            margin-top: 0!important;
            padding: rem(20px) rem(20px) rem(20px);
            width: rem(375px);
            background-position: top right;
            background-size: rem(375px) rem(150px);
            background-repeat: no-repeat;
            h2{display: none;}
            .content{
                padding: 0;
                .bulletinItem{
                    padding-top: rem(20px);
                    border-bottom: 1px solid #eee;
                    h4{
                        font-size: rem(16px);
                    }
                    p{
                        margin: rem(10px) 0;
                        font-size: rem(14px);
                    }
                    &::after{
                        opacity: 1;
                        position: absolute;
                        top: auto;
                        bottom:11px;
                        right: 0;
                        width: 20px;
                        height: 20px;
                        background-image: url('~src/assets/default.png');
                        background-size: 100% 100%;
                        border-radius: 50%;
                        content: '';
                    }
                    &:last-child{
                        border:0;
                    }
                }
                .getMore{
                    font-size: rem(14px);
                    margin: rem(20px) auto 0;
                    width: rem(80px);
                    i{
                        width: rem(9px);
                        height: rem(8px);
                    }
                }
            }
            .isMin{
                &>a{
                    width: 100%;
                }
                .bulletinItem{
                    padding: rem(20px);
                    height: rem(120px);
                    width: 100%;
                    h4{
                        font-size: rem(16px);
                    }
                    p{
                        margin: 0;
                        font-size: rem(14px);
                        span{
                            margin-right: rem(10px);
                        }
                    }
                    &::after{
                        opacity: 0;
                    }
                }
                a:nth-last-child(2){
                    .bulletinItem{
                        margin: 0;
                    }
                }
                .getMore{
                    margin: rem(20px) auto;
                }
            }
        }
    }
</style>
