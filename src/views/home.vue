<template>
    <div class="box">
        <div class="top static">
            <bannerVue></bannerVue>
        </div>
        <div class="news static">
            <newsVue></newsVue>
        </div>
        <div class="menu static">
            <menuVue></menuVue>
        </div>
        <div class="coupons static">
            <couponsVue></couponsVue>
        </div>
        <div class="seckill static">
            <seckill></seckill>
        </div>
        <div class="combination static">
            <combinationVue></combinationVue>
        </div>
        <div class="goodSort static">
            <goodSort></goodSort>
        </div>
        <div class=" static">
            <reCom v-for="item in explosiveMoney" :key="item.id" :type="item.type">
                <span>{{ item.name }}</span>
                <span>{{ item.info }}</span>
            </reCom>
        </div>

    </div>
</template>

<script>
import bannerVue from '@/components/homeCom/banner.vue';
import newsVue from '@/components/homeCom/news.vue';
import menuVue from '@/components/homeCom/menu.vue';
import couponsVue from '@/components/homeCom/coupons.vue';
import seckill from '@/components/homeCom/seckill.vue';
import combinationVue from '@/components/homeCom/combination.vue';
import goodSort from '@/components/homeCom/goodSort.vue';
import reCom from '@/components/homeCom/reCom.vue';
import { getIndexData } from '@/api/home.js';
import navViewVue from '@/components/homeCom/navView.vue';

export default {
    data() {
        return {
            explosiveMoney: []
        }
    },
    created() {
        getIndexData().then(res => {
            this.explosiveMoney = res.data.explosiveMoney
        })

    },

    components: {
        bannerVue,
        newsVue,
        menuVue,
        couponsVue,
        combinationVue,
        goodSort,
        reCom,
        seckill,
        navViewVue
    }
}
</script>
<style lang="less" scoped>
.top {
    width: 100%;
    height: 218px;
    padding: 0 15px;
    margin-bottom: 12px;
    background-image: linear-gradient(to bottom, #1db0fc 10%, transparent);
}


.static {
    margin-bottom: 12px;
    padding: 0 15px;
    overflow: hidden;
}
</style>