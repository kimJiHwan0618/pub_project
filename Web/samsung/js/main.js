
        $(function(){
            // 점핑요소삭제
            $(".main_banner a,#container a,#footer a").click(function(e){
                e.preventDefault();
            })


            $("p.quick_btn").children().click(function(){
                $("html,body").stop().animate({"scrollTop":0},1000,"swing");
            })

            $("nav>ul>li>ul").css("display","none")
            $("nav>ul>li>a").bind("mouseover focus",function(){

                $("nav>ul>li>ul").css("display","none");
                $(this).next().css("display","block");

                $("nav>ul>li").removeClass("on");
                $(this).parents().addClass("on");
            });
            
            $("nav>ul>li:nth-child(1)>a").bind("mouseover focus",function(){
                $(".header_wrap").stop().animate({"height":"420px"},300,"linear");
            });
            
            $("nav>ul>li:nth-child(2)>a").bind("mouseover focus",function(){
                $(".header_wrap").stop().animate({"height":"280px"},300,"linear");
            });
            
            $("nav>ul>li:nth-child(3)>a").bind("mouseover focus",function(){
                $(".header_wrap").stop().animate({"height":"280px"},300,"linear");
            });
            
            $("nav>ul>li:nth-child(4)>a").bind("mouseover focus",function(){
                $(".header_wrap").stop().animate({"height":"480px"},300,"linear");
            });
            
            $("nav>ul>li:nth-child(5)>a").bind("mouseover focus",function(){
                $(".header_wrap").stop().animate({"height":"350px"},300,"linear");
            });


            $("nav").bind("mouseleave blur",function(){
                $(".header_wrap").animate({"height":"70px"},300,"linear");
                $("nav>ul>li>ul").css("display","none");
                $("nav>ul>li").removeClass("on")

            });

            $("dl.topMenu_sns>dt").bind("mouseover focus",function(){
                $("dl.topMenu_sns>dd>ul").css("display","block")
            });
            $("dl.topMenu_sns").bind("mouseleave blur",function(){
                $("dl.topMenu_sns>dd>ul").css("display","none")
            });

            $("dl.topMenu_lang>dt").bind("mouseover focus",function(){
                $("dl.topMenu_lang>dd>ul").css("display","block")
            });
            $("dl.topMenu_lang").bind("mouseleave blur",function(){
                $("dl.topMenu_lang>dd>ul").css("display","none")
            });    
       
            
            
            $("p.search_click>a").click(function(){
                $("div.search").css({"display":"block"})
                $("p.search_clo_btn").css({"display":"block"})
                $("p.search_click").css({"display":"none"});
                $("div.srch_dim").addClass("on")
            });
            $("p.search_clo_btn>a").click(function(){
                $("div.srch_dim").removeClass("on")
                $("div.search").css({"display":"none"})
                $("p.search_clo_btn").css({"display":"none"})
                $("p.search_click").css({"display":"block"});
            });
        


            
            //autoBanner
            var $bnnNum=0;//배너번호 저장
            var lastNum=$(".slide_wrap>div").size()-1

            function autoBanner(){
                if($bnnNum>=lastNum){$bnnNum=-1;}
                $bnnNum++; //0
                
                // 모든 active클래스는 지워라
                $(".slide_wrap>div").removeClass("active")
                
                //active 클래스가 div에 붙어라
                $(".slide_wrap>div").eq($bnnNum).addClass("active");    //0,1,2

                //롤링
                $(".banner_btn a").removeClass("on");
                $(".banner_btn a").eq($bnnNum).addClass("on");
            }
            var $autoBnn = setInterval(autoBanner,4000);
            
            
            //next 클릭했을때
            $(".banner_right a").click(function(){

            if($bnnNum>=lastNum) $bnnNum=-1;
            
            $bnnNum++;

             // 모든 active클래스는 지워라
             $(".slide_wrap>div").removeClass("active")
                
             //active 클래스가 div에 붙어라
             $(".slide_wrap>div").eq($bnnNum).addClass("active")

             $(".banner_btn a").removeClass("on");
             $(".banner_btn a").eq($bnnNum).addClass("on");
            
            })

            //prev 클릭했을때
            $(".banner_left a").click(function(){

            if($bnnNum<=0) $bnnNum=lastNum+1
                
            $bnnNum--;
    
            // 모든 active클래스는 지워라
            $(".slide_wrap>div").removeClass("active")
                    
            //active 클래스가 div에 붙어라
            $(".slide_wrap>div").eq($bnnNum).addClass("active");

            $(".banner_btn a").removeClass("on");
            $(".banner_btn a").eq($bnnNum).addClass("on");
                
            })


            
            
            
            //배너 재생 멈춤 버튼.btn_play 클릭했을때
            var flag=true;
            $(".stop").click(function(){
                if(flag){
                    clearInterval($autoBnn)
                    $(this).toggleClass("stop play")
                    flag=0
                }else{
                    setInterval(autoBanner,5000)                
                    $(this).toggleClass("stop play")
                    flag=1
                }
            })
            
            // 롤링
            var $banner=$(".banner_btn a").click(function(){
                $bnnNum=$banner.index(this);
                $(".slide_wrap>div").removeClass("active")
                
             //active 클래스가 div에 붙어라
             $(".slide_wrap>div").eq($bnnNum).addClass("active")

             $(".banner_btn a").removeClass("on");
             $(".banner_btn a").eq($bnnNum).addClass("on")
            });

            $(window).scroll(function(){
    
            var NowScrollTop = $(this).scrollTop();
            var windowH = $(window).height()-800;
            

            if(NowScrollTop>windowH){
                $(".quick_btn").addClass("on")
            }else{
                $(".quick_btn").removeClass("on")
            }

            });
       
       
        });
           
       
