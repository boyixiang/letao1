$(function () {
    var myPage = 1;
    var pageSize = 5;

    function getData() {
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            data: {
                page: myPage,
                pageSize: pageSize
            },
            success: function (backData) {
                console.log(backData);
                $('tbody').html(template('firstTmp', backData));
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: myPage, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        myPage = page;
                        getData();
                    }
                });
            }
        })
    }
    getData();
})