$(function () {
    var mypage = 1;
    var pageSize = 5;

    function getData() {
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: mypage,
                pageSize: pageSize
            },
            success: function (backData) {
                // console.log(backData);
                $('tbody').html(template('userTmp', backData));
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: mypage, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        mypage = page;
                        getData();
                    }
                });
            }
        })
    };
    //    封装函数自执行一次
    getData();
    //点击启用禁用的转换
    $('tbody').on('click', 'button', function () {
        //  console.log('...');
        var id = $(this).parent().data('id');
        var isDelete = $(this).html() == '禁用' ? 0 : 1;
        $.ajax({
            url:'/user/updateUser',
            data:{
                id:id,
                isDelete:isDelete
            },
            type:'post',
            success:function(backData){
                console.log(backData);
                getData();
            }
        })
    })
})