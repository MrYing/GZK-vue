/**
 * 各类私有公用函数，需加密处理
 * Created by BinLi on 2017/4/8.
 */

/**
 * 各类全局变量 ，需加密处理
 * Created by BinLi on 2017/4/8.
 */

var strWXOpenID = "";//微信编号
var strUserSysID = "";//用户编号
var strUserPhoneNumber="";//用户电话

var strUserPhone = "";//用户电话
var intUserType = 0;//用户类型
var strUserAlias = "";//用户昵称
var strUserCompanyName="";
var strCarSysID="";
var strCompanySysID="";
var  floatCarLength="";//车长
var intCarType="";//车型

var floatCurGPSLat = 0;//当前 gps
var floatCurGPSLng = 0;
var strCarTeamSysID = ""; //车队系统编号
var strUserIDCardNumber="";//用户身份证
var strGzkUserIDCardURL="http://192.168.80.138:8084/GZK-APP-Service-V1.2/GZK-DL-Dir/" // 登录用户身份证url
var strGzkUserIDCardImgURL="http://192.168.80.138:8084/GZK-APP-Service-V1.2/GZK-DL-Dir/ImgUserHead/" // 传参前缀用户身份证url
var strUserNames=""; //用户姓名
var intUserIDStatus="" ;//用户身份证认证状态


var intPageBodyHeight = 0;//Body区域高度
var intPageBodyWidth = 0;//Body区域宽度

var selfGZKMsgCtrl = null;//消息处理对象

var selfPageSysCtrl = null;//全局事件广播以及页面控制

/*window.BMAP_AUTHENTIC_KEY="zDXNHFM64QOPMEgsqIzg8arpdh21Ccex"; //百度地图 api key*/
var myreg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
var strGetUserProduct="";//投保产品


var intUserSysCashGb=0;  //果宝 不可体现
var intUserCash=0; //用户总金额

var intUserStatusType=0 ;        //是否为会员
var gzk_phone_400="400-9982-860";


/*保险 img 前缀*/
var strServerDLAddress = "http://app.guozk.com/GZK-DL-Dir/";
var strServerUserProtocol = "http://192.168.80.138:8084/GZK-APP-Service-V1.2/GZK-DL-Dir//app_page/user_agreement.html";

var strURLOD = ""; //url 中传递来的 od 参数，如果需要跳转页面，将需要带 od 参数一起跳转

var strAdminBindUserSysID = "";//管理员绑定的 App 用户编号 发布信息通需要
var strClientSessionID = "";//客户端会话编号

/*通讯录*/
var strImgTxl="http://192.168.80.138:8084/GZK-APP-Service-V1.2/GZK-DL-Dir/";

var selfGZLoadingDialog = null;

var tempDialogYHJ = null
var selfAutoRefreshTimeOut = null;
var intAutoRefreshDelay = 1000*60;

/**
 * 是否在测试中,true doShowConsoleLog 有效
 * @type {boolean}
 */
var boolDebug = true;

var strFreightTransportSysID=""; //冷柜定位 冷柜编号
var strFreightTransportSysNewID=""; //xx新建 冷柜编号
var strHdid=""   //冷柜管理 货柜系统编号

/*标签*/
var number=1;
var numberTrue=1;
var attr="";
/*冷柜*/

var UserintFromStauts=null



/**
 * 显示 Console Log
 * @param strLogTitle 标题 可以为空字符串 默认 GZKLog
 * @param strLogInfo 需要显示的内容
 */
function doShowConsoleLog(strLogTitle,strLogInfo){
    if (boolDebug){
        if (strLogTitle==""){
            strLogTitle="GZKLog";
        }
    /*  console.log(strLogTitle+"=="+strLogInfo);*/
    }
}

