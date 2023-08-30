<template>
    <div>
        <van-row>
            <van-col span="4">
                <span @click="toHome">
                    <van-icon name="wap-home-o" />
                </span>
            </van-col>
            <van-col span="20">
                <div class="search">
                    <van-icon name="search"></van-icon>
                    <span>搜索商品</span>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="less" scoped>
.van-row {
    height: 63px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;

    .van-col--4 {
        height: 63px;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
            width: 33px;
            height: 33px;
            border-radius: 50%;
            background-color: #1db0fc;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        i {
            font-size: 14px;
            color: #fff;
        }

    }

    .van-col--20 {
        height: 63px;
        display: flex;
        justify-content: center;
        align-items: center;


        .search {
            width: 299px;
            height: 33px;
            background-color: #f8f8f8;
            color: #adadad;
            font-size: 12px;
            border-radius: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

}
</style>