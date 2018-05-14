$(function () {

  //获取用户信息
  $.ajax({
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    url: '/api/v1/user',
  }).done(function (r) {
    if (r.errno == 0) {
      var data = r.data;
      let src = $('#userHeadImage').attr('data-src') + data.pic;
      $('#userHeadImage').attr('src', src);
      $('#userName').html(data.userName);
      $('#userId').html(data.phone);
    } else {
      window.location.href = '/login'
    }
  })

  // 退出登录
  $('#signOut').on('click',function(){
    $.ajax({
      type: 'get',
      dataType: 'json',
      contentType: 'application/json',
      url: '/api/v1/user/signOut',
    }).done(function (r) {
      window.location.href = '/login'
    })
  })


})