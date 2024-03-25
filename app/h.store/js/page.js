$(function(){
    var i = document.getElementById("page").value;

    if(document.getElementById("page") != null){
        
        if(i==1){
            $(".one").attr("src","img/tab_menu/tab1_on.svg")
        }else if(i==2){
            $(".two").attr("src","img/tab_menu/tab2_on.svg")
        }else if(i==3){
            $(".three").attr("src","img/tab_menu/tab3_on.svg")
        }else if(i==4){
            $(".four").attr("src","img/tab_menu/tab4_on.svg")
        }

    }

    $(window).scrollTop(0);

    $('a').click(function(){
        $(this).addClass("active")
    })

    $('footer ul li a').click(function(){
        let thisPage = $(this).parent().index() + 1; 
        
        if(i == thisPage){
            $(this).removeClass('active')
            return false
        }
    })
   });