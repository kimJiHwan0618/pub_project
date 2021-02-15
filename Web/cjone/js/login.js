$(function(){
    // apper이미지 생성
    // <img sec="images/appear/appear_00000.png" alt="로그인버튼"
    // <img sec="images/appear/appear_00056.png" alt="로그인버튼"
    
    // <img sec="images/loop/loop_00000.png" alt="로그인버튼">
    // <img sec="images/loop/loop_00081.png" alt="로그인버튼"
    
    var appear= ""
    
    for(var i=0;i<57;i++){
        // i가 0~9까지는 0000+i
        if(i<10){
            appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼' />"
        }else{
            appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼' />"
        }
    
    }
    $("a.appear").html(appear);
    
    
    
        // loop
     
    var loop= ""
    
    for(var i=0;i<82;i++){
        if(i<10){
            loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼'/>"
        }else{
            loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼'/>"
        }
    
    }
    $("a.loop").html(loop);
    
    /*애니메이션 */
    // .appear img:nth-of-type(1){animation: 2.95s linear 0.0s 1 normal;}
    
    for(i=0;i<57;i++){
        $(".appear img").eq(i).css("animation","ani 2.85s linear "+0.05*i+"s 1 normal")
    };
    
    
    // loop 애니메이션 css
    for(i=0;i<82;i++){
        $(".loop img").eq(i).css("animation","ani 4.1s linear "+0.05*i+"s infinite normal")
    };
    
        
    
    //.quick1 img0~19 이미지생성
        var quick1="";
        for(var i=0;i<11;i++){
            if (i<10){
                quick1 += "<img src='images/quick01/quick01_0000"+i+".png' alt='카드등록안내"+i+"'>"
            } else {
                quick1 += "<img src='images/quick01/quick01_000"+i+".png' alt='카드등록안내"+i+"'>"
            }
        }
        $("span.quick1").html(quick1);
        
        
        
        //마우스 올렸을 때
        $("a.q").hover(function(){
            //애니실행
            for(var k=0;k<20;k++){
                $(".quick1>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
            }
        },function(){
            $(".quick1>img").css("animation","none");
    
        });

        //
        var quick2="";

        for(var i=0;i<20;i++){
            if (i<10){
                quick2 += "<img src='images/quick02/quick02_0000"+i+".png' alt='카드등록안내"+i+"'>"
            } else {
                quick2 += "<img src='images/quick02/quick02_000"+i+".png' alt='카드등록안내"+i+"'>"
            }
        }
        $(".quick2").html(quick2)


        $(".a").hover(function(){
           for(var k=0;k<20;k++){
               $(".quick2>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"})
           } 

        },function(){
            $(".quick2>img").css("animation","none");
        })
    
    
    
    
    
    
    });