/**
 * 接口请求URL配置
 */
const VERSION = 'v4.5';
//const BASE_HOST = "https://wxmp.huibo.com";
// const BASE_HOST = "http://wx.hbs.com";
//const BASE_HOST = "http://wxmp.hb.com";
//const BASE_HOST = "http://wxmp.beta.huibo.com";


const  BASE_HOST='http://app2.beta.huibo.com/';
//const  BASE_HOST='http://app2.huibo.com/';

let local_area_id = uni.getStorageSync('local_area_id') ? uni.getStorageSync('local_area_id') : (uni.getStorageSync('auto_local_area_id') ? uni.getStorageSync('auto_local_area_id') : '0300');

export const baseUrl = `${BASE_HOST}?ver=${VERSION}&apiname=`;

