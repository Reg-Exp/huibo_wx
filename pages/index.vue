<template>
  <view v-show="loaded">
    <!--顶部搜索区域-->
    <view class="index-header">
      <image src="https://assets.huibo.com/img/wx_mobile/index-header-title.png" class="index-header-title"></image>
      <view class="index-header-search">
        <view class="index-header-area">
          重庆
          <text class="iconfont iconcondition-down"></text>
        </view>
        <view class="index-search-container" @tap="navTo(`common/search/index`)">
          <text class="iconfont iconsearch-find"></text>
          请输入职位或公司
        </view>
      </view>
    </view>
    <!--顶部搜索区域 -end- -->

    <!--顶部导航区域-->
    <view class="index-nav-container">
      <view class="index-nav">
        <view class="index-nav-item" v-for="(item,index) in nav" :key="index" @tap="navTo(`${item.url}`)">
          <image :src="item.image"></image>
          <view class="nav-item-text">
            {{item.title}}
          </view>
        </view>
      </view>
    </view>
    <!--顶部导航区域 -end- -->

    <!--职位推荐导航-->
    <view class="index-position-recommend">
      <scroll-view scroll-x="true" class="recommend-list-container">
        <view class="recommend-list">
          <view class="recommend-item" v-for ="(item,index) in recommendList" :key="index" :class="{active:recommendMark == index}">
            {{item}}
          </view>
        </view>
      </scroll-view>
      <view class="recommend-add">
        <img src="https://assets.huibo.com/img/wx_mobile/index-add.png" alt="">
      </view>
    </view>
    <!--职位推荐导航 -end- -->

    <!--页面筛选-->
     <view class="index-filtrate">
       <view class="filtrate-main">
         <view class="filtrate-main-item" :class="{active:filtrate == 1}">
           综合
         </view>
         <view class="filtrate-main-item">
           附近
         </view>
       </view>
       <view class="filtrate-lesser">
         <view class="filtrate-lesser-item">
           地区
         </view>
         <view class="filtrate-lesser-item">
           筛选
         </view>
       </view>
     </view>
    <!--页面筛选 -end- -->

    <!--职位列表-->
    <PositionList :positonList="positionList"></PositionList>
    <!--职位列表 -end--->

    <!--登录弹窗-->
    <LoginPop :login="false"></LoginPop>
    <!--登录弹窗 -end- -->
  </view>
</template>

