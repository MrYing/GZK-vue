/**
 * GZK APP API 2017-03-16 10:21
 */

class GetMsg {
  constructor() {

  }

  /**
   * 消息 50
   * GZKMsg_50_DateList_Info
   * 获取所有达成货运订单的数据列表
   * 固化数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统编号 用户系统编号
   * @returns {string}
   */
  doGetMsg_50(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':50," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }

  /**
   * 消息 54
   * GZKMsg_54_Information_List
   * 信息通列表
   * 真实数据（新增加）
   * @param dateSettingTime 设置显示数据开始时间 设置显示数据开始时间 0
   * @param intFocusType 是否只看关注 0：全部；1只看关注 0
   * @param intFromAreaID 发货地区ID   0
   * @param intMyInfoStatus 我的发布 0：选中；1：不选中； 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryGoodsInfoListTypes 查询货源类型 0：全部；1：只看关注；2：只看加急；3：只看车队；4：只看我的；5：只看订货；6：只看我代发布的 查询货源类型 0：全部；1：只看关注；2：只看加急；3：只看车队；4：只看我的；5：只看订货；6：只看我代发布的 0
   * @param intQueryListTypes 查询类型 0：货物信息；1：车源信息；2：八卦信息 0
   * @param intToAreaID 收货地区ID  0¥
   * @param strSearchContent 查询内容关键字
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_54(dateSettingTime, intFocusType, intFromAreaID, intMyInfoStatus, intPageIndex, intQueryGoodsInfoListTypes, intQueryListTypes, intToAreaID, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':54," +
      "'dateSettingTime':" + dateSettingTime + "," +
      "'intFocusType':" + intFocusType + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intMyInfoStatus':" + intMyInfoStatus + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryGoodsInfoListTypes':" + intQueryGoodsInfoListTypes + "," +
      "'intQueryListTypes':" + intQueryListTypes + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 58
   * GZKMsg_58_Published_Goods
   * 信息通发布货源
   * 真实数据（新增加）
   * @param floatCarLength  所需车型车长/车源车型车长    0
   * @param floatCarWeight  所需车型载重/车源车型载重  0
   * @param intAutoRePublish 是否自动重发：0：不重发；1：重发 是否自动重发：0：不重发；1：重发 0
   * @param intAutoRePublishTime 重发时间 重发时间 -1
   * @param intCarType   所需车型/车源车型 0 默认=未填写 1：冷藏车;2:高栏车  0
   * @param intFromAreaID 发货或当前车辆所在地区 ID  0
   * @param intGoodsCubic   货物体积 0 默认=未填写  0
   * @param intGoodsType   货物分类 0 默认=未填写  0
   * @param intGoodsWeight   货物重量 0 默认=未填写  0
   * @param intToAreaID 收货或期待地区 ID  0
   * @param strCompanyName
   * @param strContactPhone 联系电话
   * @param strGoodsName  货物名称
   * @param strOtherContactPhone 其它联系电话 其它联系电话    电话1;电话2
   * @param strOtherFromAreaDesc 其它装货地区 其它装货地区：地区编号1@@地区描述1;地区编号2@@地区描述2
   * @param strOtherToAreaDesc 发布货源：其它卸货地区 发布货源：其它卸货地区    地区编号1@@地区描述1;地区编号2@@地区描述2
   * @param strPublishUserSysID  发布人用户系统编号
   * @param strRemark 备注留言 100 字
   * @param strUserName
   * @returns {string}
   */
  doGetMsg_58(floatCarLength, floatCarWeight, intAutoRePublish, intAutoRePublishTime, intCarType, intFromAreaID, intGoodsCubic, intGoodsType, intGoodsWeight, intToAreaID, strCompanyName, strContactPhone, strGoodsName, strOtherContactPhone, strOtherFromAreaDesc, strOtherToAreaDesc, strPublishUserSysID, strRemark, strUserName) {
    return "{'GZKMSG':[{" +
      "'intMsgID':58," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'intAutoRePublish':" + intAutoRePublish + "," +
      "'intAutoRePublishTime':" + intAutoRePublishTime + "," +
      "'intCarType':" + intCarType + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intGoodsCubic':" + intGoodsCubic + "," +
      "'intGoodsType':" + intGoodsType + "," +
      "'intGoodsWeight':" + intGoodsWeight + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strCompanyName':'" + strCompanyName + "'," +
      "'strContactPhone':'" + strContactPhone + "'," +
      "'strGoodsName':'" + strGoodsName + "'," +
      "'strOtherContactPhone':'" + strOtherContactPhone + "'," +
      "'strOtherFromAreaDesc':'" + strOtherFromAreaDesc + "'," +
      "'strOtherToAreaDesc':'" + strOtherToAreaDesc + "'," +
      "'strPublishUserSysID':'" + strPublishUserSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'strUserName':'" + strUserName + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 60
   * GZKMsg_60_Published_Car
   * 信息通发布车源
   * 真实数据（新增加）
   * @param floatCarLength  所需车型车长/车源车型车长    0
   * @param floatCarWeight  所需车型载重/车源车型载重  0
   * @param intAutoRePublish 是否自动重发：0：不重发；1：重发 是否自动重发：0：不重发；1：重发 0
   * @param intAutoRePublishTime 重发时间 重发时间 -1
   * @param intCarType   所需车型/车源车型 0 默认=未填写 1：冷藏车;2:高栏车  0
   * @param intFromAreaID 发货或当前车辆所在地区 ID  0
   * @param intToAreaID 收货或期待地区 ID  0
   * @param strContactPhone 联系电话
   * @param strOtherContactPhone 其它联系电话 其它联系电话
   * @param strOtherToAreaDesc 发布车源：其它期望地区 发布车源：其它期望地区
   * @param strPublishUserSysID  发布人用户系统编号
   * @param strRemark 备注留言 100 字
   * @param strUserName
   * @returns {string}
   */
  doGetMsg_60(floatCarLength, floatCarWeight, intAutoRePublish, intAutoRePublishTime, intCarType, intFromAreaID, intToAreaID, strContactPhone, strOtherContactPhone, strOtherToAreaDesc, strPublishUserSysID, strRemark, strUserName) {
    return "{'GZKMSG':[{" +
      "'intMsgID':60," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'intAutoRePublish':" + intAutoRePublish + "," +
      "'intAutoRePublishTime':" + intAutoRePublishTime + "," +
      "'intCarType':" + intCarType + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strContactPhone':'" + strContactPhone + "'," +
      "'strOtherContactPhone':'" + strOtherContactPhone + "'," +
      "'strOtherToAreaDesc':'" + strOtherToAreaDesc + "'," +
      "'strPublishUserSysID':'" + strPublishUserSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'strUserName':'" + strUserName + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 64
   * GZKMsg_64_My_Infotom
   * 查询我自己发布的信息通的列表
   * 真实数据（新增加）
   * @param intHistory 0：正在进行中的，1：过时的历史,2：全部；3：有效货源；4：全部货源；5：全部车源 ；6：有效车源；7：有效的车源和货源 0：正在进行中的，1：过时的历史,2：全部；3：有效货源；4：全部货源；5：全部车源 ；6：有效车源；7：有效的车源和货源 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strContactPhone  发布人联系电话
   * @param strPublishUserSysID  发布人用户系统编号
   * @param strSearchContent  关键字查询
   * @param strUserSysID  当前登录用户系统编号 当前登录用户系统编号
   * @returns {string}
   */
  doGetMsg_64(intHistory, intPageIndex, strContactPhone, strPublishUserSysID, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':64," +
      "'intHistory':" + intHistory + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strContactPhone':'" + strContactPhone + "'," +
      "'strPublishUserSysID':'" + strPublishUserSysID + "'," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 66
   * GZKMsg_66_failure_information
   * 点击失效
   * 真实数据（新增加）
   * @param strInfoSysID  信息记录系统编号
   * @param strInvalidUserSysID  失效登记用户系统编号
   * @returns {string}
   */
  doGetMsg_66(strInfoSysID, strInvalidUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':66," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strInvalidUserSysID':'" + strInvalidUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 70
   * GZKMsg_70_Praise
   * 赞
   * 真实数据（新增加）
   * @param strInfoSysID 信息记录系统编号
   * @param strUserSysID 关注用户编号（这个是关注传递过来的
   * @returns {string}
   */
  doGetMsg_70(strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':70," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 72
   * GZKMsg_72_Shielding
   * 屏蔽用户
   * 真实数据（新增加）
   * @param strCancelUserSysID 取消用户编号（取消用户编号
   * @param strContactPhone 被拉黑用户电话号码
   * @param strInfoSysID 信息记录系统编号
   * @param strUserSysID 用户编号（用户编号
   * @returns {string}
   */
  doGetMsg_72(strCancelUserSysID, strContactPhone, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':72," +
      "'strCancelUserSysID':'" + strCancelUserSysID + "'," +
      "'strContactPhone':'" + strContactPhone + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 74
   * GZKMsg_74_Focus
   * 关注
   * 真实数据（新增加）
   * @param dateUpdate 用户查询当天的日期 用户查询当天的日期
   * @param strCancelUserSysID 取消关注用户编号（这个是取消关注传递过来的
   * @param strContactPhone 电话号码
   * @param strInfoSysID 信息记录系统编号
   * @param strUserSysID 关注用户编号（这个是关注传递过来的
   * @returns {string}
   */
  doGetMsg_74(dateUpdate, strCancelUserSysID, strContactPhone, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':74," +
      "'dateUpdate':" + dateUpdate + "," +
      "'strCancelUserSysID':'" + strCancelUserSysID + "'," +
      "'strContactPhone':'" + strContactPhone + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 78
   * GZKMsg_78_ShieldingList
   * 获取我的拉黑列表
   * 真实数据（新增加）
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户编号（用户编号
   * @returns {string}
   */
  doGetMsg_78(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':78," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 80
   * GZKMsg_80_FocusList
   * 获取我的关注列表
   * 真实数据（新增加）
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户编号（用户编号
   * @returns {string}
   */
  doGetMsg_80(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':80," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 86
   * GZKMsg_86_CompanyRelieveCar
   * 公司从车队中解除车辆
   * 真实数据（新增加）
   * @param strCarSysID 车辆系统编号
   * @param strCompanySysID 公司系统编号
   * @param strDriverUserSysID 车主用户系统编号
   * @returns {string}
   */
  doGetMsg_86(strCarSysID, strCompanySysID, strDriverUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':86," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strDriverUserSysID':'" + strDriverUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 88
   * GZKMsg_88_InfoRoundRepublish
   * 重新发布指定的信息
   * 真实数据（新增加）
   * @param strInfoSysID 需要重发的信息编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_88(strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':88," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 90
   * GZKMsg_90_ShowTheNotificationInHomepage
   * 首页简讯列表
   * 测试数据
   * @param strUserSysID 用户系统编号 用户系统编号
   * @returns {string}
   */
  doGetMsg_90(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':90," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 100
   * GZKMsg_100_GetConnect
   * 请求服务器连接资源
   * 真实消息 2015-11-01
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param intClientVerNum 客户端版本 客户端版本号，每版本递增 1 0
   * @param intDeviceOSType 客户端类型  0
   * @returns {string}
   */
  doGetMsg_100(floatGPSLat, floatGPSLng, intClientVerNum, intDeviceOSType) {
    return "{'GZKMSG':[{" +
      "'intMsgID':100," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intClientVerNum':" + intClientVerNum + "," +
      "'intDeviceOSType':" + intDeviceOSType + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 102
   * GZKMsg_102_GetVersion
   * 获取最新版本资源
   * 真实消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param intClientVerNum 客户端版本 客户端版本号，每版本递增 1 0
   * @param intDeviceOSType 客户端类型  0
   * @returns {string}
   */
  doGetMsg_102(floatGPSLat, floatGPSLng, intClientVerNum, intDeviceOSType) {
    return "{'GZKMSG':[{" +
      "'intMsgID':102," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intClientVerNum':" + intClientVerNum + "," +
      "'intDeviceOSType':" + intDeviceOSType + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 110
   * GZKMsg_110_GPSLocationUpdate
   * 更新用户 GPS 地理位置信息
   * 固化消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_110(floatGPSLat, floatGPSLng, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':110," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 112
   * GZKMsg_112_QueryAreaByGPSAdr
   * 根据 GPS 位置获取最近的地区信息
   * 真实消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param intQueryLevel 需要查询的地区等级 1：省级；2：市级；3：区县地区 2
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_112(floatGPSLat, floatGPSLng, intQueryLevel, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':112," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intQueryLevel':" + intQueryLevel + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 114
   * GZKMsg_114_ClientVisitRecord
   * 用户访问记录
   * 测试消息
   * @param A 访问用户系统编号 strVisitUserSysID 访问用户系统编号 strVisitUserSysID
   * @param B 访问页面或消息的编号 intVisitPageID 访问页面或消息的编号 intVisitPageID 0
   * @param C 访问分类(intVisitType)：0未知；1页面(view)；2消息(Msg) 访问分类(intVisitType)：0未知；1页面(view)；2消息(Msg) 0
   * @param D 访问途径(intVisitWay)：0未知；1 Android；2 IOS；3 CS；4 WX 访问途径(intVisitWay)：0未知；1 Android；2 IOS；3 CS；4 WX 0
   * @param E 访问来源(intVisitFromPageID)：如果是view则是上一页的编号；如果是Msg则代表当前所在页面(暂时不用，默认为 0)  访问来源(intVisitFromPageID)：如果是view则是上一页的编号；如果是Msg则代表当前所在页面(暂时不用，默认为 0)  0
   * @returns {string}
   */
  doGetMsg_114(A, B, C, D, E) {
    return "{'GZKMSG':[{" +
      "'intMsgID':114," +
      "'A':'" + A + "'," +
      "'B':" + B + "," +
      "'C':" + C + "," +
      "'D':" + D + "," +
      "'E':" + E + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 120
   * GZKMsg_120_SendSMS
   * 发送短信确认码
   * 固化消息
   * @param intSendSMSType 发送短信类型  0
   * @param strPhoneNumber 接收短信手机号码
   * @param strUserSysID 接受用户的系统编号 如果是重置密码等对用户发送信息的时候，可以填写用户系统编号
   * @returns {string}
   */
  doGetMsg_120(intSendSMSType, strPhoneNumber, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':120," +
      "'intSendSMSType':" + intSendSMSType + "," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 122
   * GZKMsg_122_HotList
   * 获取热点列表
   * 固化消息
   * @param intHotListType 热点列表类型  0
   * @returns {string}
   */
  doGetMsg_122(intHotListType) {
    return "{'GZKMSG':[{" +
      "'intMsgID':122," +
      "'intHotListType':" + intHotListType + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 130
   * GZKMsg_130_HomeInfoRoundLast
   * 获取首页信息通统计以及最新数据
   * 测试消息
   * @param intDetailArray 是否需要返回描述数组 0 默认需要返回，1 不需返回 0
   * @returns {string}
   */
  doGetMsg_130(intDetailArray) {
    return "{'GZKMSG':[{" +
      "'intMsgID':130," +
      "'intDetailArray':" + intDetailArray + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 132
   * GZKMsg_132_HomeStartOfToday
   * 获取首页信息通今日之星文字列表
   * 测试消息
   * @returns {string}
   */
  doGetMsg_132() {
    return "{'GZKMSG':[{" +
      "'intMsgID':132," +

      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 134
   * GZKMsg_134_HomeMyCareSum
   * 获取首页信息通我的关注统计列表
   * 测试消息
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryType 查询类型 查询类型 0
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_134(intPageIndex, intQueryType, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':134," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryType':" + intQueryType + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 136
   * GZKMsg_136_GetHomeMyCareSetting
   * 获取首页信息通我的关注统计条件设置
   * 测试消息
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_136(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':136," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 138
   * GZKMsg_138_UpdateHomeMyCareSetting
   * 更新首页信息通我的关注统计条件设置
   * 测试消息
   * @param intAutoID 关注路线的ID(删除操作是需传) 关注路线的ID(删除操作是需传) 0
   * @param intCareType 关注类型：1：货源；2：车源；(添加操作需传) 关注类型：1：货源；2：车源；(添加操作需传) 0
   * @param intFromAreaID 关注地区起点ID(添加操作需传) 关注地区起点ID(添加操作需传) 0
   * @param intOperateType 操作类型:1: 添加关注路线; 2：删除关注路线; 0：未知 操作类型:1: 添加关注路线; 2：删除关注路线; 0：未知 0
   * @param intToAreaID 关注地区终点ID(添加操作需传) 关注地区终点ID(添加操作需传) 0
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_138(intAutoID, intCareType, intFromAreaID, intOperateType, intToAreaID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':138," +
      "'intAutoID':" + intAutoID + "," +
      "'intCareType':" + intCareType + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intOperateType':" + intOperateType + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 140
   * GZKMsg_140_InfoRoundMapList
   * 获取信息通货源车源地图数据
   * 测试消息
   * @param intMapLevel 请求数据地区等级 1：省级；2：市级; 3:省+市 1
   * @returns {string}
   */
  doGetMsg_140(intMapLevel) {
    return "{'GZKMSG':[{" +
      "'intMsgID':140," +
      "'intMapLevel':" + intMapLevel + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 142
   * GZKMsg_142_QueryAllCars
   * 查询全国车源
   * 测试消息
   * @param intDaysBefore 多少天内的有效数据 多少天内的有效数据 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @returns {string}
   */
  doGetMsg_142(intDaysBefore, intPageIndex) {
    return "{'GZKMSG':[{" +
      "'intMsgID':142," +
      "'intDaysBefore':" + intDaysBefore + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 144
   * GZKMsg_144_InfoRoundAreaToList
   * 查询某地区发出的地点到其他省份地区货源统计
   * 测试消息
   * @param intFromAreaID 起点地区编号 起点地区编号 0
   * @returns {string}
   */

  doGetMsg_144(intFromAreaID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':144," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 200
   * GZKMsg_200_UL
   * 上传服务请求
   * 真实消息 2015-11-01
   * @param intUploadReason 上传文件原因  0
   * @param intUploadType 上传文件类型  0
   * @param strSourceID 上传文件保存编号 非必要,可以由客户端生成，也可以默认空白，如果客户端输入空白字符，则后台自动生成，上传成功后，返回保存后的资源编号
   * @param strUploadValue 上传内容 上传内容需要先用 Base64 进行编码，然后在传送，后台接收后需要先 Base64 译码，然后再根据不同的上传原因保存在不同的目录下面
   * @returns {string}
   */

  doGetMsg_200(intUploadReason, intUploadType, strSourceID, strUploadValue) {
    return "{'GZKMSG':[{" +
      "'intMsgID':200," +
      "'intUploadReason':" + intUploadReason + "," +
      "'intUploadType':" + intUploadType + "," +
      "'strSourceID':'" + strSourceID + "'," +
      "'strUploadValue':'" + strUploadValue + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 230
   * GZKMsg_230_InfotomRankList
   * 获取排名列表信息
   * 测试消息
   * @param strInfoSysID 信息通消息系统ID 信息通消息系统ID
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_230(strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':230," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 232
   * GZKMsg_232_InfotomRankBuyJudge
   * 判断所选择的排名是否能购买
   * 测试消息
   * @param floatPriceAll 所勾选排名的总价 所勾选排名的总价 0.0f
   * @param strAutoIDList 用户所勾选的要购买的排名的自增ID(intAutoID)拼接的字符串 用户所勾选的要购买的排名的自增ID(intAutoID)拼接的字符串
   * @param strInfoSysID 信息通消息系统ID 信息通消息系统ID
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_232(floatPriceAll, strAutoIDList, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':232," +
      "'floatPriceAll':" + floatPriceAll + "," +
      "'strAutoIDList':'" + strAutoIDList + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 234
   * GZKMsg_234_InfotomRankBuySuccess
   * 购买排名成功
   * 测试消息
   * @param strAutoIDList 用户所勾选的要购买的排名的自增ID(intAutoID)拼接的字符串 用户所勾选的要购买的排名的自增ID(intAutoID)拼接的字符串
   * @param strInfoSysID 信息通消息系统ID 信息通消息系统ID
   * @param strPayOrderSysID 付款单单号 测试阶段初期可以不判断是否存在成功付款
   * @param strUserSysID 购买人系统ID 购买人系统ID
   * @returns {string}
   */
  doGetMsg_234(strAutoIDList, strInfoSysID, strPayOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':234," +
      "'strAutoIDList':'" + strAutoIDList + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strPayOrderSysID':'" + strPayOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 236
   * GZKMsg_236_InfotomRankBuyCancel
   * 取消购买排名
   * 测试消息
   * @param strInfoSysID 信息通系统ID 信息通系统ID
   * @param strUserSysID 购买人系统ID 购买人系统ID
   * @returns {string}
   */
  doGetMsg_236(strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':236," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 238
   * GZKMsg_238_InfotomRankBuyRecord
   * 获取购买排名历史记录
   * 测试消息
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 购买人系统ID 购买人系统ID
   * @returns {string}
   */
  doGetMsg_238(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':238," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 240
   * GZKMsg_240_InfotomRankLuckyStarJoin
   * 参与信息通排名幸运星
   * 测试消息
   * @param strCancelInfoSysID 取消参与信息系统ID 取消参与信息系统ID
   * @param strInfoSysID 参与信息系统ID 参与信息系统ID
   * @param strUserSysID 参与人系统ID 参与人系统ID
   * @returns {string}
   */
  doGetMsg_240(strCancelInfoSysID, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':240," +
      "'strCancelInfoSysID':'" + strCancelInfoSysID + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 242
   * GZKMsg_242_UserJoinRankLuckyStarList
   * 参与信息通排名幸运星抽奖记录
   * 测试消息
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 参与人系统ID 参与人系统ID
   * @returns {string}
   */
  doGetMsg_242(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':242," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 250
   * GZKMsg_250_GetPhoneGroupInfoRecord
   *  获取电话组合相关的信息通数据
   * 测试消息
   * @param intPageCount 每页显示最多数量，如果传入 0 ，则返回全部数据，无需分页 每页显示最多数量，如果传入 0 ，则返回全部数据，无需分页 0
   * @param intPageIndex 分页 分页 0
   * @param intQueryType 查询类型 0:所有相关信息；1：所有相关货物信息；2：所有相关车源信息 查询类型 0:所有相关信息；1：所有相关货物信息；2：所有相关车源信息 0
   * @param strPhoneGroupPhone 传入需要查询的所有电话号码，用 , 号分割 传入需要查询的所有电话号码，用 , 号分割
   * @returns {string}
   */
  doGetMsg_250(intPageCount, intPageIndex, intQueryType, strPhoneGroupPhone) {
    return "{'GZKMSG':[{" +
      "'intMsgID':250," +
      "'intPageCount':" + intPageCount + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryType':" + intQueryType + "," +
      "'strPhoneGroupPhone':'" + strPhoneGroupPhone + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 252
   * GZKMsg_252_PhoneGroupInfo
   * 设置电话组合信息
   * 测试消息
   * @param intOptionType 操作类型 ， 必填 0:获取数据；1：保存数据 操作类型 ， 必填 0:获取数据；1：保存数据 0
   * @param strPhoenGroupDesc 电话组合描述 100 字（如果是获取数据，则输入空白字符） 电话组合描述 100 字（如果是获取数据，则输入空白字符）
   * @param strPhoenGroupMaster 电话组合 主账户电话 电话组合 主账户电话
   * @param strPhoneContactName 联系人名称 10 字(如果是获取数据则输入空白字符) 联系人名称 10 字(如果是获取数据则输入空白字符)
   * @param strPhoneGroupAlias 电话组合名称 30 字（如果是获取数据，则输入空白字符） 电话组合名称 30 字（如果是获取数据，则输入空白字符）
   * @param strPhoneGroupOther 电话组合中除主账户外的其他电话号码，用 ,号分割 （如果是获取数据，则输入空白字符） 电话组合中除主账户外的其他电话号码，用 ,号分割 （如果是获取数据，则输入空白字符）
   * @returns {string}
   */
  doGetMsg_252(intOptionType, strPhoenGroupDesc, strPhoenGroupMaster, strPhoneContactName, strPhoneGroupAlias, strPhoneGroupOther) {
    return "{'GZKMSG':[{" +
      "'intMsgID':252," +
      "'intOptionType':" + intOptionType + "," +
      "'strPhoenGroupDesc':'" + strPhoenGroupDesc + "'," +
      "'strPhoenGroupMaster':'" + strPhoenGroupMaster + "'," +
      "'strPhoneContactName':'" + strPhoneContactName + "'," +
      "'strPhoneGroupAlias':'" + strPhoneGroupAlias + "'," +
      "'strPhoneGroupOther':'" + strPhoneGroupOther + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 260
   * GZKMsg_260_InfoRoundSetReserveGoods
   * 设置订货信息
   * 测试消息
   * @param floatIntervalPrice1 区间价格1 区间价格1 0
   * @param floatIntervalPrice2 区间价格2 区间价格2 0
   * @param floatIntervalPrice3 区间价格3 区间价格3 0
   * @param floatMsgCost 信息费 信息费 0
   * @param intCarriageType 运费类型：1：面议；2：区间价格；3：报价形式；0：未知 运费类型：1：面议；2：区间价格；3：报价形式；0：未知 0
   * @param intInsureStatus 是否包含保险：0：不包含；1：包含 是否包含保险：0：不包含；1：包含 0
   * @param intOrderInfoStatus 订货信息状态：0：未开启订货；1：订货中；2：已订货(接受订货)；3：协商中(申请协助)；4：中止订货；5：系统订货完成；6：订货完成；7：信息超时(未接受订货或无人排队) 订货信息状态：0：未开启订货；1：订货中；2：已订货(接受订货)；3：协商中(申请协助)；4：中止订货；5：系统订货完成；6：订货完成；7：信息超时(未接受订货或无人排队) 0
   * @param intOrderRange 订货开放范围：0：未知；1：全平台车源；2：仅车队车辆 订货开放范围：0：未知；1：全平台车源；2：仅车队车辆 0
   * @param strInfoSysID 信息通系统编号 信息通系统编号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_260(floatIntervalPrice1, floatIntervalPrice2, floatIntervalPrice3, floatMsgCost, intCarriageType, intInsureStatus, intOrderInfoStatus, intOrderRange, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':260," +
      "'floatIntervalPrice1':" + floatIntervalPrice1 + "," +
      "'floatIntervalPrice2':" + floatIntervalPrice2 + "," +
      "'floatIntervalPrice3':" + floatIntervalPrice3 + "," +
      "'floatMsgCost':" + floatMsgCost + "," +
      "'intCarriageType':" + intCarriageType + "," +
      "'intInsureStatus':" + intInsureStatus + "," +
      "'intOrderInfoStatus':" + intOrderInfoStatus + "," +
      "'intOrderRange':" + intOrderRange + "," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 262
   * GZKMsg_262_InfoRoundReserveGoodsList
   * 订货信息列表
   * 测试消息
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryStatus 查询类型：0：正在进行的；1：已完成、超时的 查询类型：0：正在进行的；1：已完成、超时的 0
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_262(intPageIndex, intQueryStatus, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':262," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryStatus':" + intQueryStatus + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 264
   * GZKMsg_264_InfoRoundReserveGoodDetail
   * 订货信息详细
   * 测试消息
   * @param strInfoRoundOrderSysID 信息通订货系统编号 信息通订货系统编号
   * @param strInfoSysID 信息通系统编号 信息通系统编号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_264(strInfoRoundOrderSysID, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':264," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 266
   * GZKMsg_266_QueueToInfoRoundReserveGoods
   * 参加订货排队
   * 测试消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param floatIntervalPrice 运费金额 运费金额 0
   * @param floatMsgCost 信息费 信息费 0
   * @param floatQuotation 运费报价金额 运费报价金额 0
   * @param intCarriageType 运费类型 运费类型 0
   * @param strInfoRoundOrderSysID 信息通订货系统编号 信息通订货系统编号
   * @param strInfoSysID 信息通系统编号 信息通系统编号
   * @param strQueueAgainPayOrderSysID 多次排队费用支付单号 多次排队费用支付单号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_266(floatGPSLat, floatGPSLng, floatIntervalPrice, floatMsgCost, floatQuotation, intCarriageType, strInfoRoundOrderSysID, strInfoSysID, strQueueAgainPayOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':266," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'floatIntervalPrice':" + floatIntervalPrice + "," +
      "'floatMsgCost':" + floatMsgCost + "," +
      "'floatQuotation':" + floatQuotation + "," +
      "'intCarriageType':" + intCarriageType + "," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strQueueAgainPayOrderSysID':'" + strQueueAgainPayOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 268
   * GZKMsg_268_InfoRoundReserveGoodsCancel
   * 中止订货
   * 测试消息
   * @param strInfoRoundOrderSysID 信息通订货系统编号 信息通订货系统编号
   * @param strInfoSysID 信息通系统编号 信息通系统编号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_268(strInfoRoundOrderSysID, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':268," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 270
   * GZKMsg_270_CancelQueueToInfoRoundReserveGoods
   * 取消排队
   * 测试消息
   * @param strQueueSysID 排队系统编号 排队系统编号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_270(strQueueSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':270," +
      "'strQueueSysID':'" + strQueueSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 272
   * GZKMsg_272_AcceptQueueToInfoRoundReserveGoods
   * 接受订货排队
   * 测试消息
   * @param strInfoRoundOrderSysID 信息通订货系统编号 信息通订货系统编号
   * @param strInfoSysID 信息通系统编号 信息通系统编号
   * @param strQueueSysID 排队系统编号 排队系统编号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_272(strInfoRoundOrderSysID, strInfoSysID, strQueueSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':272," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strQueueSysID':'" + strQueueSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 274
   * GZKMsg_274_InfoRoundReserveGoodsFinish
   * 订货完成
   * 测试消息
   * @param strInfoRoundOrderSysID 信息通订货系统编号 信息通订货系统编号
   * @param strUserSysID 当前用户系统编号 当前用户系统编号
   * @returns {string}
   */
  doGetMsg_274(strInfoRoundOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':274," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 276
   * GZKMsg_276_InfoRoundReserveGoodsApplyAssistance
   * 订货信息申请协助
   * 测试消息
   * @param intAssistanceType 协助分类 0：未知；（公用信息）1：临时变价；999 其他原因 （下单者，用 100 - 200）100：未能装货；101：假信息；（发布者，用 200 - 300）200：未按时到场装货；201：车辆不符要求 协助分类 0：未知；（公用信息）1：临时变价；999 其他原因 （下单者，用 100 - 200）100：未能装货；101：假信息；（发布者，用 200 - 300）200：未按时到场装货；201：车辆不符要求 0
   * @param strAssistanceContent 申请协助详情 申请协助详情
   * @param strInfoRoundOrderSysID 申请协助的订货信息系统ID 申请协助的订货信息系统ID
   * @param strPhoneNumber 申请协助用户号码 申请协助用户号码
   * @param strUserSysID 申请协助用户系统编号 申请协助用户系统编号
   * @returns {string}
   */
  doGetMsg_276(intAssistanceType, strAssistanceContent, strInfoRoundOrderSysID, strPhoneNumber, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':276," +
      "'intAssistanceType':" + intAssistanceType + "," +
      "'strAssistanceContent':'" + strAssistanceContent + "'," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 278
   * GZKMsg_278_InfoRoundReserveGoodsMsgCostQuery
   * 订货信息费查询
   * 测试消息
   * @param strUserSysID 申请协助用户系统编号 申请协助用户系统编号
   * @returns {string}
   */
  doGetMsg_278(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':278," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 280
   * GZKMsg_280_InfoRoundReserveGoodsAssistanceFinish
   * 订货申请协助结束(完成或拒绝)
   * 测试消息
   * @param intOperateType 操作类型：0：未知；1：同意；2：拒绝 操作类型：0：未知；1：同意；2：拒绝 0
   * @param strAssistanSysID 协助申请系统编号 协助申请系统编号
   * @param strAssistanceRefuseReason 拒绝协商原因(拒绝的时候填写) 拒绝协商原因(拒绝的时候填写)
   * @param strUserSysID 操作用户系统编号 操作用户系统编号
   * @returns {string}
   */
  doGetMsg_280(intOperateType, strAssistanSysID, strAssistanceRefuseReason, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':280," +
      "'intOperateType':" + intOperateType + "," +
      "'strAssistanSysID':'" + strAssistanSysID + "'," +
      "'strAssistanceRefuseReason':'" + strAssistanceRefuseReason + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 282
   * GZKMsg_282_InfoRoundReserveGoodsAssistanceDetail
   * 订货申请协助详情
   * 测试消息
   * @param strAssistanSysID 协助申请系统编号 协助申请系统编号
   * @param strInfoRoundOrderSysID 信息通订货系统编号 信息通订货系统编号
   * @param strUserSysID 用户系统编号 用户系统编号
   * @returns {string}
   */
  doGetMsg_282(strAssistanSysID, strInfoRoundOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':282," +
      "'strAssistanSysID':'" + strAssistanSysID + "'," +
      "'strInfoRoundOrderSysID':'" + strInfoRoundOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 300
   * GZKMsg_300_UserLogin
   * 用户登录
   * 真实消息 电话 货主 1801，车主 1701 密码 1
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strUserPasscode 用户密码 用户密码必须经过 MD5+Base64 编码后才能发送到后台，测试初期可以使用通用密码 111 登录，后台判断 111 直接允许任何用户登录 111
   * @param strUserPhoneNumber 用户电话
   * @returns {string}
   */
  doGetMsg_300(floatGPSLat, floatGPSLng, strUserPasscode, strUserPhoneNumber) {
    return "{'GZKMSG':[{" +
      "'intMsgID':300," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strUserPasscode':'" + strUserPasscode + "'," +
      "'strUserPhoneNumber':'" + strUserPhoneNumber + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 302
   * GZKMsg_302_UserLogout
   * 用户退出
   * 真实消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_302(floatGPSLat, floatGPSLng, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':302," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 304
   * GZKMsg_304_UserRegister
   * 用户注册
   * 真实消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param intUserIdentityType 注册身份 货主，车主，物流公司 0
   * @param strInvitationPhoneNumber 邀请人手机号
   * @param strSMSCode SMS确认码 测试期间， SMS确认码可以使用真实确认码，也可以默认使用 1234 用作测试 1234
   * @param strUserPasscode 用户注册密码 用户密码必须经过 MD5+Base64 编码后才能发送到后台
   * @param strUserPhoneNumber 用户电话
   * @returns {string}
   */
  doGetMsg_304(floatGPSLat, floatGPSLng, intUserIdentityType, strInvitationPhoneNumber, strSMSCode, strUserPasscode, strUserPhoneNumber) {
    return "{'GZKMSG':[{" +
      "'intMsgID':304," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intUserIdentityType':" + intUserIdentityType + "," +
      "'strInvitationPhoneNumber':'" + strInvitationPhoneNumber + "'," +
      "'strSMSCode':'" + strSMSCode + "'," +
      "'strUserPasscode':'" + strUserPasscode + "'," +
      "'strUserPhoneNumber':'" + strUserPhoneNumber + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 306
   * GZKMsg_306_UserResetPassword
   * 用户重置密码
   * 真实消息
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param intResetReason 重置密码原因  0
   * @param strPhoneNumber 用户电话号码
   * @param strSMSCode SMS确认码 测试期间， SMS确认码可以使用真实确认码，也可以默认使用 1234 用作测试 1234
   * @param strUserPasscode 用户注册密码 用户密码必须经过 MD5+Base64 编码后才能发送到后台
   * @returns {string}
   */
  doGetMsg_306(floatGPSLat, floatGPSLng, intResetReason, strPhoneNumber, strSMSCode, strUserPasscode) {
    return "{'GZKMSG':[{" +
      "'intMsgID':306," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intResetReason':" + intResetReason + "," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'strSMSCode':'" + strSMSCode + "'," +
      "'strUserPasscode':'" + strUserPasscode + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 310
   * GZKMsg_310_UserBaseInfo
   * 用户基本资料
   * 真实数据
   * @param strQueryUserSysID 被查询用户系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_310(strQueryUserSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':310," +
      "'strQueryUserSysID':'" + strQueryUserSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 312
   * GZKMsg_312_UserDetailInfo
   * 用户个人主页详细信息
   * 真实数据
   * @param strQueryUserSysID 被查询用户系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_312(strQueryUserSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':312," +
      "'strQueryUserSysID':'" + strQueryUserSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 318
   * GZKMsg_318_UserCreditInfo
   * 用户信用评价
   * 真实数据
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_318(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':318," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 324
   * GZKMsg_324_UserCommonDataDictionary
   * 获取用户常用数据字典
   * 测试消息
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_324(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':324," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 326
   * GZKMsg_326_UserCommonDataDictionarySetting
   * 用户常用数据字典设置
   * 测试消息
   * @param intAutoID （删除操作时需要）常用数据自增ID （删除操作时需要）常用数据自增ID 0
   * @param intDataStatus （添加操作时需要）数据类型：0：未知；1：发货地区(地区编号@地区描述)；2：收货地区(地区编号@地区描述)；3：货物名称；4：重量；5：体积；6：车长；7：所需车型；:8：留言 （添加操作时需要）数据类型：0：未知；1：发货地区(地区编号@地区描述)；2：收货地区(地区编号@地区描述)；3：货物名称；4：重量；5：体积；6：车长；7：所需车型；:8：留言 0
   * @param intOperateType 操作类型：0：未知；1：添加操作；2：删除操作； 操作类型：0：未知；1：添加操作；2：删除操作； 0
   * @param strDataContent （添加操作时需要）常用数据内容 （添加操作时需要）常用数据内容
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_326(intAutoID, intDataStatus, intOperateType, strDataContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':326," +
      "'intAutoID':" + intAutoID + "," +
      "'intDataStatus':" + intDataStatus + "," +
      "'intOperateType':" + intOperateType + "," +
      "'strDataContent':'" + strDataContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 330
   * GZKMsg_330_UserBaseInfoUpdate
   * 用户基本资料更新
   * 真实数据
   * @param intPlaceResidence 居住地区 如果没有修改，可以发送0 表示无需更新 0
   * @param strAddress 居住地址 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strRelativesName 亲属姓名 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strRelativesPhone 亲属电话 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserAlias 居住地区 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserHeadResID 用户头像资源编号 客户端可以调用 jar 包中的 GZKResULFileTypeCode.doCreateFileSourceID(int intFileType) 方法产生对应的图像资源编号，然后并发调用 200 上传文件消息上传图片，并把资源编号通过该字段提交给服务器， 如果没有修改，可以发送 @NA@ 表示无需更新, 测试可以使用 资源编号 123 ， 默认图片为 user_head_default.png @NA@
   * @param strUserName 用户姓名 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserRemark 用户自评 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserSignatureRsID 数字签名图片 客户端可以调用 jar 包中的 GZKResULFileTypeCode.doCreateFileSourceID(int intFileType) 方法产生对应的图像资源编号，然后并发调用 200 上传文件消息上传图片，并把资源编号通过该字段提交给服务器， 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_330(intPlaceResidence, strAddress, strRelativesName, strRelativesPhone, strUserAlias, strUserHeadResID, strUserName, strUserRemark, strUserSignatureRsID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':330," +
      "'intPlaceResidence':" + intPlaceResidence + "," +
      "'strAddress':'" + strAddress + "'," +
      "'strRelativesName':'" + strRelativesName + "'," +
      "'strRelativesPhone':'" + strRelativesPhone + "'," +
      "'strUserAlias':'" + strUserAlias + "'," +
      "'strUserHeadResID':'" + strUserHeadResID + "'," +
      "'strUserName':'" + strUserName + "'," +
      "'strUserRemark':'" + strUserRemark + "'," +
      "'strUserSignatureRsID':'" + strUserSignatureRsID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 334
   * GZKMsg_334_UserIDCardInfoUpdate
   * 用户身份证认证更新
   * 真实数据
   * @param strUserIDCardNumber 用户身份证编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserIDCardRsID 用户身份证照片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新, 测试可以使用 资源编号 123 ， 默认图片为 user_idcard_default.png @NA@
   * @param strUserName 用户姓名 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_334(strUserIDCardNumber, strUserIDCardRsID, strUserName, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':334," +
      "'strUserIDCardNumber':'" + strUserIDCardNumber + "'," +
      "'strUserIDCardRsID':'" + strUserIDCardRsID + "'," +
      "'strUserName':'" + strUserName + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 336
   * GZKMsg_336_UserCurrentStatusUpdate
   * 更新用户当前的状态
   * 真实数据
   * @param intUserCurrentStatus 用户当前的状态  0
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_336(intUserCurrentStatus, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':336," +
      "'intUserCurrentStatus':" + intUserCurrentStatus + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 350
   * GZKMsg_350_UserCompanyInfo
   * 用户关联公司资料
   * 真实数据  2015-11-02
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_350(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':350," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 352
   * GZKMsg_352_UserCompanyInfoUpdate
   * 用户关联公司资料更新
   * 真实数据
   * @param intCompanyCreateYear 公司成立年份 0 表示没有填写，客户端显示未知 0
   * @param strCompanyAddress 公司地址 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyIDCardRSID 公司营业执照图片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyIconRSID 公司头像图片地址资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyName 公司名称 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyOperatingRSID 物流公司营运资格证照片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyPhotoRSID1 公司形象图片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyPhotoRSID2 公司形象图片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyPhotoRSID3 公司形象图片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyRemark 公司备注信息  @NA@
   * @param strCompanySysID 公司系统编号 @NEW@ 表示新增 @NEW@
   * @param strUserSysID 增加或修改操作的用户的系统编号
   * @returns {string}
   */
  doGetMsg_352(intCompanyCreateYear, strCompanyAddress, strCompanyIDCardRSID, strCompanyIconRSID, strCompanyName, strCompanyOperatingRSID, strCompanyPhotoRSID1, strCompanyPhotoRSID2, strCompanyPhotoRSID3, strCompanyRemark, strCompanySysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':352," +
      "'intCompanyCreateYear':" + intCompanyCreateYear + "," +
      "'strCompanyAddress':'" + strCompanyAddress + "'," +
      "'strCompanyIDCardRSID':'" + strCompanyIDCardRSID + "'," +
      "'strCompanyIconRSID':'" + strCompanyIconRSID + "'," +
      "'strCompanyName':'" + strCompanyName + "'," +
      "'strCompanyOperatingRSID':'" + strCompanyOperatingRSID + "'," +
      "'strCompanyPhotoRSID1':'" + strCompanyPhotoRSID1 + "'," +
      "'strCompanyPhotoRSID2':'" + strCompanyPhotoRSID2 + "'," +
      "'strCompanyPhotoRSID3':'" + strCompanyPhotoRSID3 + "'," +
      "'strCompanyRemark':'" + strCompanyRemark + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 354
   * GZKMsg_354_UserCompanyAuthUpdate
   * 用户关联公司资料认证
   * 真实数据
   * @param strCompanyAuthRsID 公司营业执照编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyIDCardRSID 公司营业执照图片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanyName 公司名称 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strCompanySysID 公司系统编号
   * @returns {string}
   */
  doGetMsg_354(strCompanyAuthRsID, strCompanyIDCardRSID, strCompanyName, strCompanySysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':354," +
      "'strCompanyAuthRsID':'" + strCompanyAuthRsID + "'," +
      "'strCompanyIDCardRSID':'" + strCompanyIDCardRSID + "'," +
      "'strCompanyName':'" + strCompanyName + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 360
   * GZKMsg_360_CarList
   * 车辆查询列表
   * 真实数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strCarPlateNumber 查询的车牌号码 如果是空白字符串则不作为查询条件
   * @param strCompanySysID 车辆关联的公司系统编号 如果是要查询该公司关联的所有车辆，（包括信息部和关联该公司的车主）可以单独用strCompanySysID查询该公司的所有车辆,strUserSysID和strCarPlateNumber为空（平台车源）
   * @param strUserSysID 车辆关联的用户系统编号 如果要查询该用户关联的车,单独用strUserSysID来查询，strCompanySysID和strCarPlateNumber为空；（我的车队）
   * @returns {string}
   */
  doGetMsg_360(intPageIndex, strCarPlateNumber, strCompanySysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':360," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strCarPlateNumber':'" + strCarPlateNumber + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 362
   * GZKMsg_362_CarInfo
   * 车辆信息
   * 真实数据
   * @param strCarSysID 车辆系统编号
   * @returns {string}
   */
  doGetMsg_362(strCarSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':362," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 364
   * GZKMsg_364_CarInfoUpdate
   * 车辆信息更新
   * 真实数据
   * @param floatCarLength 车长 如果没有修改，可以发送 0 表示无需更新 0.0
   * @param floatCarWeight 载重 如果没有修改，可以发送 0 表示无需更新 0.0
   * @param intCarBuyYear 购车年份 例如 2010 , 2011, 判断 数字 = 0 则没填写， 如果没有修改，可以发送 0 表示无需更新 0
   * @param intCarType 0: 未设置；1：冷藏车；2：高栏车； 999 ：其他 则没填写， 如果没有修改，可以发送 0 表示无需更新 0
   * @param strCarBodyRSID 车身照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarCheckedRSID 车辆年审标志照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarCoolerRSID 制冷设备照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarDriverRSID 车主与车头合照上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarFrontRSID 车头照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarIconRSID 车辆头像上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarInsideRSID 车厢内部照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarInsuranceRSID 车辆强险照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarLicenseRSID 车辆行驶证上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarLicenseRSID2 车辆行驶证上传资源编号（副本） 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarOperatingRSID 车辆营运资格证上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarPlateNumber 车牌号码 如果修改了车牌号码，车辆自动改变状态为未认证， 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarSysID 车辆系统编号 如果车辆系统编号是 @NEW@，则代表新增, 否则就为想要修改的车辆的系统编号
   * @param strCarTransportInsuranceRSID 车辆货运保险照片上传资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCompanySysID 车辆关联公司的系统编号 如果是货主 该字段为空白字符串， 如果是物流公司用户， 则该字段需要填写用户所关联公司的系统编号
   * @param strDriverSeniorityCardRsID 车头照片上传资源编号 司机从业资格证，可以发送 @NA@ 表示无需更新
   * @param strEngineNumber 发动机号码 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strTrailerOperationCertificateRSID 挂车营运资格证编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strUserSysID 车辆关联用户的系统编号
   * @param strVehicle 车辆识别代号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @returns {string}
   */
  doGetMsg_364(floatCarLength, floatCarWeight, intCarBuyYear, intCarType, strCarBodyRSID, strCarCheckedRSID, strCarCoolerRSID, strCarDriverRSID, strCarFrontRSID, strCarIconRSID, strCarInsideRSID, strCarInsuranceRSID, strCarLicenseRSID, strCarLicenseRSID2, strCarOperatingRSID, strCarPlateNumber, strCarSysID, strCarTransportInsuranceRSID, strCompanySysID, strDriverSeniorityCardRsID, strEngineNumber, strTrailerOperationCertificateRSID, strUserSysID, strVehicle) {
    return "{'GZKMSG':[{" +
      "'intMsgID':364," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'intCarBuyYear':" + intCarBuyYear + "," +
      "'intCarType':" + intCarType + "," +
      "'strCarBodyRSID':'" + strCarBodyRSID + "'," +
      "'strCarCheckedRSID':'" + strCarCheckedRSID + "'," +
      "'strCarCoolerRSID':'" + strCarCoolerRSID + "'," +
      "'strCarDriverRSID':'" + strCarDriverRSID + "'," +
      "'strCarFrontRSID':'" + strCarFrontRSID + "'," +
      "'strCarIconRSID':'" + strCarIconRSID + "'," +
      "'strCarInsideRSID':'" + strCarInsideRSID + "'," +
      "'strCarInsuranceRSID':'" + strCarInsuranceRSID + "'," +
      "'strCarLicenseRSID':'" + strCarLicenseRSID + "'," +
      "'strCarLicenseRSID2':'" + strCarLicenseRSID2 + "'," +
      "'strCarOperatingRSID':'" + strCarOperatingRSID + "'," +
      "'strCarPlateNumber':'" + strCarPlateNumber + "'," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strCarTransportInsuranceRSID':'" + strCarTransportInsuranceRSID + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strDriverSeniorityCardRsID':'" + strDriverSeniorityCardRsID + "'," +
      "'strEngineNumber':'" + strEngineNumber + "'," +
      "'strTrailerOperationCertificateRSID':'" + strTrailerOperationCertificateRSID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'strVehicle':'" + strVehicle + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 366
   * GZKMsg_366_CarAuthUpdate
   * 车辆信息认证
   * 真实数据
   * @param intCarBuyYear 购车年份 例如 2010 , 2011, 判断 数字 = 0 则没填写， 如果没有修改，可以发送 0 表示无需更新 0
   * @param strCarLicenseRSID 车辆行驶证照片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarLicenseRSID2 车辆行驶证照片资源编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarPlateNumber 车牌号码 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strCarSysID 车辆系统编号
   * @param strEngineNumber 发动机号码 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strTrailerVehicleLicenseRSID 挂车行驶证编号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strTrailerVehicleLicenseRSID2 挂车行驶证编号(副本) 如果没有修改，可以发送 @NA@ 表示无需更新
   * @param strVehicle 车辆识别代号 如果没有修改，可以发送 @NA@ 表示无需更新
   * @returns {string}
   */
  doGetMsg_366(intCarBuyYear, strCarLicenseRSID, strCarLicenseRSID2, strCarPlateNumber, strCarSysID, strEngineNumber, strTrailerVehicleLicenseRSID, strTrailerVehicleLicenseRSID2, strVehicle) {
    return "{'GZKMSG':[{" +
      "'intMsgID':366," +
      "'intCarBuyYear':" + intCarBuyYear + "," +
      "'strCarLicenseRSID':'" + strCarLicenseRSID + "'," +
      "'strCarLicenseRSID2':'" + strCarLicenseRSID2 + "'," +
      "'strCarPlateNumber':'" + strCarPlateNumber + "'," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strEngineNumber':'" + strEngineNumber + "'," +
      "'strTrailerVehicleLicenseRSID':'" + strTrailerVehicleLicenseRSID + "'," +
      "'strTrailerVehicleLicenseRSID2':'" + strTrailerVehicleLicenseRSID2 + "'," +
      "'strVehicle':'" + strVehicle + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 368
   * GZKMsg_368_CarAuthInfo
   * 车辆认证信息查询
   * 真实数据
   * @param strCarSysID 车辆系统编号
   * @returns {string}
   */
  doGetMsg_368(strCarSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':368," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 370
   * GZKMsg_370_DriverInfo
   * 司机信息
   * 真实数据
   * @param strDriverSysID 司机系统编号
   * @returns {string}
   */
  doGetMsg_370(strDriverSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':370," +
      "'strDriverSysID':'" + strDriverSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 372
   * GZKMsg_372_DriverInfoUpdate
   * 司机信息更新
   * 真实数据
   * @param strCarSysID 司机所属的车辆的系统编号
   * @param strCompanySysID 公司系统编号
   * @param strDriverLicenseID 司机驾驶证编号 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strDriverLicenseRSID 司机驾驶证照片地址 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strDriverName 司机姓名 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strDriverPhoneNumber 司机电话 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strDriverPhotoRSID 司机个人照片地址 如果没有修改，可以发送 @NA@ 表示无需更新 @NA@
   * @param strDriverSysID 司机系统编号 如果司机系统编号是 @NEW@，则代表新增, 否则就为想要修改的司机的系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_372(strCarSysID, strCompanySysID, strDriverLicenseID, strDriverLicenseRSID, strDriverName, strDriverPhoneNumber, strDriverPhotoRSID, strDriverSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':372," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strDriverLicenseID':'" + strDriverLicenseID + "'," +
      "'strDriverLicenseRSID':'" + strDriverLicenseRSID + "'," +
      "'strDriverName':'" + strDriverName + "'," +
      "'strDriverPhoneNumber':'" + strDriverPhoneNumber + "'," +
      "'strDriverPhotoRSID':'" + strDriverPhotoRSID + "'," +
      "'strDriverSysID':'" + strDriverSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 380
   * GZKMsg_380_UserEvaluationList
   * 用户评价列表
   * 真实数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strFromUserSysID 评价人系统编号 输入 空白字符串 代表非查询条件
   * @param strOrderSysID 评价关联单据系统编号 输入 空白字符串 代表非查询条件
   * @param strToUserSysID 被评价人系统编号 输入 空白字符串 代表非查询条件
   * @returns {string}
   */
  doGetMsg_380(intPageIndex, strFromUserSysID, strOrderSysID, strToUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':380," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strFromUserSysID':'" + strFromUserSysID + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strToUserSysID':'" + strToUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 382
   * GZKMsg_382_UserEvaluationInfo
   * 用户评价详情
   * 真实数据
   * @param strOrderSysID 评价关联单据系统编号
   * @returns {string}
   */
  doGetMsg_382(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':382," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 384
   * GZKMsg_384_UserEvaluation_OrderTransport
   * 用户填写订单评价
   * 真实数据
   * @param strAboutOrderSysID 评价关联单据系统编号
   * @param strEvalDesc 评语描述
   * @param strEvalFromUserSysID 评价人系统编号
   * @param strEvalLabelID 评价标签编号组合 如100@101@102
   * @param strEvalToUserSysID 被评价人系统编号
   * @returns {string}
   */
  doGetMsg_384(strAboutOrderSysID, strEvalDesc, strEvalFromUserSysID, strEvalLabelID, strEvalToUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':384," +
      "'strAboutOrderSysID':'" + strAboutOrderSysID + "'," +
      "'strEvalDesc':'" + strEvalDesc + "'," +
      "'strEvalFromUserSysID':'" + strEvalFromUserSysID + "'," +
      "'strEvalLabelID':'" + strEvalLabelID + "'," +
      "'strEvalToUserSysID':'" + strEvalToUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 390
   * GZKMsg_390_MyInfoRepublishTimeList
   * 获取信息通每天定时重发列表
   * 真实数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_390(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':390," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 392
   * GZKMsg_392_UpdateInfoRepublishOfTime
   * 取消或设置每天重发信息
   * 真实数据
   * @param intUpdateRepublishTime 更新每天重发的状态 -1：取消每天重发；0-23 代表需要每天重发以及重发时间 -1
   * @param strInfoSysID 信息编号 信息编号
   * @param strUserSysID 用户系统ID 用户系统ID
   * @returns {string}
   */
  doGetMsg_392(intUpdateRepublishTime, strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':392," +
      "'intUpdateRepublishTime':" + intUpdateRepublishTime + "," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 500
   * GZKMsg_500_OrderGreen_List
   * 线路查询
   * 真实数据
   * @param intOrderFromAreaID 发货地区编号 地区 0
   * @param intOrderToAreaID 收货地区编号 地区 0
   * @param intPageIndex 分页索引（用于：点击查询更多） 1代表开始页面,每次点击加载,会增加7条数据 0
   * @param strModels 所需车型 所需车型（可选可不选可多选：多选用逗号分隔比如 1,2.3,3）
   * @returns {string}
   */
  doGetMsg_500(intOrderFromAreaID, intOrderToAreaID, intPageIndex, strModels) {
    return "{'GZKMSG':[{" +
      "'intMsgID':500," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strModels':'" + strModels + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 510
   * GZKMsg_510_OrderGreen_Publish
   * 发布专线线路
   * 数据库数据
   * @param floatNeedMoney 线路费用  0.0
   * @param intOrderFromAreaID 发货地区编号 地区 0
   * @param intOrderToAreaID 收货地区编号 地区 0
   * @param strCycleList 发车计划 发车计划 【最多每周发车2次 , 逗号分割，如 1,2】
   * @param strModelsList 提供车型 提供车型 【可以多次提款车型  逗号分割，如 9.6,3.9】
   * @param strPublisherSysID 发布人系统编号
   * @param strRemark 备注信息
   * @returns {string}
   */
  doGetMsg_510(floatNeedMoney, intOrderFromAreaID, intOrderToAreaID, strCycleList, strModelsList, strPublisherSysID, strRemark) {
    return "{'GZKMSG':[{" +
      "'intMsgID':510," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'strCycleList':'" + strCycleList + "'," +
      "'strModelsList':'" + strModelsList + "'," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 512
   * GZKMsg_512_OrderGreen_MyPublish_List
   * 查询我自己发布的专线线路
   * 真实数据
   * @param intJudge 判断用户选项 该判断是用于判断（我发布的专线）（0 找货，1 找货历史） 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strPublisherSysID 发布人系统编号 返回所有改用户发布的线路信息
   * @returns {string}
   */
  doGetMsg_512(intJudge, intPageIndex, strPublisherSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':512," +
      "'intJudge':" + intJudge + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 520
   * GZKMsg_520_OrderGreen_DetailInfo
   * 专线线路详情
   * 真实数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 查询人系统编号
   * @returns {string}
   */
  doGetMsg_520(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':520," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 530
   * GZKMsg_530_OrderGreen_Checkout
   * 货主 对 专线线路 下单
   * 真实数据
   * @param dateDeparture 发货日期 从价格日历的页面传入 new Date(0)
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 下单人系统编号
   * @returns {string}
   */
  doGetMsg_530(dateDeparture, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':530," +
      "'dateDeparture':" + dateDeparture + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 540
   * GZKMsg_540_Order_Invalid
   * 作废单据
   * 真实数据
   * @param intOrderType 作废单据的类型 抢单，竞价，线路等 0
   * @param strOrderSysID 需要作废的单据的系统编号
   * @param strUserSysID 作废操作人的系统编号
   * @returns {string}
   */
  doGetMsg_540(intOrderType, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':540," +
      "'intOrderType':" + intOrderType + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 550
   * GZKMsg_550_CheckPriceTrend
   * 运价走势查询
   * 真实数据
   * @param intFromAreaID 出发地区 出发地区的id（必填） 0
   * @param intToAreaID 目的地区 目的地区id（必填） 0
   * @param strUserSysID 查询人系统编号
   * @returns {string}
   */
  doGetMsg_550(intFromAreaID, intToAreaID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':550," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 560
   * GZKMsg_560_GetInfoRoundMatchForSMS
   * 短信宝 获取附近车源/货源
   * 测试数据
   * @param strInfoSysID 信息通系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_560(strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':560," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 562
   * GZKMsg_562_GetInfoRoundMatchForWX
   * 微信宝 获取车主/货主微信
   * 测试数据
   * @param strInfoSysID 信息通系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_562(strInfoSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':562," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 564
   * GZKMsg_564_SendInfoRoundMatchForSMS
   * 短信宝 给附近的车主/货主发送短信
   * 测试数据
   * @param intCarTeamDriverCount 选择的车队司机接收者数量 选择的车队司机接收者数量 0
   * @param intReceiverCount 选择的方案中接收者数量  0
   * @param strInfoSysID 需要发送信息发送记录系统编号
   * @param strPayOrderSysID 付款单单号 测试阶段初期可以不判断是否存在成功付款
   * @param strSplicePhoneNum 符合条件的用户号码拼接字符串(新的短信宝所用) 符合条件的用户号码拼接字符串(新的短信宝所用) 0
   * @param strSpliceUserSysID 符合条件的用户系统编号拼接字符串(新的短信宝所用) 符合条件的用户系统编号拼接字符串(新的短信宝所用) 0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_564(intCarTeamDriverCount, intReceiverCount, strInfoSysID, strPayOrderSysID, strSplicePhoneNum, strSpliceUserSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':564," +
      "'intCarTeamDriverCount':" + intCarTeamDriverCount + "," +
      "'intReceiverCount':" + intReceiverCount + "," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strPayOrderSysID':'" + strPayOrderSysID + "'," +
      "'strSplicePhoneNum':'" + strSplicePhoneNum + "'," +
      "'strSpliceUserSysID':'" + strSpliceUserSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 566
   * GZKMsg_566_SendInfoRoundMatchForWX
   * 微信宝 给车主/货主发送短信
   * 测试数据
   * @param intReceiverCount 选择的方案中接收者数量  0
   * @param strInfoSysID 需要发送信息发送记录系统编号
   * @param strPayOrderSysID 付款单单号 测试阶段初期可以不判断是否存在成功付款
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_566(intReceiverCount, strInfoSysID, strPayOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':566," +
      "'intReceiverCount':" + intReceiverCount + "," +
      "'strInfoSysID':'" + strInfoSysID + "'," +
      "'strPayOrderSysID':'" + strPayOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 570
   * GZKMsg_570_ToolsSMSUseList
   * 短信宝 查看用户使用短信宝记录
   * 测试数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryType 查询类型类型：0：短信宝使用记录；1：车队短信使用记录 查询类型类型：0：短信宝使用记录；1：车队短信使用记录 0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_570(intPageIndex, intQueryType, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':570," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryType':" + intQueryType + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 572
   * GZKMsg_572_ToolsWXUseList
   * 微信宝 查看用户使用微信宝记录
   * 测试数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_572(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':572," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 574
   * GZKMsg_574_ToolsSMSRecordDetail
   * 短信宝 发送成功后查看接收者列表
   * 测试数据
   * @param intNeedDisatance 是否需要计算发货点与接收用户的距离 0：不用计算；1：需要计算 0
   * @param intPageIndex1 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intPageIndex2 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryType 查询类型 查询类型 0
   * @param strSendSMSSysID 发送记录系统编号
   * @param strSendSMSToDriverSysID 车队发送给司机的发送记录系统编号 车队发送给司机的发送记录系统编号
   * @returns {string}
   */
  doGetMsg_574(intNeedDisatance, intPageIndex1, intPageIndex2, intQueryType, strSendSMSSysID, strSendSMSToDriverSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':574," +
      "'intNeedDisatance':" + intNeedDisatance + "," +
      "'intPageIndex1':" + intPageIndex1 + "," +
      "'intPageIndex2':" + intPageIndex2 + "," +
      "'intQueryType':" + intQueryType + "," +
      "'strSendSMSSysID':'" + strSendSMSSysID + "'," +
      "'strSendSMSToDriverSysID':'" + strSendSMSToDriverSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 576
   * GZKMsg_576_ToolsWXRecordDetail
   * 微信宝 发送成功后列表
   * 测试数据
   * @param strSendWXSysID 发送记录系统编号
   * @returns {string}
   */
  doGetMsg_576(strSendWXSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':576," +
      "'strSendWXSysID':'" + strSendWXSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 600
   * GZKMsg_600_OrderFlash_Car_List
   * 抢单 找车 列表
   * 数据库数据
   * @param dateDeparture 发车日期 可以不填 0
   * @param floatMaxNeedMoney 最高价格 可以不填 0
   * @param floatMinNeedMoney 最低价格 可以不填 0
   * @param intFromAreaID 出发地区 出发地区的id（必填） 0
   * @param intJudge 判断用户选项 该判断是用于判断（我发布的抢单）（0 找车中，1 找车历史） 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intSort 对时间或价格的排序（0：时间排序 1：最高价格排序 2：最低价格排序） 对时间或价格的排序（0：时间排序 1：最高价格排序 2：最低价格排序） 0
   * @param intToAreaID 目的地区 目的地区id（必填） 0
   * @param strPublisherSysID 发布人系统编号 可选输入，如果不为空白字符串则查询指定用户发布的单据
   * @returns {string}
   */
  doGetMsg_600(dateDeparture, floatMaxNeedMoney, floatMinNeedMoney, intFromAreaID, intJudge, intPageIndex, intSort, intToAreaID, strPublisherSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':600," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatMaxNeedMoney':" + floatMaxNeedMoney + "," +
      "'floatMinNeedMoney':" + floatMinNeedMoney + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intJudge':" + intJudge + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intSort':" + intSort + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 602
   * GZKMsg_602_OrderFlash_Goods_List
   * 抢单 找货 列表
   * 数据库数据
   * @param dateDeparture 发车日期 可以不填 0
   * @param floatMaxNeedMoney 最高价格 可以不填 0
   * @param floatMinNeedMoney 最低价格 可以不填 0
   * @param intFromAreaID 出发地区 出发地区的id（必填） 0
   * @param intJudge 判断用户选项 该判断是用于判断（我发布的抢单）（0 找货中，1 找货历史） 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intSort 对时间或价格的排序（0：时间排序 1：最高价格排序 2：最低价格排序） 对时间或价格的排序（0：时间排序 1：最高价格排序 2：最低价格排序） 0
   * @param intToAreaID 目的地区 目的地区id（必填） 0
   * @param strPublisherSysID 发布人系统编号 可选输入，如果不为空白字符串则查询指定用户发布的单据
   * @returns {string}
   */
  doGetMsg_602(dateDeparture, floatMaxNeedMoney, floatMinNeedMoney, intFromAreaID, intJudge, intPageIndex, intSort, intToAreaID, strPublisherSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':602," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatMaxNeedMoney':" + floatMaxNeedMoney + "," +
      "'floatMinNeedMoney':" + floatMinNeedMoney + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intJudge':" + intJudge + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intSort':" + intSort + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 610
   * GZKMsg_610_OrderFlash_Publish_GoodsInfo
   * 提交抢单货物信息找车
   * 数据库数据
   * @param dateDeparture 发货日期 datetime 0
   * @param floatCarLength  所需车型车长/车源车型车长
   * @param floatCarWeight  所需车型载重/车源车型载重
   * @param floatCube 货物体积  0.0
   * @param floatModels 所需车型  0.0
   * @param floatMoneyGoodsAssign 货源信息费  0
   * @param floatNeedMoney 费用  0.0
   * @param floatWeight 货物重量  0.0
   * @param intCarType  默认 1; 0: 未设置；1：冷藏车；2：高栏车； 999 ：其他  1
   * @param intFreightType 货物分类  0
   * @param intGreenChannel 是否走绿色通道(0否 1 是) 是否走绿色通道(0否 1 是) 0
   * @param intInsuranceType 购买保险 购买保险 0
   * @param intNumberDays 卖货几天 卖货三天 0
   * @param intOrderFromAreaID 发货地区编号 地区 0
   * @param intOrderToAreaID 收货地区编号 地区 0
   * @param intPackage 装车包装  0
   * @param strGoodsName 货物名称
   * @param strGoodsPhotoRsID1 货物图片资源编号1
   * @param strGoodsPhotoRsID2 货物图片资源编号2
   * @param strGoodsPhotoRsID3 货物图片资源编号3
   * @param strPublisherSysID 发布人系统编号
   * @param strRemark 备注信息
   * @returns {string}
   */
  doGetMsg_610(dateDeparture, floatCarLength, floatCarWeight, floatCube, floatModels, floatMoneyGoodsAssign, floatNeedMoney, floatWeight, intCarType, intFreightType, intGreenChannel, intInsuranceType, intNumberDays, intOrderFromAreaID, intOrderToAreaID, intPackage, strGoodsName, strGoodsPhotoRsID1, strGoodsPhotoRsID2, strGoodsPhotoRsID3, strPublisherSysID, strRemark) {
    return "{'GZKMSG':[{" +
      "'intMsgID':610," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'floatCube':" + floatCube + "," +
      "'floatModels':" + floatModels + "," +
      "'floatMoneyGoodsAssign':" + floatMoneyGoodsAssign + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'floatWeight':" + floatWeight + "," +
      "'intCarType':" + intCarType + "," +
      "'intFreightType':" + intFreightType + "," +
      "'intGreenChannel':" + intGreenChannel + "," +
      "'intInsuranceType':" + intInsuranceType + "," +
      "'intNumberDays':" + intNumberDays + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'intPackage':" + intPackage + "," +
      "'strGoodsName':'" + strGoodsName + "'," +
      "'strGoodsPhotoRsID1':'" + strGoodsPhotoRsID1 + "'," +
      "'strGoodsPhotoRsID2':'" + strGoodsPhotoRsID2 + "'," +
      "'strGoodsPhotoRsID3':'" + strGoodsPhotoRsID3 + "'," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 612
   * GZKMsg_612_OrderFlash_Publish_CarInfo
   * 提交抢单车辆信息找货
   * 数据库数据
   * @param dateDeparture 发车日期 datetime 0
   * @param floatAssignCarMoney 派车信息费  0.0
   * @param floatNeedMoney 费用  0.0
   * @param intOrderFromAreaID 发车地区编号 地区 0
   * @param intOrderToAreaID 到达地区编号 地区 0
   * @param strCarSysID 关联车辆编号
   * @param strPublisherSysID 发布人系统编号
   * @param strRemark 备注信息
   * @returns {string}
   */
  doGetMsg_612(dateDeparture, floatAssignCarMoney, floatNeedMoney, intOrderFromAreaID, intOrderToAreaID, strCarSysID, strPublisherSysID, strRemark) {
    return "{'GZKMSG':[{" +
      "'intMsgID':612," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatAssignCarMoney':" + floatAssignCarMoney + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 620
   * GZKMsg_620_OrderFlash_CarDetailInfo
   * 抢单 找车 车辆信息 详情
   * 数据库数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 查询人系统编号
   * @returns {string}
   */
  doGetMsg_620(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':620," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 622
   * GZKMsg_622_OrderFlash_GoodsDetailInfo
   * 抢单 找货 货物信息 详情
   * 数据库数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 查询人系统编号
   * @returns {string}
   */
  doGetMsg_622(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':622," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 630
   * GZKMsg_630_OrderFlash_Checkout_CarInfo
   * 抢单 货主 对 车主或物流公司 发布 的 找货单 车辆信息 下单
   * 真实数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 下单人系统编号
   * @returns {string}
   */
  doGetMsg_630(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':630," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 632
   * GZKMsg_632_OrderFlash_Checkout_GoodsInfo
   * 抢单 车主或物流公司 对 货主 发布 的 找车单 货物信息 下单
   * 真实数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 下单人系统编号
   * @returns {string}
   */
  doGetMsg_632(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':632," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 650
   * GZKMsg_650_CarTeamSearch
   * 车队查找
   * 测试数据
   * @param floatGPSLat 搜索者当前所在 GPS 位置  0
   * @param floatGPSLng 搜索者当前所在 GPS 位置  0
   * @param intCarTeamHomeAreaID 车队驻地地区编号 可选，默认 0 代表用户没有设置 0
   * @param intOrderBy 排序类型 0：距离最近；1：发货最多；2：车辆最多;3：选择驻地; 默认使用 0：距离最近 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strSearchContent 查找时输入内容 可模糊查找
   * @param strUserSysID 搜索操作的用户系统编号
   * @returns {string}
   */
  doGetMsg_650(floatGPSLat, floatGPSLng, intCarTeamHomeAreaID, intOrderBy, intPageIndex, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':650," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intCarTeamHomeAreaID':" + intCarTeamHomeAreaID + "," +
      "'intOrderBy':" + intOrderBy + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 652
   * GZKMsg_652_CarTeamInfoDetail
   * 车队详情 我的车队
   * 测试数据
   * @param strCarTeamSysID 车队系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_652(strCarTeamSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':652," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 654
   * GZKMsg_654_CarTeamInfoUpdate
   * 车队管理员更新车队详情
   * 测试数据
   * @param intHomeAreaID 主要经营地区编号 如果没有更新则填写 0 0
   * @param strCarTeamIconRSID 车队标志图片 如果没有修改，可以发送 @NEW@ 表示无需更新 @NEW@
   * @param strCarTeamName 车队名称 如果没有修改，可以发送 @NEW@ 表示无需更新 @NEW@
   * @param strCarTeamSysID 需要更新的车队系统编号
   * @param strHomeAreaDesc 主要经营地区描述 100字 如果没有修改，可以发送 @NEW@ 表示无需更新 @NEW@
   * @param strRemark 车队备注 100字 如果没有修改，可以发送 @NEW@ 表示无需更新 @NEW@
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_654(intHomeAreaID, strCarTeamIconRSID, strCarTeamName, strCarTeamSysID, strHomeAreaDesc, strRemark, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':654," +
      "'intHomeAreaID':" + intHomeAreaID + "," +
      "'strCarTeamIconRSID':'" + strCarTeamIconRSID + "'," +
      "'strCarTeamName':'" + strCarTeamName + "'," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strHomeAreaDesc':'" + strHomeAreaDesc + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 656
   * GZKMsg_656_CarTeamCarList
   * 车队拥有车辆列表
   * 测试数据
   * @param floatGPSLat 执行操作的用户当前所在 GPS 位置  0
   * @param floatGPSLng 执行操作的用户当前所在 GPS 位置  0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strCarTeamSysID 车队系统编号
   * @param strSearchContent 查找框中输入的内容
   * @param strUserSysID 执行操作的用户系统编号
   * @returns {string}
   */
  doGetMsg_656(floatGPSLat, floatGPSLng, intPageIndex, strCarTeamSysID, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':656," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 658
   * GZKMsg_658_CarTeamPublishGoodsList
   * 车队历史信息通发布货源列表
   * 测试数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strCarTeamSysID 车队系统编号
   * @returns {string}
   */
  doGetMsg_658(intPageIndex, strCarTeamSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':658," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 660
   * GZKMsg_660_MyCarTeamList
   * 我的车队列表
   * 测试数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strSearchContent 查找时输入内容 可模糊查找
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_660(intPageIndex, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':660," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 670
   * GZKMsg_670_CarTeamInviteDriverList
   * 车队发出的邀请记录
   * 测试数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strCarTeamSysID 车队系统编号
   * @param strUserSysID 操作者系统编号
   * @returns {string}
   */
  doGetMsg_670(intPageIndex, strCarTeamSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':670," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 672
   * GZKMsg_672_CarTeamInviteApply
   * 车队邀请车主
   * 测试数据
   * @param strBeinviteUserAlias 被邀约人昵称  0
   * @param strCancelCarTeamInviteSysID 车队邀请车主记录系统编号(取消邀约时传) 车队邀请车主记录系统编号(取消邀约时传)
   * @param strCarTeamSysID 车队邀约系统编号
   * @param strCompanySysID 公司邀约系统编号
   * @param strDriverPhoneNumber 被邀约司机的电话号码
   * @param strFromUserSysID 发起邀约人系统编号 发起邀约人系统编号,车队管理员系统编号
   * @param strRelativesCarTeamName 邀请车队名称（不用传）
   * @param strRelativesName 邀请车队管理员名称（不用传）
   * @param strToUserSysID 被邀约者系统编号（不用传）
   * @returns {string}
   */
  doGetMsg_672(strBeinviteUserAlias, strCancelCarTeamInviteSysID, strCarTeamSysID, strCompanySysID, strDriverPhoneNumber, strFromUserSysID, strRelativesCarTeamName, strRelativesName, strToUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':672," +
      "'strBeinviteUserAlias':'" + strBeinviteUserAlias + "'," +
      "'strCancelCarTeamInviteSysID':'" + strCancelCarTeamInviteSysID + "'," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strDriverPhoneNumber':'" + strDriverPhoneNumber + "'," +
      "'strFromUserSysID':'" + strFromUserSysID + "'," +
      "'strRelativesCarTeamName':'" + strRelativesCarTeamName + "'," +
      "'strRelativesName':'" + strRelativesName + "'," +
      "'strToUserSysID':'" + strToUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 674
   * GZKMsg_674_CarTeamInviteAgree
   * 车主接受/拒绝车队邀约
   * 测试数据
   * @param intAgreeStatus 更新邀约状态  0
   * @param strCarTeamInviteRecordSysID 车队邀约记录系统编号
   * @param strUserSysID 操作人的系统编号
   * @returns {string}
   */
  doGetMsg_674(intAgreeStatus, strCarTeamInviteRecordSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':674," +
      "'intAgreeStatus':" + intAgreeStatus + "," +
      "'strCarTeamInviteRecordSysID':'" + strCarTeamInviteRecordSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 676
   * GZKMsg_676_CarTeamReceiveJoinApplyList
   * 车队收到申请记录列表
   * 测试数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strCarTeamSysID 车队系统编号
   * @param strUserSysID 操作者系统编号
   * @returns {string}
   */
  doGetMsg_676(intPageIndex, strCarTeamSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':676," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 678
   * GZKMsg_678_CarTeamRemoveCar
   * 车队管理员从车队中剔除某个车主
   * 测试数据
   * @param strCarTeamSysID 车队系统编号
   * @param strDriverUserSysID 车主系统编号
   * @param strUserSysID 操作者系统编号
   * @returns {string}
   */
  doGetMsg_678(strCarTeamSysID, strDriverUserSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':678," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strDriverUserSysID':'" + strDriverUserSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 680
   * GZKMsg_680_DriverJoinCarTeamRecordList
   * 车主申请加入车队记录列表
   * 测试数据
   * @param strUserSysID 操作者(车主)系统编号
   * @returns {string}
   */
  doGetMsg_680(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':680," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 682
   * GZKMsg_682_DriverJoinCarTeamApply
   * 车主申请加入车队
   * 测试数据
   * @param strCarTeamAdminSysID 申请加入的车队的管理员用户的系统编号(订货时加入车队的情况下传) 申请加入的车队的管理员用户的系统编号(订货时加入车队的情况下传)
   * @param strCarTeamSysID 申请加入的车队系统编号
   * @param strUserSysID 操作者(车主)系统编号
   * @returns {string}
   */
  doGetMsg_682(strCarTeamAdminSysID, strCarTeamSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':682," +
      "'strCarTeamAdminSysID':'" + strCarTeamAdminSysID + "'," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 684
   * GZKMsg_684_DriverJoinCarTeamAgree
   * 车队接受/拒绝车主申请
   * 测试数据
   * @param intAgreeStatus 更新申请状态  0
   * @param strCarJoinCarTeamRecordSysID 车主申请加入记录系统编号
   * @param strDriverUserSysID 申请人系统编号
   * @param strUserSysID 操作人系统编号
   * @returns {string}
   */
  doGetMsg_684(intAgreeStatus, strCarJoinCarTeamRecordSysID, strDriverUserSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':684," +
      "'intAgreeStatus':" + intAgreeStatus + "," +
      "'strCarJoinCarTeamRecordSysID':'" + strCarJoinCarTeamRecordSysID + "'," +
      "'strDriverUserSysID':'" + strDriverUserSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 686
   * GZKMsg_686_DriverReceiveInviteApplyList
   * 车主收到邀约记录列表
   * 测试数据
   * @param strUserSysID 操作者(车主)系统编号
   * @returns {string}
   */
  doGetMsg_686(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':686," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 688
   * GZKMsg_688_DriverLeaveCarTeam
   * 车主退出车队
   * 测试数据
   * @param strCarTeamSysID 车队系统编号
   * @param strUserPayOrderSysID 支付单单据系统编号(30天内退出车队 支付果宝完成后传) 支付单单据系统编号(30天内退出车队 支付果宝完成后传)
   * @param strUserSysID 操作者系统编号
   * @returns {string}
   */
  doGetMsg_688(strCarTeamSysID, strUserPayOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':688," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserPayOrderSysID':'" + strUserPayOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 700
   * GZKMsg_700_OrderAuction_Car_List
   * 竞价 找车 列表
   * 数据库数据
   * @param dateDeparture 发车日期 可以不填 0
   * @param floatMaxNeedMoney 最高价格 可以不填 0
   * @param floatMinNeedMoney 最低价格 可以不填 0
   * @param intFromAreaID 出发地区 出发地区的id（必填） 0
   * @param intJudge 判断用户选项 该判断是用于判断（我发布的竞价）（0 找货中，1 找货历史） 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intSort 对时间或价格的排序（0：时间排序 1：最高价格排序 2：最低价格排序） 对时间或价格的排序（0：时间排序 1：最高价格排序 2：最低价格排序） 0
   * @param intToAreaID 目的地区 目的地区id（必填） 0
   * @param strPublisherSysID 发布人系统编号 可选输入，如果不为空白字符串则查询指定用户发布的单据
   * @returns {string}
   */
  doGetMsg_700(dateDeparture, floatMaxNeedMoney, floatMinNeedMoney, intFromAreaID, intJudge, intPageIndex, intSort, intToAreaID, strPublisherSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':700," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatMaxNeedMoney':" + floatMaxNeedMoney + "," +
      "'floatMinNeedMoney':" + floatMinNeedMoney + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intJudge':" + intJudge + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intSort':" + intSort + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 702
   * GZKMsg_702_OrderAuction_Goods_List
   * 竞价 找货 列表
   * 数据库数据
   * @param dateDeparture 发货日期 可以不填 0
   * @param floatMaxNeedMoney 最高价格 可以不填 0
   * @param floatMinNeedMoney 最低价格 可以不填 0
   * @param intFromAreaID 出发地区 出发地区的id（必填） 0
   * @param intJudge 判断用户选项 该判断是用于判断（我发布的竞价）（0 找车中，1 找车历史） 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intSort 对时间或价格的排序（0：时间排序 1：价格排序） 对时间或价格的排序（0：时间排序 1：价格排序） 0
   * @param intToAreaID 目的地区 目的地区id（必填） 0
   * @param strPublisherSysID 发布人系统编号 可选输入，如果不为空白字符串则查询指定用户发布的单据
   * @returns {string}
   */
  doGetMsg_702(dateDeparture, floatMaxNeedMoney, floatMinNeedMoney, intFromAreaID, intJudge, intPageIndex, intSort, intToAreaID, strPublisherSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':702," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatMaxNeedMoney':" + floatMaxNeedMoney + "," +
      "'floatMinNeedMoney':" + floatMinNeedMoney + "," +
      "'intFromAreaID':" + intFromAreaID + "," +
      "'intJudge':" + intJudge + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intSort':" + intSort + "," +
      "'intToAreaID':" + intToAreaID + "," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 710
   * GZKMsg_710_OrderAuction_Publish_GoodsInfo
   * 提交竞价货物信息找车
   * 数据库数据
   * @param dateDeparture 发货日期 datetime 0
   * @param dateTimeout 竞价超时日期  0
   * @param floatCarLength  所需车型车长/车源车型车长
   * @param floatCarWeight  所需车型载重/车源车型载重
   * @param floatCube 货物体积  0.0
   * @param floatModels 所需车型  0.0
   * @param floatMoneyGoodsAssign 货源信息费  0
   * @param floatNeedMoney 费用  0.0
   * @param floatWeight 货物重量  0.0
   * @param intCarType  默认 1; 0: 未设置；1：冷藏车；2：高栏车； 999 ：其他
   * @param intFreightType 货物分类  0
   * @param intGreenChannel 是否走绿色通道  0
   * @param intInsuranceType 购买保险  0
   * @param intNumberDays 卖货三天  0
   * @param intOrderFromAreaID 发货地区编号 地区 0
   * @param intOrderToAreaID 收货地区编号 地区 0
   * @param intPackage 装车包装  0
   * @param strGoodsName 货物名称
   * @param strGoodsPhotoRsID1 货物图片资源编号1
   * @param strGoodsPhotoRsID2 货物图片资源编号2
   * @param strGoodsPhotoRsID3 货物图片资源编号3
   * @param strPublisherSysID 发布人系统编号
   * @param strRemark 备注信息
   * @returns {string}
   */
  doGetMsg_710(dateDeparture, dateTimeout, floatCarLength, floatCarWeight, floatCube, floatModels, floatMoneyGoodsAssign, floatNeedMoney, floatWeight, intCarType, intFreightType, intGreenChannel, intInsuranceType, intNumberDays, intOrderFromAreaID, intOrderToAreaID, intPackage, strGoodsName, strGoodsPhotoRsID1, strGoodsPhotoRsID2, strGoodsPhotoRsID3, strPublisherSysID, strRemark) {
    return "{'GZKMSG':[{" +
      "'intMsgID':710," +
      "'dateDeparture':" + dateDeparture + "," +
      "'dateTimeout':" + dateTimeout + "," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'floatCube':" + floatCube + "," +
      "'floatModels':" + floatModels + "," +
      "'floatMoneyGoodsAssign':" + floatMoneyGoodsAssign + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'floatWeight':" + floatWeight + "," +
      "'intCarType':" + intCarType + "," +
      "'intFreightType':" + intFreightType + "," +
      "'intGreenChannel':" + intGreenChannel + "," +
      "'intInsuranceType':" + intInsuranceType + "," +
      "'intNumberDays':" + intNumberDays + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'intPackage':" + intPackage + "," +
      "'strGoodsName':'" + strGoodsName + "'," +
      "'strGoodsPhotoRsID1':'" + strGoodsPhotoRsID1 + "'," +
      "'strGoodsPhotoRsID2':'" + strGoodsPhotoRsID2 + "'," +
      "'strGoodsPhotoRsID3':'" + strGoodsPhotoRsID3 + "'," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 712
   * GZKMsg_712_OrderAuction_Publish_CarInfo
   * 提交竞价车辆信息找货
   * 数据库数据
   * @param dateDeparture 发车日期 datetime 0
   * @param dateTimeout 竞价超时日期  0
   * @param floatAssignCarMoney 派车信息费  0.0
   * @param floatNeedMoney 费用  0.0
   * @param intOrderFromAreaID 发车地区编号 地区 0
   * @param intOrderToAreaID 到达地区编号 地区 0
   * @param strCarSysID 关联车辆编号
   * @param strPublisherSysID 发布人系统编号
   * @param strRemark 备注信息
   * @returns {string}
   */
  doGetMsg_712(dateDeparture, dateTimeout, floatAssignCarMoney, floatNeedMoney, intOrderFromAreaID, intOrderToAreaID, strCarSysID, strPublisherSysID, strRemark) {
    return "{'GZKMSG':[{" +
      "'intMsgID':712," +
      "'dateDeparture':" + dateDeparture + "," +
      "'dateTimeout':" + dateTimeout + "," +
      "'floatAssignCarMoney':" + floatAssignCarMoney + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strPublisherSysID':'" + strPublisherSysID + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 720
   * GZKMsg_720_OrderAuction_CarDetailInfo
   * 竞价 找车 车辆信息 详情
   * 数据库数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 查询人系统编号
   * @returns {string}
   */
  doGetMsg_720(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':720," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 722
   * GZKMsg_722_OrderAuction_GoodsDetailInfo
   * 竞价 找货 货物信息 详情
   * 数据库数据
   * @param strOrderSysID 单据系统编号
   * @param strUserSysID 查询人系统编号
   * @returns {string}
   */
  doGetMsg_722(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':722," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 730
   * GZKMsg_730_OrderAuction_Checkout_CarInfo
   * 竞价 货主 对 车主 物流公司 发布的竞价找货单 车辆信息 下单
   * 真实数据
   * @param dateCheckout 下单时间(730 :不用填写) 提交竞价信息的 730 消息中这个信息不用填写， 使用默认 0 值 0
   * @param dateCreditUpdate 个人信用评估日期(730 :不用填写)  0
   * @param dateDeparture 发货日期  0
   * @param dateTimeout 超时日期(730 :不用填写) dateTimeout 0
   * @param floatCube 货物重量  0.0
   * @param floatModels 所需车型  0.0
   * @param floatMoneyGoodsAssign 货源信息费  0
   * @param floatNeedMoney 费用  0.0
   * @param floatWeight 货物体积  0.0
   * @param inToffer 总共多少人报价(730 :不用填写)  0
   * @param intDocumentNumber 已完成单据数量(730 :不用填写)  0
   * @param intFreightType 货物分类  0
   * @param intGreenChannel 是否走绿色通道  0
   * @param intInsuranceType 购买保险  0
   * @param intNumberDays 卖货几天  0
   * @param intOrderStatus 单据状态(730 :不用填写)
   * @param intPackage 装车包装  0
   * @param intUserCreditLevel 用户个人信用得分(730 :不用填写) 0-100 分 0
   * @param intUserIDStatus 下单人认证状态(730 :不用填写) 提交竞价信息的 730 消息中这个信息不用填写， 使用默认 0 值 0
   * @param intUserStatusType 是否为会员(730 :不用填写)  0
   * @param pmOrderFromArea 发货地区
   * @param pmOrderToArea 收货地区
   * @param strCheckoutRemark 单据备注
   * @param strCheckoutSysID 报价单单号(730 :不用填写)
   * @param strGoodsName 货物名称
   * @param strGoodsPhotoURL1 发货货物图片地址1
   * @param strGoodsPhotoURL2 发货货物图片地址2
   * @param strGoodsPhotoURL3 发货货物图片地址3
   * @param strOrderSysID 单据系统编号
   * @param strUserAlias 下单人昵称(730 :不用填写) 提交竞价信息的 730 消息中这个信息不用填写， 使用默认 空白字符串 值
   * @param strUserCreditDesc 个人信用评价描述(730 :不用填写)
   * @param strUserIconURL 下单人头像(730 :不用填写) 提交竞价信息的 730 消息中这个信息不用填写， 使用默认 空白字符串 值
   * @param strUserSysID 下单人系统编号
   * @returns {string}
   */
  doGetMsg_730(dateCheckout, dateCreditUpdate, dateDeparture, dateTimeout, floatCube, floatModels, floatMoneyGoodsAssign, floatNeedMoney, floatWeight, inToffer, intDocumentNumber, intFreightType, intGreenChannel, intInsuranceType, intNumberDays, intOrderStatus, intPackage, intUserCreditLevel, intUserIDStatus, intUserStatusType, pmOrderFromArea, pmOrderToArea, strCheckoutRemark, strCheckoutSysID, strGoodsName, strGoodsPhotoURL1, strGoodsPhotoURL2, strGoodsPhotoURL3, strOrderSysID, strUserAlias, strUserCreditDesc, strUserIconURL, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':730," +
      "'dateCheckout':" + dateCheckout + "," +
      "'dateCreditUpdate':" + dateCreditUpdate + "," +
      "'dateDeparture':" + dateDeparture + "," +
      "'dateTimeout':" + dateTimeout + "," +
      "'floatCube':" + floatCube + "," +
      "'floatModels':" + floatModels + "," +
      "'floatMoneyGoodsAssign':" + floatMoneyGoodsAssign + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'floatWeight':" + floatWeight + "," +
      "'inToffer':" + inToffer + "," +
      "'intDocumentNumber':" + intDocumentNumber + "," +
      "'intFreightType':" + intFreightType + "," +
      "'intGreenChannel':" + intGreenChannel + "," +
      "'intInsuranceType':" + intInsuranceType + "," +
      "'intNumberDays':" + intNumberDays + "," +
      "'intOrderStatus':" + intOrderStatus + "," +
      "'intPackage':" + intPackage + "," +
      "'intUserCreditLevel':" + intUserCreditLevel + "," +
      "'intUserIDStatus':" + intUserIDStatus + "," +
      "'intUserStatusType':" + intUserStatusType + "," +
      "'pmOrderFromArea':" + pmOrderFromArea + "," +
      "'pmOrderToArea':" + pmOrderToArea + "," +
      "'strCheckoutRemark':'" + strCheckoutRemark + "'," +
      "'strCheckoutSysID':'" + strCheckoutSysID + "'," +
      "'strGoodsName':'" + strGoodsName + "'," +
      "'strGoodsPhotoURL1':'" + strGoodsPhotoURL1 + "'," +
      "'strGoodsPhotoURL2':'" + strGoodsPhotoURL2 + "'," +
      "'strGoodsPhotoURL3':'" + strGoodsPhotoURL3 + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserAlias':'" + strUserAlias + "'," +
      "'strUserCreditDesc':'" + strUserCreditDesc + "'," +
      "'strUserIconURL':'" + strUserIconURL + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 732
   * GZKMsg_732_OrderAuction_Checkout_GoodsInfo
   * 竞价 车主 物流公司 对 货主发布的竞价找车单 货物信息 下单
   * 真实数据
   * @param dateCheckout 下单时间(732 :不用填写) 下单时间 0
   * @param dateCreditUpdate 个人信用评估日期(732 :不用填写)  0
   * @param dateDeparture 发车日期(732 :不用填写) dateDeparture 0
   * @param dateTimeout 超时日期(732 :不用填写) dateDeparture 0
   * @param floatAssignCarMoney 派车信息费  0.0
   * @param floatCarLength 车长(732 :不用填写)  0.0
   * @param floatCarWeight 载重(732 :不用填写)  0.0
   * @param floatGPSLat GPS Lat(732 :不用填写)  0.0
   * @param floatGPSLng GPS Lng(732 :不用填写)  0.0
   * @param floatNeedMoney 费用  0.0
   * @param inToffer 总共多少人报价(732 :不用填写)
   * @param intCarAuthStatus 认证状态(732 :不用填写)  0
   * @param intDocumentNumber 已完成单据数量(732 :不用填写)
   * @param intOrderStatus 单据状态(732 :不用填写)
   * @param intUserCreditLevel 用户个人信用得分(732 :不用填写) 0-100 分 0
   * @param intUserIDCardStatus 下单人认证状态(732 :不用填写) 下单人认证状态 0
   * @param intUserStatusType 是否为会员(732 :不用填写)  0
   * @param intUserType 用户身份（0表示该用户没有注册(732 :不用填写)） 用户身份（0表示该用户没有注册） 0
   * @param pmOrderFromArea 发货地区(732 :不用填写)
   * @param pmOrderToArea 收货地区(732 :不用填写)
   * @param strCarPlateNumber 车牌号码(732 :不用填写)
   * @param strCarSysID 车辆编号
   * @param strCheckoutRemark 备注
   * @param strCheckoutSysID 报价单单号(732 :不用填写)
   * @param strCompanyName 公司名称 公司名称
   * @param strOrderSysID 单据系统编号
   * @param strUserAlias 下单人昵称(732 :不用填写) 下单人昵称
   * @param strUserCreditDesc 个人信用评价描述(732 :不用填写)
   * @param strUserIconURL 下单人头像(732 :不用填写) 下单人头像
   * @param strUserSysID 下单人系统编号
   * @returns {string}
   */
  doGetMsg_732(dateCheckout, dateCreditUpdate, dateDeparture, dateTimeout, floatAssignCarMoney, floatCarLength, floatCarWeight, floatGPSLat, floatGPSLng, floatNeedMoney, inToffer, intCarAuthStatus, intDocumentNumber, intOrderStatus, intUserCreditLevel, intUserIDCardStatus, intUserStatusType, intUserType, pmOrderFromArea, pmOrderToArea, strCarPlateNumber, strCarSysID, strCheckoutRemark, strCheckoutSysID, strCompanyName, strOrderSysID, strUserAlias, strUserCreditDesc, strUserIconURL, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':732," +
      "'dateCheckout':" + dateCheckout + "," +
      "'dateCreditUpdate':" + dateCreditUpdate + "," +
      "'dateDeparture':" + dateDeparture + "," +
      "'dateTimeout':" + dateTimeout + "," +
      "'floatAssignCarMoney':" + floatAssignCarMoney + "," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'inToffer':" + inToffer + "," +
      "'intCarAuthStatus':" + intCarAuthStatus + "," +
      "'intDocumentNumber':" + intDocumentNumber + "," +
      "'intOrderStatus':" + intOrderStatus + "," +
      "'intUserCreditLevel':" + intUserCreditLevel + "," +
      "'intUserIDCardStatus':" + intUserIDCardStatus + "," +
      "'intUserStatusType':" + intUserStatusType + "," +
      "'intUserType':" + intUserType + "," +
      "'pmOrderFromArea':" + pmOrderFromArea + "," +
      "'pmOrderToArea':" + pmOrderToArea + "," +
      "'strCarPlateNumber':'" + strCarPlateNumber + "'," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strCheckoutRemark':'" + strCheckoutRemark + "'," +
      "'strCheckoutSysID':'" + strCheckoutSysID + "'," +
      "'strCompanyName':'" + strCompanyName + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserAlias':'" + strUserAlias + "'," +
      "'strUserCreditDesc':'" + strUserCreditDesc + "'," +
      "'strUserIconURL':'" + strUserIconURL + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 740
   * GZKMsg_740_OrderAuction_Checkout_CarList
   * 竞价 查看我发出的找货（车辆信息）竞价单有那些报价
   * 真实数据
   * @param strOrderSysID 竞价单单据系统编号
   * @returns {string}
   */
  doGetMsg_740(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':740," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 742
   * GZKMsg_742_OrderAuction_Checkout_GoodsList
   * 竞价 查看我发出的找车（货物信息）竞价单有那些报价
   * 真实数据
   * @param strOrderSysID 竞价单单据系统编号
   * @returns {string}
   */
  doGetMsg_742(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':742," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 744
   * GZKMsg_744_OrderAuction_Checkout_CarDetail
   * 竞价 车主物流公司 查看 货主 报价详情
   * 真实数据
   * @param strCheckoutSysID 报价单系统编号
   * @param strOrderSysID 单系统编号
   * @returns {string}
   */
  doGetMsg_744(strCheckoutSysID, strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':744," +
      "'strCheckoutSysID':'" + strCheckoutSysID + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 746
   * GZKMsg_746_OrderAuction_Checkout_GoodsDetail
   * 竞价 货主 查看 车主物流公司 报价详情
   * 真实数据
   * @param strCheckoutSysID 报价单系统编号
   * @param strOrderSysID 竞价单系统编号
   * @returns {string}
   */
  doGetMsg_746(strCheckoutSysID, strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':746," +
      "'strCheckoutSysID':'" + strCheckoutSysID + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 750
   * GZKMsg_750_OrderAuction_Checkout_CarAgree
   * 竞价 车主物流公司 同意或拒绝 货主 提交的报价
   * 真实数据
   * @param intAgreeStatus 同意或拒绝 竞价单  0：拒绝； 1：同意 0
   * @param strCheckoutSysID 报价单系统编号
   * @returns {string}
   */
  doGetMsg_750(intAgreeStatus, strCheckoutSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':750," +
      "'intAgreeStatus':" + intAgreeStatus + "," +
      "'strCheckoutSysID':'" + strCheckoutSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 752
   * GZKMsg_752_OrderAuction_Checkout_GoodsAgree
   * 竞价 货主 同意或拒绝 车主物流公司 提交的报价
   * 真实数据
   * @param intAgreeStatus 同意或拒绝 竞价单  0：拒绝； 1：同意 0
   * @param strCheckoutSysID 报价单系统编号
   * @returns {string}
   */
  doGetMsg_752(intAgreeStatus, strCheckoutSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':752," +
      "'intAgreeStatus':" + intAgreeStatus + "," +
      "'strCheckoutSysID':'" + strCheckoutSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 800
   * GZKMsg_800_Bookmark
   * 收藏操作
   * 真实数据
   * @param intOperationType 操作类型（0添加   1删掉）
   * @param strBookmarkSysID 被收藏系统编号 车主，货主，物流公司，车辆 对应的系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_800(intOperationType, strBookmarkSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':800," +
      "'intOperationType':" + intOperationType + "," +
      "'strBookmarkSysID':'" + strBookmarkSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 802
   * GZKMsg_802_Bookmark_List
   * 我的收藏列表
   * 真实数据
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_802(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':802," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 850
   * GZKMsg_850_CheckMyMemberInfo
   * 查询我的会员信息以及购买信息
   * 真实数据
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_850(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':850," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 860
   * GZKMsg_860_UserPayQuery
   * 支付支出申请
   * 真实数据
   * @param floatGPSLat GPS Lat 记录用户支付时候所在的经纬度，第一版可以默认 0 0.0
   * @param floatGPSLng GPS Lng 记录用户支付时候所在的经纬度，第一版可以默认 0 0.0
   * @param floatMoneyPay 支付金额  0
   * @param intBuyMonth 购买会员时间长度 N 个月  0
   * @param intBuyNumber 购买名额数量(车队相关) 购买名额数量(车队相关) 0
   * @param intUsePayReason 用户支付原因选择 充值，订单押金支付，订单订金支付 0
   * @param intUsePayType 用户支付方式选择 账上现金，支付宝，微信，银行转账，信用支付 0
   * @param strAboutOrderSysID 支付关联单据系统编号 如果是对订单进行订金或押金的支付，字段填写对应单据的系统编号，如果是直接充值则字段为空白
   * @param strCarTeamSysID 用户需要加入的车队系统ID 用户需要加入的车队系统ID
   * @param strUserPayPasscode 用户支付密码 用户支付密码必须经过 MD5 编码后才能发送到后台，第一版中可以先忽略此功能，使用默认通用密码 111 支付， 第一版本，无需验证支付密码 111
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_860(floatGPSLat, floatGPSLng, floatMoneyPay, intBuyMonth, intBuyNumber, intUsePayReason, intUsePayType, strAboutOrderSysID, strCarTeamSysID, strUserPayPasscode, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':860," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'floatMoneyPay':" + floatMoneyPay + "," +
      "'intBuyMonth':" + intBuyMonth + "," +
      "'intBuyNumber':" + intBuyNumber + "," +
      "'intUsePayReason':" + intUsePayReason + "," +
      "'intUsePayType':" + intUsePayType + "," +
      "'strAboutOrderSysID':'" + strAboutOrderSysID + "'," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserPayPasscode':'" + strUserPayPasscode + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 862
   * GZKMsg_862_UserPayUpdate
   * 支付结果更新
   * 真实数据
   * @param floatMoneyPay 支付金额  0
   * @param intUserPayUpdateStatus 更新用户支付结果 支付宝，微信支付等调用， 支付成功，支付失败，用户取消支付等 0
   * @param strCarTeamSysID 用户需要加入的车队系统ID 用户需要加入的车队系统ID
   * @param strUserPayOrderSysID 支付单单据系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_862(floatMoneyPay, intUserPayUpdateStatus, strCarTeamSysID, strUserPayOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':862," +
      "'floatMoneyPay':" + floatMoneyPay + "," +
      "'intUserPayUpdateStatus':" + intUserPayUpdateStatus + "," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strUserPayOrderSysID':'" + strUserPayOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 866
   * GZKMsg_866_UserMoneyCheckoutCash
   * 提现申请
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param floatMoney 提现金额  0
   * @param intUsePayType 提现方式类型 2 支付宝支付 ;3 微信支付; 4 银行转账支付 4
   * @param strCheckoutAccount 提现帐号 如银行帐号，支付宝帐号
   * @param strCheckoutAccountName 提现帐号联系人 如银行卡账户姓名
   * @param strSMSCode SMS确认码 测试期间， SMS确认码可以使用真实确认码，也可以默认使用 1234 用作测试 1234
   * @param strUserPayPasscode 用户支付密码 用户支付密码必须经过 MD5 编码后才能发送到后台，第一版中可以先忽略此功能，使用默认通用密码 111 支付， 第一版本，无需验证支付密码 111
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_866(floatGPSLat, floatGPSLng, floatMoney, intUsePayType, strCheckoutAccount, strCheckoutAccountName, strSMSCode, strUserPayPasscode, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':866," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'floatMoney':" + floatMoney + "," +
      "'intUsePayType':" + intUsePayType + "," +
      "'strCheckoutAccount':'" + strCheckoutAccount + "'," +
      "'strCheckoutAccountName':'" + strCheckoutAccountName + "'," +
      "'strSMSCode':'" + strSMSCode + "'," +
      "'strUserPayPasscode':'" + strUserPayPasscode + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 870
   * GZKMsg_870_TransferOrder_MoneyComp_Query
   * 查询订单金额计算结果
   * 真实数据
   * @param floatMoneyCarAssign 车源信息费  0
   * @param floatMoneyGoodsAssign 货源信息费  0
   * @param floatMoneyInsurance 保险  0
   * @param floatMoneyShip 运费  0
   * @param intCarrierDriver 司机是否承运方 0 司机不是承运, 1 司机是承运 0
   * @param intInsuranceBuyUser 保险购买人 0 不购买, 1 发货方, 2 承运方, 3 司机 0
   * @param intPayType 支付方式 1 线上支付,2 线下支付 1
   * @returns {string}
   */
  doGetMsg_870(floatMoneyCarAssign, floatMoneyGoodsAssign, floatMoneyInsurance, floatMoneyShip, intCarrierDriver, intInsuranceBuyUser, intPayType) {
    return "{'GZKMSG':[{" +
      "'intMsgID':870," +
      "'floatMoneyCarAssign':" + floatMoneyCarAssign + "," +
      "'floatMoneyGoodsAssign':" + floatMoneyGoodsAssign + "," +
      "'floatMoneyInsurance':" + floatMoneyInsurance + "," +
      "'floatMoneyShip':" + floatMoneyShip + "," +
      "'intCarrierDriver':" + intCarrierDriver + "," +
      "'intInsuranceBuyUser':" + intInsuranceBuyUser + "," +
      "'intPayType':" + intPayType + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 872
   * GZKMsg_872_WXPayQuery
   * 查询微信支付信息
   * 真实数据
   * @param floatPayMoney 支付金额 支付金额 0.0
   * @param strPayDesc 支付描述 支付描述
   * @param strPayIPAddress  支付者设备 IP 地址  客服端不用提交
   * @param strPayOrderID 12位支付编号
   * @param strPayTitle 支付标题 支付标题
   * @returns {string}
   */
  doGetMsg_872(floatPayMoney, strPayDesc, strPayIPAddress, strPayOrderID, strPayTitle) {
    return "{'GZKMSG':[{" +
      "'intMsgID':872," +
      "'floatPayMoney':" + floatPayMoney + "," +
      "'strPayDesc':'" + strPayDesc + "'," +
      "'strPayIPAddress':'" + strPayIPAddress + "'," +
      "'strPayOrderID':'" + strPayOrderID + "'," +
      "'strPayTitle':'" + strPayTitle + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 874
   * GZKMsg_874_PrePay_Query
   * 支付前查询
   * 真实数据
   * @param floatPrePayMoney 预计需要支付金额 预计需要支付金额 0
   * @param intUsePayReason 支付原因 支付原因
   * @param strUserSysID 支付用户的系统编号 支付用户的系统编号
   * @returns {string}
   */
  doGetMsg_874(floatPrePayMoney, intUsePayReason, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':874," +
      "'floatPrePayMoney':" + floatPrePayMoney + "," +
      "'intUsePayReason':" + intUsePayReason + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 880
   * GZKMsg_880_UserMoneyQuery
   * 我的钱包信息
   * 真实数据
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_880(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':880," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 882
   * GZKMsg_882_UserMoneyList
   * 我的消费明细列表
   * 真实数据
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_882(intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':882," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 884
   * GZKMsg_884_UserCouponList
   * 我的优惠卷
   * 真实数据
   * @param intPageIndex 分页索引 -1 代表全部 0
   * @param intQueryCouponType 优惠卷类型 -1：全部；0：未知；1：保险 -1
   * @param intQueryUserCouponStatus 优惠卷状态 -1：全部；0：可用；1：已使用；2：已过期；3：优惠券作废； -1
   * @param strQueryUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_884(intPageIndex, intQueryCouponType, intQueryUserCouponStatus, strQueryUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':884," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryCouponType':" + intQueryCouponType + "," +
      "'intQueryUserCouponStatus':" + intQueryUserCouponStatus + "," +
      "'strQueryUserSysID':'" + strQueryUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 900
   * GZKMsg_900_OrderTransport_DetailInfo
   * 物流订单详情
   * 真实数据
   * @param strOrderSysID 要查询的货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_900(strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':900," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 902
   * GZKMsg_902_OrderTransport_GoodsInfo
   * 物流订单-货物详情
   * 真实数据
   * @param strOrderSysID 要查询的货运订单系统编号
   * @returns {string}
   */
  doGetMsg_902(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':902," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 904
   * GZKMsg_904_OrderTransport_RouteInfo
   * 物流订单-线路详情
   * 真实数据
   * @param strOrderSysID 要查询的货运订单系统编号
   * @returns {string}
   */
  doGetMsg_904(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':904," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 906
   * GZKMsg_906_OrderTransport_MoneyInfo
   * 物流订单-财务详情
   * 真实数据
   * @param strOrderSysID 要查询的货运订单系统编号
   * @returns {string}
   */
  doGetMsg_906(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':906," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 910
   * GZKMsg_910_OrderTransport_CarInfoUpdate
   * 物流订单-指派或更换车辆
   * 真实数据
   * @param floatAssignCarMoney 派车信息费 派车信息费 没有更新 默认填 -1 0
   * @param strCarSysID 指派或更新车辆的系统编号
   * @param strOrderSysID 要修改的货运订单系统编号
   * @param strUserSysID 用户编号（改用户编号主要用来判断货主是否要换车 如果要求换车不为空）
   * @returns {string}
   */
  doGetMsg_910(floatAssignCarMoney, strCarSysID, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':910," +
      "'floatAssignCarMoney':" + floatAssignCarMoney + "," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 912
   * GZKMsg_912_OrderTransport_GoodsInfoUpdate
   * 物流订单-货物详情-修改数据
   * 真实数据
   * @param floatCube 货物体积 没有更新 默认填 -1 -1
   * @param floatModels 所需车型 没有更新 默认填 -1 -1
   * @param floatWeight 货物重量 没有更新 默认填 -1 -1
   * @param intFreightType 货物分类 没有更新 默认填 1 0
   * @param intGreenChannel 是否走绿色通道 是否走绿色通道 0
   * @param intNumberDays 是否走绿色通道 是否走绿色通道 0
   * @param intPackage 装车包装 没有更新 默认填 -1 0
   * @param strGoodsName 货物名称 没有更新 默认填 @NA@ @NA@
   * @param strGoodsPhotoRsID1 货物图片资源编号1 货物图片资源编号1 @NA@
   * @param strGoodsPhotoRsID2 货物图片资源编号2 货物图片资源编号2 @NA@
   * @param strGoodsPhotoRsID3 货物图片资源编号3 货物图片资源编号3 @NA@
   * @param strOrderSysID 货运订单系统编号
   * @param strPacketDesc 货物包装信息 没有更新 默认填 @NA@ @NA@
   * @param strShipperOrderRemark 发货方单据备注 没有更新 默认填 @NA@ @NA@
   * @returns {string}
   */
  doGetMsg_912(floatCube, floatModels, floatWeight, intFreightType, intGreenChannel, intNumberDays, intPackage, strGoodsName, strGoodsPhotoRsID1, strGoodsPhotoRsID2, strGoodsPhotoRsID3, strOrderSysID, strPacketDesc, strShipperOrderRemark) {
    return "{'GZKMSG':[{" +
      "'intMsgID':912," +
      "'floatCube':" + floatCube + "," +
      "'floatModels':" + floatModels + "," +
      "'floatWeight':" + floatWeight + "," +
      "'intFreightType':" + intFreightType + "," +
      "'intGreenChannel':" + intGreenChannel + "," +
      "'intNumberDays':" + intNumberDays + "," +
      "'intPackage':" + intPackage + "," +
      "'strGoodsName':'" + strGoodsName + "'," +
      "'strGoodsPhotoRsID1':'" + strGoodsPhotoRsID1 + "'," +
      "'strGoodsPhotoRsID2':'" + strGoodsPhotoRsID2 + "'," +
      "'strGoodsPhotoRsID3':'" + strGoodsPhotoRsID3 + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strPacketDesc':'" + strPacketDesc + "'," +
      "'strShipperOrderRemark':'" + strShipperOrderRemark + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 914
   * GZKMsg_914_OrderTransport_RouteInfoUpdate
   * 物流订单-线路详情-修改数据
   * 真实数据
   * @param dateDeparture 发车日期+时间 没有更新 默认填 0 0
   * @param intNeedQRConfirm 是否需要交接（0 无需确认交接  1 需要确认交接） 没有更新默认-1 是否需要交接（0 无需确认交接  1 需要确认交接） 没有更新默认-1 0
   * @param intOrderFromAreaID 发货地区编号 没有更新 默认填 -1 -1
   * @param intOrderToAreaID 收货地区编号 没有更新 默认填 -1 -1
   * @param strFromAreaDetail 发货详细地址 没有更新 默认填 @NA@ @NA@
   * @param strOrderSysID 要查询的货运订单系统编号
   * @param strReceiverName 收货人姓名 没有更新 默认填 @NA@ @NA@
   * @param strReceiverPhoneNumber 收货人电话 没有更新 默认填 @NA@ @NA@
   * @param strSenderName 发货人姓名 没有更新 默认填 @NA@ @NA@
   * @param strSenderPhoneNumber 发货人电话 没有更新 默认填 @NA@ @NA@
   * @param strToAreaDetail 收货详细地址 没有更新 默认填 @NA@ @NA@
   * @returns {string}
   */
  doGetMsg_914(dateDeparture, intNeedQRConfirm, intOrderFromAreaID, intOrderToAreaID, strFromAreaDetail, strOrderSysID, strReceiverName, strReceiverPhoneNumber, strSenderName, strSenderPhoneNumber, strToAreaDetail) {
    return "{'GZKMSG':[{" +
      "'intMsgID':914," +
      "'dateDeparture':" + dateDeparture + "," +
      "'intNeedQRConfirm':" + intNeedQRConfirm + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'strFromAreaDetail':'" + strFromAreaDetail + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strReceiverName':'" + strReceiverName + "'," +
      "'strReceiverPhoneNumber':'" + strReceiverPhoneNumber + "'," +
      "'strSenderName':'" + strSenderName + "'," +
      "'strSenderPhoneNumber':'" + strSenderPhoneNumber + "'," +
      "'strToAreaDetail':'" + strToAreaDetail + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 916
   * GZKMsg_916_OrderTransport_MoneyInfoUpdate
   * 物流订单-财务详情-修改数据
   * 真实数据
   * @param floatAssignCarMoney 派车信息费 派车信息费 没有更新 默认填 -1 0
   * @param floatAssignGoodsMoney 货源信息费  0
   * @param floatMoneyDeposit 承运方支付的押金 承运方支付的押金 没有更新 默认填 -1 0
   * @param floatMoneyFull 运费全额 运费全额 没有更新 默认填 -1 0
   * @param floatMoneyPrepaid 预付订金 预付订金 没有更新 默认填 -1 0
   * @param intInsuranceType 购买保险  0
   * @param intPaymentMethod 结算方式 没有更新 默认填 -1   结算方式 没有更新 默认填 -1 0
   * @param strInsuranceBuyUserSysID  购买保险的用户的系统编号
   * @param strOrderSysID 要查询的货运订单系统编号
   * @returns {string}
   */
  doGetMsg_916(floatAssignCarMoney, floatAssignGoodsMoney, floatMoneyDeposit, floatMoneyFull, floatMoneyPrepaid, intInsuranceType, intPaymentMethod, strInsuranceBuyUserSysID, strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':916," +
      "'floatAssignCarMoney':" + floatAssignCarMoney + "," +
      "'floatAssignGoodsMoney':" + floatAssignGoodsMoney + "," +
      "'floatMoneyDeposit':" + floatMoneyDeposit + "," +
      "'floatMoneyFull':" + floatMoneyFull + "," +
      "'floatMoneyPrepaid':" + floatMoneyPrepaid + "," +
      "'intInsuranceType':" + intInsuranceType + "," +
      "'intPaymentMethod':" + intPaymentMethod + "," +
      "'strInsuranceBuyUserSysID':'" + strInsuranceBuyUserSysID + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 920
   * GZKMsg_920_OrderTransport_OrderList
   * 物流订单-查询与我相关的所有列表
   * 真实数据
   * @param intJudge 0进行中货运订单  1：已完成的货运订单 0进行中货运订单  1：已完成的货运订单 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统编号 输入用户系统编号查询所有与我有关的货运订单
   * @returns {string}
   */
  doGetMsg_920(intJudge, intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':920," +
      "'intJudge':" + intJudge + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 924
   * GZKMsg_924_OrderTransport_QRCodeInfo
   * 物流订单-查询订单相关的物流二维码
   * 真实数据
   * @param strOrderSysID 要查询的货运订单系统编号
   * @returns {string}
   */
  doGetMsg_924(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':924," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 926
   * GZKMsg_926_OrderTransport_EventRecord
   * 物流订单-查询订单相关事件
   * 真实数据
   * @param strOrderSysID 要查询的货运订单系统编号
   * @returns {string}
   */
  doGetMsg_926(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':926," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 930
   * GZKMsg_930_OrderTransport_UserAgree
   * 物流订单-用户同意并确认单据
   * 真实数据
   * @param intDetermineType 判断同意还是拒绝（0 同意 1拒绝） 判断同意还是拒绝（0 同意 1拒绝） 0
   * @param intTransportOrderUserType 操作者在订单中的身份  0：发货方； 1：承运方；2：司机 0
   * @param strOrderSysID 要同意的货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_930(intDetermineType, intTransportOrderUserType, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':930," +
      "'intDetermineType':" + intDetermineType + "," +
      "'intTransportOrderUserType':" + intTransportOrderUserType + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 932
   * GZKMsg_932_OrderTransport_DriverStartArea
   * 物流订单-司机到达发货点
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strOrderSysID 要同意的货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_932(floatGPSLat, floatGPSLng, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':932," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 934
   * GZKMsg_934_OrderTransport_DriverScanQRCode
   * 物流订单-司机扫描货运二维码
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strOrderSysID 要同意的货运订单系统编号
   * @param strScanQRCode 扫描得到的二维码里面包含的字符串
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_934(floatGPSLat, floatGPSLng, strOrderSysID, strScanQRCode, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':934," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strScanQRCode':'" + strScanQRCode + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 936
   * GZKMsg_936_OrderTransport_StartShip
   * 物流订单-开始运货
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strOrderSysID 货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_936(floatGPSLat, floatGPSLng, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':936," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 938
   * GZKMsg_938_OrderTransport_TransportEvent
   * 物流订单-改变货运车辆动态
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param intCarDrivingStatus 车辆动态事件编号  0
   * @param intIsDriverEndArea 是否到达收货地点 0:没到达; 1: 已经到达 0
   * @param strOrderSysID 货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_938(floatGPSLat, floatGPSLng, intCarDrivingStatus, intIsDriverEndArea, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':938," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intCarDrivingStatus':" + intCarDrivingStatus + "," +
      "'intIsDriverEndArea':" + intIsDriverEndArea + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 940
   * GZKMsg_940_OrderTransport_TransportEnd
   * 物流订单-卸货完成
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strOrderSysID 货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_940(floatGPSLat, floatGPSLng, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':940," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 942
   * GZKMsg_942_OrderTransport_EndPay
   * 物流订单-货主已经支付运费尾款
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strOrderSysID 货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_942(floatGPSLat, floatGPSLng, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':942," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 944
   * GZKMsg_944_OrderTransport_EndPayAgreen
   * 物流订单-承运方确认已经收到尾款
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strOrderSysID 货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_944(floatGPSLat, floatGPSLng, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':944," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 946
   * GZKMsg_946_OrderTransport_GiveUp
   * 物流订单-终止订单
   * 真实数据
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @param strGiveupRemark 作废原因
   * @param strOrderSysID 货运订单系统编号
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_946(floatGPSLat, floatGPSLng, strGiveupRemark, strOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':946," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'strGiveupRemark':'" + strGiveupRemark + "'," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 948
   * GZKMsg_948_CreditInfo
   *  个人信息主页（信用）
   * 真实数据（新增加）
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_948(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':948," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 950
   * GZKMsg_950_OrderCheckoutHistory
   * 我的报价
   * 真实数据（新增加）
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryListTypes 历史单据类型(0:找货历史 1找货历史 2:找车中 3找车历史 )
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_950(intPageIndex, intQueryListTypes, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':950," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryListTypes':" + intQueryListTypes + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 952
   * GZKMsg_952_BlacklistInfo
   * 黑名单查询列表
   * 真实数据（新增加）
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intUserType 选择切换用户类型查询黑名单 查询：切换用户类型(1:货主 2:车主 3:物流公司) 0
   * @param strUserSysID 举报人用户编号 举报人用户编号
   * @returns {string}
   */
  doGetMsg_952(intPageIndex, intUserType, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':952," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intUserType':" + intUserType + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 954
   * GZKMsg_954_RideCar_Info
   * 找车资源
   * 真实数据（新增加）
   * @param floatGPSLat GPSLat  0.0
   * @param floatGPSLng GPSLng  0.0
   * @returns {string}
   */
  doGetMsg_954(floatGPSLat, floatGPSLng) {
    return "{'GZKMSG':[{" +
      "'intMsgID':954," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 956
   * GZKMsg_956_RideGoos_Info
   * 找货资源
   * 真实数据（新增加）
   * @param floatGPSLat GPS Lat  0.0
   * @param floatGPSLng GPS Lng  0.0
   * @returns {string}
   */
  doGetMsg_956(floatGPSLat, floatGPSLng) {
    return "{'GZKMSG':[{" +
      "'intMsgID':956," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 962
   * GZKMsg_962_Report_Info
   * 我的举报
   * 真实数据（新增加）
   * @param strUserAlias 被添加黑名单的用户姓名
   * @param strUserIDCardNumber 被添加黑名单的用户身份证
   * @param strUserPhoneNumber 被添加黑名单的用户电话
   * @param strUserRemark 黑名单备注
   * @param strUserSysID 举报人用户编号 举报人用户编号
   * @returns {string}
   */
  doGetMsg_962(strUserAlias, strUserIDCardNumber, strUserPhoneNumber, strUserRemark, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':962," +
      "'strUserAlias':'" + strUserAlias + "'," +
      "'strUserIDCardNumber':'" + strUserIDCardNumber + "'," +
      "'strUserPhoneNumber':'" + strUserPhoneNumber + "'," +
      "'strUserRemark':'" + strUserRemark + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 964
   * GZKMsg_964_DeleteCar_Info
   * 删掉车辆
   * 真实数据（新增加）
   * @param strCarSysID 车辆系统编号
   * @param strCompanySysID 公司系统编号
   * @returns {string}
   */
  doGetMsg_964(strCarSysID, strCompanySysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':964," +
      "'strCarSysID':'" + strCarSysID + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 966
   * GZKMsg_966_PlatformCar_Info
   * 平台车源
   * 真实数据（新增加）
   * @param floatGPSLat GPSLat  0.0
   * @param floatGPSLng GPSLng  0.0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strCarPlateNumber 车牌号（作用于车信息查询） 车牌号（作用于车信息查询）
   * @param strCompanySysID 输入自己的公司ID：查询所有不属于自己公司的车源信息 输入自己的公司ID：查询所有不属于自己公司的车源信息
   * @param strPhoneNumber 手机号码（作用于车信息查询） 手机号码（作用于车信息查询）
   * @returns {string}
   */
  doGetMsg_966(floatGPSLat, floatGPSLng, intPageIndex, strCarPlateNumber, strCompanySysID, strPhoneNumber) {
    return "{'GZKMSG':[{" +
      "'intMsgID':966," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strCarPlateNumber':'" + strCarPlateNumber + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 968
   * GZKMsg_968_Popularize_Info
   * 申请推广
   * 真实数据（新增加）
   * @param strOrderSysID 单据系统编号
   * @param strPopularizeRemark 申请推广的原因
   * @param strUserSysID 申请推广用户系统编号
   * @returns {string}
   */
  doGetMsg_968(strOrderSysID, strPopularizeRemark, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':968," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'strPopularizeRemark':'" + strPopularizeRemark + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 970
   * GZKMsg_970_DriverJudge_Info
   * 判断信息部是否对司机添加过
   * 真实数据（新增加）
   * @param strCarTeamSysID 车队邀约系统编号
   * @param strCompanySysID 公司邀约系统编号
   * @param strDriverPhoneNumber 被邀约司机的电话号码
   * @param strFromUserSysID 发起邀约人系统编号 发起邀约人系统编号,车队管理员系统编号
   * @param strRelativesCarTeamName 邀请车队名称（不用传）
   * @param strRelativesName 邀请车队管理员名称（不用传）
   * @param strToUserSysID 被邀约者系统编号（不用传）
   * @returns {string}
   */
  doGetMsg_970(strCarTeamSysID, strCompanySysID, strDriverPhoneNumber, strFromUserSysID, strRelativesCarTeamName, strRelativesName, strToUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':970," +
      "'strCarTeamSysID':'" + strCarTeamSysID + "'," +
      "'strCompanySysID':'" + strCompanySysID + "'," +
      "'strDriverPhoneNumber':'" + strDriverPhoneNumber + "'," +
      "'strFromUserSysID':'" + strFromUserSysID + "'," +
      "'strRelativesCarTeamName':'" + strRelativesCarTeamName + "'," +
      "'strRelativesName':'" + strRelativesName + "'," +
      "'strToUserSysID':'" + strToUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 972
   * GZKMsg_972_DirectlyOrder
   * 直接下单
   * 真实数据（新增加）
   * @param dateDeparture 发货日期 datetime 0
   * @param floatCarLength  所需车型车长/车源车型车长
   * @param floatCarWeight  所需车型载重/车源车型载重
   * @param floatCube 货物体积  0.0
   * @param floatMoneyGoodsAssign 货源信息费  0
   * @param floatNeedMoney 费用  0.0
   * @param floatWeight 货物重量  0.0
   * @param intCarType  默认 1; 0: 未设置；1：冷藏车；2：高栏车； 999 ：其他
   * @param intFreightType 货物分类  0
   * @param intGreenChannel 是否走绿色通道(0否 1 是) 是否走绿色通道(0否 1 是) 0
   * @param intInsuranceType 购买保险 购买保险 0
   * @param intNumberDays 卖货几天 卖货三天 0
   * @param intOrderFromAreaID 发货地区编号 地区 0
   * @param intOrderToAreaID 收货地区编号 地区 0
   * @param intPackage 装车包装  0
   * @param intUserType 下单人用户身份（1:发货方 2 承运方） 下单人用户身份（1:发货方 2 承运方）
   * @param strByUserSysID 被下单用户系统编号 被下单用户系统编号
   * @param strGoodsName 货物名称
   * @param strGoodsPhotoRsID1 货物图片资源编号1
   * @param strGoodsPhotoRsID2 货物图片资源编号2
   * @param strGoodsPhotoRsID3 货物图片资源编号3
   * @param strRemark 备注信息
   * @param strUserSysID 下单人用户系统编号 下单人用户系统编号
   * @returns {string}
   */
  doGetMsg_972(dateDeparture, floatCarLength, floatCarWeight, floatCube, floatMoneyGoodsAssign, floatNeedMoney, floatWeight, intCarType, intFreightType, intGreenChannel, intInsuranceType, intNumberDays, intOrderFromAreaID, intOrderToAreaID, intPackage, intUserType, strByUserSysID, strGoodsName, strGoodsPhotoRsID1, strGoodsPhotoRsID2, strGoodsPhotoRsID3, strRemark, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':972," +
      "'dateDeparture':" + dateDeparture + "," +
      "'floatCarLength':" + floatCarLength + "," +
      "'floatCarWeight':" + floatCarWeight + "," +
      "'floatCube':" + floatCube + "," +
      "'floatMoneyGoodsAssign':" + floatMoneyGoodsAssign + "," +
      "'floatNeedMoney':" + floatNeedMoney + "," +
      "'floatWeight':" + floatWeight + "," +
      "'intCarType':" + intCarType + "," +
      "'intFreightType':" + intFreightType + "," +
      "'intGreenChannel':" + intGreenChannel + "," +
      "'intInsuranceType':" + intInsuranceType + "," +
      "'intNumberDays':" + intNumberDays + "," +
      "'intOrderFromAreaID':" + intOrderFromAreaID + "," +
      "'intOrderToAreaID':" + intOrderToAreaID + "," +
      "'intPackage':" + intPackage + "," +
      "'intUserType':" + intUserType + "," +
      "'strByUserSysID':'" + strByUserSysID + "'," +
      "'strGoodsName':'" + strGoodsName + "'," +
      "'strGoodsPhotoRsID1':'" + strGoodsPhotoRsID1 + "'," +
      "'strGoodsPhotoRsID2':'" + strGoodsPhotoRsID2 + "'," +
      "'strGoodsPhotoRsID3':'" + strGoodsPhotoRsID3 + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 974
   * GZKMsg_974_OrderFlashHistory
   * 抢单历史记录
   * 真实数据（新增加）
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param intQueryListTypes 历史单据类型(0:找货中 1:找货历史 2:找车历史
   * @param strUserSysID 用户系统编号 用户系统编号
   * @returns {string}
   */
  doGetMsg_974(intPageIndex, intQueryListTypes, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':974," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryListTypes':" + intQueryListTypes + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 976
   * GZKMsg_976_SystemInformation_Info
   * 系统信息
   * 真实数据（新增加）
   * @param intCityID 地区id
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_976(intCityID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':976," +
      "'intCityID':" + intCityID + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 978
   * GZKMsg_978_SystemContent_Info
   * 系统消息记录
   * 真实数据（新增加）
   * @param intCityID 地区id  0
   * @param intMessageType 点击进入的类型（0:系统消息  1:广告消息 2:抢单消息 3:竞价消息  4:订单消息） 0 0
   * @param intPageIndex 分页索引 0 代表下拉刷新， 非0 代表翻页 ：当前列表数组大小 + 一页最大数量 = 翻页索引，暂定 一页最大数量是 10 0
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_978(intCityID, intMessageType, intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':978," +
      "'intCityID':" + intCityID + "," +
      "'intMessageType':" + intMessageType + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 980
   * GZKMsg_980_TransportEvent_Info
   * 物流订单-货运车辆动态
   * 真实数据（新增加）
   * @param strOrderSysID 货运单单据系统编号
   * @returns {string}
   */
  doGetMsg_980(strOrderSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':980," +
      "'strOrderSysID':'" + strOrderSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2106
   * GZKMsg_2106_GetPolicyDetailInfo
   * 保单详情
   * 测试数据
   * @param channelOrderNo 渠道订单号 渠道订单号
   * @param strUserSysID 用户系统编号 用户系统编号
   * @returns {string}
   */
  doGetMsg_2106(channelOrderNo, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2106," +
      "'channelOrderNo':'" + channelOrderNo + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2112
   * GZKMsg_2112_GetClaimsDetailInfo
   * 理赔详情
   * 测试数据
   * @param policyNo 保单号 保单号
   * @param strUserSysID 操作用户系统编号 操作用户系统编号
   * @returns {string}
   */
  doGetMsg_2112(policyNo, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2112," +
      "'policyNo':'" + policyNo + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2116
   * GZKMsg_2116_GetPolicyList
   * 保单列表
   * 测试数据
   * @param intPageIndex 分页索引  0
   * @param intQueryType 查询类型：0：全部；1：进行中；2：历史；3：理赔；4：草稿；5：待付款 查询类型：0：全部；1：进行中；2：历史；3：理赔；4：草稿；5：待付款 0
   * @param strPhoneNumber 电话号码 电话号码
   * @param strSearchContent 模糊查询字段 模糊查询字段
   * @param strUserSysID 操作用户系统编号 操作用户系统编号
   * @returns {string}
   */
  doGetMsg_2116(intPageIndex, intQueryType, strPhoneNumber, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2116," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryType':" + intQueryType + "," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2136
   * GZKMsg_2136_UserWXSharePreview
   * 加急用户微信分享预览
   * 测试中（新增加）
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_2136(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2136," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2200
   * GZKMsg_2200_ApplyAgentUrgent
   * 申请人工加急
   * 测试中（新增加）
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_2200(strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2200," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2202
   * GZKMsg_2202_GetAgentUrgentList
   * 获取人工加急列表
   * 测试中（新增加）
   * @param intPageIndex 分页索引  0
   * @param intQueryType 查询类型：0：全部；1：处理中；2：待付款；3：已完成；4：已取消；5：未匹配； 查询类型：0：全部；1：处理中；2：待付款；3：已完成；4：已取消；5：未匹配； 0
   * @param strSearchContent 模糊查询字段 模糊查询字段
   * @param strUserSysID 操作用户系统编号 操作用户系统编号
   * @returns {string}
   */
  doGetMsg_2202(intPageIndex, intQueryType, strSearchContent, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2202," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryType':" + intQueryType + "," +
      "'strSearchContent':'" + strSearchContent + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2204
   * GZKMsg_2204_GetAgentUrgentDetail
   * 人工加急详情
   * 测试中（新增加）
   * @param strLineSysID 加急线路系统编号 加急线路系统编号
   * @param strUserSysID 人工加急用户系统编号 人工加急用户系统编号
   * @returns {string}
   */
  doGetMsg_2204(strLineSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2204," +
      "'strLineSysID':'" + strLineSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2206
   * GZKMsg_2206_StopAgentUrgent
   * 终止人工加急
   * 测试中（新增加）
   * @param intUrgentStopFrom  终止来源 0：APP；1：客服； 0
   * @param strLineSysID 加急线路系统编号 加急线路系统编号
   * @returns {string}
   */
  doGetMsg_2206(intUrgentStopFrom, strLineSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2206," +
      "'intUrgentStopFrom':" + intUrgentStopFrom + "," +
      "'strLineSysID':'" + strLineSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2208
   * GZKMsg_2208_AgentUrgentPay
   * 人工加急支付
   * 测试中（新增加）
   * @param strGetCouponSysID 领取优惠券系统编号 领取优惠券系统编号
   * @param strLineSysID 加急系统编号 加急系统编号
   * @param strMatchIDList 匹配资源编号组合 车主同意匹配系统编号ID1;车主同意匹配系统编号ID2;
   * @param strUserPayOrderSysID 付款单号 付款单号
   * @param strUserSysID 用户系统编号 用户系统编号
   * @returns {string}
   */
  doGetMsg_2208(strGetCouponSysID, strLineSysID, strMatchIDList, strUserPayOrderSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2208," +
      "'strGetCouponSysID':'" + strGetCouponSysID + "'," +
      "'strLineSysID':'" + strLineSysID + "'," +
      "'strMatchIDList':'" + strMatchIDList + "'," +
      "'strUserPayOrderSysID':'" + strUserPayOrderSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2300
   * GZKMsg_2300_SaveDriverCarMonitoInfo
   * 保存车主车辆监控信息
   * 测试中（新增加）
   * @param intMonitorDelayHours 监控延时警报时限 如 2 表示连续两小时没更新 0
   * @param intMonitorLimitHours 监控有效时长 如 10 表示将在创建时间开始 10 小时内 0
   * @param strMonitorPhone 被监控电话
   * @param strMonitorRemark 监控记录备注
   * @param strUserSysID 用户系统编号
   * @returns {string}
   */
  doGetMsg_2300(intMonitorDelayHours, intMonitorLimitHours, strMonitorPhone, strMonitorRemark, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2300," +
      "'intMonitorDelayHours':" + intMonitorDelayHours + "," +
      "'intMonitorLimitHours':" + intMonitorLimitHours + "," +
      "'strMonitorPhone':'" + strMonitorPhone + "'," +
      "'strMonitorRemark':'" + strMonitorRemark + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2302
   * GZKMsg_2302_GetDriverCarMonitoList
   * 获取车主车辆监控列表
   * 测试中（新增加）
   * @param intPageIndex 分页索引  0
   * @param intQueryStatus 查询类型 0：全部；1：监控中；2：警报；3：已结束 0
   * @param strQueryKey 查询关键字 如电话，备注信息
   * @param strUserSysID 查询用户的系统编号
   * @returns {string}
   */
  doGetMsg_2302(intPageIndex, intQueryStatus, strQueryKey, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2302," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryStatus':" + intQueryStatus + "," +
      "'strQueryKey':'" + strQueryKey + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2304
   * GZKMsg_2304_GetDriverCarMonitoDetail
   * 获取车主车辆监控详情
   * 测试中（新增加）
   * @param strMonitorSysID 监控记录系统编号
   * @param strUserSysID 读取监控记录的用户系统编号
   * @returns {string}
   */
  doGetMsg_2304(strMonitorSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2304," +
      "'strMonitorSysID':'" + strMonitorSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2306
   * GZKMsg_2306_CancelDriverCarMonito
   * 取消车主车辆监控设置
   * 测试中（新增加）
   * @param strMonitorSysID 监控记录系统编号
   * @param strUserSysID 读取监控记录的用户系统编号
   * @returns {string}
   */
  doGetMsg_2306(strMonitorSysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2306," +
      "'strMonitorSysID':'" + strMonitorSysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2308
   * GZKMsg_2308_SendSMSDriverCarMonitoPhone
   * 发送短信通知被监控司机登录
   * 测试中（新增加）
   * @param intSMSType 发送的类型 1：发送给被监控电话，请登录；2：发送给被监控电话，请注册；10：发送给监控人，通知位置报警
   * @param strMonitorSysID 监控记录系统编号
   * @returns {string}
   */
  doGetMsg_2308(intSMSType, strMonitorSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2308," +
      "'intSMSType':" + intSMSType + "," +
      "'strMonitorSysID':'" + strMonitorSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2320
   * GZKMsg_2320_GetContactBookList
   * 获取通讯录列表
   * 测试中（新增加）
   * @param intPageIndex 分页索引  0
   * @param intQueryStatus 查询类型 0：全部；1：货主；2：车主；3：公司 0
   * @param strQueryKey 查询关键字 如姓名，电话等
   * @param strUserSysID 用户的系统编号
   * @returns {string}
   */
  doGetMsg_2320(intPageIndex, intQueryStatus, strQueryKey, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2320," +
      "'intPageIndex':" + intPageIndex + "," +
      "'intQueryStatus':" + intQueryStatus + "," +
      "'strQueryKey':'" + strQueryKey + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2322
   * GZKMsg_2322_GetContactBookDetail
   * 获取通讯录详情
   * 测试中（新增加）
   * @param strContactSysID 通讯录记录系统编号 通讯录记录系统编号
   * @returns {string}
   */
  doGetMsg_2322(strContactSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2322," +
      "'strContactSysID':'" + strContactSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2324
   * GZKMsg_2324_SaveContactBook
   * 保存通讯录信息
   * 测试中（新增加）
   * @param intContactType 联系人身份 0：未知；1：货主；2：车主；3：公司 0
   * @param strCarCardARS 车辆行驶证正页RS 车辆行驶证正页RS
   * @param strCarCardBRS 车辆行驶证副页RS 车辆行驶证副页RS
   * @param strCarCardNumber 车牌号 车牌号
   * @param strCompanyName 公司名称 公司名称
   * @param strCompanyNumber 营业执照号码 营业执照号码
   * @param strContactSysID 通讯录记录系统编号
   * @param strDriverCardARS 驾驶证正业RS 驾驶证正业RS
   * @param strDriverCardBRS 驾驶证副页RS 驾驶证副页RS
   * @param strDriverCardNumber 驾驶证号码 驾驶证号码
   * @param strDriverLicenseRS 司机从业资格证RS 司机从业资格证RS
   * @param strIDCardARS 身份证正面RS 身份证正面RS
   * @param strIDCardBRS 身份证背面RS 身份证背面RS
   * @param strIDCardNumber 身份证号 身份证号
   * @param strName 姓名 姓名
   * @param strOtherRS 其他照片RS 其他照片RS
   * @param strPhoneNumber 手机 手机
   * @param strRemark 备注 备注
   * @param strTrailerCardARS 挂车行驶证正页RS 挂车行驶证正页RS
   * @param strTrailerCardBRS 挂车行驶证副页RS 挂车行驶证副页RS
   * @param strTrailerCardNumber 挂车车牌号 挂车车牌号
   * @param strUserSysID 保存通讯录记录的用户系统编号 保存通讯录记录的用户系统编号
   * @returns {string}
   */
  doGetMsg_2324(intContactType, strCarCardARS, strCarCardBRS, strCarCardNumber, strCompanyName, strCompanyNumber, strContactSysID, strDriverCardARS, strDriverCardBRS, strDriverCardNumber, strDriverLicenseRS, strIDCardARS, strIDCardBRS, strIDCardNumber, strName, strOtherRS, strPhoneNumber, strRemark, strTrailerCardARS, strTrailerCardBRS, strTrailerCardNumber, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2324," +
      "'intContactType':" + intContactType + "," +
      "'strCarCardARS':'" + strCarCardARS + "'," +
      "'strCarCardBRS':'" + strCarCardBRS + "'," +
      "'strCarCardNumber':'" + strCarCardNumber + "'," +
      "'strCompanyName':'" + strCompanyName + "'," +
      "'strCompanyNumber':'" + strCompanyNumber + "'," +
      "'strContactSysID':'" + strContactSysID + "'," +
      "'strDriverCardARS':'" + strDriverCardARS + "'," +
      "'strDriverCardBRS':'" + strDriverCardBRS + "'," +
      "'strDriverCardNumber':'" + strDriverCardNumber + "'," +
      "'strDriverLicenseRS':'" + strDriverLicenseRS + "'," +
      "'strIDCardARS':'" + strIDCardARS + "'," +
      "'strIDCardBRS':'" + strIDCardBRS + "'," +
      "'strIDCardNumber':'" + strIDCardNumber + "'," +
      "'strName':'" + strName + "'," +
      "'strOtherRS':'" + strOtherRS + "'," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'strRemark':'" + strRemark + "'," +
      "'strTrailerCardARS':'" + strTrailerCardARS + "'," +
      "'strTrailerCardBRS':'" + strTrailerCardBRS + "'," +
      "'strTrailerCardNumber':'" + strTrailerCardNumber + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2326
   * GZKMsg_2326_FindContactBookFromPhoneNumber
   * 根据电话查找用户是否已经存在通讯录
   * 测试中（新增加）
   * @param strPhoneNumber 电话号码 电话号码
   * @param strUserSysID 保存通讯录记录的用户系统编号 保存通讯录记录的用户系统编号
   * @returns {string}
   */
  doGetMsg_2326(strPhoneNumber, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2326," +
      "'strPhoneNumber':'" + strPhoneNumber + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 2328
   * GZKMsg_2328_DeleteContactBook
   * 删除通讯录
   * 测试中（新增加）
   * @param strContactSysID 通讯录系统编号 通讯录系统编号
   * @returns {string}
   */
  doGetMsg_2328(strContactSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':2328," +
      "'strContactSysID':'" + strContactSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8000
   * GZKMsg_8000_GetPaymentGateway
   * 获取可用支付网关
   * 测试中（新增加）
   * @param intDeviceOSType 客户端平台 0：未知；1：IOS；2：Android；3：WX；4：CS；5：BCom 0
   * @param intPayReason 支付原因  0
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8000(intDeviceOSType, intPayReason, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8000," +
      "'intDeviceOSType':" + intDeviceOSType + "," +
      "'intPayReason':" + intPayReason + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8010
   * GZKMsg_8010_CheckoutGBApply
   * 果宝提现申请
   * 测试中（新增加）
   * @param floatCheckoutMoney 提现果宝数量  0
   * @param floatGPSLat GPS Lat  0
   * @param floatGPSLng GPS Lng  0
   * @param intCheckoutWay 提现方式 0：未知；2：支付宝；3：微信；4：银行； 0
   * @param intDeviceOSType 客户端平台 0：未知；1：IOS；2：Android；3：WX；4：CS；5：BCom 0
   * @param strCheckoutTo 提现账户 如：申请提现到支付宝，则填写支付宝账户
   * @param strPayCode 支付密码 预留接口,暂时填空白
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8010(floatCheckoutMoney, floatGPSLat, floatGPSLng, intCheckoutWay, intDeviceOSType, strCheckoutTo, strPayCode, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8010," +
      "'floatCheckoutMoney':" + floatCheckoutMoney + "," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'intCheckoutWay':" + intCheckoutWay + "," +
      "'intDeviceOSType':" + intDeviceOSType + "," +
      "'strCheckoutTo':'" + strCheckoutTo + "'," +
      "'strPayCode':'" + strPayCode + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8012
   * GZKMsg_8012_CheckoutGBConfirm
   * 果宝提现申请确认
   * 测试中（新增加）
   * @param strPayCode 支付密码或短信确认码 预留接口,暂时填空白
   * @param strPaySysID 系统单号
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8012(strPayCode, strPaySysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8012," +
      "'strPayCode':'" + strPayCode + "'," +
      "'strPaySysID':'" + strPaySysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8014
   * GZKMsg_8014_CheckoutGBCancel
   * 果宝提现申请取消
   * 测试中（新增加）
   * @param strPayCode 支付密码或短信确认码 预留接口,暂时填空白
   * @param strPaySysID 系统单号
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8014(strPayCode, strPaySysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8014," +
      "'strPayCode':'" + strPayCode + "'," +
      "'strPaySysID':'" + strPaySysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8016
   * GZKMsg_8016_CheckoutGBList
   * 果宝提现申请列表
   * 测试中（新增加）
   * @param intIsHistory 是否历史信息 0：进行中；1：历史信息 0
   * @param intPageIndex 分页索引  0
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8016(intIsHistory, intPageIndex, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8016," +
      "'intIsHistory':" + intIsHistory + "," +
      "'intPageIndex':" + intPageIndex + "," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8030
   * GZKMsg_8030_PayApplyByBG
   * 果宝支付
   * 测试中（新增加）
   * @param floatGPSLat GPS Lat  0
   * @param floatGPSLng GPS Lng  0
   * @param floatPayMoney 支付果宝数量  0
   * @param intDeviceOSType 客户端平台 0：未知；1：IOS；2：Android；3：WX；4：CS；5：BCom 0
   * @param intPayReason 支付原因  0
   * @param strAboutInfo 相关信息 如：支付订单信息则填写订单编号
   * @param strPayCode 支付密码 预留接口,暂时填空白
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8030(floatGPSLat, floatGPSLng, floatPayMoney, intDeviceOSType, intPayReason, strAboutInfo, strPayCode, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8030," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'floatPayMoney':" + floatPayMoney + "," +
      "'intDeviceOSType':" + intDeviceOSType + "," +
      "'intPayReason':" + intPayReason + "," +
      "'strAboutInfo':'" + strAboutInfo + "'," +
      "'strPayCode':'" + strPayCode + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8040
   * GZKMsg_8040_PayApplyByWX
   * 使用微信支付申请
   * 测试中（新增加）
   * @param floatGPSLat GPS Lat  0
   * @param floatGPSLng GPS Lng  0
   * @param floatPayMoney 支付果宝数量  0
   * @param intDeviceOSType 客户端平台 0：未知；1：IOS；2：Android；3：WX；4：CS；5：BCom 0
   * @param intPayReason 支付原因  0
   * @param strAboutInfo 相关信息 如：支付订单信息则填写订单编号
   * @param strPayCode 支付密码 预留接口,暂时填空白
   * @param strUserSysID 用户编号
   * @param strWXOpenID 微信ID 公众号支付的时候才需要传，其余默认空白
   * @returns {string}
   */
  doGetMsg_8040(floatGPSLat, floatGPSLng, floatPayMoney, intDeviceOSType, intPayReason, strAboutInfo, strPayCode, strUserSysID, strWXOpenID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8040," +
      "'floatGPSLat':" + floatGPSLat + "," +
      "'floatGPSLng':" + floatGPSLng + "," +
      "'floatPayMoney':" + floatPayMoney + "," +
      "'intDeviceOSType':" + intDeviceOSType + "," +
      "'intPayReason':" + intPayReason + "," +
      "'strAboutInfo':'" + strAboutInfo + "'," +
      "'strPayCode':'" + strPayCode + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'strWXOpenID':'" + strWXOpenID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8042
   * GZKMsg_8042_PayEndByWX
   * 使用微信支付提交支付结果
   * 测试中（新增加）
   * @param intPayEndResult 客户端支付结果 0:支付成功; -1: 异常错误; -2:用户取消 0
   * @param strAboutInfo 相关信息 如：支付订单信息则填写订单编号
   * @param strPayOrderID 12 位支付单号
   * @param strPaySysID 系统单号
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8042(intPayEndResult, strAboutInfo, strPayOrderID, strPaySysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8042," +
      "'intPayEndResult':" + intPayEndResult + "," +
      "'strAboutInfo':'" + strAboutInfo + "'," +
      "'strPayOrderID':'" + strPayOrderID + "'," +
      "'strPaySysID':'" + strPaySysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


  /**
   * 消息 8044
   * GZKMsg_8044_PayEndCheckByWX
   * 使用微信支付结果检查
   * 测试中（新增加）
   * @param strPayOrderID 12 位支付单号
   * @param strPaySysID 系统单号
   * @param strUserSysID 用户编号
   * @returns {string}
   */
  doGetMsg_8044(strPayOrderID, strPaySysID, strUserSysID) {
    return "{'GZKMSG':[{" +
      "'intMsgID':8044," +
      "'strPayOrderID':'" + strPayOrderID + "'," +
      "'strPaySysID':'" + strPaySysID + "'," +
      "'strUserSysID':'" + strUserSysID + "'," +
      "'intMsgStatus':0," +
      "'strMsgDesc':''" +
      "}],'GZKMSGVer':2}";
  }


}

export default new GetMsg()


