//index.js
//获取应用实例
var app = getApp()

// 显示打印提示
var showLog = text => wx.showToast({
		title: text,
		icon: 'DEBUG'
	});

Page({
	  data: {
    imgUrls: [
      'http://pic2.qjimage.com/bldrm002/high/blm016536.jpg',
      'http://pic1.qjimage.com/culturarm001/high/45hau0010rm.jpg',
      'http://pic3.qjimage.com/ph063/high/526-p01893.jpg',
      'http://pic1.qjimage.com/mf057/high/mf700-03406524.jpg',
      'http://mpic.tiankong.com/7ea/b85/7eab850bb2bcfcd05b59d3f18e953ee0/640.jpg@360h',
      'http://mpic.tiankong.com/ab4/36a/ab436a97e0ed267d12ff7c2a31d80f74/466-0506.jpg@360h',
	  
      /*'https://onegoods.nosdn.127.net/resupload/2016/9/18/4082e075e9ff72110bb1d73750be065b.jpg',
      'https://onegoods.nosdn.127.net/resupload/2016/9/20/01d732b0c46a38fc07bbc887dfe23af9.jpg',
      'https://onegoods.nosdn.127.net/resupload/2016/9/19/777e4b1711fb1b0283726cb0b197e8ba.jpg',
      'https://onegoods.nosdn.127.net/resupload/2016/9/20/f2f210633ca371ea6dc56a4b8916a15d.jpg',
      'https://onegoods.nosdn.127.net/resupload/2016/9/21/33c38d5283a862b2523fe2e085355cb2.jpg',
      'https://res.126.net/p/dbqb/resupload/onlinepath/2016/7/28/0/69e1275c4460f97f2d4b26d716348892.jpg'*/
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    windowWidth: 320,
    sortPanelTop: '0',
    sortPanelDist: '290',
    sortPanelPos: 'relative',
    noticeIdx: 0,
    notices: [
      {
        "clickUrl": "dbjsbridge://go?module=detail&gid=1032&period=192",
        "goods": "海购商品 It’S SKIN 伊思 完美活肤逆时空晶钻蜗牛BB霜 50毫升",
        "name": "奥特曼",
        "time": "2分钟前"
      },
      {
        "clickUrl": "dbjsbridge://go?module=detail&gid=1122&period=646",
        "goods": "海购商品 1箱20盒 |五木 梅紫苏味乌冬面 109克",
        "name": "磊磊跳楼了",
        "time": "2分钟前"
      },
      {
        "clickUrl": "dbjsbridge://go?module=detail&gid=931&period=601",
        "goods": "宝马mini  儿童脚踏三轮车",
        "name": "最后一次",
        "time": "2分钟前"
      }
    ],
    "goodsList": [
      {
        "goods": {
          "buyUnit": 10,
          "desc": "唯一的不同，是处处不同",
          "id": 1093,
          "imgUrl": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png",
          "name": "【预售】Apple iPhone6s Plus 128G 颜色随机",
          "tag": "ten"
        },
        "period": 211116272,
        "takeRate":0.01,
        "takeChances": 70,
        "totalChances": 8090
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "颜色随机",
          "id": 348,
          "imgUrl": "http://res.126.net/p/dbqb/one/98/348/b73494078d526fcb5ead4201ec29daef.png",
          "name": "Apple Watch Sport 38毫米 铝金属表壳 运动表带",
          "tag": ""
        },
        "period": 211116207,
        "takeRate":0.19,
        "takeChances": 632,
        "totalChances": 3288
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "配备 Retina 显示器",
          "id": 510,
          "imgUrl": "http://res.126.net/p/dbqb/one/112/112/b246c1f56b1b10de718d21a6aa7349ac.png",
          "name": "Apple MacBook Pro 15.4英寸笔记本",
          "tag": ""
        },
        "period": 211116244,
        "takeRate":0.26,
        "takeChances": 3760,
        "totalChances": 14288
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "超长续航 智能防盗",
          "id": 1168,
          "imgUrl": "http://res.126.net/p/dbqb/one/168/1168/6abc05894e903b9749166c224d739838.png",
          "name": "【预售】小牛电动N1电动踏板车 动力版 约11月20日发货",
          "tag": "ten"
        },
        "period": 211116256,
        "takeRate":0.05,
        "takeChances": 300,
        "totalChances": 5990
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "因工艺原因重量略有浮动",
          "id": 979,
          "imgUrl": "http://res.126.net/p/dbqb/one/229/979/defc72da941c4705fcdbb2a7ee03dbf1.png",
          "name": "周生生 黄金 足金旋转木马吊坠",
          "tag": ""
        },
        "period": 211116138,
        "takeRate":0.17,
        "takeChances": 514,
        "totalChances": 2999
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "颜色随机 支持专柜验货",
          "id": 673,
          "imgUrl": "http://res.126.net/p/dbqb/one/173/673/47c126b7bb39524d3d62151b2ef76629.png",
          "name": "Coach 蔻驰 抛光粒面皮革铆钉COACH CENTRAL手提包",
          "tag": "ten"
        },
        "period": 211115685,
        "takeRate":0.13,
        "takeChances": 630,
        "totalChances": 4950
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "颜色随机 美式奢侈生活风格的代表",
          "id": 943,
          "imgUrl": "http://res.126.net/p/dbqb/one/193/943/0994bfbd54c668fed6db160afd84eff4.png",
          "name": "MICHAEL KORS 迈克高仕 十字纹皮革钱包",
          "tag": "ten"
        },
        "period": 211114592,
        "takeRate":0.45,
        "takeChances": 680,
        "totalChances": 1500
      },
      {
        "goods": {
          "buyUnit": 1,
          "desc": "吴晓波酿吴酒 一半清醒一半醉",
          "id": 1095,
          "imgUrl": "http://res.126.net/p/dbqb/one/95/1095/0176dd96dcc8b4188e6b2bbf85102304.png",
          "name": "【预售】吴酒 2016年贺年年酒 圣诞节开始派送",
          "tag": ""
        },
        "period": 211116226,
        "takeRate":0.04,
        "takeChances": 7,
        "totalChances": 199
      },
      {
        "goods": {
          "buyUnit": 10,
          "desc": "珍贵绝伦",
          "id": 140,
          "imgUrl": "http://res.126.net/p/dbqb/one/140/140/ea7f0892ce49c332e2280513ee94a439.png",
          "name": "中国黄金 AU9999万足金50g薄片",
          "tag": "ten"
        },
        "period": 211116228,
        "takeRate":0.95,
        "takeChances": 14200,
        "totalChances": 14990
      }, {
      "goods": {
        "buyUnit": 10,
        "desc": "唯一的不同，是处处不同",
        "id": 1093,
        "imgUrl": "http://res.126.net/p/dbqb/one/93/1093/a9cf9389428aa00af8508727427cb1c5.png",
        "name": "【预售】Apple iPhone6s Plus 128G 颜色随机",
        "tag": "ten"
      },
      "period": 211116272,
      "takeRate":0.01,
      "takeChances": 70,
      "totalChances": 8090
    }
    ],
    animationNotice: {},
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    showLog('gonLoad succ')
    console.log('onLoad')    
  },
  //
  payoff: function(e){
    var that = this;
    wx.login({
      success: function(res) {
        showLog('payoff succ')
        that.getOpenId(res.code);
      }
    });
    
  },
  //获取openid
  getOpenId: function(code){
    var that = this;
    wx.request({ 
//        url: 'https://70139330.qcloud.la/weixinpay/GetOpenId', 
        url: 'https://70139330.qcloud.la/', 
        method: 'POST',
        header: {
           'content-type': 'application/x-www-form-urlencoded'
        },
        data: {'code':code},
        success: function(res) {
		   showLog('get id succ')
           var openId = res.data.openid;
           that.xiadan(openId);
        }
    })
  },
  //下单
  xiadan: function(openId){
    var that = this;
    wx.request({
        url: 'https://70139330.qcloud.la/weixinpay/xiadan', 
        method: 'POST',
        header: {
           'content-type': 'application/x-www-form-urlencoded'
        },
        data: {'openid':openId},
        success: function(res) {
           showLog('xiadan succ')
           var prepay_id = res.data.prepay_id;
           console.log("统一下单返回 prepay_id:"+prepay_id);
           that.sign(prepay_id);
        }
    })
  },
  //签名
  sign: function(prepay_id){
    var that = this;
    wx.request({
        url: 'https://70139330.qcloud.la/weixinpay/sign', 
        method: 'POST',
        header: {
           'content-type': 'application/x-www-form-urlencoded'
        },
        data: {'repay_id':prepay_id},
        success: function(res) {
           that.requestPayment(res.data);

        }
    })
  },
  //申请支付
  requestPayment: function(obj){
    wx.requestPayment({
      'timeStamp': obj.timeStamp,
      'nonceStr': obj.nonceStr,
      'package': obj.package,
      'signType': obj.signType,
      'paySign': obj.paySign,
      'success':function(res){
      },
      'fail':function(res){
      }
    })
  }  
})