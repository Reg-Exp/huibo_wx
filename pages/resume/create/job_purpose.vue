<template>
	<view>
		<view class="resume-title">
			求职意向
		</view>

		<!--信息面板-->
		<view class="purpose-panel">
			<view class="purpose-item">
					<view class="purpose-item-info">
						<view class="purpose-item-title">
							意向职位
						</view>
						<input type="text" placeholder="请输入" placeholder-class="placeholder">
					</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						职位类别
					</view>
					<view class="purpose-item-select">
						请选择
					</view>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						行业类别
					</view>
					<view class="purpose-item-select">
						请选择
					</view>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						意向地区
					</view>
					<view class="purpose-item-select">
						请选择
					</view>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						期望薪资
					</view>
					<picker @change="selectSalary" :value="salaryIndex" :range="salaryList">
						<view class="uni-input">{{salaryList[salaryIndex]}}</view>
					</picker>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
		</view>
		<!--信息面板 -end--->

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
				//工资选择下标
				salaryIndex:0,
				//工资列表
				salaryList:['请选择','1000','2000','3000'],
			};
		},
		methods:{
			//工资选择
				selectSalary(e){
					this.salaryIndex = e.target.value;
			},

			nextStep(){
				utils.navTo('education')
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/css/CreatResume";
	page{
		box-sizing:border-box;
		padding:60rpx 40rpx 170rpx;
		background:#fff;
	}
</style>
