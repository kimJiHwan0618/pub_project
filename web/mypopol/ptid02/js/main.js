const get_site = () => {
  fetch('https://kimjihodo.synology.me:3001/site/popol', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      ptId,
      countFlag,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const { response } = res;
      userEmail = response.email;
      projectInit(response.worksInfo, userId);
      profileInit(response.popolInfo);
      aboutmeInit(response.popolInfo);
      skillInit(response.popolInfo);
      snsInit(response.popolInfo);
      contactInit(response.popolInfo);
      setMainColor(response.popolInfo.mainColor);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      $('.loadingWrap.pencil').addClass('open');
    });
};

let countFlag = true;
const currentDate = new Date();
const userSite = window.location.href;
const y = String(currentDate.getFullYear());
const m = String(currentDate.getMonth() + 1).padStart(2, '0');
const d = String(currentDate.getDate()).padStart(2, '0');
const h = String(currentDate.getHours()).padStart(2, '0');
const user_visited_key = y + m + d + h;
const site = window.location.href;

$(function () {
  if (localStorage.getItem(`mypopol_visited_${site}`)) {
    if (user_visited_key !== localStorage.getItem(`mypopol_visited_${site}`)) {
      localStorage.setItem(`mypopol_visited_${site}`, user_visited_key);
      get_site();
    } else {
      countFlag = false;
      $('.loadingWrap.pencil').removeClass('open');
      get_site();
    }
  } else {
    localStorage.setItem(`mypopol_visited_${site}`, user_visited_key);
    get_site();
  }
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
