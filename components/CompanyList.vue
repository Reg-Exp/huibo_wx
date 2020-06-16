<template>
  <view class="company-panel">
    <view class="company-item">
      <view class="item-header">
        <image class="company-icon"></image>
        <view class="item-header-panel">
          <view class="item-header-info">
            <view class="item-header-title">
              爱奇艺
            </view>
            <view class="item-header-attention">
              关注
            </view>
          </view>
          <view class="item-header-subtitle">
            21条面试评价 4.7分
          </view>
          <view class="item-header-describe">
            视频行业领先地位
          </view>
        </view>
      </view>
      <view class="item-content">
        <view class="item-content-item">
          100人以上
        </view>
        <view class="item-content-item">
          100人以上
        </view>
        <view class="item-content-item">
          100人以上
        </view>
      </view>
      <view class="item-footer">
        <view class="item-footer-position">
          <span>前端开发</span>等14个职位在招
        </view>
        <view class="item-footer-more iconfont icongz_subscription_select"></view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "CompanyList",
    props: {
      positonList: {
        type: Array,
        default: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
  .position-item{
    margin-bottom: 16rpx;
    padding: 48rpx 40rpx;
    background: #fff;
    &:first-child{
      padding-top: 20rpx;
    }

    .position-item-header{
      @include space-between;
      margin-bottom: 24rpx;

      .item-header-info{
        @include vertical;

        .item-title{
          max-width: 250rpx;
          @include font(36,36,$main-font-color,bold);
          @include ellipsis;

        }

        .item-header-tips{
          margin-left: 16rpx;
          width: 32rpx;
          height: 32rpx;
        }
      }

      .item-salary{
        @include font(30,30,#F8664F)
      }
    }

    .position-item-content{
      @include vertical;
      margin-bottom: 48rpx;

      .content-list{
        margin-right: 20rpx;
        padding: 10rpx;
        @include font(24,24,#666);
        background: #F6F6F6;
        border-radius: 6rpx;
      }
    }

    .positon-company{
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .company-info{
        @include vertical;

        .company-icon{
          margin-right: 24rpx;
          width: 64rpx;
          height: 64rpx;
        }

        .company-info-panel{
          max-width: 370rpx;

          .company-title{
            margin-bottom: 15rpx;
            @include font(30,30,$main-font-color)
          }

          .company-tips{
            @include font(24,24,#AAA)
          }
        }
      }

      .positon-date{
        @include font(22,22,#C7C7C7);
      }
    }

    .position-recommend{
      @include vertical;
      margin-top: 40rpx;
      @include font(24,24,#AAA);

      image{
        margin-right: 8rpx;
        width: 24rpx;
        height: 24rpx;
      }
    }
  }
</style>
