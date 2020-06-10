/*******************************************************
 * url相关函数
 *******************************************************/

/**
 * 页面跳转
 * @author Vergil 2020.5.29
 * @param string $url 需要跳转到的页面路径
 */
const navTo = url => {
	uni.navigateTo({
		url
	})
}

/**
 * 页面返回
 * @author Vergil 2020.5.29
 * @param int $delta 返回的页面数
 */
const backTo = (delta = 1) => {
	uni.navigateBack({
		delta
	})
}

/**
 * 重加载
 * @author Vergil 2020.5.29
 * @param string $url 需要重加载的页面路径
 */
const reLaunch = url => {
	uni.reLaunch({
		url
	})
}

/*******************************************************
 * 弹框相关
 *******************************************************/

/**
 * 显示弹框
 * @author Vergil 2020.5.29
 * @param string 	$title    	提示的内容
 * @param string 	$icon  	 	显示的图标
 * @param boolean 	$mask 	 	是否显示透明蒙层,防止触摸穿透
 * @param int 		$duration 	提示的延迟时间
 */
const showToast = (title = '', icon = 'none', duration = 2000, mask = true) => {
	wx.showToast({
		title,
		icon,
		mask,
		duration
	})
}

/**
 * 显示loading
 * @author Vergil 2020.5.29
 * @param string 	$title    	提示的内容
 * @param string 	$icon  	 	显示的图标
 * @param boolean 	$mask 	 	是否显示透明蒙层,防止触摸穿透
 * @param int 		$duration 	提示的延迟时间
 */
const showLoading = (title = '', mask = true) => {
	wx.showLoading({
		mask,
		title,
	})
}

/**
 * 显示有确认的弹框
 * @author Vergil 2020.5.29
 * @param string 	content    	提示的内容
 * @param string 	title  	 	标题
 */
const showModal = (content = '', title = '提示', confirmText = '确定',showCancel="true") => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title,
			content,
			confirmText,
			showCancel,
			success:  res=>{
				if (res.confirm) {
					resolve()
				} else if (res.cancel) {
				}
			}
		})
	})
}

/**
 * 过滤表情
 * @author Vergil 2020.5.29
 * @param string 	text  内容
 */
const filterEmoji = (text = '') => {
	return text.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
}


/**
 * 同步缓存
 * @author Vergil 2020.5.29
 * @param string 	$name  缓存Key
 * @param string 	$value  缓存Value
 */
const setStorageSync = (key,value)=>{
	uni.setStorageSync(key,value);
}
/**
 * 获取同步缓存
 * @author Vergil 2020.5.29
 * @param string 	$name  缓存Key
 */
const getStorageSync = (key)=>{
	return uni.getStorageSync(key);
}

/**
 *清除同步缓存
 * @author Vergil 2020.5.29
 * @param string 	$name  缓存Key
 * @param string 	$value  缓存Value
 */
const removeStorageSync = (key)=>{
	uni.removeStorageSync(key);
}

/**
 *根据用户登录状态来进行路由处理
 * @author Vergil 2020.5.29
 * @param string 	$url  页面路由
 * @param string 	$token  用户token
 */
const loginStatus = (url) => {
	let token = getStorageSync('token')?getStorageSync('token'):'';
	navTo(token?url:'/pages/login/index');
}



// 导出
export default {
	navTo,
	backTo,
	reLaunch,
	showToast,
	showLoading,
	showModal,
	filterEmoji,
	setStorageSync,
	getStorageSync,
	removeStorageSync,
	loginStatus
}
