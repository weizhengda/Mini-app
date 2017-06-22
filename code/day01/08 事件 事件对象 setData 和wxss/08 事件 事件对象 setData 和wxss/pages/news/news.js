
let app=getApp();

Page({
  data: {
    name: '这是新闻页面' ,

    text:'这是一个新闻数据' 
  },
  run:function(event){

      
       /*  改变 data上面绑定的数据*/
      this.setData({
        name:'这是改变后的数据'
      });


      console.log(event);
  },
  runLong:function(){

       console.log('runLong');

  }
})
