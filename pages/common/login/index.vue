<template>
  <view>
    <view class="login-title">
      欢迎来到汇博人才网
    </view>

    <!--手机号-->
    <view class='login-operation-item'>
      <text class="login-operation-icon icon iconfont iconlogin-user"></text>
      <input type='text' placeholder-class="placeholder" v-model.trim='req.username' placeholder='请输入手机号'>
      <text class="login-operation-empty iconfont iconcontent-delete" @tap="emptyPhone()"></text>
    </view>
    <!--手机号 -end- -->

    <!--密码-->
    <view class='login-operation-item'>
      <text class="login-operation-icon icon iconfont iconlogin-password"></text>
      <input type='password' placeholder-class="placeholder" v-model.trim='req.pwd'
             placeholder='请输入密码'>
    </view>
    <!--验证码 -end- -->
    <view class='login-submit login-disabled' v-if="!req.username || !req.pwd">立即登录</view>
    <view class='login-submit' @tap='login' v-else>立即登录</view>
    <view class='login-tocode' @tap='navTo(`register`)'>验证码登录/注册</view>
  </view>
</template>

<script>
  import md5 from 'js-md5';

  export default {
    data() {
      return {
        //接口携带参数
        req: {
          //电话号码
          username: '',
          //密码
          pwd: '',
          thirdtype: 0,
        },
      };
    },
    onLoad() {
    },
    methods: {
      /**
       * 清空手机号
       * @author Vergil 2020-06-03
       * @param Number $req.mobile_phone  用户账号
       */
      emptyPhone() {
        this.req.mobile_phone = '';
      },

      /**
       * 登录
       * @author Vergil 2020-06-03
       * @param Object $req  用户账号及密码
       */
      login() {
        const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        const phoneReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
        this.req.username = this.req.username.replace(/\s*/g,"");
        if (!phoneReg.test(this.req.username) && !emailReg.test(this.req.username)) {
          this.$utils.showToast('请输入正确的账号');
          return
        }

        //对密码进行md5加密
        this.req.pwd = md5(this.req.pwd).substr(8, 16);

        this.$http.post('loginnew', this.req).then(res => {
          this.$utils.setStorageSync('token', res.data.data.token);
          console.log(this.$utils.getStorageSync('token'));
          this.$utils.showToast('登录成功', 'none', 2000);
          setTimeout(() => {
            this.$utils.reLaunch('../index')
          },2000)
        }).catch(e => {
          this.$utils.showToast(e.data.msg);
        })
      },

      /**
       * 路由
       * @author Vergil 2020-06-09
       * @param String $url  路由地址
       */
      navTo(url){
        this.$utils.navTo(url);
      },

    }
  }
</script>

<style lang="scss">

  page {
    box-sizing: border-box;
    padding: 100rpx 75rpx 0;
  }
  .login-title{
    margin-bottom: 90rpx;
  }

  .login-disabled {
    background: #ccc;
  }
</style>
