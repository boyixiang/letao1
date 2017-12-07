$(function () {
    $('button[type=submit]').click(function (event) {
        // console.log("....");
        event.preventDefault();
        $.ajax({
            url: '/employee/employeeLogin',
            data: $("form").serialize(),
            type: 'post',
            success: function (backdata) {
                console.log(backdata);
            }
        })
    })
})