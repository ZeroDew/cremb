<template>
    <div>
        <div class="hot">
            <p style="text-align: center;">热门推荐</p>
            <div class="item_box">
                <div class="item" v-for="(item, index) in list" :key="index" style="width: 167px;"
                    @click="toDetail(item.id)">
                    <img v-lazy="item.image" alt="" style="width: 167px;height: 167px;object-fit: cover;">
                    <div class="text">
                        <div class="title van-ellipsis">
                            <span>{{ item.storeName }}</span>
                        </div>
                        <div class="price">
                            ￥<span>{{ item.price }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getProduce } from '@/api/home'
import BottomingRefresh from '@/utils/refresh';
export default {
    data() {
        return {
            list: [],
            limit: 0,
            page: 0
        }
    }, created() {
        BottomingRefresh(() => {
            this.page++;
            getProduce(this.page, 10).then(res => {
                this.list = [...this.list, ...res.data.list]
            });
        },
            getProduce(0, 10).then(res => {
                this.list = res.data.list
            })
        )
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
p {
    height: 67px;
    line-height: 67px;
}

.item_box {
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    justify-content: space-between;

    .item {
        height: 220px;
        margin-bottom: 15px;

        img {
            border-radius: 7px;
        }

        .text {
            margin-top: 10px;
            .title {
                font-size: 14px;

            }
            .price {
                margin-top: 4px;

                p {
                    color: #fd502f;
                    font-size: 12px;
                    font-weight: bolder;

                    span {
                        font-size: 14px;
                    }
                }

            }
        }
    }
}
</style>