<template>
  <view v-show="loaded">
    <!--个人信息-->
    <view class="header">
      <view class="header-info">
        <view class="header-info-portrait">
          <img src="" alt="">
          <text class="iconfont iconresume-girl"></text>
          <text class="iconfont iconresume-boy"></text>
        </view>
        <view class="header-info-panel">
          <view class="header-info-title">
            陈媛媛
          </view>
          <view class="header-info-subtitle">
            <text>28岁</text>
            ·
            <text>中专</text>
            ·
            <text>4年经验</text>
            ·
            <text>165cm</text>
          </view>
        </view>
      </view>
      <view class="header-info-details">
        <view class="info-details-item">
          <text class="iconfont iconicon_resume-address"></text>
          重庆- 渝中区-上清寺
        </view>
        <view class="info-details-container">
          <view class="info-details-item">
            <text class="iconfont iconicon_phone"></text>
            18166478207
          </view>
          <view class="info-details-item">
            <text class="iconfont iconicon_email"></text>
            792746535@qq.com
          </view>
        </view>
        <view class="info-details-item">
          <text class="iconfont iconicon_position"></text>
          15天内到岗 /在职，打算近期换工作
        </view>
      </view>
    </view>
    <!--个人信息 -end- -->

    <!--求职意向-->
    <view class="content-item">
      <view class="content-title">
        求职意向
      </view>
      <view class="intention-panel">
        <view class="intention-item">
          <view class="intention-item-title">
            期望职位
          </view>
          <view class="intention-item-details">
            UI设计
          </view>
        </view>
        <view class="intention-item">
          <view class="intention-item-title">
            期望行业
          </view>
          <view class="intention-item-details">
            互联网/移动互联网/电子…
          </view>
        </view>
        <view class="intention-item">
          <view class="intention-item-title">
            期望地点
          </view>
          <view class="intention-item-details">
            渝中区+江北区+渝北区
          </view>
        </view>
        <view class="intention-item">
          <view class="intention-item-title">
            期望薪资
          </view>
          <view class="intention-item-details">
            8000及以上
          </view>
        </view>
      </view>
    </view>
    <!--求职意向 -end- -->

    <!--工作/实习经历-->
    <view class="content-item">
      <view class="content-title">
        工作/实习经历
      </view>
      <view class="business-panel">
        <view class="business-item">
          <view class="business-title">
            2015.09—2015.03 (1年4个月)
            <view class="business-title-tips">
              实
            </view>
          </view>
          <view class="business-subtitle">
            <view class="business-subtitle-position">
              Java开发助理
            </view>
            <view class="business-subtitle-salary">
              1200元/月 <span>保密</span>
            </view>
          </view>
          <view class="business-company">
            重庆xxxx网络科技有限公司
          </view>
          <view class="business-company-info">
            50-100人 I 国企 I 互联万网/移动互联网
          </view>
          <view class="business-company-position">
            <view class="company-position-item">
              交互设计
            </view>
            <view class="company-position-item">
              交互设计
            </view>
          </view>
          <view class="business-company-require">
            <view class="company-require-item">
              1. 负责研发公司项目软件的模块设计、开发和交开发和交开发和交开发和交开发和交。
            </view>
            <view class="company-require-item">
              2. 负责编码，单元测试，并确保通过。
            </view>
          </view>
        </view>
        <view class="business-item">
          <view class="business-title">
            2015.09—2015.03 (1年4个月)
            <view class="business-title-tips">
              实
            </view>
          </view>
          <view class="business-subtitle">
            <view class="business-subtitle-position">
              Java开发助理
            </view>
            <view class="business-subtitle-salary">
              1200元/月 <span>保密</span>
            </view>
          </view>
          <view class="business-company">
            重庆xxxx网络科技有限公司
          </view>
          <view class="business-company-info">
            50-100人 I 国企 I 互联万网/移动互联网
          </view>
          <view class="business-company-position">
            <view class="company-position-item">
              交互设计
            </view>
            <view class="company-position-item">
              交互设计
            </view>
          </view>
          <view class="business-company-require">
            <view class="company-require-item">
              1. 负责研发公司项目软件的模块设计、开发和交开发和交开发和交开发和交开发和交。
            </view>
            <view class="company-require-item">
              2. 负责编码，单元测试，并确保通过。
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--工作/实习经历 -end- -->

    <!--教育/培训经历-->
    <view class="content-item">
      <view class="content-title">
        教育/培训经历
      </view>
      <view class="education-panel">
        <view class="education-panel-item">
          <view class="education-title">
            2015.09—2015.03 (1年4个月)
            <view class="education-title-tips">
              培
            </view>
          </view>
          <view class="education-subtitle">
            本科 I 重庆大学 I 软件工程
          </view>
          <view class="education-content">
            <view class="education-content-item">
              在校成绩：4.1/5.0
            </view>
            <view class="education-content-item">
              校内职务：系学生会主席，班长，围棋社社长，校内微信公众号运营负责
            </view>
          </view>
        </view>
        <view class="education-panel-item">
          <view class="education-title">
            2015.09—2015.03 (1年4个月)
            <view class="education-title-tips">
              培
            </view>
          </view>
          <view class="education-subtitle">
            本科 I 重庆大学 I 软件工程
          </view>
          <view class="education-content">
            <view class="education-content-item">
              在校成绩：4.1/5.0
            </view>
            <view class="education-content-item">
              校内职务：系学生会主席，班长，围棋社社长，校内微信公众号运营负责
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--教育/培训经历 -end- -->

    <!--自我评价-->
    <view class="content-item">
      <view class="content-title">
        自我评价
      </view>
      <view class="evaluate-panel">
        本人性格热情开朗，待人友好，为人诚实谦虚。工作勤奋，认真负责，能吃苦耐劳，尽职尽责，有耐心。具有亲和力，平易近人，善于与人沟通。
      </view>
    </view>
    <!--自我评价 -end- -->

    <!--校内外项目经验-->
    <view class="content-item">
      <view class="content-title">
        校内外项目经验
      </view>
      <view class="education-panel">
        <view class="education-panel-item">
          <view class="education-title">
            2015.09—2015.03 (1年4个月)
            <view class="education-title-tips">
              培
            </view>
          </view>
          <view class="education-subtitle">
            本科 I 重庆大学 I 软件工程
          </view>
          <view class="education-content">
            <view class="education-content-item">
              1. 负责研发公司项目软件的模块设计、开发和交付
            </view>
            <view class="education-content-item">
              2. 负责编码，单元测试，并确保通过。
            </view>
          </view>
        </view>
        <view class="education-panel-item">
          <view class="education-title">
            2015.09—2015.03 (1年4个月)
            <view class="education-title-tips">
              培
            </view>
          </view>
          <view class="education-subtitle">
            本科 I 重庆大学 I 软件工程
          </view>
          <view class="education-content">
            <view class="education-content-item">
              在校成绩：4.1/5.0
            </view>
            <view class="education-content-item">
              校内职务：系学生会主席，班长，围棋社社长，校内微信公众号运营负责
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--校内外项目经验 -end- -->

    <!--获奖经历-->
    <view class="content-item">
      <view class="content-title">
        获奖经历
      </view>
      <view class="honor-panel">
        <view class="honor-item">
          <view class="honor-item-date">
            2014-04
          </view>
          <view class="honor-item-info">
            优秀毕业生 （全校5%）
          </view>
        </view>
        <view class="honor-item">
          <view class="honor-item-date">
            2014-04
          </view>
          <view class="honor-item-info">
            优秀毕业生 （全校5%）
          </view>
        </view>
      </view>
    </view>
    <!--获奖经历 -end- -->

    <!--语言能力-->
    <view class="content-item">
      <view class="content-title">
        语言能力
      </view>
      <view class="language-panel">
          <view class="language-item">
            英语 <span>·</span>熟练<span>·</span>大学英语四级等级证书
          </view>
      </view>
    </view>
    <!--语言能力 -end- -->

    <!--技能专长-->
    <view class="content-item">
      <view class="content-title">
        技能专长
      </view>
      <view class="skill-panel">
        <view class="skill-item">
          <view class="skill-item-title">
            PS
          </view>
          <view class="skill-progress-container">
            <view class="skill-progress"></view>
          </view>
          <view class="skill-tips">
            精通
          </view>
        </view>
        <view class="skill-item">
          <view class="skill-item-title">
            PS
          </view>
          <view class="skill-progress-container">
            <view class="skill-progress"></view>
          </view>
          <view class="skill-tips">
            精通
          </view>
        </view>
        <view class="skill-item">
          <view class="skill-item-title">
            PS
          </view>
          <view class="skill-progress-container">
            <view class="skill-progress"></view>
          </view>
          <view class="skill-tips">
            精通
          </view>
        </view>
      </view>
    </view>
    <!--技能专长 -end- -->

    <!--证书-->
    <view class="content-item">
      <view class="content-title">
        证书
      </view>
      <view class="language-panel">
        <view class="language-item">
          英语 <span>·</span>大学英语四级等级证书
        </view>
        <view class="language-item">
          英语 <span>·</span>大学英语四级等级证书
        </view>
        <view class="language-item">
          英语 <span>·</span>大学英语四级等级证书
        </view>
      </view>
    </view>
    <!--证书 -end- -->

    <!--视频简历-->
    <view class="content-item">
      <view class="content-title">
        视频简历
      </view>
    </view>
    <!--视频简历 -end- -->

    <!--个人形象展示-->
    <view class="content-item">
      <view class="content-title">
        个人形象展示
      </view>
    </view>
    <!--个人形象展示 -end- -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        //页面渲染标记
        loaded: true,
      };
    }
  }
