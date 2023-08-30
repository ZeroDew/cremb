<template>
    <div>
        <van-swipe class="mySwipe">
            <van-swipe-item v-for="item in list" :key="item.id">
                <van-image width="345" height="167" :src="item.imageInput" />
            </van-swipe-item>
        </van-swipe>

        <!--  -->
        <van-tabs v-model="active" color="#105fbc">
            <van-tab title="热门">
                <van-cell :title="item.title" :label="item.createTime" center v-for="item in  list" :key="item.id">
                    <template #default>
                        <van-image width="125" height="78" :src="item.imageInput"></van-image>
                    </template>
                </van-cell>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { getInfo } from '@/api/information';
export default {
    data() {
        return {
            active: 0,
            list: []
        }

    },
    created() {
        getInfo().then(res => {
            console.log(res.data);
            this.list = res.data.list
        })
    }
}
</script>

<style lang="less" scoped>
.mySwipe {
    width: 100%;
    height: 182px;
    padding: 0 15px;

    img {
        border-radius: 7px;
    }
}

.van-tabs__content {


    .van-tab__pane {


        .van-cell {
            height: 112px;

            .van-cell__title {
                height: 78px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                span {
                    color: #282828;
                    font-size: 15px;
                }

                .van-cell__label {
                    color: #999;
                    font-size: 12px;
                }
            }

            .van-cell__value {
                text-align: center;

                img {
                    border-radius: 7px;
                }

            }
        }
    }

}
</style>