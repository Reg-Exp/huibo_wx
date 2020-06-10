<template>
  <view class="position-panel">
    <view class="position-item">
      <view class="position-item-header">
        <div class="item-header-info">
          <div class="item-title">
            高级产品经理...
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
    name: "PositionList"
  }
</script>

<style lang="scss" scoped>
  .position-item{
    margin-bottom: 16rpx;
    padding: 48rpx 40rpx;
    background: #fff;

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
      }
    }
  }
</style>
