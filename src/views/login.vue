<template>
    <div>
        <div class="box" v-if="!isLogin">
            <img src="@/assets/images/userlogin.png" alt="">
            <van-form @submit.prevent v-if="loginType">
                <van-field v-model="username" name="account" placeholder="输入手机号码" :left-icon="phone"
                    :rules="[{ required: true, message: '请填写手机号码' }]" :center="true" />
                <van-field v-model="password" type="text" name="text" placeholder="填写验证码" :left-icon="code"
                    :rules="[{ required: true, message: '请填写验证码' }]" :center="true" />
                <div>
                    <van-button round block type="info" native-type="submit" color="#1db0fc">登录</van-button>
                </div>
                <div class="type" @click="changeLogin">账号登录</div>
            </van-form>
            <van-form @submit="onSubmit" v-else>
                <van-field v-model="username" name="account" placeholder="输入手机号码" :left-icon="phone"
                    :rules="[{ required: true, message: '请填写手机号码' }]" :center="true" />
                <van-field v-model="password" type="password" name="password" autocomplete="" placeholder="填写登录密码"
                    :left-icon="code" :rules="[{ required: true, message: '请填写密码' }]" :center="true" />
                <div>
                    <van-button round block type="info" native-type="submit" color="#1db0fc">登录</van-button>
                </div>
                <div @click="changeLogin" class="type">快速登录</div>
            </van-form>
        </div>
        <div v-else class="user">
            <van-cell-group inset>
                <van-cell title="头像" :border="false" class="head">
                    <template #right-icon>
                        <img v-lazy="userinfo.avatar" alt="">
                        <img src="@/assets/images/alert1.png" class="edit">
                    </template>
                </van-cell>
                <van-cell title="昵称" :border="false" :value="userinfo.nickname" />
                <van-cell title="手机号码" is-link :border="false" :value="userinfo.phone">

                </van-cell>
                <van-cell title="ID号" :border="false">
                </van-cell>
                <van-cell title="密码" is-link :border="false" value="点击修改密码" />

            </van-cell-group>
            <div class="done">
                <van-button class="btn" text="保存修改" color="#1db0fc" round @click="edit"></van-button>
                <span class="logout" @click="logout">退出登录</span>
            </div>

        </div>
    </div>
</template>

<script>
import { login, userInfo } from '@/api/user.js'
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            loginType: false,//登录方式 密码登录
            username: '',//用户名
            password: '',//密码
            phone: require('@/assets/images/phone_1.png'),//用户名图标
            code: require('@/assets/images/code_2.png'),//密码图标
        };
    },
    computed: {
        ...mapState(['isLogin', 'userinfo'])
    }
    ,
    created() {

    },
    methods: {
        ...mapMutations(['login', 'setUserinfo']),
        onSubmit(values) {
            login(values).then(res => {
                if (res.code == 200) {
                    this.$store.commit('login')
                    localStorage.setItem('token', res.data.token);
                    userInfo({ token: res.data.token }).then(res => {

                        this.setUserinfo(res.data)
                    })
                    this.$router.push('/personal')
                }
                else {
                    alert(res.message)
                }
            })

        },
        changeLogin() {
            this.loginType = !this.loginType
        },
        logout() {
            localStorage.removeItem('token')
            this.$store.commit('logout');
            this.$router.push('/personal')
        },
        edit() {
            /* 保存 */
            this.$router.push('/personal')
        }
    },
};
</script>

<style lang="less" scoped>
.box {
    padding: 14px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    img {
        width: 89px;
        height: 89px;
        border-radius: 50%;
        margin-top: 99px;
    }

    .van-form {
        width: 100%;
        margin-top: 49px;

        .van-cell {
            height: 53px;
            padding: 7px 22px;
        }

        .type {
            font-size: 13px;
            color: #999;
            margin: 14px;
        }

        .van-button {
            width: 347px;
            height: 42px;
            margin-top: 39px;
            font-size: 14px;
        }
    }
}

.user {
    margin-top: 15px;

    .head {

        position: relative;

        img {
            width: 44px;
            height: 44px;
            object-fit: cover;
        }

        img.edit {
            width: 15px;
            height: 15px;
            position: absolute;
            border-radius: 50%;
            right: 10px;
            bottom: 16px;
            transform: translateX(-50%);
        }
    }

    .done {
        width: 100%;
        margin-top: 38px;

        padding: 0 15px;

        .btn {
            width: 100%;
            height: 45px;
        }

        span.logout {
            display: block;
            width: 100%;
            height: 40px;
            margin-top: 15px;
            color: #333;
            text-align: center;
            line-height: 40px;
        }
    }

}
</style>