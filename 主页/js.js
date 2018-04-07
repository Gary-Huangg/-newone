/*
when 预定时间
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

var your_node = $("input.btn-detail").parent().prev();
alert("your_node.html");

$(document).ready(function () {
    $("input.btn-detail1").on("click", function (id) {
        var your_node = $("input.btn-detail").prev();
        alert("your_node.html");

    });

 });