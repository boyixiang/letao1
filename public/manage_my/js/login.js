$(function () {
    // $('button[type=submit]').click(function (event) {
    //     // console.log("....");
    //     event.preventDefault();
    //     $.ajax({
    //         url: '/employee/employeeLogin',
    //         data: $("form").serialize(),
    //         type: 'post',
    //         success: function (backdata) {
    //             console.log(backdata);
    //         }
    //     })
    // })
    $('form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: '用户名至少在3到30之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名由数字字母下划线和.组成'
                    },
                    callback:{
                        message: '用户名错误'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码至少在3到30之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            },
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        $.ajax({
            url: '/employee/employeeLogin',
            data: $('form').serialize(),
            type: 'post',
            success: function (backdata) {
                console.log(backdata);
                if (backdata.success) {
                    window.location = './index.html';
                } else {
                    var validator = $("form").data('bootstrapValidator');
                    if (backdata.error == 1000) {
                        pdateStatus('username', 'INVALID', 'callback');
                    }else if(backdata.error == 1001){
                        pdateStatus('password', 'INVALID', 'callback');
                    }
                }
            }
        })
    });
})