requirejs.config({
    "baseUrl": "<%= base.cdn %>/js/lib",
    "paths": {
        "publicTip": "<%= base.cdn %>/js/app/public-tip",
        "zepto": "zepto.min"
    }
});

requirejs(["jquery", "publicTip"], function($, publicTip) {
    $(function() {
        $("#loginBtn").click(function() {
            var mobile = $("#mobile").val();
            var password = $("#password").val();

            if (mobile.trim() == '' || password.trim() == '') {
                publicTip.showTipForStr("手机号和密码必填");
                return;
            }
            if (!/^1\d{10}$/.test(mobile)) {
                publicTip.showTipForStr("手机号格式不正确");
                return;
            }
            if ($("#loginBtn").hasClass('weui-btn_loading')) {
                return;
            }

            var userReq = {
                mobile: mobile,
                password: password
            };

            $("#loginBtn").addClass('weui-btn_loading');
            $("#loginLoading").addClass('weui-loading');
            $.ajax({
                type: 'post',
                dataType: 'json',
                contentType: 'application/json',
                url: '/zshop/api/signin',
                data: JSON.stringify(userReq)
            }).done(function(r) {
                console.log(JSON.stringify(r));
                window.location.href = $("#loginSuccUrl").val();
            }).fail(function(jqXHR, textStatus) { // Not 200
                //publicTip.showTip(jqXHR.responseJSON.message);
                //publicTip.showTip(jqXHR.responseText);
                publicTip.showTip(jqXHR.responseJSON);
                $("#loginBtn").removeClass('weui-btn_loading');
                $("#loginLoading").removeClass('weui-loading');
            });

        });

    });

})