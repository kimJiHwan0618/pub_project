$(function(){

    $("footer .menu_btn").click(function(){
        $(".menu").addClass("on")
        $(".menu_dark").addClass("on")
    })

    $(".menu .close").click(function(){
        $(".menu").removeClass("on")
        $(".menu_dark").removeClass("on")
    })

    $(".menu_dark").click(function(){
        $(this).removeClass("on")
        $(".menu").removeClass("on")
    });
    
});