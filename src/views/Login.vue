<!--login-->
<template>
  <div class="global">
    <div class="loginBar">
      <!--- 头像 -->
      <div class="logo">
        <img :src="userImg" alt="头像" />
      </div>
      <keep-alive>
        <component :is="view"></component>
      </keep-alive>
      <div class="hr"></div>
      <!-- 第三方注册 -->
      <div class="other">
        <div class="icon">
          <i class="iconfont icon-weixindenglu" @click="loginByWx"></i>
        </div>
        <div class="icon">
          <i class="iconfont icon-zhifubaozhifu" @click="loginByAlipy"></i>
        </div>
        <div class="icon">
          <i class="iconfont icon-shoujidenglu" @click="loginByphone"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import def from '../components/Login/default.vue'
export default {
  data () {
    return {
      view: 'def',
      userImg: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/user').then((res) => {
        console.log(res)
        this.userImg = res.data.defaultName
      })
    },

    // 手机登录
    loginByphone () {
      console.log('手机注册')
    },
    // 支付宝登录
    loginByAlipy () {
      console.log('支付宝登录')
    },
    // 微信登录
    loginByWx () {
      console.log('微信登录')
    }
  },
  components: {
    def
  }
}
</script>
<style lang="less" scoped>
.global {
  height: 100vh;
  width: 100vw;
  background-color: rgb(8, 165, 238);
  position: relative;
  .loginBar {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 25rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding-bottom: 20px;
  }
  .loginBar .logo {
    position: absolute;
    top: -3.5rem;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    box-shadow: 0px 0px 20px rgb(41, 39, 39);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .other {
    bottom: 60px;
    width: 70%;
    height: 3rem;
    line-height: 3rem;
    display: flex;
    justify-content: space-around;
    .icon {
      cursor: pointer;
      i {
        font-size: 2rem;
        border-radius: 50%;
        color: green;
      }
    }
    .icon:nth-child(2) i {
      color: blue;
    }
    .icon:nth-child(3) i {
      color: orange;
    }
  }
  .hr {
    margin: 20px 0 0;
    width: 80%;
    height: 1px;
    background: #000;
    transform: scale(1, 0.5);
  }
}
</style>
