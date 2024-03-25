$(function(){
    var serviceTime = new Date();
    var serMonth = serviceTime.getMonth()+1;
    var serDate = serviceTime.getDate();
    var serDay = goToStr3(serviceTime.getDay());

    console.log(serMonth);
    console.log(serDate);
    console.log(serDay);

    document.getElementById('serMon').innerHTML=serMonth;
    document.getElementById('serDate').innerHTML=serDate;
    document.getElementById('serDay').innerHTML=serDay;

    document.getElementById('serMon2').innerHTML=serMonth;
    document.getElementById('serDate2').innerHTML=serDate+1;


     // 현재 데이트 쓰기
     function goToStr3(day){

        switch (day){
            case 0: day ='일요일';
            break;   
        case 1: day ='월요일';
        break;   
        case 2: day ='화요일';
        break;   
        case 3: day ='수요일';
        break;   
        case 4: day ='목요일';
        break;   
        case 5: day ='금요일';
        break;   
        case 6: day ='토요일';
        break;      
    }
    
    return day;
}

        if(serDay === '금요일'){
            document.getElementById('serDay2').innerHTML="토요일"
        }
        if(serDay === '토요일'){
            document.getElementById('serDay2').innerHTML="일요일"
        }
        if(serDay === '일요일'){
            document.getElementById('serDay2').innerHTML="월요일"
        }
        if(serDay === '월요일'){
            document.getElementById('serDay2').innerHTML="화요일"
        }
        if(serDay === '화요일'){
            document.getElementById('serDay2').innerHTML="수요일"
        }
        if(serDay === '수요일'){
            document.getElementById('serDay2').innerHTML="목요일"
        }
        if(serDay === '목요일'){
            document.getElementById('serDay2').innerHTML="금요일"
        }



        var nowHour = serviceTime.getHours();
        var nowMin = serviceTime.getMinutes();


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


});