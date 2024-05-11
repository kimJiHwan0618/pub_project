const get_site = () => {
  fetch('https://kimjihodo.synology.me:3001/site/popol', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      ptId,
      countFlag: false,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      projectInit(res.response.worksInfo, userId);
      profileInit(res.response.popolInfo);
      aboutmeInit(res.response.popolInfo);
      skillInit(res.response.popolInfo);
      snsInit(res.response.popolInfo);
      setMainColor(res.response.popolInfo.mainColor);
    })
    .catch((e) => {
      console.log(e);
    });
};

$(function () {
  get_site();
  // mobile
  $('#nav-icon1').click(function () {
    $('header').toggleClass('on');
    $('.mobileMenutBar').toggleClass('on');
    $('.modal-bg').toggleClass('on');
  });
  $('.modal-bg').click(function () {
    $('header').removeClass('on');
    $('.mobileMenutBar').removeClass('on');
    $('.modal-bg').removeClass('on');
  });
});
