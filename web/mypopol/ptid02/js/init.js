$(function () {
  let scrollY = 0;
  let projectIdx = 0;
  const sectionArray = $('section');
  const projectArray = $('.project-item');
  $('.gnb li p').click(function () {
    const idx = $(this).parent().index();
    if (scrollY < idx) {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 20 }, 10);
    } else {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 50 }, 10);
    }
  });
  $('.mobile-nav li p').click(function () {
    const idx = $(this).parent().index();
    if (scrollY < idx) {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 20 }, 10);
    } else {
      $('html').animate({ scrollTop: sectionArray[idx].offsetTop - 50 }, 10);
    }
    $('header').removeClass('on');
    $('.mobileMenutBar').removeClass('on');
    $('.modal-bg').removeClass('on');
  });

  let lastScrollY = 0;
  $(document).scroll(function () {
    const lScrollY = $(document).scrollTop();
    const direction = lScrollY > lastScrollY ? 'Scroll Down' : 'Scroll Up';
    lastScrollY = lScrollY;
    if (direction === 'Scroll Down') {
      for (let i = 0; i < sectionArray.length; i++) {
        if (sectionArray[i].offsetTop - 20 < $(document).scrollTop()) {
          if (scrollY < i) {
            scrollY = i;
            activeSection(i);
          }
        } else {
          if ($(document).scrollTop() === 0) {
            scrollY = 0;
            activeSection(0);
          }
          if (scrollY > i) {
            scrollY = i;
            activeSection(i);
          }
        }
      }
      for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].offsetTop - 500 < $(document).scrollTop()) {
          if (projectIdx <= i) {
            projectIdx = i;
            $('.project-item').eq(i).addClass('on');
          }
        }
      }
    } else if (direction === 'Scroll Up') {
      for (let i = 0; i < sectionArray.length; i++) {
        if (sectionArray[i].offsetTop + $(sectionArray[i]).height() / 2 < $(document).scrollTop()) {
          if (scrollY < i) {
            scrollY = i;
            activeSection(i);
          }
        } else {
          if ($(document).scrollTop() === 0) {
            scrollY = 0;
            activeSection(0);
          }
          if (scrollY > i) {
            scrollY = i;
            activeSection(i);
          }
        }
      }
      for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].offsetTop + 30 < $(document).scrollTop()) {
          if (projectIdx < i) {
            projectIdx = i;
            $('.project-item')
              .eq(i + 1)
              .removeClass('on');
            $('.project-item').eq(i).addClass('on');
          }
        } else {
          if (projectIdx > i) {
            projectIdx = i;
            $('.project-item')
              .eq(i + 1)
              .removeClass('on');
            projectIdx !== 0
              ? $('.project-item').eq(i).addClass('on')
              : $('.project-item').eq(0).removeClass('on');
          }
        }
      }
    }
  });

  const activeSection = (idx) => {
    $('.gnb li').removeClass('active');
    $('.gnb li').eq(idx).addClass('active');
    $('.mobile-nav li').removeClass('active');
    $('.mobile-nav li').eq(idx).addClass('active');
  };
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
  /* 'rgb(255, 182, 59)','rgb(75, 135, 224)','rgb(75, 224, 149)','rgb(55,65,81)' */
  const mainColor = 'rgb(55,65,81)';
  const rgbaTxt = mainColor.replace('rgb', 'rgba').replace(')', '');
  document.documentElement.style.setProperty('--main-color', mainColor);
  document.documentElement.style.setProperty('--main-color_08', rgbaTxt + ', .8)');
  document.documentElement.style.setProperty('--main-color_06', rgbaTxt + ', .6)');
  document.documentElement.style.setProperty('--main-color_04', rgbaTxt + ', .4)');
  document.documentElement.style.setProperty('--main-color_02', rgbaTxt + ', .2)');
  document.documentElement.style.setProperty('--main-color_01', rgbaTxt + ', .1)');
  document.documentElement.style.setProperty('--main-color_005', rgbaTxt + ', .05)');
});
