$(function(){
    $(".button").click(function(){
        $(this).parent().toggleClass("on")
    });
    
 

    
        var container = $(".container").width()/2;

         //리사이즈
    $(window).resize(function(){
        container = $(".container").width()/2;
    })
    console.log(container)
    
    $(".container>.main").bind("swiperight",function(){
        
        $(".container").animate({"left":container},300,"linear");
        
     });
    $(".container>.calender").bind("swipeleft",function(){
        
        $(".container").animate({"left":0},300,"linear");
     });


     
     var nowTime = new Date();
     var nowHour = nowTime.getHours();
     var nowMin = nowTime.getMinutes();
     var nowDate = nowTime.getDate();
     
     var nowMon = goToStr(nowTime.getMonth());
     var nowDay = goToStr2(nowTime.getDay());

     console.log(nowDate);

     




    // 상태바 시간 1초마다 설정

   var areaHour = document.getElementById('now_hour');
   var areaMin = document.getElementById('now_min');
   
   
   if(nowHour<10){
    nowHour = "0"+nowHour;
    }  

    if(nowMin<10){
        nowMin = "0"+nowMin;
    }

   
   
   areaHour.innerHTML = nowHour;
   areaMin.innerHTML = nowMin;

    

    
    setInterval(function(){


        var nowTime = new Date();
        var nowHour = nowTime.getHours();
        var nowMin = nowTime.getMinutes();
            
        var areaHour = document.getElementById('now_hour');
        var areaMin = document.getElementById('now_min');

        
        if(nowHour<10){
            nowHour = "0"+nowHour;
            }  
        
            if(nowMin<10){
                nowMin = "0"+nowMin;
            }
          
        areaHour.innerHTML = nowHour;
        areaMin.innerHTML = nowMin;
    },1000);

    // // 상태바 시간 1초마다 설정

 



    // 드로워 클래스
    $("footer .drow").click(function(){
        $(".drower").addClass("on");
        $(".after").addClass("on");

    });

    $(".clothes_arrow").click(function(){
        $(".drower").removeClass("on");
        $(".after").removeClass("on");
    });

    // //드로워 클래스


    
    // 현재 월 쓰기
    function goToStr(mon){

        switch (mon){
            case 0: mon ='Junuary';
            break;   
        case 1: mon ='February';
        break;   
        case 2: mon ='March';
        break;   
        case 3: mon ='Aprile';
        break;   
        case 4: mon ='May';
        break;   
        case 5: mon ='June';
        break;   
        case 6: mon ='July';
        break;   
        case 7: mon ='August';
        break;   
        case 8: mon ='Setember';
        break;   
        case 9: mon ='October';
        break;   
        case 10 : mon ='November';
        break;   
        case 11 : mon ='Desember';
        break;   
    }
    
    return mon;
}

    // // 현재 월 쓰기

    // 현재 데이트 쓰기
    function goToStr2(day){

        switch (day){
            case 0: day ='Sun';
            break;   
        case 1: day ='Mon';
        break;   
        case 2: day ='Tue';
        break;   
        case 3: day ='Wen';
        break;   
        case 4: day ='Thr';
        break;   
        case 5: day ='Fri';
        break;   
        case 6: day ='Sat';
        break;      
    }
    
    return day;
}



    // 현재요일 기준으로 빼기 더하기

    document.getElementById('nowDay').innerHTML=nowDay;
    if(nowDay == 'Thr'){   
    $(".date_train ul li").eq(0).children().children().eq(0).text('Mon');
    $(".date_train ul li").eq(1).children().children().eq(0).text('Tue');
    $(".date_train ul li").eq(2).children().children().eq(0).text('Wen');
    $(".date_train ul li").eq(4).children().children().eq(0).text('Fri');
    $(".date_train ul li").eq(5).children().children().eq(0).text('Sat');
    $(".date_train ul li").eq(6).children().children().eq(0).text('Sun');
    }
    if(nowDay == 'Fri'){
        $(".date_train ul li").eq(0).children().children().eq(0).text('Tue');
        $(".date_train ul li").eq(1).children().children().eq(0).text('Wen');
        $(".date_train ul li").eq(2).children().children().eq(0).text('Thr');
        $(".date_train ul li").eq(4).children().children().eq(0).text('Sat');
        $(".date_train ul li").eq(5).children().children().eq(0).text('Sun');
        $(".date_train ul li").eq(6).children().children().eq(0).text('Mon');
    }
    if(nowDay == 'Sat'){
        $(".date_train ul li").eq(0).children().children().eq(0).text('Wen');
        $(".date_train ul li").eq(1).children().children().eq(0).text('Thr');
        $(".date_train ul li").eq(2).children().children().eq(0).text('Fri');
        $(".date_train ul li").eq(4).children().children().eq(0).text('Sun');
        $(".date_train ul li").eq(5).children().children().eq(0).text('Mon');
        $(".date_train ul li").eq(6).children().children().eq(0).text('Tue');
    }
    if(nowDay == 'Sun'){
        $(".date_train ul li").eq(0).children().children().eq(0).text('Thr');
        $(".date_train ul li").eq(1).children().children().eq(0).text('Fri');
        $(".date_train ul li").eq(2).children().children().eq(0).text('Sat');
        $(".date_train ul li").eq(4).children().children().eq(0).text('Mon');
        $(".date_train ul li").eq(5).children().children().eq(0).text('Tue');
        $(".date_train ul li").eq(6).children().children().eq(0).text('Wen');
    }
    if(nowDay == 'Mon'){
        $(".date_train ul li").eq(0).children().children().eq(0).text('Fri');
        $(".date_train ul li").eq(1).children().children().eq(0).text('Sat');
        $(".date_train ul li").eq(2).children().children().eq(0).text('Sun');
        $(".date_train ul li").eq(4).children().children().eq(0).text('Tue');
        $(".date_train ul li").eq(5).children().children().eq(0).text('Wen');
        $(".date_train ul li").eq(6).children().children().eq(0).text('Thr');
    }
    if(nowDay == 'Tue'){
        $(".date_train ul li").eq(0).children().children().eq(0).text('Sat');
        $(".date_train ul li").eq(1).children().children().eq(0).text('Sun');
        $(".date_train ul li").eq(2).children().children().eq(0).text('Mon');
        $(".date_train ul li").eq(4).children().children().eq(0).text('Wen');
        $(".date_train ul li").eq(5).children().children().eq(0).text('Thr');
        $(".date_train ul li").eq(6).children().children().eq(0).text('Fri');
    }
    if(nowDay == 'Wen'){
        $(".date_train ul li").eq(0).children().children().eq(0).text('Sun');
        $(".date_train ul li").eq(1).children().children().eq(0).text('Mon');
        $(".date_train ul li").eq(2).children().children().eq(0).text('Tue');
        $(".date_train ul li").eq(4).children().children().eq(0).text('Thr');
        $(".date_train ul li").eq(5).children().children().eq(0).text('Fri');
        $(".date_train ul li").eq(6).children().children().eq(0).text('Sat');
    }

    // //현재요일 기준으로 빼기 더하기

    // 현재일 기준으로 빼기 더하기
    document.getElementById('nowDate').innerHTML=nowDate;
 


    $(".date_train ul li").eq(0).children().children().eq(1).text(nowDate-3);
    $(".date_train ul li").eq(1).children().children().eq(1).text(nowDate-2);
    $(".date_train ul li").eq(2).children().children().eq(1).text(nowDate-1);
    $(".date_train ul li").eq(4).children().children().eq(1).text(nowDate+1);
    $(".date_train ul li").eq(5).children().children().eq(1).text(nowDate+2);
    $(".date_train ul li").eq(6).children().children().eq(1).text(nowDate+3);

    if(nowDate == '1'){
        $(".date_train ul li").eq(0).children().children().eq(1).text('28');
        $(".date_train ul li").eq(1).children().children().eq(1).text('29');
        $(".date_train ul li").eq(2).children().children().eq(1).text('30');
    }else if(nowDate == '2'){
        $(".date_train ul li").eq(0).children().children().eq(1).text('29');
        $(".date_train ul li").eq(1).children().children().eq(1).text('30');
    }else if(nowDate == '3'){
        $(".date_train ul li").eq(0).children().children().eq(1).text('30');
    }


    // //현재일 기준으로 빼기 더하기
    
    document.getElementById('NowMon').innerHTML=nowMon;

    // $().text();
    
    


    //달력만들기

    var today=new Date();
	var nowYear=today.getFullYear(); //2020
	var nowMonth=today.getMonth(); //5
	var nowDate = today.getDate();//

    console.log(nowDate);

    function prevMonth(){ // 월 감소하는 함수
        nowMonth--;
        if(nowMonth<=-1){
        nowMonth=11;
        nowYear=nowYear-1;
        }
        calendarFunc();
        }
        function nextMonth(){ // 월 증가하는 함수
        nowMonth++;
        if(nowMonth>=12){
        nowMonth=0;
        nowYear=nowYear+1;
        }
        
        calendarFunc();
        }

        
        
        
        
        function calendarFunc(){
            
            
            var firstDay=new Date(nowYear,nowMonth,1);
            var blankNum=firstDay.getDay(); //일~토 (0~6)
            //console.log(blankNum);
            
            var totDay=[31,28,31,30,31,30,31,31,30,31,30,31];
            if((nowYear%4==0 && nowYear%100 !=0)||nowYear%400==0) totDay[1]=29;
            var total=totDay[nowMonth]; //이달의 전체일수
            //console.log(total);
    
        var rowNum=Math.ceil((blankNum+total)/7) //필요한 행~~!!
    
        var theTag="";
        
function goToStrr(mon){
    switch (mon){
        case 0 :  mon = 'January' ; break;
        case 1 :  mon = 'February' ; break;
        case 2 :  mon = 'March' ; break;
        case 3 :  mon = 'Aprile' ; break;
        case 4 :  mon = 'May' ; break;
        case 5 :  mon = 'June' ; break;
        case 6 :  mon = 'July' ; break;
        case 7 :  mon = 'August' ; break;
        case 8 :  mon = 'September' ; break;
        case 9 :  mon = 'October' ; break;
        case 10 :  mon = 'November' ; break;
        case 11 :  mon = 'December' ; break;
    }
    return mon;

}
        
        theTag+='<h2 id="NowMon2">' + goToStrr(nowMonth)+'</h2>';
        theTag+="<h1 class='Now_Year'>"+ nowYear + "</h1>";
        
            
    
        theTag+="<table border='0px'>"
        theTag+="<tr>";
        theTag+="<th>Sun</th><th>Mon</th><th>Tue</th><th>Wen</th><th>Thr</th><th>Fri</th><th>Sat</th>";
        theTag+="</tr>"
        var num=1;
        

        
            for(var i=1; i<=rowNum; i++){ //행  
                    theTag+="<tr>";
                        for(var col=1; col<=7; col++){//열
                            if((i==1&&col<=blankNum) || num>total){
                                theTag+="<td></td>";
                            }else{
                                //오늘 날짜는 빨간색 표시
                            
                                    var theColor="";
                                    var bgColor="";
                                    if(col==1) theColor=' style="color:rgb(252, 157, 157);"';
                                    
                                    if(num==nowDate && nowMonth == 6){ bgColor=' style="background-color:white;color:#1991F8;border-radius:10%;"';}

                                    theTag += '<td'+bgColor+ theColor +'>'+num+'</td>';
                                    num++;
                                
                            }
                        }
                    theTag+="</tr>";
            }
        theTag+="</table>"
    
        document.getElementById("calender_box").innerHTML=theTag;
    }
    $(".prev").click(function(){
        nextMonth()
    });
    $(".next").click(function(){
        prevMonth()
    });
        window.addEventListener("load",calendarFunc,false);

    
});