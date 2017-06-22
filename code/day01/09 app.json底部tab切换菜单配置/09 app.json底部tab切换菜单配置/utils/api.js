

const API_URL='https://www.baidu.com/';



//img/bd_logo1.png   返回 https://www.baidu.com/img/bd_logo1.png;


//我们可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。

//模块只有通过 module.exports 或者 exports 才能对外暴露接口。


function formatImg(url){


    return API_URL+url;
}


//1.向外暴露  

// 2.在需要使用这些模块的文件中，使用 require(path) 将公共代码引入

module.exports={

    API_URL:API_URL,
    formatImg:formatImg

}


$(function(){

        app.slide('id');


         app.tab('id');

         
})




/*


var app={};

app.slide=function(){

    jq代码

    var app=''

}

app.tab=function(){
    tab切换
}

var app={
    getDevice:function(){

    },tab:function(){

    },drag:function(ele){

        
    }


}


 */