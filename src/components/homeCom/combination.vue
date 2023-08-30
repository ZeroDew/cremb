<template>
    <div class="box">
        <van-row class="title">
            <van-col span="5" offset="6" class="img_item">
                <span v-for="(item, index) in getCombination.avatarList" :key=index
                    :style="{ 'background-image': `url(${item})` }">
                </span>
                <span class="placeholder"><van-icon name="ellipsis" /></span>
            </van-col>
            <van-col span="1" class="peonum">{{ getCombination.totalPeople }}人参与</van-col>
            <van-col span="3" offset="1" class="togo_item">
                <a href="#" class="toGo">GO></a>
            </van-col>
        </van-row>
        <div class="cont">
            <div class="item" v-for="(item, index) in getCombination.productList" :key=index @click="toDetail(item.id)">
                <img v-lazy="item.image" alt="">
                <div class="text">
                    <div class="title">
                        <span>{{ item.info }}</span>
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
import { getCombination } from '@/api/home.js'
export default {
    data() {
        return {
            getCombination: []
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

        }
    },
    created() {
        getCombination().then(res => {
            this.getCombination = res.data
        })
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
    background-image: url('@/assets/images/combination.png');
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
        .img_item {
            display: flex;

            span {
                margin-right: -10px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 0 0;

                &.placeholder {
                    background-color: rgba(51, 51, 51, .6);

                    i {
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }


        }

        .peonum {

            width: 100px;
            color: #1db0fc;
            font-size: 12px;
            line-height: 20px;
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