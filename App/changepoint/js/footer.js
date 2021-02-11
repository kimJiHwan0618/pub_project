 $(function(){
         $(".all_read-btn").click(function(){
           $(".not-item").removeClass("on") 


           
            $("footer .num").css("display","none")
         })
        //  전체읽음버튼

        let notitem = $(".not-item.on").length
        let notitem_on = $(".not-item.on")
        $("footer ul .notice_num .num").html(notitem)


         $(notitem_on).click(function(){
            
             $(this).removeClass("on")

             let notitem_remove = $(".not-item.on").length
            console.log(notitem_remove)
           
             
             $("footer ul .notice_num .num").html(notitem_remove)
           

             if(notitem_remove == 0){
                $("footer .num").css("display","none")
             }
         })
    
        if(notitem == 0){
            $(".all-not_wrap").css("display","none")
            $(".not-non_img").css("display","flex")
            $(".all_read-btn").css("display","none")
            $("footer .num").css("display","none")
        }else{
            $(".all-not_wrap").css("display","block")
            $(".not-non_img").css("display","none")
            $(".all_read-btn").css("display","inline-block")
            $("footer .num").css("display","inline-block")
        }
        // 알림 하나도 없을시, 알림 없음 문구 생성, 템메뉴 알림 넘버, 알림 리스트 삭제
     })