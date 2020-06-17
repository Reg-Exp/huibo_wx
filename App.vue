<script>
  import utils from "./common/js/utils";

  export default {
    onLaunch() {
      /**
       * 小程序启动时发起定位，先拿当前id和name，没有再拿自动定位的，如果也没有，则默认0300 重庆
       * @author Vergil 2020-05-21
       * @param number $user_id  用户推荐码
       */

      if(!utils.getStorageSync('user_area_id')){
        uni.getLocation({
          type: 'wgs84',
          success: res => {
            uni.setStorageSync('location', [res.latitude.toString(), res.longitude.toString()]);
            this.$http.get('get_area_xy', {
              map_lat: res.latitude.toString(),
              map_lng: res.longitude.toString()
            }).then(response => {
              utils.setStorageSync('user_area_name', response.data.data.area_name);
              utils.setStorageSync('user_area_id', response.data.data.area_id);
            }).catch(e => {
            })
          },
          fail: () => {
            utils.setStorageSync('user_area_name', '重庆');
            utils.setStorageSync('user_area_id','0300');
          }
        });
      }


    },
    onShow() {
    },
    onHide() {
    }
  }
</script>

<style>

</style>
