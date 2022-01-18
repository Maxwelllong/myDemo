<!--默认登录-->
<template>
  <div class="Login">
    <div class="loginBar">
      <div class="con">
        <div class="inpBox">
          <p>用户名</p>
          <input type="text" v-model="userName" placeholder="请输入用户名" />
        </div>
        <div class="inpBox">
          <p>密 &nbsp; 码</p>
          <input type="password" v-model="password" placeholder="请输入密码" />
        </div>
        <div class="checkbox">
          <div class='first'>
            <input class="iptCbox" type="password" v-model="iptCodes" placeholder="请输入验证码" />
            <input type="button" :value="codes" @click="change" class="checkcode"></input>
          </div>
          <div class='seconde'>
            <div v-show='chkTips' class='tips' >验证码不正确 请重新输入</div>
          </div>
        </div>
        <button class="btn" @click="login">登录 / 注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      codes: '',
      iptCodes: '',
      chkTips: false
    }
  },
  mounted () {
    this.change()
  },
  methods: {
    change () {
      // 清除上次生成的codes
      this.codes = ''
      const array = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
      // 随机从数组中获取四个元素组成验证码
      for (let i = 0; i < 4; i++) {
        const r = parseInt(Math.random() * array.length)
        this.codes += array[r]
      }
    },
    // 登录事件
    login () {
      // TODO:判断是否账号密码以及验证码为空？
      // 如果为空则跳转到注册页面，否则执行登录页面
      if (this.userName || this.password || this.iptCodes) {
        // 验证codes是否填写正确
        // 获取输入框内容
        // 将输入框中的大写字幕转化为小写字母
        const lowerIpt = this.iptCodes.toLowerCase()
        const lowerCodes = this.codes.toLowerCase()
        if (lowerCodes !== lowerIpt) {
          this.chkTips = true
        } else {
          this.chkTips = false
        }
      } else {
        // 跳转到注册页面
        this.$router.push('/reg')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.Login {
    .loginBar .con {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    .inpBox {
      display: flex;
      width: 100%;
      height: 4rem;
      justify-content: start;
      align-items: center;
      p {
        width: 6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #000;
      }
      input {
        border: none;
        outline: none;
        height: 20px;
      }
    }
    .checkbox {
      display: flex;
      flex-direction: column;
      .first {
        display: flex;
        width: 100%;
        height: 2rem;
        .iptCbox {
          height: 2rem;
          width: 7rem;
          margin-right: 30px;
          outline: none;
          border: none;
        }
        .checkcode {
          width: 5rem;
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          cursor: pointer;
          background: darkorange;
          border-radius: 3rem;
          border: none;
          text-align: justify;
          font-family: Arial, 宋体;
          padding: 2px 3px;
          letter-spacing: 3px;
          font-style: italic;
        }
      }
    }
    .tips {
      font-size: 6px;
      color: red;
    }
    .btn {
      margin-top: 20px;
      width: 200px;
      height: 40px;
      border: none;
      cursor: pointer;
    }

  }
}
</style>
