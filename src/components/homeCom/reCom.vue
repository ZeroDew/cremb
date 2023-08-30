<template>
    <div class="box">
        <van-cell value="更多" is-link :border="false">
            <template #title>
                <slot></slot>
            </template>
        </van-cell>
        <div class="cont">
            <van-grid column-num="3" :border="false">
                <van-grid-item v-for="item in good" :key="item.id" @click="toDetail(item.id)">
                    <template #icon>
                        <img v-lazy="item.image" alt="">
                    </template>
                    <template #text>
                        <p><span>￥</span><span>{{ item.price }}</span><span><del>{{ item.otPrice }}</del></span>
                        </p>

                    </template>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import { getGood } from '@/api/home.js'
export default {
    data() {
        return {
            good: []
        }
    },
    props: {
        type: {
            type: String,
            default: 1
        }
    },
    created() {
        getGood(this.type).then(res => {
            this.good = res.data.list.splice(0, 6)
        })
    }, methods: {
        toDetail(id) {
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
    background-color: #fff;

    .van-cell {
        .van-cell__title {
            span {
                &:nth-child(1) {
                    font-size: 17px;
                    color: #333;
                    font-weight: bolder;
                }

                &:nth-child(2) {
                    font-size: 12px;
                    color: #999
                }
            }
        }

        .van-cell__value {
            color: #999;
            font-size: 12px;
        }
    }

    .cont {
        .van-grid {
            height: 290px;

            .van-grid-item {
                padding: 0;

                /deep/ .van-grid-item__content {
                    padding: 0;

                    .van-grid-item__icon-wrapper {
                        img {
                            width: 99px;
                            height: 99px;
                            object-fit: cover;
                        }
                    }

                    p {
                        margin-top: 5px;

                        span {
                            &:nth-child(1) {
                                color: #fd502f;
                                font-size: 12px;
                                font-weight: bolder;
                            }

                            &:nth-child(2) {
                                color: #fd502f;
                                font-size: 15px;
                                font-weight: bolder;
                            }

                            &:nth-child(3) {
                                color: #999;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>