</script>

<style lang="scss">
  page {
    box-sizing: border-box;
    background: #F6F7F9;
  }
  //公用样式
  .content-item{
    margin-top:10rpx;
    padding:40rpx 30rpx;
    background:#fff;

    .content-title{
      margin-bottom:45rpx;
      @include font(34,34,$title-font-color,bold);
    }
  }
  //公用样式 -end-

  //用户信息
  .header {
    padding: 50rpx 40rpx 10rpx;
    background: #fff;

    .header-info {
      @include vertical;
      margin-bottom:58rpx;

      .header-info-portrait {
        position:relative;
        margin-right:26rpx;
        image{
          width:98rpx;
          height:98rpx;
          border-radius:98rpx;
          background:#0DDFCE;
        }
        text{
          position:absolute;
          right:8rpx;
          bottom:8rpx;
          @include font(20,20,#FE6085);
        }
        .iconresume-boy{
          color:#0682ff;
        }
      }

      .header-info-panel{
        flex-grow:1;

        .header-info-title{
          margin-bottom:18rpx;
          @include font(40,60,$title-font-color,bold);
        }
        .header-info-subtitle{
          @include font(26,26,$title-font-color);
        }
      }
    }

    .header-info-details{
      .info-details-container{
        @include vertical;
        .info-details-item{
          margin-right:50rpx;
        }
      }
      .info-details-item{
        margin-bottom:38rpx;
        @include font(28,28,$title-font-color);

        text{
          margin-right:14rpx;
          @include font(26,26,#888);
        }
      }
    }
  }
  //用户信息 -end-

  //求职意向
  .intention-panel{
    .intention-item{
      @include vertical;
      margin-bottom:25rpx;
      @include font(28,28,$title-font-color);
      &:last-child{
        margin-bottom:0;
      }

      .intention-item-title{
        color:#888;
        margin-right:50rpx;
      }
    }
  }
  //求职意向 -end-

  //工作/实习经历
  .business-panel{
    .business-item{
      margin-bottom:60rpx;

      &:last-child{
        margin-bottom:0;
      }

      .business-title{
        @include vertical;
        position:relative;
        margin-bottom: 20rpx;
        padding-left:35rpx;
        @include font(24,30,$title-font-color);


        &:before{
          @include title-marker
        }

        .business-title-tips{
          margin-left:12rpx;
          width:30rpx;
          height:30rpx;
          @include font(22,30,#fff);
          text-align:center;
          background:#4CA5FF;
          border-radius:4rpx;
        }
      }

      .business-subtitle{
        @include space-between;
        margin-bottom: 20rpx;

        .business-subtitle-position{
          @include ellipsis;
          max-width: 400rpx;
          @include font(28,28,$title-font-color,bold);
        }

        .business-subtitle-salary{
          @include font(24,24,#FF5139);

          span{
            margin-left: 14rpx;
            color: #888;
          }
        }
      }

      .business-company{
        margin-bottom: 20rpx;
        @include font(28,28,$title-font-color);
      }

      .business-company-info{
        margin-bottom: 20rpx;
        @include font(24,24,#888);
      }

      .business-company-position{
        @include vertical;
        margin-bottom: 35rpx;

        .company-position-item{
          margin-right: 20rpx;
          padding: 8rpx 13rpx;
          @include font(24,24,#8B96AB);
          background: #F6F7F9;
          border-radius: 6rpx;
        }
      }

      .business-company-require{
        .company-require-item{
          margin-bottom: 10rpx;
          @include font(28,48,#888);
        }
      }
    }
  }
  //工作/实习经历 -end-

  //教育/培训经历
  .education-panel{
    .education-panel-item{
      margin-bottom: 50rpx;
      &:last-child{
        margin-bottom: 0;
      }
      .education-title{
        @include vertical;
        position:relative;
        margin-bottom: 20rpx;
        padding-left:35rpx;
        @include font(24,30,$title-font-color);

        &:before{
          @include title-marker
        }

        .education-title-tips{
          margin-left:12rpx;
          width:30rpx;
          height:30rpx;
          @include font(22,30,#fff);
          text-align:center;
          background:#FFB21F;
          border-radius:4rpx;
        }
      }

      .education-subtitle{
        margin-bottom: 25rpx;
        @include font(28,28,#333,bold);
      }

      .education-content{
        .education-content-item{
          @include font(28,50,#888);
        }
      }
    }
  }
  //教育/培训经历 -end-

  //自我评价
  .evaluate-panel{
    @include font(28,48,#212121);
  }
  //自我评价 -end-

  //获奖经历
  .honor-panel{
    .honor-item{
      @include vertical;
      margin-bottom: 40rpx;
      &:last-child{
        margin-bottom: 0;
      }

      .honor-item-date{
        position: relative;
        padding-left: 30rpx;
        width: 150rpx;
        @include font(28,28,$title-font-color);

        &:before{
          @include title-marker;
        }
      }

      .honor-item-info{
        @include font(28,28,$title-font-color);
      }
    }
  }
  //获奖经历 -end-

  //语言能力
  .language-panel{
    .language-item{
      position: relative;
      margin-bottom: 40rpx;
      padding-left: 30rpx;
      @include font(28,28,$title-font-color);

      &:last-child{
        margin-bottom: 0;
      }

      &:before{
        @include title-marker;
      }

      span{
        font-weight: bold;
      }
    }
  }
  //语言能力 -end-

  //技能专长
  .skill-panel{
    .skill-item{
      @include vertical;
      margin-bottom: 40rpx;
      &:last-child{
        margin-bottom: 0;
      }

      .skill-item-title{
        width: 145rpx;
        @include font(28,28,$title-font-color);

      }

      .skill-progress-container{
        position: relative;
        width: 430rpx;
        height: 10rpx;
        background: #F1F1F1;
        border-radius: 10rpx;

        .skill-progress{
          position: absolute;
          top: 0;
          left: 0;
          width: 33%;
          height: 10rpx;
          background: $main-color;
          border-radius: 10rpx;
        }
      }

      .skill-tips{
        flex-grow: 1;
        @include font(28,28,$title-font-color);
        text-align: right;
      }
    }
  }
  //技能专长 -end-

</style>
































