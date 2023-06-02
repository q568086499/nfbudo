<template>
    <div class="link-more">
        <a :href="link" target="_blank" :class="size"><span>{{ msg }}</span></a>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            };
        },
        props: [
            'link',
            'msg',
            'size'
        ],
        methods: {
        }
    };
</script>

<style scoped lang="scss">
    .link-more::before,.link-more::after{transition: all .3s ease;}
    .item:hover .link-more:before{
        -webkit-transform: translate(-50%,-50%) rotate(45deg) translate3d(11px,-10px,0);
        transform: translate(-50%,-50%) rotate(45deg) translate3d(11px,-10px,0);
    }
    .item:hover .link-more::after{
        width: 20px;
        -webkit-transform: translate3d(15px,0,0);
        transform: translate3d(15px,0,0);
    }
    .link-more{
        position: relative;
        display: inline-block;
        width: 80px;
        line-height: 24px;
        color:#666;
    }
    .link-more:before{
        content: "";
        position: absolute;
        top: 50%;
        bottom: 50%;
        right: 10px;
        // margin: auto;
        width: 8px;
        height: 8px;
        border-top: 1px solid #666;
        border-right: 1px solid #666;
        -webkit-transform: translate(-50%,-50%) rotate(45deg);
        transform: translate(-50%,-50%) rotate(45deg);
    }
    .link-more::after{
        content: "";
        position: absolute;
        top: 50%;
        right: 14px;
        border-top: 1px solid #666;
        margin: auto;
        width: 0;
    }
</style>
