<template>
    <view>
      <view class="mask" v-if="login"></view>
      <view class="pop-container" v-if="login">
        <view class="pop-header">
          登录或注册汇博
        </view>
        <!--<image class="pop-close" src="../../img/pop-close.png"></image>-->
        <button class="pop-item pop-item-wx" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">
          <!--<image class="pop-icon" src="../../img/pop-wx-icon.png"></image>-->
          微信账号快速登录
        </button>
        <view class="pop-item pop-item-phone" @tap="toPhone">
          <!--  <image class="pop-icon" src="../../img/pop-login-icon.png"></image>-->
          手机号注册/登录
        </view>
      </view>
    </view>
</template>

<script>

  export default {
    name: 'LoginPop',
    props: {
      login: {
        type: Boolean,
        default: 'false'
      },
    },
    data() {
      return {}
    }
  }
</script>


<style lang="scss" scoped>
  .mask{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(54, 53, 53, 0.8);
    z-index:902;
  }

  .pop-container{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:905;
    @include vertical;
    flex-direction:column;
    margin:auto;
    width:690rpx;
    height:440rpx;
    background:#fff;
    border-radius:10rpx;


    .pop-header{
      padding:40rpx;
      margin-bottom:24rpx;
      @include font(34,34,$main-font-color);
      text-align:center;
    }
    .pop-close{
      position:absolute;
      top:26rpx;
      right:30rpx;
      display:block;
      width:20rpx;
      height:20rpx;
    }

    .pop-item{
      @include vertical;
      box-sizing:border-box;
      margin-bottom:40rpx;
      padding-left:50rpx;
      width:490rpx;
      height:80rpx;
      @include font(34,34,$main-font-color);
      font-size:34rpx;
      line-height:34rpx;
      border-radius:10rpx;


      .pop-icon{
        display:block;
        margin-right:20rpx;
        width:40rpx;
        height:40rpx;
      }

      .pop-item-wx{
        background:#47C671;
        color:#fff;

        button::after{
          border:none;
        }
      }

      .pop-item-phone{
        background:#E5E5E5;
        color:#222;
      }
    }
  }







</style>
