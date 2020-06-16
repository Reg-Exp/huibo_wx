<template>
	<view>
		<view class="resume-title">
			基本信息
		</view>
		<!--姓名及性别选择-->
		<view class="resume-name-container">
			<view class="resume-info-name">
				<view class="resume-info-title">
					姓名
				</view>
				<input type="text" placeholder-class="placeholder" placeholder='请输入'>
			</view>
			<view class="resume-info-sex">
				<view class="info-sex-item">
					<span class="iconfont"></span>
					男
				</view>
				<view class="info-sex-item">
					<span class="iconfont"></span>
					女
				</view>
			</view>
		</view>
		<!--姓名及性别选择 -end- -->
		<!--生日及身高-->
		<view class="reusme-info-container">
			<view class="reusme-info-item">
				<view class="reusme-info-title">生日</view>
				<!--<picker class="reusme-info-text">
					<text style="color:{{birthday?'#333':'#ccc'}}">{{birthday?birthday:'请选择'}}</text>
					<i class="iconfont icon-page-enter"></i>
				</picker>-->
			</view>
			<view class="reusme-info-item">
				<view class="reusme-info-title">身高</view>
			<!--	<picker class="reusme-info-text" value="{{statureIndex?statureIndex:'170'}}" data-type="stature"
								bindchange="changePickerData" range="{{statureArray}}">
					<text style="color:{{stature?'#333':'#ccc'}}">{{stature?stature:'请选择'}}</text>
					<i class="iconfont icon-page-enter"></i>
				</picker>-->
			</view>
		</view>
		<!--生日及身高 -end--->

		<!--其余信息-->
		<view class="resume-info-panle">
			<view class="resume-list-work">
				<view class="resume-list-title">
					开始工作时间
				</view>

				<view class="resume-list-tips">
					<text class="iconfont"></text>
					尚未工作
				</view>
				<!--<picker mode="date" data-type="startWork"
								value="{{startWork?startWork:'2018-06'}}" start="1968-01" end="{{end}}"
								bindchange="changePickerData" fields="month" disabled="{{startWorkType?'false':''}}">
					<view class="resume-list-picker" wx:if="{{!startWorkType}}">
						<view class="resume-work-select" style="color:{{startWork?'#333':'#ccc'}}">
							{{startWork?startWork:startWorkType?'':'请选择'}}
						</view>
						<text class="iconfont iconpage-enter"></text>
					</view>
				</picker>-->
			</view>


			<view class="resume-list">
				<view class="resume-list-title">
					最高学历
				</view>
				<!--<picker value="{{educationIndex}}" data-type="education" bindchange="changePickerData" range-key="name"
								range="{{educationArray}}">
					<view class="resume-list-picker">
						<view style="color:{{education.name?'#333':'#ccc'}}">{{education.name?education.name:'请选择'}}</view>
						<text class="iconfont iconpage-enter"></text>
					</view>
				</picker>-->
			</view>

			<view class="resume-list">
				<view class="resume-list-title">
					现居住地
				</view>
				<view class="resume-list-picker">
					<view></view>
					<span class="iconfont iconpage-enter"></span>
				</view>
			</view>


			<view class="resume-list">
				<view class="resume-list-title">
					求职状态
				</view>
			<!--	<picker value="{{applystatusIndex}}" data-type="applystatus" bindchange="changePickerData" range-key="name"
								range="{{applystatusArray}}">
					<view class="resume-list-picker">
						<view style="color:{{applystatus.name?'#333':'#ccc'}}">{{applystatus.name?applystatus.name:'请选择'}}</view>
						<text class="iconfont iconpage-enter"></text>
					</view>
				</picker>-->
			</view>


			<view class="resume-list">
				<view class="resume-list-title">
					到岗时间
				</view>

			<!--	<picker mode="date" value="{{entry}}" data-type="entry" start="2020-01-01"
								end="{{curYear}}" bindchange="changePickerData">
					<view class="resume-list-picker">
						<view style="color:{{entry?'#333':'#ccc'}}">{{entry?entry:'请选择'}}</view>
						<text class="iconfont iconpage-enter"></text>
					</view>
				</picker>-->


			</view>
			<view class="resume-list">
				<view class="resume-list-title">
					手机号码
				</view>
				<view class="resume-list-picker">
					<view></view>
					<span class="iconfont iconpage-enter"></span>
				</view>
			</view>
			<view class="resume-list">
				<view class="resume-list-title">
					邮 箱
				</view>
				<view class="resume-list-picker">
					<input placeholder-class="placeholder" placeholder='请输入(选填)'/>
					<span class="iconfont iconpage-enter"></span>
				</view>
			</view>
		</view>
		<!--其余信息 -end- -->

		<!--下一步-->
		<view class="resume-footer">
			<view class="resume-next" @tap="nextStep()">
				下一步
			</view>
		</view>
		<!--下一步-->
	</view>
