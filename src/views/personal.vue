<template>
    <div class="container">
        <div class="top">
            <user_cart></user_cart>
            <order></order>
        </div>
        <swipePer :account="userinfo.phone" v-if="isLogin" class="swipe"></swipePer>
        <serverVueVue :account="userinfo.phone || ''"></serverVueVue>
    </div>
</template>

<script>
import user_cart from '@/components/peronalCom/user_cart.vue'
import order from '@/components/peronalCom/order.vue';
import swipePer from '@/components/peronalCom/swipePer.vue';
import { mapState } from 'vuex';
import serverVueVue from '@/components/peronalCom/serverVue.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        user_cart,
        order,
        swipePer,
        serverVueVue,

    },
    computed: {
        ...mapState(['isLogin', 'userinfo'])
    },

}
</script>

<style lang="less" scoped>
.container {
    padding: 0 15px;

    .top {
        margin: 0 -15px;
        margin-bottom: 20px;
        padding: 0 15px;
        height: 280px;
        background-image: linear-gradient(to bottom, #1db0fc 10%, transparent);

    }

    .swipe {
        margin-top: 10px;
    }

}
</style>