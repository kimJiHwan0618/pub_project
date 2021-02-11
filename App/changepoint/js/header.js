$(function(){
    if($('header .basket').hasClass('on')){
        $('header .basket img').attr('src','img/ic-cart_on.svg')
        
    
    }

    

    $("header .back_arrow").click(function(){
        history.go(-1);
        
    })
});