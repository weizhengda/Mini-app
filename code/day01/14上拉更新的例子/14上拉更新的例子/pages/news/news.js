var API=require('../../utils/api.js');

/*


在方法里面获取data里面的值值

this.data.page  获取

设置数据：
this.setData({
  page:2

})




*/


Page({
  data: {
    systemHeight: 400 ,
    imgUrl:API.IMG_URL,
    page:'1',
    list:[]
  },
  onLoad: function(options) {   


    var _that=this; 
    //获取设备信息
     wx.getSystemInfo({
      success: function(res) {
          _that.setData({

             systemHeight:res.windowHeight
          })
      }
     })

      this.requestData();
   

  },
  loadMore:function(){

    console.log('loadMore');

     this.requestData();


  },  
  goContent:function(event){


     var aid=event.currentTarget.dataset.aid;
  //console.log(event);

      wx.navigateTo({
        url: '../newscontent/newscontent?aid='+aid
      })

  },
  
  requestData:function(){


      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
     var _that=this;          
      wx.request({
        url: API.URL, //仅为示例，并非真实的接口地址
        data: {
          a:'getPortalList',
          catid:'20',
          page:_that.data.page
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
       //   console.log(res.data)



        //把新数据拼接到list老数据上面
            var nData=_that.data.list.concat(res.data.result);



            //分页数据
            var p=_that.data.page;

            _that.setData({

              page:++p,
              list:nData
            });
             wx.hideToast();
        }
    })



  }


  
})


//http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1

