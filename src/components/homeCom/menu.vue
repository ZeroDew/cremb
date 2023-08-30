<template>
    <div class="box">
        <van-grid :border=false :column-num="5" icon-size="40px">
            <van-grid-item v-for="item in getMenus" :key="item.id" :text="item.name" :icon="item.pic" class="grid_item"
                @click="go(item.url)">
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import { getIndexData } from '@/api/home.js'
export default {
    data() {
        return {
            getMenus: [],
        }
    }, created() {
        getIndexData().then(res => {
            this.getMenus = res.data.menus
            console.log(res.data.menus);
        })

    }, methods: {
        go(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style lang="less" scoped>
.box {
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 14px;
    padding: 5px;
    background-color: #fff;

    .van-grid {
        height: 160px;
        align-content: center;
    }
}
</style>