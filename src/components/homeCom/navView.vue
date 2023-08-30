<template>
    <div>
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" :placeholder="true" fixed
            :animated="true">
            <van-tabbar-item to="/" :icon="active == 'home' ? icons.home_active : icons.home"
                name="home">首页</van-tabbar-item>

            <van-tabbar-item to="/classify" class="iconfont" icon-prefix="icon"
                :icon="active == 'classify' ? icons.classify_active : icons.classify" name="classify">
                分类
            </van-tabbar-item>

            <van-tabbar-item to="/cart" :icon="active == 'cart' ? icons.cart_active : icons.cart"
                name="cart">购物车</van-tabbar-item>

            <van-tabbar-item to="/personal" class="iconfont" icon-prefix="icon"
                :icon="active == 'personal' ? icons.personal_active : icons.personal" name="personal">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: {
                home: 'wap-home-o',
                home_active: 'wap-home',
                classify: 'fenlei1',
                classify_active: 'biaoqiankuozhan_fenlei-382',
                cart: 'shopping-cart-o',
                cart_active: 'shopping-cart',
                personal: 'wode',
                personal_active: 'wode1',
            }
        }
    },
    props: ['active'],
    methods: {
        send(index) {
            this.$emit('changeActive', index)
            console.log(index, '我发的');
        }
    }
}
</script>

<style lang="less" scoped></style>