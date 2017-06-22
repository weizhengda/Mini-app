
let app=getApp();

//使用模块 需要require(path)引入模块  引入以后就可以使用了 


var API=require('../../utils/api.js');



Page({
  data: {
    name: '这是新闻页面',
    imgurl:API.formatImg('img/bd_logo1.png'),
    obj:{
        msg:'这是一个对象'      
    },
    info:app.getInfo()
  },
   onLoad: function(options) {    /* options 接收url传过来的参数*/
    console.log(API.formatImg('img/bd_logo1.png'));


    //地址  http://a.baidu.com/xxx.php


  }
})
