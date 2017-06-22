
let app=getApp();

//使用模块 需要require(path)引入模块  引入以后就可以使用了 


var API=require('../../utils/api.js');



Page({
  data: {
    name: '这是新闻页面',
    list:['1','2','3'],

    list1:[
        {'name':'张三',age:'20'},
        {'name':'李四',age:'21'},
        {'name':'王五',age:'22'}
    ],
     list2:[
        {
          'name':'国内',
          'news':[

                {'title':'国内111111'},
                {'title':'国内111111'},
                {'title':'国内111111'}
          ]
        
        },
          {
          'name':'国际',
          'news':[

                {'title':'国际111111'},
                {'title':'国际111111'},
                {'title':'国际111111'}
          ]

        
        }
    ]
  }
})
