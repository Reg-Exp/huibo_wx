<template>
	<view v-show="loaded">
		<!--搜索栏-->
		<view class="search-header">
			<view class="search-header-container">
				<span class="iconfont iconsearch-find"></span>
				<input type="text" placeholder="搜索职位/公司" placeholder-class="placeholder">
			</view>

		</view>
		<!--搜索栏 -end--->

		<!--辅助搜索-->
		<view class="search-panel" v-if="search">
			<!--搜索历史-->
			<view class="search-history">
				<view class="history-header">
					<view class="public-title">
						搜索历史
					</view>
					<view class="iconfont iconpage-delete"></view>
				</view>
				<view class="search-item-container">
					<view class="public-item">
						行政
					</view>
					<view class="public-item">
						行政
					</view>
				</view>
			</view>
			<!--搜索历史 -end--->
			<!--热搜职位-->
			<view class="search-hot">
				<view class="public-title">
					热搜职位
				</view>
				<view class="search-item-container">
					<view class="public-item">
						销售
					</view>
					<view class="public-item">
						销售
					</view>
					<view class="public-item">
						销售
					</view>
				</view>
			</view>
			<!--热搜职位 -end- -->
		</view>
		<!--辅助搜索 -end- -->

		<!--搜索信息-->
		<view class="search-info" v-else>
			<view class="search-info-company">
				<view class="company-title">
					公司
				</view>
				<view class="company-info-panel">
					搜索“<span>产品</span>"相关公司 <span>15</span>个
					<view class="iconfont icongz_Details_more" ></view>
				</view>
			</view>
			<view class="search-info-panel">
				<view class="search-info-item">
					<span>产品</span>经理
				</view>
				<view class="search-info-item">
					<span>产品</span>经理
				</view>
				<view class="search-info-item">
					<span>产品</span>经理
				</view>
			</view>

		</view>
		<!--搜索信息 -end- -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//页面渲染标记
				loaded:true,
				//是否显示辅助搜索
				search:false,
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page{
		background: #fff;
	}

	.public-title{
		@include font(38,38,$title-font-color);
	}

	.public-item{
		padding: 20rpx 30rpx;
		margin-right: 20rpx;
		margin-bottom: 30rpx;
		@include font(26,26,$title-font-color);
		background: #F6F7F9;
		border-radius: 6rpx;
	}
	//搜索头部
	.search-header{
		padding: 30rpx 40rpx;
		.search-header-container{
			@include vertical;
			padding:0 40rpx;
			height: 60rpx;
			background: #F6F7F9;
			border-radius: 60rpx;

			.iconsearch-find{
				@include font(30,30,$title-font-color);
				margin-right: 14rpx;
			}

			input{
				flex-grow: 1;
				@include font(28,28,$title-font-color);
			}
		}
	}
	//搜索头部 -end-

	//辅助搜索
	.search-panel{
		padding: 40rpx;
		border-top: 10rpx solid #F6F7F9;

		.history-header{
			@include space-between;

			.iconpage-delete{
				@include font(30,30,#bbb);
			}
		}

		.search-item-container{
			@include vertical;
			flex-wrap: wrap;
			margin: 40rpx 0 50rpx;
		}
	}
	//辅助搜索 -end-


	//搜索信息
	.search-info{

		.search-info-company{
			@include space-between;
			padding: 20rpx 40rpx 30rpx;
			border-bottom: 10rpx solid #F6F7F9;

			.company-title{
				@include font(28,28,$title-font-color)
			}

			.company-info-panel{
				@include vertical;

				@include font(28,28,$title-font-color);
				span{
					color: $main-color;
				}
				.icongz_Details_more{
					margin-left: 20rpx;
					@include font(20,20,#BBB)
				}
			}
		}

		.search-info-panel{
			padding: 0 40rpx;

			.search-info-item{
				padding: 30rpx 0;
				@include font(28,28,$title-font-color);
				border-bottom: 1rpx solid #f1f1f1;

				span{
					color:$main-color;
				}
			}
		}
	}
	//搜索信息 -end-
</style>
