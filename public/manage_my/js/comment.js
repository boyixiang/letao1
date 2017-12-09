$(function () {
    //判断员工是否登录
    $.ajax({
        url:'/employee/checkRootLogin',
        success:function(backData){
            // console.log(backData);
            if(backData.error==400){
                window.location.href = './login.html'
            }else{

            }
        }
    })
    //点击退出注销登录
    $('#loginture').click(function(){
        console.log('...');
        $.ajax({
            url:'/employee/employeeLogout',
            success:function(backData){
                console.log(backData);
                //隐藏确认框
                $('.turelogin').modal('hide')
                window.location.href = './login.html'
            }
        })
    })
    //点击显示侧边栏 
    $('.main .glyphicon-align-justify').click(function () {
        $('.slide').toggle();
        $('.main').toggleClass('main-fullscreen');
    })
    //点击显示隐藏分类
    $('.slide .menu ul >li:eq(1)').click(function(){
        console.log('...');
        $(this).children('ol').slideToggle();
    })
})