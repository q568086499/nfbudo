<template>
    <div class="liftWrap" :class="[fixed?'fixed':'']">
        <div class="lift">
            <p
                v-for="(item,ind) in items"
                :key="ind"
                :class="[navFlag===ind?'act':'']"
                @click="changeEvent(ind)"
            >
                {{ item }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
                fixed: false,
                isPc: true,
                sroll: true
            };
        },
        props: {
            items: {
                type: Array
            },
            navFlag: {
                default: 0
            }
        },
        watch: {
            tag: {
                handler (n, o) {
                    console.log('warch=>', n);
                },
                deep: true
            }
        },
        mounted () {
            this.$nextTick(res => {
                let arr = document.querySelectorAll('.yearTit');
                let markArr = [];
                arr.forEach(res => {
                    markArr.push(res.offsetTop + 500);
                });
                window.addEventListener('scroll', e => {
                    let st = document.documentElement.scrollTop || document.body.scrollTop;
                    if (st > 480) {
                        this.fixed = true;
                    } else {
                        this.fixed = false;
                    }
                });
            });
        },
        methods: {
            changeEvent (e) {
                this.$emit('tag', e);
                this.tag = e;
            }
        },
        created () {
            if (/(iPhone|iOS|Android)/i.test(navigator.userAgent)) {
                this.isPc = false;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '~src/commons/style/base.scss';
    @function rem($px){
        $rem:37.5px;
        @return ($px/$rem)*1rem;
    }
    html{scroll-behavior: smooth;}
    .liftWrap{
        width: 100%;
        box-shadow: 0 1px 0 0 #eeeeee;
        background: #fff;
    }
    .fixed{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 19;
    }
    .lift{
        margin: 0 auto;
        width: 1180px;
        // width: 100%;
        // max-width: 1180px;
        height: 50px;
        box-sizing: content-box;
        transform: translateX(0);
        z-index: 3;
        white-space: nowrap;
        // overflow: scroll;
        &::-webkit-scrollbar {display: none;}
        p{
            margin-right: 100px;
            display: inline-block;
            padding: 0;
            min-width: 70px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: #333333;
            cursor: pointer;
        }
        .act{
            position: relative;
            color: #333!important;
            background: #fff;
            &::after{
                position: absolute;
                bottom: 0;
                left: 50%;
                content: '';
                width: 40px;
                height: 4px;
                background:#e62828;
                transform: translateX(-50%);
            }
        }
    }
    // @media (max-width: 1450px) {
    //     .main .lift {left: 10px;transform: translateX(0);}
    // }
    // @media (max-width: 1024px) {
    //     .lift{
    //         position: static;
    //         width: rem(375px);
    //         height: rem(40px);
    //         box-shadow:none;
    //         border-bottom: 1px solid #f7f7f7;
    //         box-sizing: content-box;
    //         transform: translateX(0);
    //         z-index: 3;
    //         white-space: nowrap;
    //         overflow: scroll;
    //         &::-webkit-scrollbar {display: none;}
    //         p{
    //             display: inline-block;
    //             padding: 0;
    //             width: 30%;
    //             height: rem(40px);
    //             line-height: rem(40px);
    //         }
    //         .act{
    //             position: relative;
    //             color: #333!important;
    //             background: #fff;
    //             &::after{
    //                 position: absolute;
    //                 bottom: 0;
    //                 left: 50%;
    //                 content: '';
    //                 width: rem(40px);
    //                 height: rem(4px);
    //                 background:#e62828;
    //                 transform: translateX(-50%);
    //             }
    //         }
    //     }
    // }
</style>
