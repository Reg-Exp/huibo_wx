<script>
	export default {
    onLaunch() {
      /**
       * 小程序启动时发起定位，先拿当前id和name，没有再拿自动定位的，如果也没有，则默认0300 重庆
       * @author Vergil 2020-05-21
       * @param number $user_id  用户推荐码
       */
      uni.getLocation({
        type: 'wgs84',
        success: res => {
          uni.setStorageSync('location', [res.latitude.toString(), res.longitude.toString()]);
          this.$http.get('getAreaIdByXY', {
            map_lat: res.latitude.toString(),
            map_lng: res.longitude.toString()
          }).then(response => {
            uni.setStorageSync('auto_local_area_name', response.data.area_name);
            uni.setStorageSync('auto_local_area_id', response.data.area_id);
          }).catch(e => {
          })
        },
        fail: () => {
        }
      });
    },
    onShow() {
    },
    onHide() {
    }
  }
</script>

<style>

</style>
