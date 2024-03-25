window.addEventListener('load',function(){
  let popupName = ''
  let modifyIndex = 0
    // 삭제버튼
    $('.stationWrap .delete').click(function(){
      $(this).parent().parent().remove()
    })
    // 연결버튼
    $('.stationWrap .connect').click(function(){
       // 연결해제버튼
      if($(this).hasClass('disConnect')){
          $(this).html('연결').removeClass('disConnect')
          $(this).prev().removeClass("off")
          $(this).prev().prev().removeClass("off")
          return;
      }
      $(this).html('연결해제').addClass('disConnect')
      $(this).prev().addClass("off")
      $(this).prev().prev().addClass("off")
    })
    // 추가버튼
    $('.station-bar .add-btn').click(function(){
      popupName = 'add-popup'
      $('.modal-bg').addClass('on')
      $('.popup').addClass('on')
      $('.popup .popup-title').html('스테이션 추가')
      $('.popup .popup-btn').html('REGISTER')
      $('.popup .rack-name').val('')
      $('.popup .rack-ip').val('')
    })
    // 수정버튼
    $('.stationWrap .modify').click(function(){
      modifyIndex = $(this).parent().parent().index()
      popupName = 'modify-popup'
      let rackName = $(this).parent().parent().children('.rack-name').children('.rack-name-input').val()
      let rackIp = $(this).parent().parent().children('.rack-ip').children('.rack-ip-input').val()
      $('.modal-bg').addClass('on')
      $('.popup').addClass('on')
      $('.popup .popup-title').html('스테이션 수정')
      $('.popup .popup-btn').html('MODIFY')
      $('.popup .rack-name').val(rackName)
      $('.popup .rack-ip').val(rackIp)
    })
    // test common popup
    $('.popup-btn').click(function(){
      $('.notice-common-popup').addClass('on')
      $('.popup').addClass('focus-out')
      
      if($('.popup-btn').text() == 'REGISTER'){
        $('.notice-popup-button-wrap').css('display','none')
        $('.notice-check-btn').css('display','block')
        $('.popup-notice-text').text('스테이션이 추가되었습니다.')
      }else {
        $('.notice-popup-button-wrap').css('display','block')
        $('.notice-check-btn').css('display','none')
        $('.popup-notice-text').text('스테이션을 수정하시겠습니까?')
      }
    })
    // common 팝업 확인 버튼
    $('.notice-common-popup button.notice-check-btn').click(function(){
      $('.modal-bg').removeClass('on')
      $('.notice-common-popup').removeClass('on')
      $('.popup').removeClass('focus-out')
      $('.popup').removeClass('on')
    })
    // common 팝업 수정 버튼
    $('.notice-common-popup .notice-popup-button-wrap .notice-modify-btn').click(function(){
      $('.popup-notice-text').text('스테이션이 추가되었습니다.')
      $('.notice-popup-button-wrap').css('display','none')
      $('.notice-check-btn').css('display','block')
    })
    // common 팝업 취소 버튼
    $('.notice-common-popup .notice-popup-button-wrap .notice-cancel-btn').click(function(){
      $('.notice-common-popup').removeClass('on')
      $('.popup').removeClass('focus-out')
    })
})
