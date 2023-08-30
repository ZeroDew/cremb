<template>
    <div>
        <van-cell v-for="item in cateDetail" :key="item.id" v-cloak>
            <van-image width="260" height="107" lazy-load :src="item.image" radius="7px" fit="cover"
                @click="toDetail(item.id)" />
            <p class="title van-multi-ellipsis--l2">{{ item.storeName }}</p>
            <van-row>
                <van-col class="price">
                    <span>￥</span><span>{{ item.price }}</span>
                </van-col>
                <van-col class="sale"><span>已售{{ item.sales }}</span></van-col>
                <van-col class="btn">
                    <van-button color="#1db0fc" @click="addcar(item.id)">加入购物车</van-button>
                </van-col>
            </van-row>
        </van-cell>
        <keep-alive exclude="addcar">
            <addCar :id="id" :show="show"></addCar>
        </keep-alive>
    </div>
</template>

<script>
import addCar from '@/components/addCar.vue';
export default {
    data() {
        return {
            id: '',
            show: false
        }
    },

    props: {
        cateDetail: {
            type: Array
        }
    }, methods: {
        addcar(id) {
            this.id = id;
            this.show = !this.show
        }, toDetail(id) {
            this.$router.push({
                path: '/detail',
                query: {
                    id
                }
            })
        }
    }, components: {
        addCar
    }
}
</script>

<style lang="less" scoped>
.title {
    width: 260px;
    height: 47px;
    color: #282828;
    font-size: 14px;
    margin: 9px 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.van-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
        margin-right: 8px;

        span {
            &:nth-child(1) {
                color: #fd502f;
                font-size: 13px;
                font-weight: 700;
            }

            &:nth-child(2) {
                color: #fd502f;
                font-weight: 700;
                font-size: 20px;

            }
        }
    }

    .sale {
        span {
            color: #8e8e8e;
            font-size: 12px;
        }
    }

    .btn {
        button {
            border-radius: 20px;
            width: 96px;
            height: 27px;
            font-size: 12px;
            padding: 0 14px;
        }
    }
}
</style>