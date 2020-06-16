<template>
	<view>
		<view class="resume-title">
			最近工作
		</view>



		<!--信息面板-->
		<view class="purpose-panel">
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						公司名称
					</view>
					<input type="text" placeholder="请输入" placeholder-class="placeholder">
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						职位名称
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
						平均月薪
					</view>
					<input type="text" placeholder="请输入" placeholder-class="placeholder">
				</view>
				<view class="purpose-hr">
					<view class="purpose-hr-select active"></view>对HR保密
				</view>
			</view>

			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						入职时间
					</view>
					<picker mode="date" :value="entryDate" fields="month" :start="startDate" :end="endDate" @change="selectEntry">
						<view class="uni-input">{{entryDate}}</view>
					</picker>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>

			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						离职时间
					</view>
					<picker mode="date" :value="dimissionDate" fields="month" :start="startDate" :end="endDate" @change="selectDimission">
						<view class="uni-input">{{dimissionDate}}</view>
					</picker>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>

			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						工作内容
					</view>
					<view class="purpose-item-select">
						请输入
					</view>
				</view>
			</view>


			<!--选填内容-->
			<view class="purpose-more">
				更多内容
			</view>

			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						技能标签
					</view>
					<view class="purpose-item-select">
						请选择(选填)
					</view>
				</view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						公司性质
					</view>
					<picker @change="selectNature" :value="natureIndex" :range="natureList">
						<view class="uni-input">{{natureList[natureIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						公司规模
					</view>
					<picker @change="selectNature" :value="natureIndex" :range="natureList">
						<view class="uni-input">{{natureList[natureIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						所属行业
					</view>
					<picker @change="selectNature" :value="natureIndex" :range="natureList">
						<view class="uni-input">{{natureList[natureIndex]}}</view>
					</picker>
				</view>
			</view>


			<view class="purpose-shield">
				<view class="shield-title">
					屏蔽该公司
				</view>
				<switch class="shield-button" color="#0fd5c7" style="transform:scale(0.7)" @change="shieldCompany" />
			</view>

			<!--选填内容-->
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				//工资选择下标
				salaryIndex:0,
				//工资列表
				salaryList:['请选择','1000','2000','3000'],
				//入职时间
				entryDate:currentDate,
				//离职时间
				dimissionDate:currentDate,
				//公司性质下标
				natureIndex:0,
				//公司性质列表
				natureList:['234','4324234'],
			};
		},
		computed: {
			//屏蔽公司
			shieldCompany(e){
				console.log(e);
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods:{
			selectNature(e){
				this.natureIndex = e.target.value
			},
			//工资选择
			selectEntry(e) {
				this.entryDate = e.target.value
			},

			selectDimission(e) {
				this.dimissionDate = e.target.value
			},

			nextStep(){
				utils.navTo('education')
			},

			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				return `${year}-${month}`;
			},
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

	.purpose-hr{
		flex-shrink: 0;
		margin-left: 10rpx;
		@include vertical;
		@include font(28,28,$title-font-color);
		.purpose-hr-select{
			position: relative;
			flex-shrink: 0;
			margin-right: 15rpx;
			width: 32rpx;
			height: 32rpx;
			border: 1rpx solid #ccc;
			border-radius: 32rpx;
		}

		.active{
			border: 1rpx solid #0DDFCE;

			&:after{
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
				width: 20rpx;
				height: 20rpx;
				background: #0DDFCE;
				border-radius: 19rpx;
			}
		}
	}

	.purpose-more{
		padding-left: 10rpx;
		@include font(28,80,$title-font-color);
		background: $background-color;
		border-radius: 4rpx;
	}
	.purpose-panel .purpose-item:nth-child(7){
		border-bottom: none;
	}


	.purpose-shield{
		@include space-between;
		padding: 70rpx 0 45rpx;
		.shield-title{
			@include font(34,34,$title-font-color);
		}
	}
	.shield-button{
		width: 82rpx;
		height: 47rpx;
		color: #0DDFCE;
	}
</style>
