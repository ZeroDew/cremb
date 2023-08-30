<template>
    <div class="box">
        <van-cell title="订单中心" value="查看全部" is-link :border="false" />
        <van-grid :border="false" column-num="5" class="blue">
            <van-grid-item icon="card" text="待付款" />
            <van-grid-item icon="column" text="待发货" />
            <van-grid-item icon="bookmark" text="待收货" />
            <van-grid-item icon="comment" text="待评价" />
            <van-grid-item icon="gold-coin" text="售后/退款" />
        </van-grid>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.blue {
    color: #1db0fc;
}

.box {
    .van-cell {
        border-radius: 5px 5px 0 0;
    }

    .van-grid {
        border-radius: 0 0 15px 15px;
    }
}
</style>