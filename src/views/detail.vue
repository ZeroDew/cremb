<template>
    <div>
        <nav v-cloak>
            <van-nav-bar :border="false" fixed @click-left="recome">
                <template #left>
                    <van-icon name="arrow-left" size="18" />
                </template>
                <template #title>
                    <van-search v-model="value" shape="round" background="transparent" placeholder="搜索商品" />
                </template>
                <template #right>
                    <van-icon name="ellipsis" size="24" />
                </template>
            </van-nav-bar>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in details.sliderImage " :key="index">
                    <img :src="item" alt="" style="width: 375px;height: 375px;object-fit: cover;">
                </van-swipe-item>
            </van-swipe>
        </nav>
        <div class="cont">
            <!-- 商品标题 -->
            <van-cell-group>
                <van-cell :border="false">
                    <template #default>
                        <van-icon name="share-o" />
                    </template>
                    <template #title>
                        <span>￥</span><span>{{ details.productInfo.price }}</span>
                    </template>
                </van-cell>
                <van-cell :border="false">
                    <template #default>
                        {{ details.productInfo.storeName }}
                    </template>
                </van-cell>
                <van-cell :border="false">
                    <template #default>
                        <van-row>
                            <van-col span="8">原价:￥{{ details.productInfo.otPrice }}</van-col>
                            <van-col span="8">库存:{{ details.productInfo.sales }}件</van-col>
                            <van-col span="8">销量:{{ details.productInfo.stock }}件</van-col>
                        </van-row>
                    </template>
                </van-cell>
                <van-cell :border="false" is-link>

                    <template #title>
                        <span>优惠券</span>:<span>满0.00减10.00</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <!-- 选择规格 -->
            <van-cell-group>
                <van-cell is-link :border="false">
                    <template #title>
                        <span>已选择:</span><span>{{ attrValues[0] }}</span>
                    </template>
                </van-cell>
                <van-cell :border="false">
                    <template #default>
                        <img :src="item.image" alt="" v-for="(item) in details.productValue" :key="item.id" width="32">
                        <span>共{{ Object.keys(details.productValue).length }}种规格可选</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <!-- 评价 -->
            <van-cell-group>
                <van-cell is-link :border="false">
                    <template #title>
                        <span>用户评价:</span><span>(1)</span>
                    </template>
                    <template #default>
                        好评100%
                    </template>
                </van-cell>
                <van-cell :border="false">
                    <template #default>
                        说了句覅
                    </template>
                </van-cell>
            </van-cell-group>
            <!-- 推荐 -->
            <reCom type="1">
                优品推荐 {{ }}
            </reCom>
        </div>
        <!-- 详情 -->
        <div class="dea">
            <p>产品详情</p>
            <div class="content" v-html="details.productInfo.content">

            </div>
        </div>
        <van-goods-action style="z-index: 999;">
            <van-goods-action-icon icon="service-o" text="客服" color="#666" />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-icon icon="cart-o" text="购物车" color="#666" />
            <van-goods-action-button color="#22cafd" type="warning" text="加入购物车" @click="addCart" />
            <van-goods-action-button color="#1db0fc" type="danger" text="立即购买" />
        </van-goods-action>
        <addCar :id="id" :show="show"></addCar>

    </div>
</template>

<script>
import { getDetail } from '@/api/home'
import reCom from '@/components/homeCom/reCom.vue'
import addCar from '../components/addCar.vue'
export default {
    name: 'detail',
    data() {
        return {
            id: 0,
            details: { productValue: {}, productInfo: {}, sliderImage: [], productAttr: [{ attrValues: '' }] },
            value: '',
            show: false,
        }
    },
    computed: {
        attrValues() {
            return this.details.productAttr[0].attrValues.split(',')
        }
    },
    methods: {
        recome() {
            this.$router.go(-1)
        },
        addCart() {
            this.show = !this.show
        }
    },
    created() {
        this.id = this.$route.query.id;
        if (this.id) {
            getDetail(this.id).then(res => {
                this.details = res.data
                if (res.data) {
                    this.details.sliderImage = JSON.parse(res.data.productInfo.sliderImage);
                }

            })
        }

    }, components: {
        reCom,
        addCar
    }
}
</script>

<style lang="less" scoped>
nav {
    background-color: transparent;

    .van-nav-bar {
        background-color: transparent;

        .van-nav-bar__content {
            .van-nav-bar__left {
                i {
                    color: #000;
                    border: 1px solid rgba(0, 0, 0, .1);
                    background-color: rgba(255, 255, 255, .3);
                    border-radius: 50%;
                    padding: 2px;
                }
            }

            .van-nav-bar__title {
                .van-search {
                    .van-search__content {
                        background-color: rgba(255, 255, 255, .3);
                    }

                }
            }

            .van-nav-bar__right {
                i {
                    color: #000;
                    border: 1px solid rgba(0, 0, 0, .1);
                    background-color: rgba(255, 255, 255, .3);
                    border-radius: 50%;
                    padding: 2px;
                }
            }
        }
    }
}

.cont {
    padding: 15px;
}

.dea {
    width: 375px;
    overflow: hidden;

    .content {
        ::v-deep img {
            width: 100%;
            object-fit: cover;
        }

    }
}
</style>