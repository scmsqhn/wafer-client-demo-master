# README-TWICE.MD
## PATH
H:\wafer-node-server-demo-master\wafer-node-server-demo-master
---

17-05-07
无法访问小程序腾讯云端
已经申请工单，等候回复
工单内容如下：
---
### client 端登陆操作报错
登录失败 LoginError {type: "ERR_LOGIN_FAILED", message: "登录失败，可能是网络错误或者服务器发生异常"}message: "登录失败，可能是网络错误或者服务器发生异常"stack: (...)type: "ERR_LOGIN_FAILED"__proto__: Error
    at http://1932019330.appservice.open.weixin.qq.com/vendor/qcloud-weapp-client-sdk/lib/login.js:18:28
    at http://1932019330.appservice.open.weixin.qq.com/vendor/qcloud-weapp-client-sdk/lib/login.js:22:2
    at require (http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17824)
    at http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17573
    at http://1932019330.appservice.open.weixin.qq.com/vendor/qcloud-weapp-client-sdk/index.js:4:13
    at require (http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17824)
    at http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17573
    at http://1932019330.appservice.open.weixin.qq.com/app.js:7:14
    at require (http://1932019330.appservice.open.weixin.qq.com/WAService.js:7:17824)
    at http://1932019330.appservice.open.weixin.qq.com/app.js:19:4
---
### server端
无法访问此网站

70139330.qcloud.la 拒绝了我们的连接请求。
请在 Google 中搜索“70139330 qcloud 5757”
---
### ip访问ok
118.19.184.71::5757

	
100000613970 : 2017-05-07 11:46:11
---
### 背景介绍
1 我使用一站式配置，可以运行；
2 会话 业务服务器重装系统，镜像配置 NODESDK镜像  会话 镜像 ，无法工作；
3 持续到现在仍然无法工作；

腾讯云微信小程序服务端 Demo - Node.js

会话管理服务

登录服务
检查登录
信道服务

获得信道地址
---
打扰了
不知道如何修改问题

---
### 运行app.js
找到并重启当前项目的指令语句
> 执行该语句
ps -aux |grep app|awk -e '{print "kill -9 " $2}' |sh
> 打印该语句
ps -aux |grep app|awk -e '{print "kill -9 " $2}' 
> 运行
node app.js
pm2 restart process.js
---
### 17-05-08
1. 无法打开proxy 禁止注册表修改
2. regedit禁止proxy
3. 账号密码查看工单
100000613970
pw2364839934

118.89.161.71 业务服务器
118.89.161.138 会话服务器

> 本目录与小程序客户端上传版本一致

4. 界面入口介绍

```
graph LR
入口-->界面
界面-->功能
功能-->服务
```
index界面|完成情况|介绍
---|---|---
小安安客服|完成|进入chat
使用位置服务|完成|进入map
清除位置服务|完成|清除session
报平安|完成|doRequest函数
开启关闭关爱服务|完成|调用switchTunnel函数
一元购|完成|界面yydb,增加resources文件夹
关于我们|与蒲江圆觉寺合作,捐赠打赏功能|?weapp 支付

item|content
---|---|---
AppID(小程序ID)|wx56df671c2e5c8bb7
AppSecret(小程序密钥)|9974370ad5523d55568059609a8ed9fa

#### 搜集的问题
1. wx.request qcloud.request有什么区别?
2. => js语言 
    (x) => x + 6 
	
	function(x){
		return x + 6;
	}
3. ERR_NAME_NOT_RESOLVED
	关闭开发工具,设置-不适用任何代理-重启;
	asdebug.js:1 POST https://70139330.qcloud.la/ net::ERR_NAME_NOT_RESOLVED
	域名无法解析
	
---
##  服务器DNS解析问题始终没解决

使用ssh自动上传代码
eval `ssh-agent -s`
ssh-add ~/.ssh/ls
	
---
# 17-05-09	
netstat -a|grep 80

将 qcloud_appid 1253682516
修改为 qcloud_appid 70139330

# 17-05-09 appsecret 密码!! important
3d244230f537e0eb2e649f4cf0b2d14f

cdb ip 地址
10.66.231.15