const setMainColor = (mainColor) => {
  const rgbaTxt = mainColor.replace('rgb', 'rgba').replace(')', '');
  document.documentElement.style.setProperty('--main-color', mainColor);
  document.documentElement.style.setProperty('--main-color_08', rgbaTxt + ', .8)');
  document.documentElement.style.setProperty('--main-color_06', rgbaTxt + ', .6)');
  document.documentElement.style.setProperty('--main-color_04', rgbaTxt + ', .4)');
  document.documentElement.style.setProperty('--main-color_02', rgbaTxt + ', .2)');
  document.documentElement.style.setProperty('--main-color_01', rgbaTxt + ', .1)');
  document.documentElement.style.setProperty('--main-color_005', rgbaTxt + ', .05)');
};
// setMainColor
const profileInit = (profile) => {
  const etc = JSON.parse(profile.sns);
  $('.main-section h3').text(profile.fakeName);
  $('.main-section h4').text(etc.job);
  $('.img__box img').attr('src', `./img/${profile.profileImg}`);
};
// profileInit
const projectInit = (projects, userId) => {
  for (let project of projects) {
    const etc = JSON.parse(project.etc);
    $('.project .project-wrap').append(`
      <div class="project-item">
        <div class="left">
          <span class="img">
          ${
            project.poster
              ? `<img src='https://site.mypopol.com/ptid02/${userId}/img/${project.src}/${project.poster}'/>`
              : `<img src='https://site.mypopol.com/src/img/no_img.jpg'/>`
          }
          </span>
          </div>
          <div class="right">
            <h4>${project.title}</h4>
            <p class="text">${project.subTitle}</p>
            <ul>
              <li>
                <dl>
                  <dt>프로젝트 기간</dt>
                  <dd>${etc.date}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>소개</dt>
                  <dd>${project.summary}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>주요기술</dt>
                  <dd>${etc.skill}</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>상세업무</dt>
                  <dd>${etc.detail.replace(/\n/g, '<br>')}</dd>
                </dl>
              </li>
            </ul>
        </div>
      </div>
    `);
  }
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
        if (projectArray[i].offsetTop + 350 < $(document).scrollTop()) {
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
          }
        }
      }
    }
  });
  const activeSection = (idx) => {
    if (idx === 2) $('.project-item').eq(0).removeClass('on');
    $('.gnb li').removeClass('active');
    $('.gnb li').eq(idx).addClass('active');
    $('.mobile-nav li').removeClass('active');
    $('.mobile-nav li').eq(idx).addClass('active');
  };
};
// projectInit
const skillInit = (popolInfo) => {
  const etc = JSON.parse(popolInfo.sns);
  const skills = etc.skills;
  const categorySkillsInit = (key) => {
    $('.about-skill-box .big-img img').attr(
      'src',
      `https://site.mypopol.com/ptid02/src/img/skills/${skills[key][0].toLowerCase()}.svg`
    );
    $('.about-skill-box .left .top .text dt').text(skills[key][0]);
    for (let skill of skills[key]) {
      $('.about-skill-box .left .bottom').append(`
      <span>
      ${skill}
        <img src="https://site.mypopol.com/ptid02/src/img/skills/${skill.toLowerCase()}.svg" alt="${skill} 이미지"/>
      </span>
    `);
    }
    $('.about-skill-box .left .bottom span').eq(0).addClass('on');
    $('.about-skill-box .left .bottom span').click(function () {
      const skill = $(this).text().trim();
      $('.about-skill-box .big-img img').attr(
        'src',
        `https://site.mypopol.com/ptid02/src/img/skills/${skill.toLowerCase()}.svg`
      );
      $('.about-skill-box .left .top .text dt').text(skill);
      $('.about-skill-box .left .bottom span').removeClass('on');
      $(this).addClass('on');
    });
  };
  $('.about-skill-box .left .bottom span').eq(0).addClass('on');
  // left
  for (let category in skills) {
    $('.about-skill-box .right').append(`
    <div>${category}</div>
    `);
    $('.about-skill-box .right div').eq(0).addClass('on');
  }

  $('.about-skill-box .right div').click(function () {
    $('.about-skill-box .left .bottom').children().remove();
    $('.about-skill-box .right div').removeClass('on');
    $(this).addClass('on');
    categorySkillsInit($(this).text());
  });

  categorySkillsInit(Object.entries(skills)[0][0]);
};
// skillInit
const aboutmeInit = (popolInfo) => {
  const etc = JSON.parse(popolInfo.sns);
  $('.about-me-box .text').text(popolInfo.title);
  $('.about-me-box .txt').html(etc.aboutMe.replace(/\n/g, '<br>'));
};
// aboutmeInit
const snsInit = (popolInfo) => {
  const etc = JSON.parse(popolInfo.sns);
  const sns = etc.sns;
  for (let key in sns) {
    $('.sns-wrap').append(`
      <li>
        <a target="_blank" href="${sns[key].link}">
          <img src="https://site.mypopol.com/src/img/icon/${popolInfo.icon}/${key}.png"/>
        </a>
      </li>
    `);
    console.log(key);
  }
};
// snsInit
