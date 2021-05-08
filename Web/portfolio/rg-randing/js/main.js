$(function(){
    
    // 윈도우 시작하면 화면 맨위로 이동
    // $("html,body").stop().animate({"scrollTop":0},1500,"linear")


    // 윈도우 켰을때 헤더 바로 보여라
    var start = setTimeout(function(){
        $("header>section").addClass("on")
    },500);

     // 브라우저의 높이값을 div의 높이값으로
    /*중요*//*중요*//*중요*//*중요*//*중요*/
    var ht4 = $(window).height()+900;
    $(".landing>div.ht4").height(ht4);
    
    
    var ht3 = $(window).height()+420;
    $(".landing>div.ht3").height(ht3);

    
    var ht2 = $(window).height()+250;
    $(".landing>div.ht2").height(ht2);
    
    var ht = $(window).height();
    $("header,.landing>div.ht").height(ht);


    // window크기가 바뀔때마다 100%로 리사이즈
    $(window).resize(function(){
        var ht = $(window).height();
        $("header,.landing>div,footer").height(ht);
    });

    $(window).scroll(function(){

    var scroll = $(this).scrollTop(); //현재 scroll 위치값
    var content = $(".landing>header,.landing>div");
    
    if(scroll>=content.eq(0).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $("header>section").addClass("on");
    }else{
        // 움직임 취소
        $("header>section").removeClass("on")
    };

    if(scroll>=content.eq(1).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".About_Us>section").addClass("on");
    }else{
        // 움직임 취소
        $(".About_Us>section").removeClass("on")
    };

    if(scroll>=content.eq(2).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".branding>section").addClass("on");
    }else{
        // 움직임 취소
        $(".branding>section").removeClass("on")
    };

    if(scroll>=content.eq(3).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".Ui-Icon_set>section").addClass("on");
    }else{
        // 움직임 취소
        $(".Ui-Icon_set>section").removeClass("on")
    };

    if(scroll>=content.eq(4).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".Walk_through>section").addClass("on");
    }else{
        // 움직임 취소
        $(".Walk_through>section").removeClass("on")
    };

    if(scroll>=content.eq(5).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".Main_page>section").addClass("on");
    }else{
        // 움직임 취소
        $(".Main_page>section").removeClass("on")
    };

    if(scroll>=content.eq(6).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".Datails_Add-Schedule>section").addClass("on");
    }else{
        // 움직임 취소
        $(".Datails_Add-Schedule>section").removeClass("on")
    };

    if(scroll>=content.eq(7).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".Draw>section").addClass("on");
    }else{
        // 움직임 취소
        $(".Draw>section").removeClass("on")
    };

    if(scroll>=content.eq(8).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".Place_Set>section").addClass("on");
    }else{
        // 움직임 취소
        $(".Place_Set>section").removeClass("on")
    };

    if(scroll>=content.eq(9).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".map>section").addClass("on");
    }else{
        // 움직임 취소
        $(".map>section").removeClass("on")
    };

    if(scroll>=content.eq(10).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".map_detail>section").addClass("on");
    }else{
        // 움직임 취소
        $(".map_detail>section").removeClass("on")
    };

    if(scroll>=content.eq(11).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".My_Page>section").addClass("on");
    }else{
        // 움직임 취소
        $(".My_Page>section").removeClass("on")
    };

    if(scroll>=content.eq(12).offset().top-$(".landing").offset().top){
        // 내용물 움직임 시작
        $(".footer>section").addClass("on");
    }else{
        // 움직임 취소
        $(".footer>section").removeClass("on")
    };
    
    
    
    });
    //window scrill

    
});