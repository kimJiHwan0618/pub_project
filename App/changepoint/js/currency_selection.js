
$(function(){
$(".coin-item").click(function(){
    $(".coin-item_popup").addClass("on")
    $(".dark_bg").addClass("on")
    // 해당 동전을 눌렀을 때, 동전 수량 선택 팝업

    // console.log($(window).height())
   let padding = ($(".jquery_style").position().top)

   console.log(padding)

    if(padding > 230){
        $(".coin-item_popup").css("padding",'0 33px')
    }else{
        $(".coin-item_popup").css("padding",'0 55px')
    }

})




$(".notice_btn").click(function(){
    $(".notice_popup").addClass("on")
    $(".dark_bg").addClass("on")
});

$(".notice_popup a").click(function(){
    $(".notice_popup").removeClass("on")
    $(".dark_bg").removeClass("on")
});

$(".dark_bg").click(function(){
    $(".coin-item_popup").removeClass("on")
    $(".dark_bg").removeClass("on")
    $(".notice_popup").removeClass("on")
})



$(".shop_btn").click(function(){
        $(".coin-item_popup").removeClass("on")
        $(".dark_bg").removeClass("on")

        let shop_item_num = $(".coin-f_b .num").html()
        
        if(shop_item_num > 0){
            $('header .basket img').attr('src','img/ic-cart_on.svg')
            $('header .basket').addClass("on")
        }
})
// 장바구니 담기 클릭 시, 헤더에 장바구니 아이콘 변경 및 문구 생성   


$(".swipe_wrap").bind("swipeleft",function(){
   $(this).stop().animate({"left":-220},100,"linear",function(){
     $(".coin_num_wrap li").removeClass("on")
     $(".coin_num_wrap li").eq(1).addClass("on")
    })

})

$(".swipe_wrap").bind("swiperight",function(){
    $(this).stop().animate({"left":0},100,"linear",function(){
    $(".coin_num_wrap li").removeClass("on")
     $(".coin_num_wrap li").eq(0).addClass("on")                  
    })
//    동전 앞뒤 스와이프 
})

$(".coin-item_popup").on("swipedown",function(){
        $(this).removeClass("on")
        $(".dark_bg").removeClass("on")
})




})



