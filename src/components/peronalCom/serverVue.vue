<template>
    <div class="box">
        <van-cell title="我的服务" :border="false"></van-cell>
        <van-grid :border="false" v-if="isLogin">
            <van-grid-item v-for="item in routine_my_menus" :key="item.id" :icon="item.pic" :text="item.name"
                @click="toUrl(item.url)" lazy-load>
            </van-grid-item>
        </van-grid>
        <van-grid :border="false" v-else>
            <van-grid-item :icon="require('@/assets/images/customer.png')" text="联系客服">

            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import { getUserInfo } from '@/api/personal.js'
import { mapState } from 'vuex'
export default {
    name: 'serverVue',
    data() {
        return {
            routine_my_menus: []
        }
    },
    computed: {
        ...mapState(['isLogin', 'userinfo'])
    },
    props: {
        account: {
            type: String
        }
    },
    methods: {
        getinfo() {
            if (this.userinfo.phone !== undefined) {
                getUserInfo({ account: this.userinfo.phone }).then(res => {
                    this.routine_my_menus = res.data.routine_my_menus
                })
            }
        },
        toUrl(url) {
            this.$router.push(url)
        }
    },
    created() {
        this.getinfo()
    },
    watch: {
        'userinfo': {
            handler(n) {
                this.getinfo()
            }, deep: true
        }
    }

}
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;

    .van-cell {
        .van-cell__title {
            span {
                color: #282828;
                font-size: 15px;
                font-weight: 700;
                padding: 15px 15px 20px;
            }
        }

        .van-grid {}
    }
}
</style>