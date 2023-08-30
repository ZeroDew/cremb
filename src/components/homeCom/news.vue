<template>
    <div>
        <van-cell is-link class="news_box">
            <template #title>
                <van-row class="news">
                    <van-col span="6">
                        <img src="https://api.java.crmeb.net/crmebimage/change/new_header/new_header4.png" alt="">
                    </van-col>
                    <van-col span="1">|</van-col>
                    <van-col span="17">
                        <van-swipe style="height: 35px;" vertical autoplay="3000" :show-indicators=false>
                            <van-swipe-item v-for="item in getRoll" :key="item.id">{{ item.info }}</van-swipe-item>
                        </van-swipe></van-col>
                </van-row>

            </template>
        </van-cell>
    </div>
</template>

<script>

import { getIndexData } from '@/api/home.js'
export default {
    data() {
        return {
            getRoll: [],
        }
    }, created() {
        getIndexData().then(res => {
            this.getRoll = res.data.roll
        })

    }
}
</script>

<style lang="less" scoped>
.news_box {
    height: 35px;
    padding: 0 6px;
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    border-radius: 5px;

    .news {
        height: inherit;
        display: flex;
        align-items: center;


        .van-col {
            height: 35px;
            display: flex;
            align-items: center;

            img {
                width: 65px;
                height: 18px;
            }

            .van-swipe-item {
                height: 35px;
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #333;
            }
        }
    }
}
</style>