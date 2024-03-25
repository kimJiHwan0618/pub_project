window.addEventListener('load',function(){
    let stationBarTitle = document.querySelectorAll('.station-title-btn')
    // paging value 
    for(i=0;i<=20;i++){
        $('.page-view').append(
            '<option value="'+i+'">'+i+'</option>'
        )
    }
    // 스테이션바 전체 항목에 액티브
    stationBarTitle[0].classList.add('f-bold')
    stationBarTitle[0].classList.add('on')
    // 스테이션바 클릭 항목 액티브
    for(var i=0; i<stationBarTitle.length; i++){
        titleClick(i);  
    }
    function titleClick(index){
        stationBarTitle[index].onclick = function(){
            for(var i=0; i<=stationBarTitle.length-1;i++){
                stationBarTitle[i].classList.remove("on")
                stationBarTitle[i].classList.remove("f-bold")
            }
            stationBarTitle[index].classList.add("f-bold")
            stationBarTitle[index].classList.add("on")
        };
      }
})