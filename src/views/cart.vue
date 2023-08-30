<template>
    <div>

        <!-- 导航 -->
        <van-nav-bar>
            <template #title>
                <span>购物车</span>
            </template>
            <template #left>
                <van-icon name="wap-home-o" size="24px" color="#fff" @click="toHome" />
            </template>
            <template #right>
                <van-icon name="ellipsis" size="24px" color="#fff" />
            </template>
        </van-nav-bar>
        <!-- 100% -->
        <div class="nav">
            <van-row type="flex" class="van-hairline--top" justify="center" align="center">
                <van-col span="8"><van-icon name="passed" />100%正品保证 </van-col>
                <van-col span="8"><van-icon name="passed" />所有商品精挑细选 </van-col>
                <van-col span="8"><van-icon name="passed" />售后无忧 </van-col>
            </van-row>
            <div class="count">
                <span>购物数量</span>
                <span>{{ cartList.length || 0 }}</span>
            </div>
        </div>
        <div class="content" style="text-align: center;">
            <img src="@/assets/images/noCart.a2eb883f.png" alt=""
                style="width: 207px;height: 168px;margin: 39px auto 28px auto;" v-if="!cartList.length">
            <div v-else class="carts">
                <van-card :price="item.price" :desc="`属性：${item.suk}`" :thumb="item.image" class="cart_item"
                    :lazy-load="true" v-for="item in cartList" :key="item.id">
                    <template #title>
                        <p class="title"> {{ item.storeName }}</p>
                    </template>

                </van-card>
            </div>
        </div>
        <hotVue v-if="!cartList.length"></hotVue>

    </div>
</template>

<script>
import { Toast } from 'vant';
import { cartInfo } from '@/api/cart'
import { mapState } from 'vuex'
import hotVue from '@/components/hot.vue'
export default {
    name: "cart",
    data() {
        return {

            cartList: [],//购物车列表
        }
    },
    computed: {
        ...mapState(['userinfo'])
    },
    methods: {

        toHome() {
            this.$router.push('/')
        }
    },
    components: {
        hotVue
    },

    created() {
        //推荐

        cartInfo({ account: this.userinfo.phone }).then(res => {
            if (res.data) {
                this.cartList = res.data.list
                
            }

        })
    }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #1db0fc;

    .van-nav-bar__content {
        .van-nav-bar__title {
            span {
                color: #fff !important;
            }

        }
    }


}

.nav {
    padding: 0 14px;
    height: 102px;
    background-color: #1db0fc;

    .van-row {
        height: 51px;

        .van-col {
            color: #fff;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .count {
        width: 100%;
        height: 100% - 50px;
        background-color: #fff;
        border-radius: 7px 7px 0 0;
        display: flex;
        align-items: center;

        span {
            font-size: 14px;
            display: flex;
            margin-left: 10px;

            &:nth-child(2) {
                color: #1db0fc;
                margin-left: 5px;
            }
        }
    }
}

.content {
    .carts {
        padding: 0 15px;

        .cart_item {
            background-color: #fff;
            height: 104px;
            padding: 15px;

            .van-card__header {
                width: 100%;
                height: 100%;

                .van-card__thumb {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                }

                .van-card__content {
                    min-height: 80px !important;

                    .title {
                        width: 198px;
                        height: 19px;
                        color: #282828;
                        font-size: 14px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .van-card__desc {
                        margin-top: 4px;
                        color: #999;
                        font-size: 12px;
                        text-align: left;
                    }

                    .van-card__bottom {
                        .van-card__price {
                            display: flex;
                            justify-content: flex-start;
                            color: #fd502f;
                            font-size: 16px;
                            font-weight: bolder;
                            margin-top: 14px;
                        }
                    }

                }
            }
        }
    }
}
</style>