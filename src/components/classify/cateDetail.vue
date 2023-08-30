<template>
    <div>
        <nav class="nav">
            <van-swipe :width="79" :loop="false" :show-indicators="false">
                <van-swipe-item>
                    <span :class="{ 'active': active == 0 }" @click="active = 0">全部</span>
                </van-swipe-item>
                <van-swipe-item v-for="(item, index) in cont[0].child" :key="item.id">
                    <span :class="{ 'active': active == index + 1 }" @click="active = index + 1">{{ item.name }}</span>
                </van-swipe-item>
            </van-swipe>
            <div class="openList">
                <van-icon class-prefix="fa" name="caret-down"></van-icon>
            </div>
        </nav>
        <div class="cont">
            <loading v-if="isloading"></loading>
            <emptyVue v-if="cateDetail.length == 0"></emptyVue>
            <cateItemVue :cateDetail="cateDetail" v-cloak></cateItemVue>
        </div>
    </div>
</template>

<script>
import { getCategory } from '@/api/classify.js'
import { getCateCont } from '@/api/classify.js'
import emptyVue from './emptyVue.vue'
import cateItemVue from './cateItem.vue'
import loading from '../loading.vue'
export default {
    data() {
        return {
            id: '',
            cont: [{ child: '' }],
            active: 0,
            cateDetail: [],
            isloading: true
        }
    },
    components: {
        emptyVue,
        cateItemVue,
        loading
    },
    methods: {
        getCont() {
            getCategory().then(res => {
                this.isloading = true
                this.cont = res.data.filter(ele => {
                    this.isloading = false
                    return ele.id == this.id
                })
            })
        },
        getCateDetail(id) {
            this.isloading = true
            getCateCont(id).then(res => {
                this.isloading = false
                this.cateDetail = res.data.list
            })
        }
    },
    created() {
        this.$bus.$on('sendCate', res => {
            this.id = res
        })
        this.getCont()
        this.getCateDetail(this.id)
    },
    watch: {
        id: {
            deep: true,
            handler() {
                this.getCont()
                this.getCateDetail(this.id)


            }
        }

    }
}
</script>

<style lang="less" scoped>
.nav {

    height: 49px;
    display: flex;
    justify-content: space-between;

    .van-swipe {
        width: 243px;
        height: 100%;

        .van-swipe-item {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 75px;
                height: 21px;
                color: #333;
                background-color: #f7f7f7;

                font-size: 12px;
                border-radius: 10px;
                margin-left: 5px;

            }
        }
    }

    .openList {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 31px;
        height: 49px;
        margin-left: 14px;
    }
}


.active {
    background-color: #e9f7ff !important;
    color: #1d80fc !important;
}
</style>