/*我的保单 车牌*/
function doShowDialogInputCarPlate_transNo(item) {
    var tempDialog = new gzkDialogCarPlatePad($(item).val());
    tempDialog.doSetEvOnBtnClick(onDialogBtnClick_InputCarPlate);

    function onDialogBtnClick_InputCarPlate(objDialog, strClickBtnID) {
        if (strClickBtnID=="btnOK"){
            $(item).val(objDialog.doGetDialogValue(), objDialog.doGetDialogValue());
            objDialog.doCloseDialog();
        }
    }
}

/*我的保单 挂车牌*/
function doShowDialogInputCarPlate_strtraiLerno(item) {
    var tempDialog = new gzkDialogCarPlatePad($(item).val());
    tempDialog.doSetEvOnBtnClick(onDialogBtnClick_InputCarPlate);
    function onDialogBtnClick_InputCarPlate(objDialog, strClickBtnID) {
        if (strClickBtnID=="btnOK"){
            $(item).val(objDialog.doGetDialogValue(), objDialog.doGetDialogValue());
            objDialog.doCloseDialog();
        }
    }
}


/**
 * 私有调用，固化需要的初始化页面功能
 */


function doInitPagePriFun() {
    doInitGMC();
    doGetCurGPSByBD(); //获取 GPS 位置
    doInitLoadDialog();
    doInitPageSysCtrl()
}

function doInitGMC() {
    selfGZKMsgCtrl = new gzkMSGCtrl();
}



function doInitOD() {
    strURLOD = doGetPageURLParam("od");
    strWXOpenID = (new gmc(5)).decode(strURLOD).substring(32);
    doShowConsoleLog("strWXOpenID", strWXOpenID);

    if (strWXOpenID == "") {
        alert("获取页面信息失败，请确保在微信中打开或稍后在尝试！");
    } else {
        selfGZKMsgCtrl.doBindMsg(3208, doProcMsg_3208);
        selfGZKMsgCtrl.doSendWXMsg(doGetMsg_3208(strWXOpenID));
    }
}

function doInitLoadDialog(){
    selfGZLoadingDialog = new gzkDialog();
    selfGZLoadingDialog.doBuildDialogBase();
    selfGZLoadingDialog.doHTMLClear();
    selfGZLoadingDialog.doHTMLAppend(selfGZLoadingDialog.doGetHtmlLoading());

    tempDialogYHJ = new gzkDialog();
    tempDialogYHJ.doBuildDialogBase();
    tempDialogYHJ.doHTMLClear();
    tempDialogYHJ.doHTMLAppend();

}

/**
 * 获取 URL 中的参数内容
 * @param strPMName 参数名称
 * @returns {string} 返回参数内容
 */


/**
 * 获取 URL 中的参数内容
 * @param strPMName 参数名称
 * @returns {string} 返回参数内容
 */
function doGetPageURLParam(strPMName) {
    var reg = new RegExp("(^|&)" + strPMName + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}

function doUpdateWinBodyRectSize() {
    intPageBodyWidth = $("body").width();
    intPageBodyHeight = $("body").height()-$(".divWinTitleBar").height()-$(".divWinBottomBar").height();
    doShowConsoleLog("Get WinBodySize","intPageBodyWidth="+intPageBodyWidth+", intPageBodyHeight="+intPageBodyHeight);
}

/**
 * 通过百度 API 获取浏览器当前 GPS 位置
 * 需引用百度脚本
 * 如果获取成功则赋值到 floatCurGPSLat, floatCurGPSLng
 * @param intGetTimeDelay 延时获取时间 ， 页面初始化结束后可以填零
 */
function doGetCurGPSByBD(intGetTimeDelay) {
    if (intGetTimeDelay==undefined){
        intGetTimeDelay = 0;
    }
    setTimeout(function () {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                floatCurGPSLat = r.point.lat;
                floatCurGPSLng = r.point.lng;
                doShowConsoleLog("Get GPS","Sucessed Lat="+floatCurGPSLat+",Lng="+floatCurGPSLng);
            }else{
                doShowConsoleLog("Get GPS","Faild");
            }
        },{enableHighAccuracy: true});
    },intGetTimeDelay);
}


