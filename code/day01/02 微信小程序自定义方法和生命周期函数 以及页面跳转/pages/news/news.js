
let app=getApp();

Page({
  data: {
    name: '这是新闻页面',
    obj:{

        msg:'这是一个对象'
    },
    info:app.getInfo()
  },
   onLoad: function(options) {    /* options 接收url传过来的参数*/
    console.log('新闻 监听页面加载onLoad');
  }
})
