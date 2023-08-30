<template>
    <div>
        <van-row class="title">
            <van-col span="4">
                <img src="@/assets/images/logo.png" alt="" style="width: 100%;height:50px;padding: 10px 0;"></van-col>
            <van-col span="20">
                <van-search class="search" shape="round" placeholder="搜索商品" background="transparent" @focus="search" />
            </van-col>
        </van-row>
        <van-swipe class="my-swipe" autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in getBanners" :key="item.id">
                <img :src="item.pic" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getIndexData } from '@/api/home.js'
export default {
    data() {
        return {

            getBanners: [],
        }
    }, created() {
        getIndexData().then(res => {
            this.getBanners = res.data.banner
        })

    }, methods: {
        search() {
            this.$router.push('/search')
        }
    }
}
</script>

<style lang="less" scoped>
.title {
    width: 100%;
}

.my-swipe {
    width: 100%;
    height: 160px;
    border-radius: 5px;

    .van-swipe-item {
        width: inherit;
        height: inherit;

        img {
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }
}
</style>