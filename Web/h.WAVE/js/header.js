$(function(){
    $('#hamburger').click(function(){
        $('header').toggleClass('on')
        $('.modal-bg').toggleClass('on')
        $('.products-title-wrap').toggleClass('on')
      })
      // 모바일 메뉴 버튼 클릭
    // window.__scrollPosition = document.documentElement.scrollTop || 0;
        document.addEventListener('scroll', function() {
        let _documentY = document.documentElement.scrollTop;
        // let _direction = _documentY - window.__scrollPosition >= 0 ? 1 : -1;
        // // console.log(_direction); // 스크롤 방향을 출력
        window.__scrollPosition = _documentY; // Update scrollY

        if(__scrollPosition > 0){
            $('header').removeClass('logo_white')
            $('header').addClass('logo_blue')
            $('.section1').addClass('on');
        }else{
            $('header').removeClass('logo_blue')
            $('header').addClass('logo_white')
        }
        // 헤더 컬러
      });
})