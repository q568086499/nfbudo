<template>
    <header :style="{'background-image':`url(${banner.image_path})`}">
        <div v-if="banner.title">
            <span :style="{'top':banner.description.length>16?'176px':'200px'}">{{ banner.title }}</span>
            <span v-html="banner.description"></span>
        </div>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                banner: { image_path: '' }
            };
        },
        props: {
            bannerId: { }
        },
        methods: {
        },
        mounted () {
        },
        created () {
            // this.$api.index.banners({ category: this.bannerId }).then(res => {
            //     this.banner = res.data.banner[0];
            // });
        }
    };
</script>

<style scoped lang="scss">
    header{
        width: 100%;
        height: 480px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position:right;
        div{
            position: relative;
            width: 1180px;
            // max-width: 1180px;
            margin: 0 auto;
            span{
                position: absolute;
                top: 176px;
                // 单行200px
                left: 0;
                font-size: 40px;
                font-weight: 600;
                line-height: 1.5;
                color: #f7f7f7;
                &:last-child{
                    top: 247px;
                    font-size: 16px;
                    color: #ffffff;
                }
            }
        }
    }
</style>
