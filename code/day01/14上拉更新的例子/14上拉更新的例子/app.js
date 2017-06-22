//app.js

/*微信小程序 全局的js文件*/
App({
  onLaunch: function () {

    console.log('当小程序初始化完成时，会触发 onLaunch（全局只触发一次）');
  
  },onShow: function() {
      // Do something when show.
        console.log(' 当小程序启动，或从后台进入前台显示，会触发 onShow');
     
  },
  onHide: function() {
      // Do something when hide.

      console.log(' 当小程序从前台进入后台，会触发 onHide');
  },


//这是微信小程序全局js里面的自定义方法
  getInfo:function(){

      return '这是微信小程序全局js里面的自定义方法'

  },

})