$(function(){
    var mypageNum = 1;
    var mypageSize =5;
    function getData(){
        $.ajax({
            url:'/product/queryProductDetailList',
            data:{
                page:mypageNum,
                pageSize:mypageSize
            },
            success:function(backData){
                // console.log(backData);
                $('tbody').html(template('shopTmp',backData));
            }
        })
    }
    // 默认调用一次
    getData();
})