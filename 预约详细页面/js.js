/*
time 时间
name 姓名
department 中心方向
location 预约地点（好像是只有行政楼801这一个地方）
use 用处
phone 电话
mark 标识符
 */
function order(time,name,department,location,use,phone,mark) {
    $.ajax({
        type: "POST",
        url: url,
        data: {
            time: time,
            name: name,
            department:department,
            location:location,
            use:use,
            phone:phone,
            mark:mark,
        },
        dataType: "json",
        success: function (res) {
               
        }
    })
} 

var mark;//标识符

$(document).ready(function () {

    $("#next").on("click", function (e) {
        alert("跳回到主页");
        window.location.href = url;//跳转回到主页 url主页为地址名称
    });

    $('#revoke').on('click', function(){
        var html = "<label><input class='confirm_input' placeholder='请输入'></label>";
        popTipShow.confirm('请输入标识符',html,['确 定','取 消'],
            function(e){
              //callback 处理按钮事件
              var button = $(e.target).attr('class');
              if(button == 'ok'){
                if(null==$(".confirm_input").val() || ""==$(".confirm_input").val()){
                    webToast("标识符不能为空！","bottom", 1000);
                    return;
                }   
                
                this.hide();
                mark = $(".confirm_input").val();//获取到标识符
                // setTimeout(function() {
                //     webToast($(".confirm_input").val(),"bottom", 3000);
                // }, 300);

                //按下确定按钮执行的操作
                //todo ....                             
              }

              if(button == 'cancel') {
                //按下取消按钮执行的操作
                //todo ....
                this.hide();
                // setTimeout(function() {
                //     webToast("您选择“取消”了","top", 2000);
                // }, 300);
              }
            }
        );

         // window.location.href = url;//跳转回到主页 url为主页地址名称
     });
 });