<script>
  //登录框
  import LoginPop from "../components/LoginPop";
  import PositionList from "../components/PositionList";

  export default {
    components: {
      LoginPop,
      PositionList
    },
    data() {
      return {
        //页面渲染标记
        loaded:true,
        //导航栏
        nav:[
          {
            image:'https://assets.huibo.com/img/wx_mobile/index-nav-category.png',
            title:'职位分类',
            url:'login/index',
          },
          {
            image:'https://assets.huibo.com/img/wx_mobile/index-nav-work.png',
            title:'全部工作',
            url:'login/index',
          },
          {
            image:'https://assets.huibo.com/img/wx_mobile/index-nav-recruit.png',
            title:'现场招聘会',
            url:'login/index',
          },
          {
            image:'https://assets.huibo.com/img/wx_mobile/index-nav-video.png',
            title:'视频招聘会',
            url:'login/index',
          }
        ],
        //页面数据
        userInfo:{

        },
        //职位列表
        positionList:[{
          title:'高级产品经理'
        },{
          title:'中级产品经理'
        },{
          title:'低级产品经理'
        }],
        //接口携带参数
        req: {
          page_pageno: 1,
          visit_type:'',
          code_id: 0,
          base_jobsort:'',
          type:1,
        },
        //推荐职位标记
        recommendMark:0,
        //推荐职位列表   获取数据后可删除
        recommendList:['推荐','UI设计',"建筑工程师",'推荐','UI设计',"建筑工程师"],
        //综合及附近快捷筛选切换
        filtrate:1,
      }
    },
    onLoad() {
      //数据获取
      this.getUserInfo();
    },
    methods: {
      /**
       * 数据获取
       * @author Vergil 2020-06-09
       * @param Object $req  接口参数
       */
       getUserInfo() {
        this.$http.get('home_data',this.req).then(res => {
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
    box-sizing:border-box;
    background:#F6F7F9;
  }

  //顶部搜索区域
  .index-header {
    position:sticky;
    top:-40rpx;
    left:0;
    z-index:900;
    box-sizing:border-box;
    padding:75rpx 40rpx 0;
    width:100%;
    height:350rpx;
    background:url("https://assets.huibo.com/img/wx_mobile/index-header-bg.jpg");
    background-size:cover;

    .index-header-title {
      display:block;
      width:173rpx;
      height:44rpx;
      margin-bottom:77rpx;
    }

    .index-header-search {
      @include vertical;
      padding:20rpx 30rpx;
      background:#fff;
      border-radius:15rpx;


      .index-header-area {
        @include vertical;
        padding-right:20rpx;
        @include font(32,32,$title-font-color);
        border-right:1rpx solid #F1F1F1;

        .iconcondition-down {
          margin-left:20rpx;
          @include font(23,23,#bbb);
        }
      }

      .index-search-container {
        flex-grow:1;
        @include vertical;
        padding:0 20rpx;
        @include font(28,28,#ccc);

        .iconsearch-find {
          margin-right:10rpx;
          @include font(31,31,#ccc);
        }
      }
    }
  }
  //顶部搜索区域 -end-

  //顶部导航区域
  .index-nav-container {
    background:#0DDFCE;

    .index-nav {
      @include space-between;
      box-sizing:border-box;
      padding:45rpx 40rpx;
      background:#fff;
      border-top-left-radius:25rpx;
      border-top-right-radius:25rpx;

      .index-nav-item{
        @include vertical;
        flex-direction:column;

        image {
          display:block;
          width:60rpx;
          height:60rpx;
          margin-bottom:20rpx;
        }

        .nav-item-text {
          @include font(24,24,#000);
          text-align:center;
        }
      }
    }

  }
  //顶部导航区域 -end-

  //职位推荐导航
  .index-position-recommend{
    position: sticky;
    top: 310rpx;
    left: 0;
    z-index: 900;
    display: flex;
    justify-content: space-between;
    padding: 40rpx 40rpx 0;
    background: #fff;
    border-bottom: 1rpx solid #EBEBEB;

    .recommend-list-container{
      max-width: 440rpx;
      height: 80rpx;
      &::-webkit-scrollbar {
        display:none
      }
      .recommend-list{
        @include vertical;


        .recommend-item{
          @include font(30,40,#666);
          flex-shrink: 0;
          margin-right: 30rpx;
          padding-bottom: 40rpx;
        }
        .active{
          position: relative;
          @include font(40,40,#333,bold);
          &:after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 48rpx;
            height: 6rpx;
            background: #0FD5C7;
            border-radius: 3rpx;
          }
        }
      }
    }

    .recommend-add{
      img{
        width: 36rpx;
        height: 36rpx;
      }
    }
  }
  //职位推荐导航 -end-

  //页面筛选
  .index-filtrate{
    position: sticky;
    top: 415rpx;
    left: 0;
    @include space-between;
    padding: 35rpx 40rpx 20rpx;
    background: #fff;

    .filtrate-main{
      @include vertical;

      .filtrate-main-item{
        margin-right: 38rpx;
        @include font(30,30,#666)
      }
      .active{
        @include font(30,30,#333,bold)
      }
    }

    .filtrate-lesser{
      @include vertical;

      .filtrate-lesser-item{
        position: relative;
        padding: 15rpx 36rpx 15rpx 17rpx;
        margin-left: 16rpx;
        @include font(28,28,#666);
        background: #F6F6F6;
        border-radius: 8rpx;

        &:after{
          content: '';
          background: url("https://assets.huibo.com/img/wx_mobile/index-filter-arrow.png") no-repeat;
          background-size: cover;
          width: 10rpx;
          height: 10rpx;
          position: absolute;
          bottom: 15rpx;
          right: 10rpx;
        }
      }
    }
  }
  //页面筛选 -end-
</style>
