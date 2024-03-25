window.onload = function(){
    let i = Number(document.getElementById("page").value);
    let nav = document.querySelector('.text-box')
    let navTitle = nav.children
    let modalBg = document.querySelector('.modal-bg')
    let popup = document.querySelector('.popup')
    let chargingSchedulePopup = document.querySelector('.charging-schedule-popup')
    let closeBtn = document.querySelector('.close')
    let closeBtn2 = document.querySelector('.close2')

    if(i==1){
        navTitle[0].classList.add('on')
    }else if(i==2){
        navTitle[1].classList.add('on')
    }else if(i==3){
        navTitle[2].classList.add('on')
    }else if(i==4){
        navTitle[3].classList.add('on')
    }else if(i==5){
        navTitle[4].classList.add('on')
    }else if(i==6){
        navTitle[5].classList.add('on')
    }

    $('nav .text-box li.on img').attr('src','img/nav/ic-nav'+i+'-on.svg')

    if(closeBtn != null){
        closeBtn.onclick = function(){
            popup.classList.remove('on')
            modalBg.classList.remove('on')
        }
    }
    if(closeBtn2 != null){
        closeBtn2.onclick = function(){
            chargingSchedulePopup.classList.remove('on')
            modalBg.classList.remove('on')
        }
    }
}