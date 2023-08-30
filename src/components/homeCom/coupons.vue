<template>
    <div class="box">
        <van-cell title="领取优惠券" value="查看更多" is-link>
        </van-cell>
        <van-swipe :loop="false" :show-indicators="false" :width="160">
            <van-swipe-item v-for="(item, index) in coupons" :key="index" :class="{ 'used': item.isUse }">
                <div class="itemCon_left">
                    <div class="top">
                        <span>￥</span><span>{{ item.money | formMoney }}</span>
                    </div>
                    <div class="bot">
                        <span>满{{ item.minPrice | formMoney }}可用</span>
                    </div>
                </div>
                <div class="itemCon_right" @click="coupon(item.id)">
                    <span> {{ item.isUse ? "已领取" : "领取" }}</span>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getCoupons, getCoupon } from '@/api/home';
import { Toast } from 'vant';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            coupons: []
        }
    },
    created() {
        getCoupons().then(res => {
            this.coupons = res.data
        })
    }, filters: {
        formMoney(val) {
            return parseInt(val)
        }
    }, methods: {
        coupon(id) {


            if (this.isLogin) {
                Toast.success('已领取')
                getCoupon(id).then(res => {
                    
                    getCoupons().then(res => {
                        this.coupons = res.data
                    })
                })
            } else {
                Toast.fail('请先登录')
                setTimeout(() => {
                    Toast.clear()
                    this.$router.push('/login')
                }, 500);

            }

        }
    },
    computed: {
        ...mapState(['isLogin'])
    }
}
</script>

<style lang="less" scoped>
.van-cell {
    color: #333;
    font-size: 15px;
    font-weight: bolder;
    border-radius: 5px 5px 0 0;

    .van-cell__value {
        color: #999;
        font-size: 12px;
    }

    .van-cell__label {
        width: 210px;
        overflow: hidden;
    }
}

.van-swipe {
    border-radius: 0 0 5px 5px;
    width: 345px !important;
    padding: 15px;
    background-color: #fff;

    /deep/ .van-swipe__track {

        display: flex;
        justify-content: flex-start;


        .van-swipe-item {
            height: 53px;

            display: flex;
            justify-content: flex-start;

            .itemCon_left {
                width: 113px;
                height: 53px;
                background-color: #d1fafb;
                border-radius: 5px;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                &::before {
                    display: block;
                    content: '';
                    width: 10px;
                    height: 10px;
                    background-color: #fff;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                }

                .top {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    span:nth-child(1) {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background-color: #1db0fc;
                        color: #fff;
                        text-align: center;
                        line-height: 12px;
                        font-size: 12px;
                    }

                    span:nth-child(2) {
                        color: #1db0fc;
                        font-size: 21px;
                    }
                }

                .bot {
                    color: #1db0fc;
                    font-weight: 400;
                    font-size: 12px;
                }
            }

            .itemCon_right {
                width: 30px;
                height: 53px;
                background-color: #1db0fc;
                border-radius: 0 10px 10px 0;
                margin-left: -5px;
                color: #fff;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                span {
                    margin-left: 10px;
                    width: 27px;
                    font-size: 12px;
                    text-align: center;
                    writing-mode: vertical-lr;
                }

            }
        }

    }
}

.used {


    .itemCon_left {
        background-color: #f6f6f6 !important;

        .top {
            span:nth-child(1) {
                background-color: #ccc !important;
                color: #fff !important;
            }

            span:nth-child(2) {
                color: #ccc !important;

            }
        }

        .bot {
            color: #ccc !important;
        }
    }

    .itemCon_right {
        background-color: #ccc !important;
        color: #fff !important;
    }
}
</style>