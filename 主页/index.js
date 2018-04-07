/*
when 预定时间
who  预订人
 */
function order(id) {
    $.ajax({
        type: "get",
        url: url,
        id: {
            id: id,
        },
        dataType: "json",
        success: function (res) {
                if (res.Status == 200) {
                window.location.href = url;//跳转到详情页；
        }
    }
	})
}

$(document).ready(function () {
    $("input.btn").on("click", function (id) {
        var date = $(this).prev().html()+$(this).prev().prev().html();//预约日期和姓名
        alert(date);
    });

 });