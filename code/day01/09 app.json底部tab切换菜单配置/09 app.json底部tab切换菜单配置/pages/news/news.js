
let app=getApp();

Page({
  data: {
    name: '这是新闻页面' ,

    text:'这是一个新闻数据' 
  },
  onLoad: function(options) {    /* options 接收url传过来的参数*/
     console.log('监听页面新闻加载onLoad');
     this.run();


  },

  run:function(event){

      
       /*  改变 data上面绑定的数据*/
      this.setData({
        name:'这是改变后的数据11111',
        text:'改变数据text'

      });


    //  console.log(event);
  },
  runLong:function(){

       console.log('runLong');

  }
})
