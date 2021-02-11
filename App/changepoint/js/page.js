$(function(){


    if(document.getElementById("page") != null){


        var i = document.getElementById("page").value;

        if(i==1){
            $(".one").attr("src","../img/home_on.svg")
        }else if(i==2){
            $(".two").attr("src","../img/notification_on.svg")
        }else if(i==3){
            $(".three").attr("src","../img/my-information_on.svg")
        }else if(i==4){
            $(".four").attr("src","../img/all-menu_on.svg")
        }
    }
   });