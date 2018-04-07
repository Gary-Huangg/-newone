/*
 name 姓名
 department 部门
 phone 电话
 use 用途
 mask 标识符
 */
function order(name, department, phone, use, mask) {
    $.ajax({
        type: "POST",
        url: url,
        data: {
            name: name,
            department: department,
            phone: phone,
        	use: use,
        	mask:mask
        },
        dataType: "json",
        success: function (res) {
            if (res.Status == 200) {
                alert("信息填写成功，请选择日期");
                window.location.href = url;//跳转到选择日期揭秘额
            } else if (res.Status == 0) {
                alert("该时间段此地点被占用,请重新选择或联系相关人员！");
            } else if (res.Status == 2) {
                alert("时间填写错误，结束时间不能大于开始时间，请重新填写！");
            }
        }
    })
} 	

//当选择中心后，删除默认选项
var flag = 0;
function selectChange(){
    if (flag == 0) {
        $("#department option[value='1']").remove(); 
        flag = 1;
    }
}


$(document).ready(function () {
    $("#next").on("click", function (e) {
    	var name = $('#name').val();//姓名
    	var department=$('#department').find("option:selected").text();//中心
    	var phone = $('#phone').val();//号码
    	var use = $('#use').val();//用处
    	var mark = $('#mark').val();//标识符
        //判断填写内容是否符合要求
        if (name == "") {
            alert("姓名不能为空");
        }
        else if (name.length >4 ||name.length <2) {
            alert("请输入正确名字");
        }
        else if (flag ==0) {
            alert("请选择中心");
        }
        else if (phone == "") {
            alert("电话不能为空");
        }
        else if (phone.length != 11) {
            alert("号码格式错误\n请输入长度11位电话长号");
        }
        else if (use == "") {
            alert("请填写用途");
        }
        else if (mark == "") {
            alert("请填写标识符");
        }
        else {
            alert("信息填写成功，跳转到选择日期界面");
            order(name, department + "方向", phone, use, mark);
        }
    });
});