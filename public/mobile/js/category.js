/*��ʼ������*/
mui('.lt_cateLeft').scroll({
    indicators:false
});
/*��ʼ�Ҳ����*/
var scrollRight = mui('.lt_cateRight').scroll({
    indicators:false
});

/*
 - ��Ⱦ��̬
 + ������  ��Ҫ��ȡһ���������� ��Ⱦ��ҳ�浱��
 + Ĭ��ѡ��һ������   ���س���һ�������Ӧ������  ��Ⱦ�������ࣨ�Ҳ����ݣ�
 + ���һ�������ʱ��  ��Ҫȥ���ض�Ӧ�ķ�������   ��Ⱦ�������ࣨ�Ҳ����ݣ�
 * */
$(function () {
    /*ҳ��*/
    getFirstCategoryData(function (data) {
        /*��ȡ�������� data*/
        /*��Ⱦһ������*/
        $('.lt_cateLeft').find('ul').html(template('firstCategory',data));
        /*Ĭ���Ѿ���ʾ���ǵ�һ������*/
        /*���ݵ�һ�������idȥ��Ⱦ��������*/
        getSecondCategoryData({
            id:data.rows[0].id /*��һ��һ�������id*/
        },function(data){
            /*��Ⱦ��������*/
            $('.lt_cateRight').find('ul').html(template('secondCategory',data));
        })
    });
    /*����*/
    $('.lt_cateLeft').on('tap','ul li',function(){
        /*�ı䵱ǰ��ʽ*/
        $('.lt_cateLeft').find('li').removeClass('now');
        $(this).addClass('now');
        /*ͨ��idȥ��ȡ�������������*/
        /*��ȡ��ǰ�����id*/
        getSecondCategoryData({
            id:$(this).data('id') /*��һ��һ�������id*/
        },function(data){
            /*��Ⱦ��������*/
            $('.lt_cateRight').find('ul').html(template('secondCategory',data));
            /*��ҪΨһ��0��λ��  ����*/
            scrollRight.scrollTo(0,0,100);
        })
    });
});
/*��ȡһ����������*/
var getFirstCategoryData = function (callback) {
    $.ajax({
        type: 'get',
        url: '/category/queryTopCategory',
        data: {},
        dataType: 'json',
        success: function (data) {
            /*����ȡ����֮�������*/
            callback && callback(data);
        }
    })
}
/*��ȡ�������������*/
var getSecondCategoryData = function(params,callback){
    $.ajax({
        type: 'get',
        url: '/category/querySecondCategory',
        data: params,
        dataType: 'json',
        success: function (data) {
            /*����ȡ����֮�������*/
            callback && callback(data);
        }
    });
}
