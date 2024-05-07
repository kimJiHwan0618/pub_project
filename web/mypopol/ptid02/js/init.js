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
          if (projectIdx < i) {
            projectIdx = i;
            $('.project-item').eq(i).addClass('on');
          }
        } else {
          if (projectIdx > i) {
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
        if (projectArray[i].offsetTop + 50 < $(document).scrollTop()) {
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
            $('.project-item').eq(i).addClass('on');
          }
        }
      }
    }
  });

  const activeSection = (idx) => {
    $('.gnb li').removeClass('active');
    $('.gnb li').eq(idx).addClass('active');
  };
});
