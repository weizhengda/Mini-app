//index.js
//使用全局app.js里面的方法  

//1.获取应用实例
var app = getApp();

console.log(app);


Page({
  data: {
    motto: 'Hello World',
    info:app.getInfo()
  },

  onLoad: function(options) {    /* options 接收url传过来的参数*/
    console.log('监听页面加载onLoad');
  },
  onReady: function() {
    console.log('监听页面初次渲染完成onReady');
  },
  onShow: function() {
   console.log('监听页面显示onShow');
  },
  onHide: function() {
   console.log('监听页面隐藏onHide');
  },
  onUnload: function() {
    console.log('监听页面卸载onUnload');
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goNews:function(){  /*自定义方法 */

      wx.navigateTo({
        url: '../news/news'
      })

  }
  
})
