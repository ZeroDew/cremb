<template>
  <div id="app">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

      <div class="main_cont">
        <keep-alive exclude="detail,cart">
          <router-view></router-view>
        </keep-alive>
      </div>
    </van-pull-refresh>
    <nav>
      <navViewVue v-if="show" :active="active" @changeActive="getActive"></navViewVue>
    </nav>

  </div>
</template>
<script>
import navViewVue from './components/homeCom/navView.vue'
import { Toast } from 'vant';
import router from './router'



export default {
  data() {
    return {
      active: 'home',
      isLoading: false,
      show: true,//底部栏显隐
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    getActive(val) {
      this.active = val
    }
  },
  created() {
    router.afterEach((to, from) => {
      switch (to.path) {
        case '/':
          this.active = 'home';
          this.show = true;
          break;
        case '/classify':
          this.active = 'classify';
          this.show = false
          break;
        case '/cart':
          this.active = 'cart';
          this.show = false
          break;
        case '/personal':
          this.active = 'personal';
          this.show = true;
          break;
        default:
          this.show = false
          break;
      }



    })
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))

    })
  },
  beforeDestroy() {
    this.$store.commit('logout')
    localStorage.removeItem('token')
  },
  components: {
    navViewVue
  }
}

</script>
<style lang="less">
* {
  user-select: none;
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
  // background-color: #333;
}

.main_cont {
  min-height: 100vh;
}
</style>
