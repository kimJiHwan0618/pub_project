$(function(){

    $(".change_pass").click(function(){
        $(".dark_bg").addClass("on")
        $(".password_change_box").addClass("on")
    })

    $(".lang_cho").click(function(){
        $(".dark_bg").addClass("on")
        $(".language_box").addClass("on")
    })


    $(".dark_bg").click(function(){
        $(".language_box").removeClass("on")
        $(".password_change_box").removeClass("on")
        $(this).removeClass("on")
    })


   $(".language_box li").click(function(){
        $(this).children("input:radio[name=choice_language]").prop('checked',true)
    
        let checked = ($(this).children("input:radio[name=choice_language]").prop('checked'))

       if(checked == true){
           $(".language_box li").removeClass("on")     
            $(this).addClass("on")
       }else{
            $(".language_box li").removeClass("on")
       }
       
   })

   $(".save_btn").click(function(){
        let Curret_Password = $("#Curret_Password").val()
        let New_Password = $("#New_Password").val()
        let Confirm_Password = $("#Confirm_Password").val()

        if(New_Password != Confirm_Password){
            $(".pass_notice").html("Please check your new password").css("color","red")
        }


   })
   
})