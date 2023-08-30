<template>
    <div>
        <div class="search">
            <searchVue></searchVue>
        </div>
        <div class="cont">
            <div class="sidebar">
                <sidebarVue></sidebarVue>
            </div>
            <div class="detail">
                <cateDetailVue></cateDetailVue>
            </div>
        </div>
        <div class="subbar">
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
        </div>
    </div>
</template>

<script>
import searchVue from '@/components/classify/search.vue'
import sidebarVue from '@/components/classify/sidebar.vue'
import cateDetailVue from '@/components/classify/cateDetail.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        searchVue,
        sidebarVue,
        cateDetailVue
    },
    methods: {
        onSubmit() {

        }
    }
}
</script>

<style lang="less" scoped>
.cont {
    display: flex;

    // background-color: #fff;


    .sidebar {
        width: 87px;
        height: calc(100vh - 50px);
    }

    .detail {
        flex: 1;
        background-color: #fff;
    }
}
</style>