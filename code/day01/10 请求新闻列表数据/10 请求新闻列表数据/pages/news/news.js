var API=require('../../utils/api.js');


Page({
  data: {
    name: '这是新闻页面' ,
    list:[]
  },
  onLoad: function(options) {    
     console.log('监听页面新闻加载onLoad');

     this.requestData();
   

  },requestData:function(){

    //http://www.phonegap100.com/appapi.php
    
    //http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1

    var _that=this;
          
      wx.request({
        url: API.URL, //仅为示例，并非真实的接口地址
        data: {
          a:'getPortalList',
          catid:'20',
          page:'1'
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          console.log(res.data)

            _that.setData({


              list:res.data.result
            })
        }
    })



  }


  
})


//http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1

