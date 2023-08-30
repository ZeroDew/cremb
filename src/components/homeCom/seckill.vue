<template>
    <div class="box" v-if="getSeckill">
        <van-row class="title">
            <van-col span="6" class="img_item">
                <img src="@/assets/images/seckillTitle.png" alt="">
            </van-col>
            <van-col span="1">|</van-col>
            <van-col span="4" class="timenum">{{ getStartTime }}场</van-col>
            <van-col span="8">
                <van-count-down :time="time" class="timeOut">
                    <template #default="timeData">
                        <span class="block">{{ timeData.hours }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{ timeData.minutes }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{ timeData.seconds }}</span>
                    </template>
                </van-count-down>
            </van-col>
            <van-col span="2" offset="1" class="togo_item">
                <a href="#" class="toGo">GO></a>
            </van-col>
        </van-row>
        <div class="cont">
            <div class="item" v-for="(item, index) in getSeckill.productList" :key=index @click="toDetail(item.id)">
                <img v-lazy="item.image" alt="">
                <div class="text">
                    <div class="title">
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="price">
                        <p>￥{{ item.price }}</p>
                        <p>￥<del>{{ item.otPrice }}</del></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { getSeckill } from '@/api/home.js'
export default {
    data() {
        return {
            getSeckill: { secKillResponse: { time: '' } },
            time: 4 * 60 * 60 * 1000,
        }
    }, created() {
        getSeckill().then(res => {
            this.getSeckill = res.data

            // console.log(this.getSeckill);
        })
    }, computed: {
        getStartTime() {
            return this.getSeckill.secKillResponse.time.split(',')[0]
        }
    }, methods: {
        toDetail(id) {
            console.log(id);
            this.$router.push({
                path: '/detail',
                query: {
                    id
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 224px;
    background-color: #fff;
    border-radius: 7px;
    margin: 0 auto 15px auto;
    padding: 8px 12px 12px 12px;
    background-image: linear-gradient(#1db0fc, hsla(0, 0%, 100%, .2) 72%, #fff);
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
        color: #fff;

        .img_item {
            img {
                width: 73px;
                height: 19px;
            }
        }

        .timenum {
            font-size: 14px;
            line-height: 21px;
            font-weight: bolder;
        }

        .timeOut {
            display: flex;
            text-align: center;
            justify-content: flex-start;
            font-size: 12px;
            color: #fff;

            .colon {
                display: inline-block;
                margin: 0 4px;
            }

            .block {
                width: 21px;
                height: 17px;
                display: block;
                background-color: #fff;
                color: #1db0fc;
                font-size: 12px;
                line-height: 17px;
                border-radius: 4px;
            }

        }

        .togo_item {
            .toGo {
                display: block;
                width: 43px;
                height: 20px;
                border-radius: 15px;
                background-color: #ffd6a7;
                color: #fe960f;
                text-align: center;
                font-size: 12px;
                padding: 4px;
            }
        }
    }

    .cont {
        display: flex;
        justify-content: flex-start;

        .item {
            display: flex;
            flex-direction: column;
            height: 171px;

            img {
                width: 109px;
                height: 109px;
                object-fit: cover;
                border-radius: 5px;
            }

            .title {
                width: 110px;
                height: 16px;
                overflow: hidden;
                white-space: nowrap;
                word-break: break-all;
                text-overflow: ellipsis;
                font-size: 12px;
                margin-top: 7px;
            }

            .price {
                margin-top: 2px;

                p:nth-child(1) {
                    color: #fd502f;
                    font-size: 14px;
                    font-weight: bolder;
                }

                p:nth-child(2) {
                    color: #999;
                    font-size: 12px;
                }
            }
        }


    }
}
</style>