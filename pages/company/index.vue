<template>
	<view v-show="loaded">
		<!--搜索-->
		<view class="search">
			<span class="iconfont icongz_home_search"></span>
			好公司，搜一搜
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
	.search{
		@include vertical;
	}
</style>
