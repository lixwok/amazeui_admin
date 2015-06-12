function login(){
    var name = $("#username").val();
    var pwd = $("#password").val();
    $.post("http://localhost:8080/doctor/login/", { username: name, password: pwd }, function (data) {
        if (null != data) {
            alert("登录成功");
            $(function () {
                window.location.href = "admin-user.html";
            })

        } else {
            alert("登录失败");
        }
    });
}