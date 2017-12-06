/**
 * 消息控制 ，需加密处理
 * Created by binli on 2016-11-04.
 */

import gmc from './gzk_script_coder';

import  'jQuery';

function gzkMSGCtrl() {

    var self = this;

    var selfGMCoder = new gmc(5);//初始化消息控制器

    var strServerAppURL = "http://msg.guozk.com/demo_msg_app_proc.jsp";
    // var strServerAppURL = "http://192.168.10.189:8084/GZK-APP-Service-V1.2/demo_msg_app_proc.jsp";
    // var strServerAppURL = "http://appb.guozk.com/demo_msg_app_proc.jsp";

    var strServerBComURL = "http://msg.guozk.com/demo_msg_app_proc.jsp";
    // var strServerBComURL = "http://192.168.10.189:8084/GZK-BCom-V1.0/gzk_bcom_proc.jsp";
    // var strServerBComURL = "http://www.guozk.com:8080/bcom/gzk_bcom_proc.jsp";

    var strServerWXURL = "http://msg.guozk.com/demo_msg_app_proc.jsp";
    // var strServerWXURL = "http://192.168.10.189:8084/GZK-WX/gzk_wx_msg_proc.jsp";
    // var strServerWXURL = "http://wxa.guozk.com/gzk_wx_msg_proc.jsp";

    var strServerDLAddress = "http://msg.guozk.com/demo_msg_app_proc.jsp";
    // var strServerDLAddress = "http://192.168.1.188:8084/GZK-APP-Service-V1.2/GZK-DL-Dir/";

    var strServerULURL = "http://192.168.80.138:8084/GZK-APP-Service-V1.2/ul_json.jsp";
    // var strServerULURL = "http://192.168.10.189:8084/GZK-BCom-V1.0/gzk_bcom_proc.jsp";
    // var strServerULURL = "http://www.guozk.com:8080/bcom/gzk_bcom_proc.jsp";

    /*物流链APP*/
    var strServerApp2Url="http://192.168.80.138:8084/GZK-WLL-Service/demo_msg_app_proc.jsp"

    var arrayMsgBindList = [];


  /**
     * 绑定消息到函数
     * @param intMsgID 消息编号
     * @param strFunCallBack 回调的函数名称
     */
    this.doBindMsg = function (intMsgID, strFunCallBack) {
        self.doUnBindMsg(intMsgID);
        // arrayMsgBindList.push("{'intMsgID':"+intMsgID+",'strFunCallBack':'"+strFunCallBack+"'}");
        arrayMsgBindList.push({"intMsgID": intMsgID, "strFunCallBack": strFunCallBack});
    };

    /**
     * 解绑消息函数
     * @param intMsgID 消息编号
     */
    this.doUnBindMsg = function (intMsgID) {
        var intTempUnBindIndex = doFindMsgBindList(intMsgID);
        if (intTempUnBindIndex > -1) {
            arrayMsgBindList.splice(intTempUnBindIndex);
        }
    };


    /**
     * 获取消息函数绑定数组
     * @returns {Array}
     */
    this.doGetMsgBindList = function () {
        return arrayMsgBindList;
    };

    function doFindMsgBindList(ingFindMsgID) {
        var intReturn = -1;
        $.each(arrayMsgBindList, function (intIndex, objValue) {
            if (objValue.intMsgID == ingFindMsgID) {
                intReturn = intIndex;
            }
        });
        return intReturn;
    }

  this.doSendApp2Msg = function (strMsgSend) {
    console.log("doSendApp2Msg",strMsgSend);
    $.post(strServerApp2Url,
      {
        gzkmsg: selfGMCoder.code(strMsgSend)
      },
      function (data, status) {
        if (status === "success") {
          doMsgCallBack(eval("(" + selfGMCoder.decode(data) + ")"));
        } else {
          doMsgCallBack("");
        }

      });
  };


  /**
     * 发送消息到App服务器
     * @param strMsgSend 消息内容
     */
    this.doSendAppMsg = function (strMsgSend) {
        $.post(strServerAppURL,
            {
                gzkmsg: selfGMCoder.code(strMsgSend)
            },
            function (data, status) {
                if (status === "success") {
                    doMsgCallBack(eval("(" + selfGMCoder.decode(data) + ")"));
                } else {
                    doMsgCallBack("");
                }

            });
    };

    /**
     * 发送消息到 BCom 服务器
     * @param strMsgSend
     */
    this.doSendBComMsg = function (strMsgSend) {
        jQuery(document).ready(function () {
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: strServerBComURL,
                data: "gzkmsg=" + strMsgSend,
                dataType: "text",
                success: function (strMsgACK) {
                    doMsgCallBack(eval("(" + strMsgACK + ")"));
                },
                error: function (a, b, c) {
                    doMsgCallBack("");
                }
            });
        });
    };

    /**
     * 发送消息到 UL 服务器
     * @param strMsgSend
     */
    this.doSendULMsg = function (strMsgSend) {
        $.post(strServerULURL,
            {
                gzkmsg : strMsgSend
            },
            function (data, status) {
                if (status === "success") {
                    doMsgCallBack(eval("(" + data + ")"));
                } else {
                    doMsgCallBack("");
                }
            });
    };

    /**
     * 发送微信消息服务器
     * @param strMsgSend
     */
    this.doSendWXMsg = function (strMsgSend) {
        $.post(strServerWXURL,
            {
                gzkmsg: selfGMCoder.code(strMsgSend)
            },
            function (data, status) {
                if (status === "success") {
                    doMsgCallBack(eval("(" + selfGMCoder.decode(data) + ")"));
                } else {
                    doMsgCallBack("");
                }

            });
    };


    function doMsgCallBack(jsonRoot) {
        if (jsonRoot != "") {
            var jsonMsgArray = jsonRoot.GZKMSG;
            var jsonMsgInfo;
            var intMsgBindIndex = -1;

            for (var intMsgIndex = 0; intMsgIndex < jsonMsgArray.length; intMsgIndex++) {
                jsonMsgInfo = jsonMsgArray[intMsgIndex];

                switch (jsonMsgInfo.intMsgID) {
                    case 3209:
                        break;
                }

                intMsgBindIndex = doFindMsgBindList(jsonMsgInfo.intMsgID - 1);
                if (intMsgBindIndex > -1) {
                    var tempCallBackFun = arrayMsgBindList[intMsgBindIndex].strFunCallBack;
                    if (tempCallBackFun != null) {
                        tempCallBackFun(jsonMsgInfo);
                    }
                }
            }
        }
    }

}
export default gzkMSGCtrl = gzkMSGCtrl
