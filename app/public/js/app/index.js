$(function() {
    // 首页轮播
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2000
        },
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    //获取元素
    var myScroll = false,
        pullDown = $("#pullDown"),
        pullUp = $("#pullUp"),
        pullDownLabel = $(".pullDownLabel"),
        pullUpLabel = $(".pullUpLabel"),
        loadingStep = 0; //加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新  
    pullDown.hide();
    pullUp.hide();
    index = 1; // 页码
    pagesize = 1; //总页数
    

    //下拉刷新操作  
    function pullDownAction() {
       // $('#list ul.clearfix').html('');
        setTimeout(function () {
            index = 1;
           
            pullDown.attr('class', '').stop().animate({height:0 },500,function(){
                pullDown.hide();
                $(".pulldown-tips").show();
            })
            myScroll.refresh();
            loadingStep = 0;
            
        }, 1000);
    }

    //上拉加载更多  
    function pullUpAction() {
        index = index + 1;
        if (pagesize < index) {
            pullUpLabel.text("到底了");
            setTimeout(function () {
                pullUp.attr('class', '').hide();
                myScroll.refresh();
                loadingStep = 0;
            }, 1000);
        } else {
            setTimeout(function () {
                pullUp.attr('class', '').hide();
                myScroll.refresh();
                loadingStep = 0;
               
            }, 1000);
        }
    }
    // iscroll初始化
    function init() {
        myScroll = new IScroll('#index_content', {
            //scrollbars: true,
            mouseWheel: false,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            scrollY: true,
            probeType: 2,
            bindToWrapper: true
        });

        myScroll.on("scroll", function () {
            if (loadingStep == 0 && !pullDown.attr("class").match('refresh|loading') && !pullUp.attr(
                    "class").match('refresh')) {
                if (this.y > 40) { //下拉刷新操作  
                    $(".pulldown-tips").hide();
                    pullDown.addClass("refresh").css({height:'30px' }).show();
                    pullDownLabel.text("松手刷新数据");
                    loadingStep = 1;
                    myScroll.refresh();
                } else if (this.y < (this.maxScrollY - 14)) { //上拉加载更多  
                    pullUp.addClass("refresh").show();
                    pullUpLabel.html("加载中...");
                    loadingStep = 1;
                    pullUpAction();
                }
            }
        });
        myScroll.on("scrollEnd", function () {
            if (loadingStep == 1) {
                if (pullDown.attr("class").match("refresh")) { //下拉刷新操作  
                    pullDown.removeClass("refresh").addClass("loading");
                    pullDownLabel.text("正在刷新...");
                    loadingStep = 2;
                    pullDownAction();
                }
            }
        });

        // 默认事件
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
    }    

    // 初始化
    init();

});
