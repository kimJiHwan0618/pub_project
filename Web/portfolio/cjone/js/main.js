

$(function () {

     // 점핑요소삭제
     $("body a").click(function(e){
        e.preventDefault();
    })

    $("div.top").children().click(function(){
        $("html,body").stop().animate({"scrollTop":0},700,"swing");
    })

     /*모바일 햄버거 버튼 열기/닫기*/
     $(".mob_btn").click(function(){
        $(".head_inner").addClass("on");
        $("body").css({"overflow":"hidden"});
        
    });
    $(".mobBtn_close").click(function(){
        $(".head_inner").removeClass("on");
        $("body").css({"overflow":"unset"});
    });

    
    /*모바일 주메뉴 2단*/
    $(".mob_gnb>ul>li").click(function(){
        //e.preventDefault();
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
    });

    /*모바일 고객센터*/
    $("dl.mob_topMenu dd").eq(4).click(function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).children("a").attr("title","고객센터 닫기");
        }else{
            $(this).children("a").attr("title","고객센터 열기");
        }
    });
    

    $("html, body").stop().animate({scrollTop:0},500,"linear");
    // header 주메뉴

    $("nav.gnb>ul").bind("mouseover focus",function(){
        $(".header_wrap").css({"height":"450px",});

        $("nav.gnb>ul>li>ul").css({"display":"block"})
    });
    
    $("nav.gnb>ul").bind("mouseleave blur",function(){
        $(".header_wrap").css({"height":"120px"});
        $("nav.gnb>ul>li>ul").css({"display":"none"})
    });

    $("nav.gnb>ul>li>ul>li>a").bind("mouseover focus",function(){
        $("nav.gnb>ul>li>ul>li").removeClass("on")
        $(this).parents().addClass("on")
    })

    $("nav.gnb>ul>li>a").bind("mouseover focus",function(){
        $("form.srch").removeClass("on")
        $("p.srch_open").removeClass("on")
    })

    // //header 주메뉴

    // header 탑메뉴
    $("dl.topMenu dd.cscenter").click(function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).children("a").attr("title","고객센터 닫기")
        }else{
            $(this).children("a").attr("title","고객센터열기")
        }
    });
    // //header 탑메뉴

    // search버튼
    $(".srch_open").click(function(){
        $("form.srch").toggleClass("on");
        $(this).toggleClass("on");
    });
    // //search버튼

    // 스와이프
    $("body>section").bind("swipeleft",function(){
        $(".next").trigger("click");
    });
    $("body>section").bind("swiperight",function(){
        $(".prev").trigger("click");
    });


    // 배너프레임
    var $bnnNum = 0;
    var $lastNum = $(".banner_frame>section").size()-1;
    var $banner_w = $("body>section").width();

    //리사이즈
    $("window").resize(function(){
        $banner_w = $("body>section").width();
    })

    // 다음
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum>$lastNum) $bnnNum=0;
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });
    // 이전
    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum<0) $bnnNum=$lastNum
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    })

    // 롤링
    var $banner=$(".banner_roll a").click(function(){
        $bnnNum=$banner.index(this);
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });
    // 오토배너
    function autoBanner(){
        $bnnNum++;
        if($bnnNum>$lastNum) $bnnNum=0;
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });

    }
    var $autoBnn=setInterval(autoBanner,5000)
    // 재생 멍춤
    var flag=true;
    $("a.play").click(function(){
        if(flag){
            clearInterval($autoBnn);
            $(this).toggleClass("play pause");
            flag=false;
        }else{
            //꼭 기존의 변수에다가 setInterval을 넣어야함
            $autoBnn=setInterval(autoBanner,5000);
            $(this).toggleClass("plaay pause");
            flag=true;
        }
    });
    
    // //배너프레임
    var appear = ""

    for(var i=0;i<57;i++){
        if(i<10){
            appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼' />"   

        }else{
            appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼' />"
    }
    }
    $(".login .appear").html(appear)


    var loop = ""
    
    for(var i=0;i<82;i++){
        if(i<10){
            loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼'/>"
        }else{
            loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼'/>"
        }
    }
    
    $(".login .loop").html(loop)
    
    
    for(i=0;i<57;i++){
        $(".appear img").eq(i).css("animation","ani 2.85s linear "+0.05*i+"s 1 normal")
    };
    
    
    // loop 애니메이션 css
    for(i=0;i<82;i++){
        $(".loop img").eq(i).css("animation","ani 4.1s linear "+0.05*i+"s infinite normal")
    };
    
    
    
    
    // 퀵메뉴 이미지 불러오기
    var quick1 = ""

    for(i=0;i<20;i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000"+i+".png' alt='카드등록안내"+i+"'>"
        }else{
            quick1 += "<img src='images/quick01/quick01_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    
    $(".quick1").html(quick1)
// 
    var quick2 = ""

    for(i=0;i<20;i++){
        if(i<10){
            quick2 += "<img src='images/quick02/quick02_0000"+i+".png' alt='카드등록안내"+i+"'>"
        }else{
            quick2 += "<img src='images/quick02/quick02_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    
    $(".quick2").html(quick2)
// 
    var quick3 = ""

    for(i=0;i<20;i++){
        if(i<10){
            quick3 += "<img src='images/quick03/quick03_0000"+i+".png' alt='카드등록안내"+i+"'>"
        }else{
            quick3 += "<img src='images/quick03/quick03_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    
    $(".quick3").html(quick3)
// 
    var quick4 = ""

    for(i=0;i<20;i++){
        if(i<10){
            quick4 += "<img src='images/quick04/quick04_0000"+i+".png' alt='카드등록안내"+i+"'>"
        }else{
            quick4 += "<img src='images/quick04/quick04_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    
    $(".quick4").html(quick4)
    

    // 퀵메뉴 마우스 올렸을때
    $("a.quick1a").hover(function(){
    for(var k=0;k<20;k++){
    $("a.quick1a > .quick1 > img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
        }
      
    },function(){
        //애니실행
    
     $("a.quick1a > .quick1 > img").css("animation","none");  
    });
    
    $("a.quick1b").hover(function(){
        for(var k=0;k<20;k++){
        $("a.quick1b > .quick2 > img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
            }
          
        },function(){
            //애니실행
        
         $("a.quick1b > .quick2 > img").css("animation","none");  
        });

        $("a.quick1c").hover(function(){
            for(var k=0;k<20;k++){
            $("a.quick1c > .quick3 > img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
                }
              
            },function(){
                //애니실행
            
             $("a.quick1c > .quick3 > img").css("animation","none");  
            });
    
            $("a.quick1d").hover(function(){
                for(var k=0;k<20;k++){
                $("a.quick1d > .quick4 > img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
                    }
                  
                },function(){
                    //애니실행
                
                 $("a.quick1d > .quick4 > img").css("animation","none");  
                });


            //content3_inner 
             
             $(".content3_inner>ul>li>a").click(function(e){
                e.preventDefault();
                $(".content3_inner>ul>li").removeClass("on")

                $(this).parents().addClass("on")


                $(".content3_inner section ul li").hide();
                
                
                var idx=$(this).parent().index();
            
                switch(idx){
                case 0:$(".content3_inner section ul li").show(); break;
                case 1:$(".content3_inner section ul li.ent").show(); break;
                case 2:$(".content3_inner section ul li.tele").show(); break;
                case 3:$(".content3_inner section ul li.shop").show(); break;
                case 4:$(".content3_inner section ul li.dinner").show(); break;
                case 5:$(".content3_inner section ul li.tour").show(); break;
                case 6:$(".content3_inner section ul li.box").show(); break;
                }

             });

            /*스크롤 이벤트*/
        $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        var scroll_w=$(document).width();
        var scroll_h=$(window).height();
        console.log("scroll :"+scroll+", scroll_h :"+scroll_h+", scroll_w :"+scroll_w);
        
        /*동그라미 움직임*/
        $(".posi1").css({"top":325+scroll*0.5});
        $(".posi2").css({"top":722+scroll*0.1});
        $(".posi3").css({"top":1202+scroll*0.8});
        $(".posi4").css({"bottom":-90+scroll/20});
        $(".combine_1").css({"top":796+scroll*1.1});
        $(".combine_r").css({"top":947+scroll*1.1});
        $(".doughnut_1").css({"top":-760+scroll*1.1});
        $(".doughnut_r").css({"top":-200+scroll*0.7});
        
        /*컴퓨터 사이즈-네이버 움직임*/
        if(scroll_w>1024){
            if(scroll>1400&&scroll<1600){
                var scroll_n=scroll-1400;
                $(".content2_inner>article:nth-of-type(3)").css({"top":500+scroll_n});
            }
        }
        
        /*스크롤탑 위치*/
        if(scroll>scroll_h){
            $("div.top").addClass("on");
        }else{
            $("div.top").removeClass("on");
        }
        
        var scroll_b;
        if(scroll_w>1024){
            scroll_b=scroll-2950;
            if(scroll>2950){
                $(".top").css({"bottom":50+scroll_b});
                if(scroll_b+50>294){
                    $(".top").css({"bottom":294});
                }
            }else{
                $(".top").css({"bottom":50});
            }
        }else if(scroll_w>768&&scroll_w<1024){
            scroll_b=scroll-3450;
            if(scroll>3450){
                $(".top").css({"bottom":50+scroll_b});
                if(scroll_b+50>312){
                    $(".top").css({"bottom":312});
                }
            }else{
                $(".top").css({"bottom":50});
            }
        }else{
            scroll_b=scroll-5100;
            if(scroll>5100){
                $(".top").css({"bottom":50+scroll_b});
                if(scroll_b+50>319){
                    $(".top").css({"bottom":319});
                }
            }else{
                $(".top").css({"bottom":50});
            }
        }
    });
// ////////////////////////////////////////////////////////////////////


            $(".content3_inner>section>ul>li").hover(function(){
                $(this).addClass("on");
            },function(){
                $(this).removeClass("on");
            });   

            //  $(".content3_inner>section>ul>li>a").mouseover(function(){
                
            //     $(this).parent().addClass("on")
            //  });

            //  $(".content3_inner>section>ul>li").mouseout(function(){

            //     $(this).parent().removeClass("on")
            //  });


// //////////////////////////////////////////////////////////////////////
             
             
        
   

    
            //  footer
            $(".familySite").click(function(e){
                e.preventDefault();
                $(this).toggleClass("on");
                if($(this).hasClass("on")){
                    $(this).children("a").attr("title","닫기");
                }else{
                    $(this).children("a").attr("title","열기");
                }
            });
            







});