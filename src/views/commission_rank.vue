<template>
    <div>
        <div class="top">
            <van-image :src="require('@/assets/images/commision.png')"><span class="title">您目前暂无排名</span></van-image>
        </div>
        <div class="cont">
            <van-cell-group>
                <van-tabs v-model="active" title-active-color="#1db0fc" title-inactive-color="#999" color="#1db0fc">
                    <van-tab title="周排行">
                        <div class="sort">
                            <van-image width="207" height="120" :src="require('@/assets/images/empty-box.a3b2b2dd.png')">
                                <p>暂无排行~~</p>
                            </van-image>

                        </div>
                    </van-tab>
                    <van-tab title="月排行">
                        <div class="sort">
                            <van-image width="207" height="120" :src="require('@/assets/images/empty-box.a3b2b2dd.png')">
                                <p>暂无排行~~</p>
                            </van-image>

                        </div>
                    </van-tab>
                </van-tabs>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style lang="less" scoped>
.top {
    background-color: #1db0fc;
    position: relative;

    .van-image {
        .title {
            position: absolute;
            top: 80px;
            left: 24px;

            color: #fff;
            font-size: 16px;
        }
    }

}

.cont {
    // position: absolute;
    width: 355px;
    height: 315px;
    border-radius: 7px;
    margin: -38px auto 0 auto;
    overflow: hidden;

    .van-cell-group {
        height: 315px;

        .van-tabs--line {
            height: 100%;

        }

        .sort {
            margin-top: 100px;
            text-align: center;

            img {}

            p {
                color: #999;
                font-size: 13px;
            }
        }
    }
}
</style>