window.addEventListener('load',function(){
    let popupName = ''
    let modifyIndex = 0
      // 삭제버튼
      $('.stationWrap .delete').click(function(){
        $(this).parent().parent().remove()
      })
      // 추가버튼
      $('.station-bar .user-add-btn').click(function(){
        popupName = 'add-popup'

        $('.modal-bg').addClass('on')
        $('.popup.user').addClass('on')
        $('.popup.user .popup-title').html('사용자 추가')
        $('.popup.user .u-password').css("display",'block')
      })
      // 수정버튼
      $('.stationWrap.user .modify').click(function(){
        popupName = 'modify-popup'

        $('.modal-bg').addClass('on')
        $('.popup.user').addClass('on')
        $('.popup.user .popup-title').html('사용자 수정')
        $('.popup.user .u-password').css("display",'none')
      })
      // 비밀번호 초기화
      $('.stationWrap.user .password-reset').click(function(){
        modifyIndex = $(this).parent().parent().index()
        popupName = 'password-reset'

        $('.modal-bg').addClass('on')
        $('.popup.user').addClass('on')
        $('.popup.user .popup-title').html('비밀번호 초기화')
      })
      // //수정, 추가 버튼 미정
  })