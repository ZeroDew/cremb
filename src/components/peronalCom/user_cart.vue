<template>
    <div class="userCart" v-cloak>
        <div class="top">
            <img :src="isLogin ? userinfo.avatar : userSrc" alt="" @click="login">
            <div class="info" v-if="isLogin">
                <div class="title">{{ title }}</div>
                <div class="phone" v-if="isLogin">{{ userinfo.phone }} <img :src="edit" alt=""></div>
            </div>
            <div class="info" v-else>
                <div class="title" @click="login">请点击登录</div>
            </div>

        </div>
        <div class="bot">
            <div class="num_item" @click="toMoney"><span>{{ userinfo.nowMoney || '0' }}</span><span>余额</span></div>
            <div class="num_item" @click="toCollect"><span>{{ userinfo.collectCount || '0' }}</span><span>积分</span></div>
            <div class="num_item" @click="toCoupon"><span>{{ userinfo.couponCount || '0' }}</span><span>优惠券</span></div>
            <div class="num_item" @click="toIntegral"><span>{{ userinfo.integral || '0' }}</span><span>收藏</span></div>
        </div>
    </div>
</template>

<script>
import { userInfo } from '@/api/user'
import { mapMutations, mapState } from 'vuex'
import { Toast } from 'vant'
import notLogin from '@/utils/notLogin'
export default {
    data() {
        return {
            title: '请点击登录',
            userInfo: {},
            userSrc: require('@/assets/images/f.png'),
            edit: require('@/assets/images/edit.png')
        }
    },
    computed: {
        ...mapState(['isLogin', 'userinfo'])
    },
    created() {
        if (this.isLogin) {
            let token = localStorage.getItem('token');
            userInfo({ token }).then(res => {
                this.userInfo = res.data;
                this.setUserinfo(res.data)
                this.title = res.data.nickname
            })
        }
    },

    methods: {
        ...mapMutations(['setUserinfo']),
        login() {
            this.$router.push('/login')
        },
        toCoupon() {
            notLogin(this.isLogin, () => {

                this.$router.push('/coupon')
            }, () => {
                this.$router.push('/login')
            })
        }, toMoney() {
            notLogin(this.isLogin, () => {

                // this.$router.push('/coupon')
            }, () => {
                this.$router.push('/login')
            })
        }, toCollect() {
            notLogin(this.isLogin, () => {

                // this.$router.push('/coupon')
            }, () => {
                this.$router.push('/login')
            })
        }, toIntegral() {
            notLogin(this.isLogin, () => {

                // this.$router.push('/coupon')
            }, () => {
                this.$router.push('/login')
            })
        }
    }
}
</script>

<style lang="less" scoped>
.userCart {
    padding: 17px 0 14px 0;

    .top {
        display: flex;
        justify-content: flex-start;

        img {
            width: 59px;
            height: 59px;
            object-fit: cover;
            border-radius: 50%;
        }

        .info {
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 9px;
            padding: 7px 0;

            .title {
                height: 20px;


                font-size: 15px;
                color: #fff;
            }

            .phone {
                height: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                font-size: 12px;
                color: rgb(255 255 255 / 60%);

                img {
                    width: 10px;
                    height: 11px;
                    object-fit: cover;
                    vertical-align: middle;
                }
            }
        }


    }

    .bot {
        margin-top: 14px;
        display: flex;

        .num_item {
            width: 87px;
            height: 45px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            span {
                color: #fff;
                font-size: 20px;
                font-weight: bolder;

                &:nth-of-type(2) {
                    margin-top: 4px;
                    font-size: 12px;
                    font-weight: 300;
                    color: rgba(255, 255, 255, .6);
                }
            }
        }
    }
}
</style>