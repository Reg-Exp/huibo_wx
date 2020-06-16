<template>
	<view v-show="loaded">
		<!--用户信息-->
		<view class="mine-header">
			<view class="header-panel">
				<image class="header-panel-portrait"></image>
				<view class="header-panel-info">
					<view class="header-panel-name">
						唐一倩
					</view>
					<view class="header-panel-tips">
						简历完善度只有20%，快去完善吧
					</view>
				</view>
			</view>
			<view class="header-edit">
				编辑 <span class="iconfont icongz_subscription_select"></span>
			</view>
		</view>
		<!--用户信息 -end- -->

		<!--导航-->
		<view class="mine-nav">
			<view class="nav-item">
				<view class="nav-icon">
					<image src="../../static/mine-nav-1.png"></image>
					<view class="nav-icon-tips"></view>
				</view>
				<view class="nav-title">
					投递记录
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-icon">
					<image src="../../static/mine-nav-2.png"></image>
					<view class="nav-icon-tips"></view>
				</view>
				<view class="nav-title">
					面试通知
				</view>
			</view>
			<view class="nav-item">
				<view class="nav-icon">
					<image src="../../static/mine-nav-3.png"></image>
					<view class="nav-icon-tips"></view>
				</view>
				<view class="nav-title">
					谁看过我
				</view>
			</view>
		</view>
		<!--导航 -end- -->

		<!--功能列表-->
		<view class="mine-function">
			<view class="mine-function-item">
				<view class="function-item-panel">
					<span class="iconfont iconicon_my-follow"></span>
					收藏&关注
				</view>
				<view class="function-item-more iconfont icongz_subscription_select">
				</view>
			</view>
			<view class="mine-function-item">
				<view class="function-item-panel">
					<span class="iconfont iconicon_my-evaluate"></span>
					收藏&关注
				</view>
				<view class="function-item-more iconfont icongz_subscription_select">
				</view>
			</view>
			<view class="mine-function-item">
				<view class="function-item-panel">
					<span class="iconfont iconicon_my-opinion"></span>
					收藏&关注
				</view>
				<view class="function-item-more iconfont icongz_subscription_select">
				</view>
			</view>
		</view>
		<!--功能列表 -end- -->

		<!--退出登录-->
		<view class="log-off">
			退出登录
		</view>
		<!--退出登录 -end- -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//页面渲染标记
				loaded:true,
			};
		}
	}
</script>

<style lang="scss">
page{
	background: #fff;
}

	//用户信息
.mine-header{
	@include space-between;
	padding: 160rpx 40rpx 70rpx;
	background: $main-color;

	.header-panel{
		@include vertical;
		max-width: 590rpx;
		overflow: hidden;

		.header-panel-portrait{
			flex-shrink: 0;
			margin-right: 17rpx;
			width: 120rpx;
			height: 120rpx;
			border-radius: 120rpx;
			background: #fff;
		}

		.header-panel-info{
			flex-grow: 1;

			.header-panel-name{
				margin-bottom: 20rpx;
				@include font(34,34,#fff,bold)
			}
			.header-panel-tips{
				@include font(26,26,#fff)
			}
		}
	}

	.header-edit{
		@include vertical;
		@include font(30,30,#fff);

		span{
			margin-left: 25rpx;
			@include font(20,20,#fff)
		}
	}


}
	//用户信息 -end-

	//导航
	.mine-nav{
		padding: 0 40rpx;
		@include space-between;
		margin-top: -25rpx;
		background: #fff;
		border-bottom: 10rpx solid #F6F7F9;
		border-radius: 25rpx 25rpx 0 0;

		.nav-item{
			@include vertical;
			flex-direction: column;
			padding: 50rpx 20rpx;

			.nav-icon{
				position: relative;
				margin-bottom: 20rpx;
				width: 50rpx;
				height: 50rpx;

				image{
					width: 100%;
					height: 100%;
				}
				.nav-icon-tips{
					position: absolute;
					top: 0;
					right: -17rpx;
					width: 10rpx;
					height: 10rpx;
					background: #FF3600;
					border-radius: 10rpx;
				}
			}

			.nav-title{
				@include font(24,24,$title-font-color);
			}
		}
	}
	//导航 -end-

	//功能列表
.mine-function{
	padding: 10rpx 0 40rpx;

	.mine-function-item{
		@include space-between;
		padding: 40rpx;

		.function-item-panel{
			@include vertical;
			@include font(30,30,$title-font-color);
			span{
				@include font(30,30,$title-font-color);
				margin-right: 20rpx;
			}


		}

		.function-item-more{
			@include font(20,20,#BBB,bold);
		}
	}
}
	//功能列表 -end-

	//退出登录
.log-off{
	margin: 0 auto;
	width: 670rpx;
	@include font(30,75,#888)
	text-align: center;
	background: #F6F7F9;
	border-radius: 10rpx;

}
	//退出登录 -end-
</style>
