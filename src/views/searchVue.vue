<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <form action="/" class="search">
                <van-search v-model="value" show-action placeholder="点击搜索商品" @search="onSearch" shape="round"
                    action-text="搜索" background="transparent">
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
            </form>
            <div class="hotSearch van-hairline--bottom">
                <p>热门搜索</p>
                <van-row>
                    <van-col v-for="item in keyWord" :key="item.id" @click="searchTest(item.title)"><span>{{ item.title
                    }}</span></van-col>

                </van-row>
            </div>
            <hotVue v-if="!list.length"></hotVue>
            <div class="cont" v-else>
                <van-card :title="item.storeName
                    " :thumb="item.image" class="goodItem van-ellipsis" v-for="item in list" :key="item.id"
                    @click="toDetail(item.id)">
                    <template #price>
                        <van-cell is-link :center="true" class="bot">
                            <template #title>
                                <span class="price">
                                    ￥ <span>{{ item.price }}</span>
                                </span>
                            </template>
                            <template #label>
                                已售{{ item.sales }}{{ item.unitName }}
                            </template>
                        </van-cell>
                    </template>

                </van-card>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
import hotVue from '@/components/hot.vue';
import { getKeyword, getSearchGood } from '@/api/search'
import { Toast } from 'vant';
export default {
    data() {
        return {
            value: '',
            keyWord: [],
            list: [],//搜索
            isLoading: false,
        }
    }, methods: {
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
            }, 1000);
        },
        searchTest(val) {
            this.value = val;
            this.onSearch()
        },
        onSearch() {

            if (this.value) {
                getSearchGood(this.value).then(res => {
                    this.list = res.data.list
                    console.log(res.data.list);
                })
            } else {
                Toast.fail('请输入商品')
                setTimeout(() => {
                    Toast.clear()
                }, 1000);
            }
        }, toDetail(id) {
            this.$router.push({
                path: '/detail',
                query: {
                    id
                }
            })

        }
    }, components: {
        hotVue
    }, created() {
        getKeyword().then(res => {
            this.keyWord = res.data
        })
    }
}
</script>

<style lang="less" scoped>
.search {
    height: 41px;
    padding: 9px 0 0 14px;

    .van-search {
        padding: 0;
    }
}

.hotSearch {
    height: 100px;

    p {
        height: 17px;
        margin: 24px 14px 12px;
        color: #999;
        font-size: 13px;
    }

    .van-row {
        height: 38px;
        display: flex;
        justify-content: flex-start;

        .van-col {
            height: 29px;
            margin: 0 0 9px 9px;
            padding: 0 10px;
            color: #454545;
            font-size: 12px;
            border-radius: 14px;
            border: 1px solid #aaa;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                line-height: 29px;
            }
        }
    }
}

.cont {
    .goodItem {
        height: 120px;
        padding: 0 0 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .van-image {
            width: 90px !important;
            height: 90px !important;
        }

        .van-card__content {
            width: 244px;
            height: 90px;

            .van-card__title {
                height: 20px;
                color: #222;
                font-size: 15px;
                text-overflow: ellipsis;


            }

            .van-card__bottom {
                .bot {
                    padding: 0;
                    background-color: transparent;
                    width: 244px;

                    .price {
                        color: #fd502f;
                        font-size: 13px;
                        font-weight: bolder;

                        span {
                            font-size: 17px;
                        }
                    }

                    .van-cell__label {
                        color: #aaa;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>