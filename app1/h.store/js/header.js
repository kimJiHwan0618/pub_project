  $(function(){
    $(".header_color .nav a").addClass("on")
        $(window).scroll(function(){
            if($(this).scrollTop() >= 50){
                $(".nav .head_inner a").eq(0).children().attr("src","img/logo1.png")
                $(".nav .head_inner a").eq(1).children().attr("src","img/ic_notice2.png")
                $(".nav").addClass("on")
                    
                    if($("body").hasClass("header_color")){
                        $(".nav .head_inner a").eq(0).children().attr("src","img/logo1.png")
                        $(".nav .head_inner a").eq(1).children().attr("src","img/ic_notice.png")
                    }
            }else if($(this).scrollTop() == 0){
                $(".nav .head_inner a").eq(0).children().attr("src","img/logo2.png")
                $(".nav .head_inner a").eq(1).children().attr("src","img/ic_notice.png")
                $(".nav").removeClass("on")

                 
                    if($("body").hasClass("header_color")){
                        $(".nav .head_inner a").eq(0).children().attr("src","img/logo1.png")
                        $(".nav .head_inner a").eq(1).children().attr("src","img/ic_notice.png")
                    }
            }
        })
        
    })