<template>
    <div>
        <van-swipe>
            <van-swipe-item v-for="item in routine_my_banner" :key="item.id">
                <img :src="item.pic" alt="" style="width: 100%; height: 100%;object-fit: cover;">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { getUserInfo } from '@/api/personal.js'
export default {
    data() {
        return {
            routine_my_banner: [],
        }
    },
    props: {
        account: {
            type: String
        }
    },

    created() {
        getUserInfo({ account: this.account }).then(res => {
            this.routine_my_banner = res.data.routine_my_banner
        })
    }
}
</script>

<style lang="less" scoped>
.van-swipe {
    height: 70px;
    width: 100%;
    margin: 10px 0;
    border-radius: 7px;
}
</style>