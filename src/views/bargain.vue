<!-- 砍价记录 -->
<template>
    <div class="box">
        <div class="none">
            <van-image width="207" height="120" :src="require('@/assets/images/empty-box.a3b2b2dd.png')"></van-image>
            <p>暂无砍价记录~</p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box {
    background-color: #1dB0fc;
    height: 100vh;
    overflow: hidden;

    .none {
        margin-top: 100px;
        text-align: center;

        P {
            color: #999;
            font-size: 13px;
        }

    }
}
</style>