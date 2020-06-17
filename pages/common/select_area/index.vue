<template>
	<view v-show="loaded">
		<view class="area-header">
			<view class="area-header-selected">
				当前选择城市：绵阳
			</view>
			<view class="area-header-location">
				<span class="iconfont iconicon_resume-address"></span>
				当前自动定位城市:
				<view class="area-header-city">
					{{location}}
				</view>
			</view>
		</view>

		<view class="area-panel">
			<view class="area-city">
				<view class="area-city-title">
					重庆
				</view>
				<view class="area-district-panel">
					<!--<view class="area-district" :class="{active?districtItem.selected ==1}" v-for="(districtItem,districtIndex) in ">
						重庆
					</view>-->
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import utils from "../../../common/js/utils";

	export default {
		data() {
			return {
				//页面渲染标记
				loaded:true,
				//是否显示辅助搜索
				search:false,
				//当前定位城市
				location:'',
			}
		},
		onLoad(){
			this.location = utils.getStorageSync('user_area_name');
			this.getUserInfo();
		},
		methods: {
					getUserInfo() {
						this.$http.get('get_main_area_code').then(res=>{
							console.log(res);
						})
					}
		}
	}
</script>

<style lang="scss">
	page{
		background: #fff;
	}
	.area-header{
		padding: 40rpx;
		border-bottom: 10rpx solid $line-color;

		.area-header-selected{
			margin-bottom: 32rpx;
			@include font(30,30,$main-color);
		}

		.area-header-location{
			@include vertical;
			@include font(30,30,$title-font-color);

			.iconicon_resume-address{
				margin-right: 12rpx;
				@include font(34,34,$tips-font-color)
			}

			.area-header-city{
				margin-left: 25rpx;
				padding: 21rpx 30rpx;
				@include font(28,28,$title-font-color);
				background: $background-color;
				border: 1rpx solid $background-color;
				border-radius: 6rpx;
			}
		}
	}

	.area-panel{
		padding: 0 40rpx;

		.area-city{
			padding-top: 50rpx;

			.area-city-title{
				margin-bottom: 40rpx;
				@include font(36,36,$title-font-color,bold);
			}

			.area-district-panel{
				@include vertical;
				flex-wrap: wrap;

				.area-district{
					margin: 0 24rpx 24rpx 0;
					padding: 21rpx 30rpx;
					@include font(28,28,$title-font-color);
					background: $background-color;
					border: 1rpx solid $background-color;
					border-radius: 6rpx;
				}
				.active{
					border: 1rpx solid $main-color;
				}
			}
		}
	}
</style>
