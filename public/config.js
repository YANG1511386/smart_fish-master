window.g={
    //登录
    login:"https://api.rslly.top/api/v2/login",
//设备状态列表
     device_list:"https://api.rslly.top/api/v2/Product",
//设备模拟器
    //新建设备
     new_devices:"https://api.rslly.top/api/v2/Product",
     //恢复设备传True
      //禁止设备传false
      //两个是同一个接口
     //recover_devices:"https://api.rslly.top/api/v2/Product",
     //删除设备
     delete_devices:"https://api.rslly.top/api/v2/Product",

//规则引擎
    //规则实例
       //执行规则 publish,输入行为
    rules_pub_list:"https://api.rslly.top/api/v2/ProductControl",
    rules_publish:"https://api.rslly.top/api/v2/behavior",

/*//规则引擎
    //规则实例
        //规则列表
    rules_list:"http://你的服务器ip地址:8080/api/v2/controlList",
        //新建规则
    new_rules:"http://你的服务器ip地址:8080/api/v2/addNewControl",
       //执行规则 publish,输入行为
    rules_publish:"http://你的服务器ip地址:8080/api/v2/publish",
       //删除规则
    rules_delete:"http://你的服务器ip地址:8080/api/v2/deleteControl",
    //修改规则
    //rules_revise:"http://你的服务器ip地址:8080/api/v2/updateControl",*/

    
//产品控制
    //控制实例
        //控制行为列表
    rules_list:"https://api.rslly.top/api/v2/ProductControl",
        //新建行为
    new_rules:"https://api.rslly.top/api/v2/ProductControl",
       //执行行为 publish,输入行为
    //rules_publish:"https://api.rslly.top/api/v2/ProductControl",
       //删除行为
    rules_delete:"https://api.rslly.top/api/v2/ProductControl",

//物模型
    //控制实例
        //控制行为列表
    model_list:"https://api.rslly.top/api/v2/ProductModel",
        //新建行为
    new_model:"https://api.rslly.top/api/v2/ProductModel",
       //执行行为 publish,输入行为
    model_publish:"https://api.rslly.top/api/v2/ProductModel",
       //删除行为
    model_delete:"https://api.rslly.top/api/v2/ProductModel",

//配置
    pro_data_list:"https://api.rslly.top/api/v2/ProductData",
    new_pro_data:"https://api.rslly.top/api/v2/ProductData",
    pro_data_delete:"https://api.rslly.top/api/v2/ProductData",

//产品行为控制
    pro_behave:"https://api.rslly.top/api/v2/behavior",
//数据读取
    pro_readData:"https://api.rslly.top/api/v2/behavior",
//状态获取
    pro_status:"https://api.rslly.top/api/v2/status",
//数据获取
    read_data:"https://api.rslly.top/api/v2/readData",
     //帐篷传感器数据
     tent_sensor:"wss://你的ip+端口",


//现场监控websocket,
big_top:"websocket地址",
//课室websocket
 classroom_live:"websocket地址",
//3维温度场
  url:"ws://106.14.145.57:8083/mqtt",
  username:"cwl",
  password: "19260817",
  //课室3d温度场主题
  theme:[`3dscatter`],//[`topic/+`, `topic/+/test`],可以同时订阅多个主题，那个符号是三角符号
  //帐篷3d温度场主题
  theme_tent:[`3dscatterTent`],
   //北主楼20x
   theme_classroom_live_20x:[`beizhulou_20x`],
     //北主楼全部
     theme_beizhulou_all:[`buding_beizhulou`],
   //classroom_videoUrl:"http://zhangdengzhen.top:3013/live/stream.flv",
   //课室，视频流
   classroom_videoUrl:"你的视频流地址",
   //水上摄像头视频流 
   live_videoUrl:"https://video.rslly.top/live/34020000001320000001@34020000001320000005.flv",
//后端swagger地址
swagger_url:"你的swagger后端地址"
}   
