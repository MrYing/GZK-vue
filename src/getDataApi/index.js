/**
 * 各类全局变量 ，需加密处理
 * Created by BinLi on 2017/4/8.
 */
import gzkMSGCtrl from './gzk_script_msg_ctrl'

var strWXOpenID = "";//微信编号
var strUserSysID = "";//用户编号
var strUserPhone = "";//用户电话
var intUserType = 0;//用户类型
var strUserAlias = "";//用户昵称

var floatCurGPSLat = 0;//当前 gps
var floatCurGPSLng = 0;

var intPageBodyHeight = 0;//Body区域高度
var intPageBodyWidth = 0;//Body区域宽度

var selfPageSysCtrl = null;//全局事件广播以及页面控制
var selfGZKMsgCtrl = null;//消息处理对象
window.BMAP_AUTHENTIC_KEY="zDXNHFM64QOPMEgsqIzg8arpdh21Ccex"; //百度地图 api key
/**
 * 初始化 消息控制器
 */
function doInitGMC() {
    selfGZKMsgCtrl = new gzkMSGCtrl();
}

export default new gzkMSGCtrl()