/**
 * 全新加载子页面
 * 所有的子页面均放在 /sub_pages/ 路径下面
 * @param strPageName 需要加载的页面的名称
 */
function doLoadSubPage(strPageName){
    $("#divPageBody").load("./sub_pages/"+strPageName+".html");
}

// /**
//  * 同级加载子页面
//  * 所有的子页面均放在 /sub_pages/ 路径下面
//  * @param strPageName 需要加载的页面的名称
//  */
// function doLoadSubPageLevel(strPageName){
//     $("#divWinBody").append("<div class='divBodySubPage' id='divBodySubPage_"+strPageName+"'></div>");
//     $("#divBodySubPage_"+strPageName).load("./sub_pages/"+strPageName+".html");
// }

/**
 * 同级加载子页面
 * 所有的子页面均放在 /sub_pages/ 路径下面
 * @param strPageName 需要加载的页面的名称
 */
function doLoadSubPageLevel(strPageName, strDir){
    if (strDir==undefined){
        strDir = "sub_pages";
    }
    $("#divWinBody").append("<div class='divBodySubPage' id='divBodySubPage_"+strPageName+"'></div>");
    $("#divBodySubPage_"+strPageName).load("./"+strDir+"/"+strPageName+".html");
}

function doInitDateTimePicket(strDateTimeID, strTitle) {
    $("#"+strDateTimeID).DateTimePicker(
        {
            dateFormat: "yyyy-MM-dd",
            dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
            timeFormat: "HH:mm",
            shortDayNames: ["日", "一", "二", "三", "四", "五", "六"],
            fullDayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            shortMonthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            fullMonthNames:  ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            titleItemDate: ["年", "月", "日", "時", "分"],
            titleContentDate: strTitle,
            titleContentTime: strTitle,
            titleContentDateTime: strTitle,
            buttonsToDisplay: ["HeaderCloseButton", "SetButton", "ClearButton"],
            setButtonContent: "确定",
            clearButtonContent: "取消",
            formatHumanDate: function(date)
            {
                return date.dayShort + ", " + date.dd + " " + date.month+ ", " + date.yyyy;
            }
        });
}


/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
Date.prototype.format=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "日",
        "1" : "一",
        "2" : "二",
        "3" : "三",
        "4" : "四",
        "5" : "五",
        "6" : "六"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "周" : "星期") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};


function doLoadJSStyle() {
    $.extend({
        includePath: '',
        include: function(file) {
            var files = typeof file == "string" ? [file]:file;
            for (var i = 0; i < files.length; i++) {
                var name = files[i].replace(/^s|s$/g, "");
                var att = name.split('.');
                var ext = att[att.length - 1].toLowerCase();
                var isCSS = ext == "css";
                var tag = isCSS ? "link" : "script";
                var attr = isCSS ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' ";
                var link = (isCSS ? "href" : "src") + "='" + $.includePath + name + "'";
                if ($(tag + "[" + link + "]").length == 0) document.write("<" + tag + attr + link + "></" + tag + ">");
            }
        }
    });
}

function doGetGZKJSStyle() {
    $.includePath = 'http://hi.xxx/javascript/';
    $.include(['json2.js', 'jquery.tree.js', 'jquery.tree.css']);

    // $.getScript("./test.js",function(){  //加载test.js,成功后，并执行回调函数
    //     console.log("加载js文件");
    // });

}

/**
 * 消息 3208 处理方法
 * @param jsonMsgInfo
 */
function doProcMsg_3208(jsonMsgInfo) {
    if (jsonMsgInfo.intInfoStatus==0){
        strUserSysID = jsonMsgInfo.selfUserInfo.strUserSysID;
        intUserType = jsonMsgInfo.selfUserInfo.intUserType;
        strUserPhone = jsonMsgInfo.selfUserInfo.strPhoneNumber;
        strUserAlias = jsonMsgInfo.selfUserInfo.strUserAlias;
    }else{
        strUserSysID = "";
        strUserPhone = "";
        intUserType = 0;
        strUserAlias = "";
    }
}
