<template>
    <div class="box">
        <van-cell icon="thumb-circle" title="商品排行榜" value="更多" is-link>
        </van-cell>
        <div class="cont">
            <div class="item" v-for="(item, index) in leaderboard" :key="item.id" @click="toDetail(item.id)">
                <van-card :title="item.storeName">
                    <template #thumb>
                        <img v-lazy="item.image" alt="">
                    </template>
                    <template #tag>
                        <span :class="imgUrl[index]">热榜TOP{{ index + 1
                        }}</span>
                    </template>
                    <template #price>
                        <div class="price">
                            <span>￥{{ item.price }}</span>
                            <span>销量{{ item.sales }}件</span>
                        </div>
                        <div class="cart"><van-icon name="shopping-cart-o" @click.stop="addcar(item.id)" /></div>
                    </template>
                </van-card>

            </div>
            <addCar :id="id" :show="show"></addCar>
        </div>
    </div>
</template>

<script>
import addCar from '../addCar.vue';
import { getLeaderBoard } from '@/api/home';
export default {
    data() {
        return {
            id: 0,//元素id
            show: false,//购物车显隐
            leaderboard: [],
            imgUrl: ['bg01', 'bg02', 'bg03']
        }
    },
    methods: {
        toDetail(id) {
            this.$router.push({
                path: '/detail',
                query: {
                    id
                }
            })

        }, addcar(id) {
            this.id = id,
                this.show = !this.show
        }
    },
    components: {
        addCar
    },
    created() {
        getLeaderBoard().then(res => {
            this.leaderboard = res.data.splice(0, 3);
        })
    }
}
</script>

<style lang="less" scoped>
.bg01 {
    background-image: url('@/assets/images/sort1.png');
}

.bg02 {
    background-image: url('@/assets/images/sort2.png');
}

.bg03 {
    background-image: url('@/assets/images/sort3.png');
}

.box {
    border-radius: 7px;
    background-color: #fff;
    padding: 12px 10px 0;

    .van-cell {
        padding: 0;

        .van-cell__left-icon {
            font-size: 20px;
            color: #1db0fc;
        }

        .van-cell__title {
            font-size: 18px;
            color: #282828;
        }

        .van-cell__value {
            span {
                color: #999;
                font-size: 13px;
            }
        }
    }

    .cont {
        .item {
            .van-card {
                background-color: #fff;

                .van-card__header {
                    .van-card__content {
                        .van-card__title {
                            width: 210px;
                            height: 40px;
                            color: #333;
                            font-size: 15px;
                            overflow: hidden;
                        }

                        .van-card__bottom {
                            .van-card__price {

                                display: flex;
                                justify-content: space-between;

                                .price {
                                    span {
                                        &:nth-child(1) {
                                            color: #fd502f;
                                            font-size: 17px;
                                            font-weight: bolder;
                                        }

                                        &:nth-child(2) {
                                            color: #999;
                                            font-size: 12px;
                                        }
                                    }
                                }

                                .cart {
                                    width: 24px;
                                    height: 24px;
                                    border-radius: 50%;
                                    background-color: #1db0fc;
                                    text-align: center;

                                    .van-icon-shopping-cart-o {
                                        color: #fff;
                                        font-size: 16px;
                                        line-height: 24px;
                                    }

                                }

                            }
                        }
                    }

                    .van-card__thumb {
                        img {
                            width: 90px;
                            height: 90px;
                            object-fit: cover;
                        }

                        .van-card__tag {
                            width: 90px;
                            height: 23px;

                            span {
                                position: absolute;
                                left: 0;
                                top: 90px-23px;
                                display: block;
                                width: 100%;
                                height: 100%;

                                text-align: center;
                                line-height: 23px;
                                color: #fff;
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