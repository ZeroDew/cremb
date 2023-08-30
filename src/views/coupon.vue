<!-- 优惠券 -->

<template>
    <div>

        <van-tabs v-model="active" color="#1db0fc">
            <van-tab title="未使用" class="box">
                <div class="item" v-for="item in usedList" :key="item.id">
                    <div class="left">
                        <div class="top">
                            ￥<span>{{ item.money | formMoney }}</span>
                        </div>
                        <p class="bot">
                            满{{ item.minPrice | formMoney }}元可用
                        </p>
                    </div>
                    <div class="right">
                        <div class="top"><span>{{ item.useType == 1 ? "通用" : item.useType == 2 ? "商品" : "" }}</span><span>{{
                            item.name }}</span></div>
                        <div class="bot">
                            <p>{{ formTime(item.createTime) }}~{{ formTime(item.endTime) }}</p>
                            <van-button round text="可用" size="mini" />
                        </div>
                    </div>
                </div>
                <emptyVue></emptyVue>
            </van-tab>
            <van-tab title="已使用/过期" class="box unused">
                <div class="item" v-for="item in unusedList" :key="item.id">
                    <div class="left">
                        <div class="top">
                            ￥<span>{{ item.money | formMoney }}</span>
                        </div>
                        <p class="bot">
                            满{{ item.minPrice | formMoney }}元可用
                        </p>
                    </div>
                    <div class="right">
                        <div class="top"><span>{{ item.useType == 1 ? "通用" : item.useType == 2 ? "商品" : "" }}</span><span>{{
                            item.name }}</span>
                        </div>
                        <div class="bot">
                            <p>{{ formTime(item.createTime) }}~{{ formTime(item.endTime) }}</p>
                            <van-button round :text="item.validStr ? '到期' : '已使用'" disabled size="mini" />
                        </div>
                    </div>
                </div>
                <emptyVue></emptyVue>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import store from 'vuex'
import { mapState } from 'vuex';
import { getCoupon } from '@/api/home';
import emptyVue from '@/components/classify/emptyVue.vue';
export default {
    data() {
        return {
            active: 0,
            usedList: [],//未使用
            unusedList: [],//已使用
        }
    },
    components: {
        emptyVue
    },
    filters: {
        formMoney(val) {
            return parseInt(val)
        }
    },
    computed: {
        ...mapState(['userinfo']),

    },
    methods: {
        formTime(val) {
            return this.$moment(val).format('YYYY-MM-DD')
        }
    },
    created() {
        console.log(store.mapMutations(['isLogin']));
        getCoupon('usable', this.userinfo).then(res => {
            this.usedList = res.data.list
        });
        getCoupon('unusable', this.userinfo).then(res => {
            this.unusedList = res.data.list
        })
    }
}
</script>

<style lang="less" scoped>
.box {
    padding: 0px 15px;
    margin-top: 15px;
}

.item {
    width: 100%;
    height: 85px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 7px;
    border-radius: 5px;
    display: flex;

    .left {
        width: 120px;
        height: 85px;
        background-color: #1db0fc;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-image: url('@/assets/images/coubg.png');
        background-size: 120px 85px;

        .top {
            font-size: 18px;
            font-weight: 700;

            span {
                font-size: 30px;
            }
        }

        .bot {
            margin-top: 5px;
            font-size: 12px;
        }
    }

    .right {
        width: 225px;
        height: 85px;
        padding: 0px 8px 0px 12px;

        .top {
            width: 205px;
            height: 46px;
            padding: 9px 0 0;

            span {
                &:nth-child(1) {
                    font-size: 12px;
                    border-radius: 15px;
                    padding: 1px 5px;
                    border: 1px solid #1db0fc;
                    color: #1db0fc;
                    margin-right: 6px;
                }

                &:nth-child(2) {
                    color: #282828;
                    font-size: 13px;
                }
            }
        }

        .bot {
            display: flex;
            flex-direction: column;

            p {
                color: #999;
                font-size: 12px;
                height: 16px;
                line-height: 16px;
            }

            button {
                font-size: 12px;
                color: #fff;
                width: 68px;
                height: 22px;
                background-color: #1db0fc;
            }
        }
    }
}

.unused {
    .left {
        background-color: transparent;
        background-image: url('@/assets/images/unused.png');
    }

    .right {
        .bot {
            button {
                background-color: #ccc !important;
            }
        }

    }
}
</style>