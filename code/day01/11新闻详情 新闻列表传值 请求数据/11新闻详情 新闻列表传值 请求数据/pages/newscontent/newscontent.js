// pages/newscontent/newscontent.js

var API=require('../../utils/api.js');
Page({
  data:{


    contentData:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数



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