$(function(){



$("html,body").stop().animate({"scrollTop":0},1500,"swing")
$("h1.logo").click(function (){
$("html,body").stop().animate({"scrollTop":0},1800,"swing");
    $(".cell_container").addClass("up");
})
$(".intro_click").click(function (){
 $("html,body").stop().animate({"scrollTop":0},1500,"swing")
});


    setInterval(remove,300)
    function remove(){
        var removeclass = $(".guitar>span").css("opacity")      
    
        if(removeclass == 1){
            $(".amp>span").removeClass("on")
            $(".guitar>span").removeClass("on")     
         }
       

    }
    
    
    

$(".guitar").click(function(){
    $(".guitar>span").addClass("on")
    $(".amp>span").addClass("on")

});





$(window).scroll(function(){

    var scroll = $(this).scrollTop();//현재 스크롤 위치값

    
    $(".main_page>.section").eq(0).css({"transform":"translateZ("+(0+scroll)+"px)"})
    $(".main_page>.section").eq(1).css({"transform":"translateZ("+(-6000+scroll)+"px)"})
    $(".main_page>.section").eq(2).css({"transform":"translateZ("+(-12000+scroll)+"px)"})
    $(".main_page>.section").eq(3).css({"transform":"translateZ("+(-18000+scroll)+"px)"})
    $(".main_page>.section").eq(4).css({"transform":"translateZ("+(-24000+scroll)+"px)"})
    $(".main_page>.section").eq(5).css({"transform":"translateZ("+(-30000+scroll)+"px)"})
    $(".main_page>.section").eq(6).css({"transform":"translateZ("+(-36000+scroll)+"px)"})
    $(".main_page>.section").eq(7).css({"transform":"translateZ("+(-42000+scroll)+"px)"})
    $(".main_page>.section").eq(8).css({"transform":"translateZ("+(-48000+scroll)+"px)"})
    $(".main_page>.section").eq(9).css({"transform":"translateZ("+(-54000+scroll)+"px)"})
    
    
    //섹션 이랑 스크롤값맞으면 클래스지워라///
    if(scroll==0){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==6000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==12000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==18000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==24000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==30000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==36000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==42000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
    if(scroll==48000){
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");

        $(".bg-right").removeClass("on");
    }
  
    //섹션 이랑 스크롤값맞으면 클래스지워라///

    
    if(scroll>=0 && scroll<6000){//box1

        $(".section").removeClass("on");
        $(".section").eq(0).addClass("on");

        
        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.one>a").addClass("on");
    }
    
    if(scroll>=6000 && scroll<=12000){//box2

        $(".section").removeClass("on");
        $(".section").eq(1).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.two>a").addClass("on");
    }
    
    if(scroll>=12000 && scroll<=18000){//box3
       
        $(".section").removeClass("on");
        $(".section").eq(2).addClass("on");

        
        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.three>a").addClass("on");
    }
    
    if(scroll>=18000 && scroll<=24000){//box4
      
        $(".section").removeClass("on");
        $(".section").eq(3).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.four>a").addClass("on");
    }
    
    if(scroll>=24000 && scroll<=30000){//box5
  
        $(".section").removeClass("on");
        $(".section").eq(4).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.five>a").addClass("on");
    }
    
    if(scroll>=30000 && scroll<=36000){//box6

        $(".section").removeClass("on");
        $(".section").eq(5).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.six>a").addClass("on");
    }
    
    if(scroll>=36000 && scroll<=42000){//box7
  
        $(".section").removeClass("on");
        $(".section").eq(6).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.seven>a").addClass("on");
    }
    
    if(scroll>=42000 && scroll<=48000){//box8
 
        $(".section").removeClass("on");
        $(".section").eq(7).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.eight>a").addClass("on");
    }
   
    if(scroll>=48000 && scroll<=54000){//box9
        
        $(".section").removeClass("on");
        $(".section").eq(8).addClass("on");

        $("nav>.middle_nav>li>a").removeClass("on");
        $("nav>.middle_nav>li.nine>a").addClass("on");
    }
    
})
// //스크롤 움직였을때 이벤트
$("body").mousewheel(function(event,delta){
    if(delta>0){
       var prev = ($(".main_page>.section.on").index()-1)*6000;

       console.log(prev)
        // 마우스 휠 올렸을때, 양수값
        $("html,body").stop().animate({"scrollTop":prev},1500,"swing");
        
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");
        $(".cell_container").addClass("up");
        
        $(".bg-right").addClass("on")

    }else if(delta<0){
        var next = ($(".main_page>.section.on").index()+1)*6000;
        console.log(next)
        //마우스 휠 내렸을때, 음수값
        $("html,body").stop().animate({"scrollTop":next},1500,"swing");
        
        $(".cell_container").removeClass("up");
        $(".cell_container").removeClass("down");
        $(".cell_container").addClass("down");

        $(".bg-right").addClass("on")
    }

});

// li를 클릭했을때 몇번째 li인지 알고 스크롤탑값이 움직여라.
  $(".menu ul li").click(function(){
    var index = $(this).index();
    
    $(window).scrollTop(function(){
        var indexli = index+1;
        var scroll = $(this).scrollTop();

        if(indexli*6000>scroll){
            $(".cell_container").addClass("down");
        }else if(indexli*6000<scroll){
            $(".cell_container").addClass("up");
        }
    });
    
    $("html,body").stop().animate({"scrollTop":index*6000},1500,"swing");  
    
    

    $(".bg-right").addClass("on")
});
    
   
    

    
    
    $("nav>.middle_nav>li>a").click(function(){
        var a_index = $(this).parent().index();
        
        $("nav>.middle_nav>li>a").removeClass("on");
        $(this).addClass("on");

        $(window).scrollTop(function(){
            var index_num = a_index+1;
            var a_scroll = $(this).scrollTop();

            console.log(a_scroll)

            if(index_num*6000>a_scroll){
                $(".cell_container").addClass("down");
            }else if(index_num*6000<a_scroll){
                $(".cell_container").addClass("up");
            }
        });
        
        $("html,body").stop().animate({"scrollTop":a_index*6000},1500,"swing");  
        $(".bg-right").addClass("on")

        });

});