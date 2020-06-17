<template>
	<view v-show="loaded">
		<!--搜索-->
		<view class="search-panel">
			<view class="search">
				<span class="iconfont icongz_home_search"></span>
				好公司，搜一搜
			</view>
		</view>
		<!--搜索 -end- -->

		<!--筛选-->
		<view class="company-filtrate">
			<veiw class="filtrate-item">
				规模 <span class="iconfont"></span>
			</veiw>
			<veiw class="filtrate-item">
				性质 <span class="iconfont"></span>
			</veiw>
			<veiw class="filtrate-item">
				行业 <span class="iconfont"></span>
			</veiw>
		</view>
		<!--筛选 -end- -->

		<!--公司列表-->
		<CompanyList></CompanyList>
		<!--公司列表 -end- -->
	</view>
</template>

<script>
	import CompanyList from "../../components/CompanyList";
	export default {
		components:{
			CompanyList,
		},
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
	//搜索
	.search-panel{
		padding: 0 40rpx;
		.search{
			@include vertical;
			box-sizing: border-box;
			padding: 0 22rpx;
			@include font(24,72,#BBB);
			background: #F6F6F6;
			border-radius: 72rpx;


			.icongz_home_search{
				margin-right: 12rpx;
				@include font(32,32,$title-font-color);

			}
		}
	}
	//搜索 -end-
</style>
