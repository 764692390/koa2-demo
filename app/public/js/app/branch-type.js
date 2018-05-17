$(function(){
  // iscroll初始化
  var myScrollLeft = new IScroll('#branchLeft', {
      //scrollbars: true,
      mouseWheel: false,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true,
      scrollY: true,
      probeType: 2,
      bindToWrapper: true,
      click: true,
      taps:true,
      preventDefault: false
  });

  var myScrollRight = new IScroll('#branchRight', {
      //scrollbars: true,
      mouseWheel: false,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true,
      scrollY: true,
      probeType: 2,
      bindToWrapper: true,
      click: true,
      taps:true,
      preventDefault: false
  });
  
  $("#branchLeft").on("click","li",function(){
    $("#branchLeft li").removeClass("active");
    $(this).addClass("active");
    publicTip.showLoadingToast(true);
    setTimeout(function(){
      publicTip.showLoadingToast(false);
    },500)
  });

})