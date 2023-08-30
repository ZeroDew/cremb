<template>
    <div>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="item in category" :key="item.id" :title="item.name" @click="getCate(item.id)" />
        </van-sidebar>

    </div>
</template>

<script>
import { getCategory } from '@/api/classify.js'
export default {
    data() {
        return {
            activeKey: 0,
            category: [],
            id: ''
        };
    },
    created() {
        getCategory().then(res => {
            this.category = res.data
            this.id = res.data[0].id
            this.getCate(this.id)
        })
    },
    methods: {
        getCate(id) {
            this.$bus.$emit('sendCate', id)
        }
    }
}
</script>

<style lang="less" scoped>
.van-sidebar {
    background-color: transparent;
    width: 87px;
    height: 100%;

    .van-sidebar-item {
        height: 50px;
        width: 87px;
        font-size: 12px;
        text-align: center;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        background-color: #f5f5f5;
    }

    .van-sidebar-item--select {
        color: #1db0f5;
        background-color: #fff;

        &::before {
            background-color: #1db0f5;
        }
    }
}
</style>