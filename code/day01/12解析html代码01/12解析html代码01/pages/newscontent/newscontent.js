// pages/newscontent/newscontent.js



var WxParse = require('../../wxParse/wxParse.js');

var API=require('../../utils/api.js');
Page({
  data:{


    contentData:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数



    var article = '<h1>我是HTML代码</h1>';
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('article_b', 'html', article, that,10);






    console.log(options);



    var aid=options.aid;

    this.requestDataData(aid);
  },
  //请求数据

  requestDataData:function(aid){


    //http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=497

          var _that=this;
                
            wx.request({
              url: API.URL, //仅为示例，并非真实的接口地址
              data: {
                a:'getPortalArticle',
                aid:aid
                
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
                console.log(res.data.result[0]);



                _that.setData({

                  contentData:res.data.result[0]

                })
                
              }
          })




  }
 
})