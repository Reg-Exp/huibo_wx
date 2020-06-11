<template>
  <view class="position-panel">
    <view class="position-item" v-for="(item,index) in positonList" :key="index">
      <view class="position-item-header">
        <div class="item-header-info">
          <div class="item-title">
            {{item.title}}
          </div>
          <image src="../static/position-tips.png" class="item-header-tips"></image>
        </div>
        <div class="item-salary">
          8.5-15K
        </div>
      </view>
      <view class="position-item-content">
        <view class="content-list">
          沙坪坝区-小龙坎
        </view>
        <view class="content-list">
          本科
        </view>
      </view>
      <view class="positon-company">
        <view class="company-info">
          <image class="company-icon"></image>
          <view class="company-info-panel">
            <view class="company-title">
              贝壳新房
            </view>
            <view class="company-tips">
              50人以下
            </view>
          </view>
        </view>
        <view class="positon-date">
          今天
        </view>
      </view>
      <view class="position-recommend">
        <img src="../static/position-recommend.png" alt="">
        根据浏足迹为你推荐
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    name: "PositionList",
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
