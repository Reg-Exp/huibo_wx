<template>
	<view>
		<view class="resume-title">
			最高学历
		</view>

		<!--信息面板-->
		<view class="purpose-panel">
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						教育类型
					</view>
					<picker @change="selectType" :value="typeIndex" :range="typeList">
						<view class="uni-input">{{typeList[typeIndex]}}</view>
					</picker>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						学校
					</view>
					<input type="text" placeholder="请输入" placeholder-class="placeholder">
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						学历
					</view>
					<picker @change="selectEducation" :value="educationIndex" :range="educationList">
						<view class="uni-input">{{educationList[educationIndex]}}</view>
					</picker>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						专业
					</view>
					<input type="text" placeholder="请输入" placeholder-class="placeholder">
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>
			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						入学时间
					</view>
					<picker mode="date" :value="entranceDate" fields="month" :start="startDate" :end="endDate" @change="selectEntrance">
						<view class="uni-input">{{entranceDate}}</view>
					</picker>
				</view>
				<view class="purpose-item-more iconfont icongz_subscription_select"></view>
			</view>

			<view class="purpose-item">
				<view class="purpose-item-info">
					<view class="purpose-item-title">
						毕业时间
					</view>
					<picker mode="date" :value="graduateDate" fields="month" :start="startDate" :end="endDate" @change="selectGraduate">
						<view class="uni-input">{{graduateDate}}</view>
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				//教育类型选择下标
				typeIndex:0,
				//教育类型列表
				typeList:['请选择','1000','2000','3000'],
				//学历选择下标
				educationIndex:0,
				//学历选择列表
				educationList:['请选择','5000','2000','3000'],
				//入学时间
				entranceDate: currentDate,
				//毕业时间
				graduateDate:currentDate,

			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods:{
			selectEntrance(e) {
				this.entranceDate = e.target.value
			},
			selectGraduate(e) {
				this.graduateDate = e.target.value
			},

			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//工资选择
			selectType(e){
				this.typeIndex = e.target.value;
			},

			selectEducation(){
				this.educationIndex = e.target.value;
			},

			nextStep(){
				utils.navTo('recent_work')
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
