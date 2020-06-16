<template>
	<view>
		<view class="login-title">
			手机验证码登录
			<view class="login-subtitle">
				新用户验证通过后，自动注册账号免密登录
			</view>
		</view>

		<!--手机号-->
		<view class='login-operation-item'>
			<text class="login-operation-icon icon iconfont iconlogin-user"></text>
			<input type='number' placeholder-class="placeholder-color" v-model.trim='req.mobile_phone' placeholder='请输入手机号'>
			<text class="login-operation-empty iconfont iconcontent-delete" @tap="emptyPhone()"></text>
		</view>
		<!--手机号 -end- -->

		<!--图片验证码-->
		<view class='login-operation-item' v-if="showImageCode">
			<text class="login-operation-icon icon iconfont iconicon_verification"></text>
			<input type='number' placeholder-class="placeholder-color" v-model.trim='req.img_code' placeholder='请输入图片验证'>
			<image class="login-image-code" :src="imageCode"></image>
			<!--<image class="login-image-code" src='https://wxmp.huibo.com/?ver=v2.0&apiname=getImgCode&seed={{seed}}&v='></image>-->
			<text class='icon iconfont iconicon_change chang-imagecode' @tap='changeCode'></text>
		</view>
		<!--图片验证码 -end- -->

		<!--密码-->
		<view class='login-operation-item'>
			<text class="login-operation-icon icon iconfont iconlogin-password"></text>
			<input type='number' placeholder-class="placeholder-color" v-model.trim='req.loginCode'
						 placeholder='请输入验证码'>
			<view class='login-code' @tap='getVerification()' v-if="countDown == 60">获取验证码</view>
			<text class="code-regain" v-else>{{countDown}}秒后可重新获取</text>
		</view>
		<!--验证码 -end- -->
		<view class='login-submit login-disabled' v-if="!req.mobile_phone || !req.loginCode">立即登录</view>
		<view class='login-submit' @tap='login' v-else>立即登录</view>
		<view class='login-tocode' @tap='navTo(`index`)'>账号和密码登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//接口携带参数
				req: {
					//电话号码
					mobile_phone: '',
					//验证码
					loginCode: '',
					type: 1,
					//图形验证码seed
					seed: '',
					//图形验证码
					img_code: '',
				},
				//验证码倒计时
				countDown: 60,
				//是否显示图形验证码
				showImageCode: false,
				//图片验证码路径
				imageCode:'',
			};
		},
		onLoad() {
			//获取图形验证码
			this.getImageCode();
		},
		methods: {
			/**
			 * 获取图形验证码seed及图形验证码
			 * @author Vergil 2020-05-22
			 * @param number $req.seed  图片验证码seed
			 */
			getImageCode() {
				this.$http.get('getSeed').then(res=>{
					this.req.seed = res.data.data.seed;
					this.imageCode = baseUrl +'getImgCode&seed=' + this.req.seed + '&v='
				})
			},


			/**
			 * 清空手机号
			 * @author Vergil 2020-06-03
			 * @param Number $req.mobile_phone  用户账号
			 */
			emptyPhone(){
				this.req.mobile_phone = '';
			},

			/**
			 * 获取验证码
			 * 如果需要图片验证码，则显示图片验证码区域，否则执行验证码获取流程
			 * @author Vergil 2020-05-22
			 * @param object $req  验证码获取参数
			 * @param boolean $showImageCode  是否需要显示图形验证码
			 */
			async getVerification() {
				const phoneReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
				this.req.mobile_phone = this.req.mobile_phone.replace(/\s*/g, "");
				if (!this.req.mobile_phone) {
					this.$utils.showToast("请输入电话号码")
					return;
				} else if (!phoneReg.test(this.req.mobile_phone)) {
					this.$utils.showToast("请输入正确的电话号码")
					return;
				}

				let showCode = await this.$http.post('isShowCode', {mobile_phone: this.req.mobile_phone});
				if(!this.req.img_code){
					if (showCode.data.data.is_show_code) {
						this.$utils.showToast("请输入图形验证码")
						this.showImageCode = true;
						return
					}
				}

				this.$http.get('sendLogCode', this.req).then(res => {
					this.countDown = 59;
					let timer = setInterval(() => {
						this.countDown -= 1;
						if (this.countDown == 0) {
							clearInterval(timer);
							this.countDown = 60;
							return;
						}
					}, 1000);
					this.$utils.showToast("发送成功")
				}).catch(e => {
					wx.showModal({
						title: '',
						showCancel: false,
						content: '发送失败，请重新获取验证码',
					})
				})

			},

			/**
			 * 登录
			 * @author Vergil 2020-06-03
			 * @param Object $req  用户账号、图片验证码及验证码
			 */
			login(){
				const phoneReg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
				if(!phoneReg.test(this.req.mobile_phone)){
					this.$utils.showToast('请输入正确的手机号');
					return
				}
				this.$http.post('login',this.req).then(res=>{
					console.log(res);
				})
			},

			/**
			 * 路由
			 * @author Vergil 2020-06-03
			 * @param String $url  路由地址
			 */
			navTo(url){
				this.$utils.navTo(url);
			}
		}
	}
</script>

<style lang="scss">

	page {
		box-sizing: border-box;
		padding: 100rpx 75rpx 0;
	}

	.login-subtitle {
		margin-top: 30rpx;
		@include font(28,28,#888);
	}

	.login-operation-item {
		padding: 40rpx 0 30rpx;
	}

	.icon-icon_change {
		font-size: 50rpx;
		color: #0DDFCE;
	}

	.login-image-code {
		display: block;
		width: 150rpx;
		height: 58rpx;
		margin: 0 20rpx;
	}

	.login-code {
		padding: 0 12rpx;
		@include font(30,30,#0DDFCE);
	}

	.code-regain {
		flex-shrink: 0;
		font-size: 28rpx;
		color: #999;
	}

	.chang-imagecode {
		font-size: 47rpx;
		color: #0DDFCE;
	}

	.login-disabled {
		background: #ccc;
	}
</style>
