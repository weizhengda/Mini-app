var API=require('../../utils/api.js');


Page({
  data: {
    name: '这是新闻页面' ,
    imgUrl:API.IMG_URL,
    list:[]
  },
  onLoad: function(options) {    
     console.log('监听页面新闻加载onLoad');

     this.requestData();
   

  },
  goContent:function(event){


     var aid=event.currentTarget.dataset.aid;
  //console.log(event);

      wx.navigateTo({
        url: '../newscontent/newscontent?aid='+aid
      })

  },requestData:function(){


    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })


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
            });
             wx.hideToast();
        }
    })



  }


  
})


//http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1

