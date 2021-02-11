$(function(){
    $("form ul li input").unbind("keyup").bind("keyup",function(){
        if($(this).val().length > 0){
            $(this).parent().addClass("on")
        }else if($(this).val().length == 0){
            $(this).parent().removeClass("on")
        }
    // 이메일, 비밀번호 문자열 존재시 색깔 바뀜 
 });
});