</template>

<script>
	import utils from "../../../common/js/utils";

	export default {
		data() {
			return {

			};
		},
		methods:{
			nextStep(){
				utils.navTo('job_purpose')
			}
		}
	}
</script>

<style lang="scss">
	page{
		box-sizing:border-box;
		padding:60rpx 40rpx 170rpx;
		background:#fff;
	}

	.resume-title{
		margin-bottom:30rpx;
		@include font(48,48,$title-font-color,bold);

	}

	//姓名及性别选择
	.resume-name-container{
		@include space-between;
		padding:30rpx 0;
		border-bottom:1rpx solid #F1F1F1;

		.resume-info-name{
			@include vertical;


			.resume-info-title{
				margin-right:50rpx;
				width:110rpx;
				text-align-last: justify;
				@include font(28,28,#888);
			}

			input{
				display:block;
				width:300rpx;
				@include font(34,34,$title-font-color);
			}
		}

		.resume-info-sex{
			flex-grow:1;
			@include vertical;
			justify-content:space-around;

			.info-sex-item{
				@include vertical;
				justify-content:center;
				@include font(34,34,#333);

				.iconcheck-box-off{
					display:block;
					@include font(32,32,#ccc);
					margin-right:16rpx;
				}

				.iconcheck-box-on{
					display:block;
					@include font(32,32,$main-color);
					margin-right:16rpx;
				}
			}

		}

	}
	//姓名及性别选择 -end-

	//生日及身高
	.reusme-info-container{
		@include vertical;
		padding:40rpx 0;

		.reusme-info-item{
			@include vertical;
			flex-direction:column;

			width:50%;


			.reusme-info-title{
				@include font(28,28,#888);
				margin-bottom:30rpx;
			}


			.reusme-info-text{
				font-size:34rpx;
				line-height:34rpx;
			}

		}

	}
	//生日及身高 -end-

	//其余信息
	.resume-info-panle{
		padding-bottom:100rpx;


		.resume-list{
			@include vertical;
			padding:50rpx 0;
			border-bottom:1rpx solid #F1F1F1;

			.resume-list-title{
				margin-right:50rpx;
				width:112rpx;
				text-align-last: justify;
				@include font(28,28,#888);
			}

			picker{
				flex-grow:1;
			}

			.resume-list-picker{
				@include space-between;
				flex-grow:1;

				view{
					max-width:300rpx;
					font-size:34rpx;
					line-height:34rpx;
				}

				 span{
					display:block;
					 @include font(20,14,#BBB);
				}
			}
		}


		.resume-list-work{
			@include space-between;
			padding:50rpx 0;
			border-bottom:1rpx solid #F1F1F1;

			.resume-list-title{
				@include font(28,28,#888);
			}

			.resume-list-picker{
				justify-content:flex-end;
			}



			.resume-work-select{
				margin-right:10rpx;
			}

			.resume-list-tips{
				@include vertical;
				@include font(26,26,#ccc);

				.iconcheck-box-off{
					display:block;
					margin-right:16rpx;
					@include font(34,34,#ccc);

				}

				.iconcheck-box-on{
					display:block;
					margin-right:10rpx;
					@include font(34,34,$main-color);

				}
			}

		}
	}
	//其余信息 -end-

	//下一步
	.resume-footer{
		position:fixed;
		left:0;
		bottom:0;
		display:block;
		box-sizing:border-box;
		width:100%;
		padding:30rpx 40rpx;
		background:#fff;
		border-top:1rpx solid #f1f1f1;

		.resume-next{
			width:100%;
			height:88rpx;
			@include font(34,88,#fff);
			text-align:center;
			background:$main-color;
			border-radius:10rpx;
		}

	}
	//下一步 -end-
</style>
